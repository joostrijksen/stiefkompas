"use client";

// components/learning/ReflectionArchive.tsx
import Link from "next/link";
import { useMemo } from "react";

export type ReflectionEntry = {
  id: string;
  moduleSlug: string;
  moduleTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  blockSlug: string;
  blockNumber: string; // "1.1"
  blockTitle: string;
  createdAt: string; // ISO
  content: string;
};

// ✅ MOCK: later vervangen door DB (Supabase)
// Tip: straks vervang je dit door props of fetch naar /api/...
function getMockReflections(): ReflectionEntry[] {
  return [
    {
      id: "r1",
      moduleSlug: "module-1",
      moduleTitle: "Module 1 — Basis van de methodiek",
      chapterSlug: "hoofdstuk-1-introductie-en-positionering",
      chapterTitle: "Hoofdstuk 1 — Introductie en positionering",
      blockSlug: "1-1-welkom-bij-stiefkompas",
      blockNumber: "1.1",
      blockTitle: "Welkom bij Stiefkompas",
      createdAt: "2025-02-12T09:30:00.000Z",
      content:
        "Ik merk dat ik in gesprekken snel wil adviseren. Deze les helpt me om eerst te vertragen en positie te checken. In mijn praktijk ga ik explicieter onderzoeken wie verantwoordelijkheid draagt.",
    },
    {
      id: "r2",
      moduleSlug: "module-1",
      moduleTitle: "Module 1 — Basis van de methodiek",
      chapterSlug: "hoofdstuk-1-introductie-en-positionering",
      chapterTitle: "Hoofdstuk 1 — Introductie en positionering",
      blockSlug: "1-1-welkom-bij-stiefkompas",
      blockNumber: "1.1",
      blockTitle: "Welkom bij Stiefkompas",
      createdAt: "2025-03-03T20:10:00.000Z",
      content:
        "Tweede reflectie: ik zie nu beter dat 'goede intentie' soms druk geeft op kinderen. Ik ga vaker normaliseren dat het kind tijd nodig heeft en de ouder in positie laten blijven.",
    },
    {
      id: "r3",
      moduleSlug: "module-1",
      moduleTitle: "Module 1 — Basis van de methodiek",
      chapterSlug: "hoofdstuk-1-introductie-en-positionering",
      chapterTitle: "Hoofdstuk 1 — Introductie en positionering",
      blockSlug: "1-3-voor-wie-is-deze-opleiding-bedoeld",
      blockNumber: "1.3",
      blockTitle: "Voor wie is deze opleiding bedoeld",
      createdAt: "2025-02-18T12:05:00.000Z",
      content:
        "Ik herken dat ik vaak te snel naar 'communicatie' ga. Ik wil eerst bepalen of de positie/ordening klopt voordat ik gesprekstechnieken inzet.",
    },
  ].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

type Grouped = Record<
  string, // moduleSlug
  {
    moduleTitle: string;
    chapters: Record<
      string, // chapterSlug
      {
        chapterTitle: string;
        blocks: Record<
          string, // blockSlug
          {
            blockNumber: string;
            blockTitle: string;
            blockSlug: string;
            moduleSlug: string;
            chapterSlug: string;
            reflections: ReflectionEntry[];
          }
        >;
      }
    >;
  }
>;

function group(refs: ReflectionEntry[]): Grouped {
  const out: Grouped = {};
  for (const r of refs) {
    out[r.moduleSlug] ??= { moduleTitle: r.moduleTitle, chapters: {} };
    out[r.moduleSlug].chapters[r.chapterSlug] ??= {
      chapterTitle: r.chapterTitle,
      blocks: {},
    };
    out[r.moduleSlug].chapters[r.chapterSlug].blocks[r.blockSlug] ??= {
      blockNumber: r.blockNumber,
      blockTitle: r.blockTitle,
      blockSlug: r.blockSlug,
      moduleSlug: r.moduleSlug,
      chapterSlug: r.chapterSlug,
      reflections: [],
    };
    out[r.moduleSlug].chapters[r.chapterSlug].blocks[r.blockSlug].reflections.push(r);
  }
  return out;
}

export default function ReflectionArchive({
  moduleSlug,
}: {
  moduleSlug?: string; // ✅ optioneel: filteren op huidige module
}) {
  const reflections = useMemo(() => getMockReflections(), []);

  const filtered = useMemo(() => {
    if (!moduleSlug) return reflections;
    return reflections.filter((r) => r.moduleSlug === moduleSlug);
  }, [reflections, moduleSlug]);

  if (filtered.length === 0) {
    return (
      <div className="text-sm text-slate-600">
        Je hebt nog geen reflecties opgeslagen.
      </div>
    );
  }

  const grouped = group(filtered);
  const moduleSlugs = Object.keys(grouped);

  return (
    <div className="space-y-5">
      {moduleSlugs.map((mSlug) => {
        const mod = grouped[mSlug];
        const chapterSlugs = Object.keys(mod.chapters);

        return (
          <section key={mSlug} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">{mod.moduleTitle}</h3>
              <Link
                href={`/portaal/leren/${mSlug}`}
                className="text-xs text-slate-700 underline underline-offset-4 hover:text-slate-900"
              >
                Open module
              </Link>
            </div>

            <div className="space-y-3">
              {chapterSlugs.map((cSlug) => {
                const ch = mod.chapters[cSlug];
                const blockSlugs = Object.keys(ch.blocks);

                return (
                  <details
                    key={cSlug}
                    className="rounded-2xl border border-slate-200 bg-white"
                  >
                    <summary className="cursor-pointer select-none px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {ch.chapterTitle}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {blockSlugs.length} blok(ken) met reflecties
                        </p>
                      </div>
                    </summary>

                    {/* ✅ Link staat nu IN de content, niet in summary → geen stopPropagation nodig */}
                    <div className="px-4 pb-4 space-y-3">
                      <Link
                        href={`/portaal/leren/${mSlug}/${cSlug}`}
                        className="inline-flex rounded-full border border-slate-300 px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-50"
                      >
                        Open hoofdstuk
                      </Link>

                      <div className="space-y-3">
                        {blockSlugs.map((bSlug) => {
                          const b = ch.blocks[bSlug];
                          const blockHref = `/portaal/leren/${b.moduleSlug}/${b.chapterSlug}/${b.blockSlug}`;

                          return (
                            <div
                              key={bSlug}
                              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-slate-900">
                                    {b.blockNumber} — {b.blockTitle}
                                  </p>
                                  <Link
                                    href={blockHref}
                                    className="text-xs text-slate-700 underline underline-offset-4 hover:text-slate-900"
                                  >
                                    Open blok
                                  </Link>
                                </div>

                                <Link
                                  href={blockHref}
                                  className="shrink-0 rounded-full border border-slate-300 px-3 py-1.5 text-xs text-slate-800 hover:bg-white"
                                >
                                  Nieuw reflectiemoment
                                </Link>
                              </div>

                              <div className="mt-3 space-y-3">
                                {b.reflections
                                  .slice()
                                  .sort((x, y) => y.createdAt.localeCompare(x.createdAt))
                                  .map((r) => (
                                    <details
                                      key={r.id}
                                      className="rounded-xl border border-slate-200 bg-white"
                                    >
                                      <summary className="cursor-pointer px-3 py-2 text-sm text-slate-700">
                                        Reflectie · {formatDate(r.createdAt)}
                                      </summary>

                                      <div className="px-3 pb-3">
                                        <div className="text-xs text-slate-500 mb-2">
                                          Read-only momentopname
                                        </div>
                                        <div className="text-sm text-slate-800 leading-7 whitespace-pre-wrap">
                                          {r.content}
                                        </div>
                                      </div>
                                    </details>
                                  ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}