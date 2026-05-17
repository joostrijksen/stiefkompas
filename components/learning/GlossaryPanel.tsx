"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { GLOSSARY, type GlossaryTerm } from "@/app/(portaal)/portaal/leren/_glossary";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function GlossaryPanel({ moduleSlug }: { moduleSlug?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState<GlossaryTerm | null>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();

    const list = moduleSlug
      ? GLOSSARY.filter((t) => t.mentions.some((m) => m.moduleSlug === moduleSlug))
      : GLOSSARY;

    if (!query) return list.slice(0, 20);

    return list
      .filter((t) => {
        const hay = `${t.term} ${t.short} ${t.tags?.join(" ") ?? ""}`.toLowerCase();
        return hay.includes(query);
      })
      .slice(0, 20);
  }, [q, moduleSlug]);

  const mentions = useMemo(() => {
    if (!active) return [];
    return active.mentions.filter((m) => (moduleSlug ? m.moduleSlug === moduleSlug : true));
  }, [active, moduleSlug]);

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Zoek begrip… (bijv. loyaliteit, positie, ordening)"
          className={cx(
            "w-full rounded-xl border border-slate-300 bg-white px-3 py-2",
            "text-sm text-slate-800",
            "focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
          )}
        />

        <p className="text-[11px] text-slate-500">
          Klik een begrip voor uitleg + waar het terugkomt in de cursus.
        </p>
      </div>

      <div className="grid gap-3">
        {/* Resultaten */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
          <div className="px-3 py-2 border-b border-slate-200 bg-white">
            <p className="text-xs font-medium text-slate-700">
              Resultaten ({results.length})
            </p>
          </div>

          <ul className="max-h-[240px] overflow-auto">
            {results.map((t) => (
              <li key={t.slug}>
                <button
                  type="button"
                  onClick={() => setActive(t)}
                  className={cx(
                    "w-full text-left px-3 py-2",
                    "hover:bg-white",
                    active?.slug === t.slug && "bg-white"
                  )}
                >
                  <p className="text-sm font-semibold text-slate-900">{t.term}</p>
                  <p className="text-xs text-slate-600">{t.short}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail (alleen tonen als er een begrip is gekozen) */}
        {active && (
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="space-y-3">
              <div>
                <p className="text-base font-semibold text-slate-900">{active.term}</p>
                <p className="text-sm text-slate-700 leading-6 mt-1">{active.body}</p>
              </div>

              {mentions.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-slate-700">Behandeld in</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mentions.map((m) => {
                      const href = `/portaal/leren/${m.moduleSlug}/${m.chapterSlug}/${m.blockSlug}`;
                      return (
                        <button
                          key={href + m.label}
                          type="button"
                          onClick={() => router.push(href)}
                          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-50"
                        >
                          {m.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {!!active.tags?.length && (
                <div>
                  <p className="text-xs font-medium text-slate-700">Tags</p>
                  <p className="mt-1 text-xs text-slate-500">{active.tags.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}