"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Helpers
 */
function isUuid(v: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
}

async function requireUser(supabase: any) {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  const user = data?.user;
  if (!user) throw new Error("Not authenticated");
  return user;
}

async function requireReviewerRole(supabase: any) {
  const user = await requireUser(supabase);

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (error) throw new Error(error.message);
  if (!profile || !["admin", "reviewer"].includes(profile.role)) {
    throw new Error("Not authorized (reviewer/admin only)");
  }

  return user;
}

/**
 * Review inbox
 */
export async function listReviewInbox() {
  const supabase = await createSupabaseServerClient();
  await requireReviewerRole(supabase);

  const { data, error } = await supabase
    .from("submissions")
    .select(`
      id,
      status,
      created_at,
      submitted_at,
      attempt_no,
      user_id,
      assignment_id,
      profiles!user_id (
        user_id,
        email,
        full_name
      ),
      assignments!assignment_id (
        id,
        title,
        type
      )
    `)
    .in("status", ["submitted", "resubmitted", "in_review"])
    .order("submitted_at", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data ?? [];
}

/**
 * Get submission for review
 */
export async function getSubmissionForReview(submissionId: string) {
  if (!submissionId || !isUuid(submissionId)) throw new Error("Invalid submissionId");
  
  const supabase = await createSupabaseServerClient();
  await requireReviewerRole(supabase);
  
  const { data, error } = await supabase
    .from("submissions")
    .select(`
      id,
      status,
      content,
      created_at,
      submitted_at,
      attempt_no,
      assignment_id,
      user_id,
      assignments!assignment_id (
        id,
        title,
        type
      ),
      profiles!user_id (
        user_id,
        email,
        full_name
      )
    `)
    .eq("id", submissionId)
    .single();
    
  if (error) throw new Error(error.message);
  return data;
}

/**
 * Get rubric for assignment
 */
export async function getRubricForAssignment(assignmentId: string) {
  if (!assignmentId || !isUuid(assignmentId)) throw new Error("Invalid assignmentId");
  
  const supabase = await createSupabaseServerClient();
  
  const { data, error } = await supabase
    .from("rubrics")
    .select(`
      id,
      assignment_id,
      name,
      rubric_items (
        id,
        label,
        description,
        sort_order
      )
    `)
    .eq("assignment_id", assignmentId)
    .maybeSingle();
    
  if (error) throw new Error(error.message);
  if (!data) return null;
  
  // nette sortering
  const items = (data?.rubric_items ?? []).slice().sort((a: any, b: any) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  return { ...data, rubric_items: items };
}

/**
 * Save review
 */
/**
 * Save review
 */
export async function saveReview(params: {
  submissionId: string;
  decision: "reviewed_pass" | "reviewed_retry" | "reviewed_reject";
  feedback?: string;
  criteria: { rubricItemId: string; passed: boolean }[];
}) {
  const { submissionId, decision, feedback, criteria } = params;
  
  if (!submissionId || !isUuid(submissionId)) throw new Error("Invalid submissionId");
  if (!["reviewed_pass", "reviewed_retry", "reviewed_reject"].includes(decision)) {
    throw new Error("Invalid decision");
  }
  
  const supabase = await createSupabaseServerClient();
  const reviewer = await requireReviewerRole(supabase);
  
  // Maak rubric results object voor JSONB kolom
  const rubricResults: Record<string, boolean> = {};
  criteria.forEach(c => {
    rubricResults[c.rubricItemId] = c.passed;
  });
  
  // Update submission met alle review data
  const { error: updErr } = await supabase
    .from("submissions")
    .update({
      status: decision,
      reviewed_at: new Date().toISOString(),
      reviewer_feedback: feedback ?? null,
      rubric_results: rubricResults, // JSONB kolom
      reviewed_by: reviewer.id,
    })
    .eq("id", submissionId)
    .in("status", ["submitted", "in_review"]);
    
  if (updErr) throw new Error(updErr.message);
  
  return { ok: true };
}

/**
 * Review submission from form
 */
export async function reviewSubmissionForm(formData: FormData) {
  const submissionId = formData.get("submissionId") as string;
  const decision = formData.get("decision") as "reviewed_pass" | "reviewed_retry" | "reviewed_reject";
  const feedback = (formData.get("feedback") as string) ?? "";

  if (!submissionId) throw new Error("Missing submissionId");
  
  const supabase = await createSupabaseServerClient();
  await requireReviewerRole(supabase);

  // Haal alle criteria op (alle form fields die beginnen met crit_)
  const criteria: { rubricItemId: string; passed: boolean }[] = [];
  
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("crit_")) {
      const rubricItemId = key.replace("crit_", "");
      criteria.push({
        rubricItemId,
        passed: value === "pass"
      });
    }
  }

  await saveReview({
    submissionId,
    decision,
    feedback,
    criteria,
  });
}