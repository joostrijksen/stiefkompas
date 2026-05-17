"use server";

import { createClient } from "@/app/lib/supabase/server";

type SaveReflectionInput = {
  moduleSlug: string;
  chapterSlug: string;
  blockSlug: string;
  blockNumber?: string | null;
  blockTitle?: string | null;
  content: string;
};

type UpsertNoteInput = SaveReflectionInput;

export async function saveReflection(input: SaveReflectionInput) {
  const supabase = await createClient();

  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user;
  if (!user) throw new Error("Not authenticated");

  const { error } = await supabase.from("study_entries").insert({
    user_id: user.id,
    type: "reflection",
    module_slug: input.moduleSlug,
    chapter_slug: input.chapterSlug,
    block_slug: input.blockSlug,
    block_number: input.blockNumber ?? null,
    block_title: input.blockTitle ?? null,
    content: input.content,
  });

  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function upsertNote(input: UpsertNoteInput) {
  const supabase = await createClient();

  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user;
  if (!user) throw new Error("Not authenticated");

  // Upsert op unieke index (note_unique)
  const { error } = await supabase.from("study_entries").upsert(
    {
      user_id: user.id,
      type: "note",
      module_slug: input.moduleSlug,
      chapter_slug: input.chapterSlug,
      block_slug: input.blockSlug,
      block_number: input.blockNumber ?? null,
      block_title: input.blockTitle ?? null,
      content: input.content,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,type,module_slug,chapter_slug,block_slug" }
  );

  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function listStudyEntries(opts?: {
  moduleSlug?: string;
  type?: "reflection" | "note";
  limit?: number;
}) {
  const supabase = await createClient();

  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user;
  if (!user) throw new Error("Not authenticated");

  let q = supabase
    .from("study_entries")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .order("created_at", { ascending: false });

  if (opts?.moduleSlug) q = q.eq("module_slug", opts.moduleSlug);
  if (opts?.type) q = q.eq("type", opts.type);
  if (opts?.limit) q = q.limit(opts.limit);

  const { data, error } = await q;
  if (error) throw new Error(error.message);

  return data ?? [];
}