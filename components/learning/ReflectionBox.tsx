"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { saveReflection } from "@/app/(portaal)/portaal/leren/_actions/studyEntries";

/* =========================
   Types
========================= */

type ReflectionMeta = {
  moduleSlug: string;
  moduleTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  blockSlug: string;
  blockNumber?: string | null;
  blockTitle: string;
};

type Status = "idle" | "saving" | "saved" | "error";

/* =========================
   Component
========================= */

export default function ReflectionBox({
  lessonId, // blijft nuttig voor tracking/analytics (maar NIET naar saveReflection)
  prompt,
  minChars = 80,
  meta,
}: {
  lessonId: string;
  prompt: string;
  minChars?: number;
  meta: ReflectionMeta;
}) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const canSave = useMemo(
    () => text.trim().length >= minChars && !pending,
    [text, minChars, pending]
  );

  // Zodra de gebruiker weer typt → status resetten
  useEffect(() => {
    if (status === "saved") setStatus("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  function handleSave() {
    if (!canSave) return;

    setError(null);
    setStatus("saving");

    startTransition(async () => {
      try {
        // ✅ Alleen velden meegeven die in SaveReflectionInput zitten
        await saveReflection({
          moduleSlug: meta.moduleSlug,
          chapterSlug: meta.chapterSlug,
          blockSlug: meta.blockSlug,
          blockNumber: meta.blockNumber ?? null,
          blockTitle: meta.blockTitle ?? null,
          content: text.trim(),
        });

        setText("");
        setStatus("saved");

        // 👉 Studiehulp live laten bijwerken
        window.dispatchEvent(new CustomEvent("stiefkompas:reflection-saved"));

        // (optioneel) later kun je lessonId hier gebruiken voor analytics/logging
        void lessonId;
      } catch (e: any) {
        setStatus("error");
        setError(e?.message ?? "Opslaan mislukt.");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-900">Reflectie</p>
          <p className="mt-1 text-sm text-slate-700 leading-6">{prompt}</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={!canSave}
          className={[
            "shrink-0 rounded-full border px-4 py-2 text-sm transition",
            canSave
              ? "border-slate-300 text-slate-800 hover:bg-slate-50"
              : "border-slate-200 text-slate-400 cursor-not-allowed",
          ].join(" ")}
        >
          {pending || status === "saving" ? "Opslaan…" : "Opslaan"}
        </button>
      </div>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Schrijf je reflectie… (min. ${minChars} tekens)`}
        rows={5}
        className={[
          "mt-3 w-full rounded-xl border border-slate-300 bg-white px-3 py-2",
          "text-sm text-slate-800 leading-6",
          "focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400",
        ].join(" ")}
      />

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          {text.trim().length}/{minChars} tekens
        </p>

        {status === "saved" && <p className="text-xs text-slate-700">Opgeslagen ✓</p>}

        {status === "error" && (
          <p className="text-xs text-red-600">{error ?? "Opslaan mislukt."}</p>
        )}
      </div>
    </div>
  );
}