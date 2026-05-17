"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

export default function ReflectionArchiveClient({
  compact = false,
  moduleSlug,
}: {
  compact?: boolean;
  moduleSlug?: string;
}) {
  const [items, setItems] = useState<Row[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async () => {
    setError(null);
    setLoading(true);

    try {
      const rows = (await listStudyEntries({
        moduleSlug,
        type: "reflection",
        limit: compact ? 20 : undefined,
      })) as unknown as Row[];

      setItems(Array.isArray(rows) ? rows : []);
    } catch (e: any) {
      setError(e?.message ?? "Laden mislukt.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [moduleSlug, compact]);

  useEffect(() => {
    reload();

    const onSaved = () => reload();
    window.addEventListener("stiefkompas:reflection-saved", onSaved as EventListener);

    return () => {
      window.removeEventListener("stiefkompas:reflection-saved", onSaved as EventListener);
    };
  }, [reload]);

  const visible = useMemo(
    () => (compact ? items.slice(0, 6) : items),
    [items, compact]
  );

  if (loading) {
    return <p className="text-xs text-slate-500">Reflecties laden…</p>;
  }

  if (error) {
    return (
      <div className="space-y-2">
        <p className="text-xs text-red-600">{error}</p>
        <button
          type="button"
          onClick={reload}
          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-100"
        >
          Opnieuw proberen
        </button>
      </div>
    );
  }

  if (visible.length === 0) {
    return (
      <p className="text-xs text-slate-500">
        Nog geen reflecties opgeslagen.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {visible.map((r) => {
        const title = r.block_title?.trim() || "Reflectie";
        const label = r.block_number ? `${r.block_number} — ${title}` : title;
        const isOpen = openId === r.id;

        return (
          <div
            key={r.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {label}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Opgeslagen · {formatDateTime(r.created_at)}
                </p>
              </div>

              {compact ? (
                <button
                  type="button"
                  onClick={() =>
                    setOpenId((prev) => (prev === r.id ? null : r.id))
                  }
                  className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-100"
                >
                  {isOpen ? "Sluit" : "Open"}
                </button>
              ) : null}
            </div>

            {compact ? (
              isOpen && (
                <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-[11px] text-slate-500 mb-2">
                    Read-only momentopname
                  </p>
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