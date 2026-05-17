"use client";

import { useEffect, useMemo, useState } from "react";
import { listStudyEntries } from "@/app/(portaal)/portaal/leren/_actions/studyEntries";

type Row = {
  id: string;
  type: "reflection" | "note";
  module_slug: string;
  chapter_slug: string;
  block_slug: string;
  block_number: string | null;
  block_title: string | null;
  content: string;
  created_at: string;
  updated_at: string;
};

function formatDateTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function NotesArchiveClient({
  compact = false,
  moduleSlug,
}: {
  compact?: boolean;
  moduleSlug?: string;
}) {
  const [items, setItems] = useState<Row[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  async function reload() {
    const rows = (await listStudyEntries({
      moduleSlug,
      type: "note",
      limit: compact ? 50 : undefined,
    })) as any as Row[];
    setItems(rows);
  }

  useEffect(() => {
    reload();

    const onSaved = () => reload();
    window.addEventListener("stiefkompas:note-saved", onSaved);

    return () => window.removeEventListener("stiefkompas:note-saved", onSaved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleSlug, compact]);

  const visible = useMemo(() => (compact ? items.slice(0, 6) : items), [items, compact]);

  if (visible.length === 0) {
    return <p className="text-xs text-slate-500">Nog geen aantekeningen.</p>;
  }

  return (
    <div className="space-y-3">
      {visible.map((r) => {
        const label = r.block_number ? `${r.block_number} — ${r.block_title ?? ""}` : r.block_title ?? "Aantekening";
        const isOpen = openId === r.id;

        return (
          <div key={r.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{label}</p>
                <p className="mt-1 text-xs text-slate-500">
                  Bijgewerkt · {formatDateTime(r.updated_at)}
                </p>
              </div>

              {compact ? (
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === r.id ? null : r.id))}
                  className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-100"
                >
                  {isOpen ? "Sluit" : "Open"}
                </button>
              ) : null}
            </div>

            {compact ? (
              isOpen && (
                <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="text-sm text-slate-800 leading-6 whitespace-pre-wrap break-words">
                    {r.content}
                  </div>
                </div>
              )
            ) : (
              <div className="mt-3 text-sm text-slate-700 leading-6 whitespace-pre-wrap break-words">
                {r.content}
              </div>
            )}
          </div>
        );
      })}

      {compact && items.length > 6 && (
        <p className="text-xs text-slate-500">+ {items.length - 6} meer…</p>
      )}
    </div>
  );
}