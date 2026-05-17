"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { upsertNote } from "@/app/(portaal)/portaal/leren/_actions/studyEntries";

export type NotesMeta = {
  moduleSlug: string;
  moduleTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  blockSlug: string;
  blockNumber?: string | null;
  blockTitle: string;
};

export default function NotesPanel({
  meta,
}: {
  meta: NotesMeta;
}) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const canSave = useMemo(() => text.trim().length > 0, [text]);

  // reset “saved” badge zodra je weer typt
  useEffect(() => {
    if (status === "saved") setStatus("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-900">Aantekeningen</p>
          <p className="mt-1 text-sm text-slate-700 leading-6">
            Je aantekening bij dit blok (bewerkbaar).
          </p>
        </div>

        <button
          type="button"
          disabled={!canSave || pending}
          onClick={() => {
            setErrMsg(null);
            startTransition(async () => {
              try {
                await upsertNote({
                  moduleSlug: meta.moduleSlug,
                  chapterSlug: meta.chapterSlug,
                  blockSlug: meta.blockSlug,
                  blockNumber: meta.blockNumber ?? null,
                  blockTitle: meta.blockTitle ?? null,
                  content: text.trim(),
                });

                setStatus("saved");

                // studiehulp live laten herladen
                window.dispatchEvent(new Event("stiefkompas:note-saved"));
              } catch (e: any) {
                setStatus("error");
                setErrMsg(e?.message ?? "Opslaan mislukt.");
              }
            });
          }}
          className={[
            "shrink-0 rounded-full border px-4 py-2 text-sm",
            canSave && !pending
              ? "border-slate-300 text-slate-800 hover:bg-slate-50"
              : "border-slate-200 text-slate-400 cursor-not-allowed",
          ].join(" ")}
        >
          {pending ? "Opslaan…" : "Opslaan"}
        </button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typ je aantekeningen…"
        className={[
          "mt-3 w-full rounded-xl border border-slate-300 bg-white px-3 py-2",
          "text-sm text-slate-800 leading-6",
          "focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400",
        ].join(" ")}
        rows={6}
      />

      <div className="mt-2 flex items-center justify-end gap-3">
        {status === "saved" ? (
          <p className="text-xs text-slate-700">Opgeslagen.</p>
        ) : status === "error" ? (
          <p className="text-xs text-red-600">{errMsg ?? "Opslaan mislukt."}</p>
        ) : null}
      </div>
    </div>
  );
}