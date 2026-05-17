"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type StaffProfile = {
  user_id: string;
  role: string | null;
  full_name: string | null;
  email: string | null;
};

type PublicProfile = {
  user_id: string;
  full_name: string | null;
  email: string | null;
};

export async function requireStaff() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  if (!data?.user) throw new Error("Not authenticated");

  const userId = data.user.id;

  const { data: profile, error: pErr } = await supabase
    .from("profiles")
    .select("user_id, role, full_name, email")
    .eq("user_id", userId)
    .maybeSingle<StaffProfile>();

  if (pErr) throw new Error(pErr.message);
  if (!profile) throw new Error("Profile not found for this user");

  const role = profile.role;
  const isStaff = role === "admin" || role === "reviewer";
  if (!isStaff) throw new Error("Not authorized (staff only)");

  return { supabase, user: data.user, profile };
}

export async function listStaffInbox() {
  const { supabase } = await requireStaff();

  const { data: submissions, error } = await supabase
    .from("submissions")
    .select("id, assignment_id, user_id, status, submitted_at, created_at, attempt_no, reviewed_by")
    .in("status", ["submitted", "resubmitted", "in_review"])
    .order("submitted_at", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  if (!submissions?.length) return [];

  const assignmentIds = Array.from(new Set(submissions.map((s: any) => s.assignment_id).filter(Boolean)));
  const userIds = Array.from(new Set(submissions.map((s: any) => s.user_id).filter(Boolean)));
  const reviewerIds = Array.from(new Set(submissions.map((s: any) => s.reviewed_by).filter(Boolean)));

  const [
    { data: assignments, error: aErr },
    { data: profiles, error: prErr },
    reviewerRes,
  ] = await Promise.all([
    assignmentIds.length
      ? supabase.from("assignments").select("id, title, type").in("id", assignmentIds)
      : Promise.resolve({ data: [], error: null } as any),
    userIds.length
      ? supabase.from("profiles").select("user_id, full_name, email").in("user_id", userIds)
      : Promise.resolve({ data: [], error: null } as any),
    reviewerIds.length
      ? supabase.from("profiles").select("user_id, full_name, email").in("user_id", reviewerIds)
      : Promise.resolve({ data: [], error: null } as any),
  ]);

  const { data: reviewers, error: rvErr } = reviewerRes as any;

  if (aErr) throw new Error(aErr.message);
  if (prErr) throw new Error(prErr.message);
  if (rvErr) throw new Error(rvErr.message);

  const assignmentMap = new Map((assignments ?? []).map((a: any) => [a.id, a]));
  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));
  const reviewerMap = new Map((reviewers ?? []).map((p: any) => [p.user_id, p]));

  return submissions.map((s: any) => ({
    ...s,
    assignment: assignmentMap.get(s.assignment_id) ?? null,
    student: profileMap.get(s.user_id) ?? null,
    reviewer: s.reviewed_by ? reviewerMap.get(s.reviewed_by) ?? null : null,
  }));
}

export async function getSubmissionForStaffReview(submissionId: string) {
  const { supabase } = await requireStaff();

  const { data: submission, error } = await supabase
    .from("submissions")
    .select("id, assignment_id, user_id, status, content, attempt_no, submitted_at, created_at, reviewed_by")
    .eq("id", submissionId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!submission) throw new Error("Submission not found");

  const [{ data: assignment, error: aErr }, { data: student, error: sErr }] = await Promise.all([
    supabase
      .from("assignments")
      .select("id, title, type")
      .eq("id", submission.assignment_id)
      .maybeSingle(),
    supabase
      .from("profiles")
      .select("user_id, full_name, email")
      .eq("user_id", submission.user_id)
      .maybeSingle<PublicProfile>(),
  ]);

  if (aErr) throw new Error(aErr.message);
  if (sErr) throw new Error(sErr.message);

  if (!assignment) throw new Error("Assignment not found");

  // ✅ voorkom crash als profile ontbreekt of door RLS niet zichtbaar is
  const safeStudent: PublicProfile =
    student ?? { user_id: submission.user_id, full_name: null, email: "(geen profiel gevonden)" };

  return { submission, assignment, student: safeStudent };
}

export async function finalizeStaffReview(formData: FormData) {
  const { supabase, user } = await requireStaff();

  const submissionId = String(formData.get("submissionId") ?? "");
  const decision = String(formData.get("decision") ?? "");
  const feedback = String(formData.get("feedback") ?? "");

  if (!submissionId) throw new Error("Missing submissionId");
  if (!["reviewed_pass", "reviewed_retry", "reviewed_reject"].includes(decision)) {
    throw new Error("Invalid decision");
  }

  const { error } = await supabase
    .from("submissions")
    .update({
      status: decision,
      reviewed_at: new Date().toISOString(),
      reviewed_by: user.id,
      reviewer_feedback: feedback || null,
    })
    .eq("id", submissionId)
    .eq("reviewed_by", user.id)
    .eq("status", "in_review");

  if (error) throw new Error(error.message);

  redirect("/docent/inbox");
}

export async function claimSubmission(formData: FormData) {
  const { supabase, user } = await requireStaff();

  const submissionId = String(formData.get("submissionId") ?? "");
  if (!submissionId) throw new Error("Missing submissionId");

  const { data, error } = await supabase
    .from("submissions")
    .update({
      status: "in_review",
      reviewed_by: user.id,
    })
    .eq("id", submissionId)
    .in("status", ["submitted", "resubmitted"])
    .is("reviewed_by", null)
    .select("id")
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (!data?.id) {
    throw new Error("Deze inzending is al geclaimd of niet meer open.");
  }

  redirect(`/docent/review/${submissionId}`);
}