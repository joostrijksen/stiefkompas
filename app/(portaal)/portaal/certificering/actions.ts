'use server'

import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

export async function startExamAction() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { error } = await supabase
    .from("user_certifications")
    .update({ exam_started_at: new Date().toISOString() })
    .eq("user_id", user.id);

  if (error) {
    console.error("startExamAction failed:", error);
  }

  redirect("/portaal/certificering");
}

export async function markPassedAction() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // eenvoudige test: zet passed + validity 1 jaar
  const now = new Date();
  const validFrom = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const validUntil = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
    .toISOString()
    .slice(0, 10);

  const { error } = await supabase
    .from("user_certifications")
    .update({
      exam_passed_at: new Date().toISOString(),
      score: 100,
      valid_from: validFrom,
      valid_until: validUntil,
    })
    .eq("user_id", user.id);

  if (error) {
    console.error("markPassedAction failed:", error);
  }

  redirect("/portaal/certificering");
}

export async function purchaseCertification() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { error } = await supabase
    .from("user_certifications")
    .upsert({
      user_id: user.id,
      purchased_at: new Date().toISOString(),
      purchase_source: 'manual',
    });

  if (error) {
    console.error("purchaseCertification failed:", error);
  }

  redirect("/portaal/certificering");
}