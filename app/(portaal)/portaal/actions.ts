"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Helpers
 */
async function requireUser(supabase: any) {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  const user = data?.user;
  if (!user) throw new Error("Not authenticated");
  return user;
}

async function getModuleSlugForAssignment(supabase: any, assignmentId: string) {
  const { data, error } = await supabase
    .from("assignments")
    .select("modules!inner(slug)")
    .eq("id", assignmentId)
    .single();

  if (error) throw new Error(error.message);
  // @ts-ignore
  const slug = data?.modules?.slug as string | undefined;
  if (!slug) throw new Error("Module slug not found");
  return slug;
}

async function getOrCreateEnrollment(supabase: any, userId: string, moduleSlug: string) {
  const { data: existing, error: findErr } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", userId)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  if (findErr) throw new Error(findErr.message);
  if (existing?.id) return existing.id as string;

  const { data: created, error: createErr } = await supabase
    .from("enrollments")
    .insert({ user_id: userId, module_slug: moduleSlug, status: "active" })
    .select("id")
    .single();

  if (createErr) throw new Error(createErr.message);
  return created.id as string;
}

export async function getOrCreateDraft(assignmentId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  // 1) Haal de nieuwste submission op (hoogste attempt_no)
  const { data: latest, error: latestErr } = await supabase
    .from("submissions")
    .select("id, status, attempt_no")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (latestErr) throw new Error(latestErr.message);

  // 2) Als er al een draft bestaat: hergebruik deze
  if (latest?.id && latest.status === "draft") {
    return latest.id as string;
  }

  // 3) Blokkeer als al behaald
  if (latest?.status === "reviewed_pass") {
    throw new Error("Deze opdracht is al voldoende beoordeeld.");
  }

  // 4) Blokkeer als definitief afgewezen
  if (latest?.status === "reviewed_reject") {
    throw new Error("Deze opdracht is afgewezen en kan niet opnieuw worden ingediend.");
  }

  // 5) Blokkeer als er een submission in behandeling is (submitted/in_review/resubmitted)
  if (latest?.status && ["submitted", "in_review", "resubmitted"].includes(latest.status)) {
    throw new Error("Er is al een inzending in behandeling. Wacht op beoordeling.");
  }

  // 6) Vanaf hier: ofwel reviewed_retry, ofwel helemaal geen submission
  // In beide gevallen mag een nieuwe draft worden gemaakt
  const nextAttemptNo = latest?.attempt_no ? (latest.attempt_no as number) + 1 : 1;

  // 7) Enrollment garanderen
  const moduleSlug = await getModuleSlugForAssignment(supabase, assignmentId);
  const enrollmentId = await getOrCreateEnrollment(supabase, user.id, moduleSlug);

  // 8) Insert nieuwe draft
  const { data: created, error: createErr } = await supabase
    .from("submissions")
    .insert({
      assignment_id: assignmentId,
      user_id: user.id,
      enrollment_id: enrollmentId,
      attempt_no: nextAttemptNo,
      status: "draft",
      content: "",
    })
    .select("id")
    .single();

  if (createErr) throw new Error(createErr.message);
  return created.id as string;
}

export async function getSubmissionForAssignment(assignmentId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  // Haal de nieuwste submission op
  const { data: latest, error } = await supabase
    .from("submissions")
    .select("id, status, content, attempt_no")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw new Error(error.message);

  // Als er geen submission is, of als de laatste reviewed_retry is, maak dan een draft
  if (!latest || latest.status === "reviewed_retry") {
    return await getOrCreateDraft(assignmentId);
  }

  // Return bestaande submission (draft, submitted, reviewed_*, etc)
  return latest.id as string;
}

export async function autosaveSubmission(submissionId: string, content: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  const { error } = await supabase
    .from("submissions")
    .update({ content })
    .eq("id", submissionId)
    .eq("user_id", user.id)
    .eq("status", "draft");

  if (error) throw new Error(error.message);
}

export async function submitSubmission(submissionId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  // attempt_no ophalen om status te bepalen
  const { data: sub, error: subErr } = await supabase
    .from("submissions")
    .select("id, attempt_no, status")
    .eq("id", submissionId)
    .eq("user_id", user.id)
    .single();

  if (subErr) throw new Error(subErr.message);
  if (!sub) throw new Error("Submission not found");
  if (sub.status !== "draft") throw new Error("Alleen een draft kan worden ingediend.");

  const newStatus = (sub.attempt_no ?? 1) > 1 ? "resubmitted" : "submitted";

  const { error } = await supabase
    .from("submissions")
    .update({
      status: newStatus,
      submitted_at: new Date().toISOString(),
    })
    .eq("id", submissionId)
    .eq("user_id", user.id)
    .eq("status", "draft");

  if (error) throw new Error(error.message);
}