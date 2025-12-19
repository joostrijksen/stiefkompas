"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/app/lib/supabase/client";

type Props = {
  moduleSlug: string;
  lessonSlug: string;
  sectionId: string;
  nextHref: string;
};

export function CompleteSectionButton({
  moduleSlug,
  lessonSlug,
  sectionId,
  nextHref,
}: Props) {
  const router = useRouter();
  const supabase = createClient();
  const [isSaving, setIsSaving] = useState(false);

  async function handleComplete() {
    if (isSaving) return;

    setIsSaving(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { error } = await supabase.from("user_progress").upsert(
        {
          user_id: user.id,
          module_slug: moduleSlug,
          lesson_slug: lessonSlug,
          section_id: sectionId,
          status: "completed",
          last_accessed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,module_slug,lesson_slug,section_id",
        }
      );

      if (error) {
        // Je kunt dit later vervangen door een toast
        console.error("Failed to save progress:", error);
        return;
      }

      router.push(nextHref);
      router.refresh();
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <button
      onClick={handleComplete}
      disabled={isSaving}
      className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isSaving ? "Opslaan…" : "Volgende onderdeel →"}
    </button>
  );
}