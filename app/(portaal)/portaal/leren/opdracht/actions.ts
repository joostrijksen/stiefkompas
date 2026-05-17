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

async function getActiveCohortId(supabase: any) {
  // Kies de "actieve" cohort: newest. (Later kun je hier is_active op maken.)
  const { data, error } = await supabase
    .from("cohorts")
    .select("id")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data?.id) {
    throw new Error(
      "Geen cohort gevonden. Maak eerst een cohort aan in Supabase (table: cohorts)."
    );
  }
  return data.id as string;
}

async function getModuleSlugForAssignment(supabase: any, assignmentId: string) {
  // 1) haal assignment op (zonder join)
  const { data: assignment, error: aErr } = await supabase
    .from("assignments")
    .select("id, module_id")
    .eq("id", assignmentId)
    .maybeSingle();

  if (aErr) throw new Error(aErr.message);
  if (!assignment) throw new Error("Assignment not found");

  // 2) haal module slug op
  const { data: moduleRow, error: mErr } = await supabase
    .from("modules")
    .select("slug")
    .eq("id", assignment.module_id)
    .maybeSingle();

  if (mErr) throw new Error(mErr.message);
  if (!moduleRow?.slug) throw new Error("Module slug not found");

  return moduleRow.slug as string;
}

async function getOrCreateEnrollmentId(supabase: any, userId: string, moduleSlug: string) {
  // cohort_id is NOT NULL -> altijd bepalen
  const cohortId = await getActiveCohortId(supabase);

  // Eerst zoeken op (user_id + module_slug + cohort_id)
  const { data: existing, error: findErr } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", userId)
    .eq("module_slug", moduleSlug)
    .eq("cohort_id", cohortId)
    .maybeSingle();

  if (findErr) throw new Error(findErr.message);
  if (existing?.id) return existing.id as string;

  // Anders aanmaken
  const { data: created, error: createErr } = await supabase
    .from("enrollments")
    .insert({
      user_id: userId,
      module_slug: moduleSlug,
      cohort_id: cohortId,
      status: "active",
    })
    .select("id")
    .single();

  if (createErr) throw new Error(createErr.message);
  return created.id as string;
}

/**
 * 1) Laatste submission ophalen (voor UI: status tonen, attempt_no, etc.)
 */
export async function getLatestSubmissionForAssignment(assignmentId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  const { data, error } = await supabase
    .from("submissions")
    .select(
      "id, assignment_id, user_id, enrollment_id, attempt_no, status, content, submitted_at, created_at"
    )
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ?? null;
}

/**
 * 2) Create/reuse draft (gebruikt door /opdracht/[assignmentId] om editor te openen)
 */
export async function getOrCreateDraft(assignmentId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  // enrollment_id is NOT NULL → dus altijd garanderen
  const moduleSlug = await getModuleSlugForAssignment(supabase, assignmentId);
  const enrollmentId = await getOrCreateEnrollmentId(supabase, user.id, moduleSlug);

  // als er al een draft bestaat → hergebruiken
  const { data: existing, error: exErr } = await supabase
    .from("submissions")
    .select("id, attempt_no, status")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .eq("status", "draft")
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (exErr) throw new Error(exErr.message);
  if (existing?.id) return existing.id as string;

  // nieuw attempt_no = max(attempt_no)+1 (of 1)
  const { data: latest, error: latestErr } = await supabase
    .from("submissions")
    .select("attempt_no")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (latestErr) throw new Error(latestErr.message);
  const nextAttemptNo = latest?.attempt_no ? latest.attempt_no + 1 : 1;

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

/**
 * 3) Nieuwe poging starten (button “Nieuwe poging”)
 */
export async function startNewAttempt(assignmentId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  // enrollment garanderen
  const moduleSlug = await getModuleSlugForAssignment(supabase, assignmentId);
  const enrollmentId = await getOrCreateEnrollmentId(supabase, user.id, moduleSlug);

  // als er al draft is → hergebruiken
  const { data: draft, error: dErr } = await supabase
    .from("submissions")
    .select("id, attempt_no")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .eq("status", "draft")
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (dErr) throw new Error(dErr.message);
  if (draft?.id) return draft.id as string;

  // max_attempts ophalen (als je die hebt)
  const { data: a, error: aErr } = await supabase
    .from("assignments")
    .select("id, max_attempts")
    .eq("id", assignmentId)
    .single();

  if (aErr) throw new Error(aErr.message);

  // nieuwste attempt_no bepalen
  const { data: latest, error: latestErr } = await supabase
    .from("submissions")
    .select("attempt_no")
    .eq("assignment_id", assignmentId)
    .eq("user_id", user.id)
    .order("attempt_no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (latestErr) throw new Error(latestErr.message);

  const nextAttemptNo = latest?.attempt_no ? latest.attempt_no + 1 : 1;

  const maxAttempts = a?.max_attempts ?? null;
  if (maxAttempts && nextAttemptNo > maxAttempts) {
    throw new Error(`Maximaal aantal pogingen bereikt (${maxAttempts}).`);
  }

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

/**
 * 4) Autosave draft content
 */
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

/**
 * 5) Indienen: draft -> submitted
 */
export async function submitSubmission(submissionId: string) {
  const supabase = await createSupabaseServerClient();
  const user = await requireUser(supabase);

  const { error } = await supabase
    .from("submissions")
    .update({
      status: "submitted",
      submitted_at: new Date().toISOString(),
    })
    .eq("id", submissionId)
    .eq("user_id", user.id)
    .eq("status", "draft");

  if (error) throw new Error(error.message);
}