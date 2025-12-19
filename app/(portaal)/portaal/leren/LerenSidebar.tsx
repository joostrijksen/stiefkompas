"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Module } from "./_content";

type ProgressState = Record<
  string,
  { completedLessonSlugs: string[]; lastLessonSlug?: string }
>;

const STORAGE_KEY = "stiefkompas_leren_progress";

function loadProgress(): ProgressState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export default function LerenSidebar({
  modules,
  moduleSlug,
  lessonSlug,
}: {
  modules: Module[];
  moduleSlug?: string;
  lessonSlug?: string;
}) {
  const [progress, setProgress] = useState<ProgressState>({});

  useEffect(() => {
    setProgress(loadProgress());

    // Sync bij terug/vooruit navigatie tussen lessen
    const onStorage = () => setProgress(loadProgress());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const activeModule = useMemo(
    () => (moduleSlug ? modules.find((m) => m.slug === moduleSlug) : null),
    [modules, moduleSlug]
  );

  const getModuleStats = (m: Module) => {
    const p = progress[m.slug];
    const done = new Set(p?.completedLessonSlugs ?? []);
    const completedCount = m.lessons.filter((l) => done.has(l.slug)).length;
    const percent = m.lessons.length
      ? Math.round((completedCount / m.lessons.length) * 100)
      : 0;

    const lastLessonSlug = p?.lastLessonSlug;
    const lastLessonIndex = lastLessonSlug
      ? m.lessons.findIndex((l) => l.slug === lastLessonSlug)
      : -1;

    const resumeHref =
      lastLessonSlug && lastLessonIndex >= 0
        ? `/portaal/leren/${m.slug}/${lastLessonSlug}`
        : `/portaal/leren/${m.slug}/${m.lessons[0]?.slug ?? ""}`;

    return { completedCount, percent, lastLessonIndex, resumeHref, done };
  };

  return (
    <aside className="lg:sticky lg:top-6 h-fit space-y-6">
      {/* Modules */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Modules
        </p>

        <nav className="mt-3 space-y-2">
          {modules.map((m) => {
            const isActive = m.slug === moduleSlug;
            const { completedCount, percent, lastLessonIndex, resumeHref } =
              getModuleStats(m);

            return (
              <div
                key={m.slug}
                className={`rounded-xl border border-slate-200 transition ${
                  isActive ? "bg-slate-50" : "bg-white hover:bg-slate-50"
                }`}
              >
                <Link href={`/portaal/leren/${m.slug}`} className="block px-4 py-3">
                  <p className="text-sm font-medium text-slate-900">{m.title}</p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {completedCount}/{m.lessons.length} lessen • {percent}%
                  </p>

                  <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-slate-900"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </Link>

                <div className="px-4 pb-3">
                  <Link
                    href={resumeHref}
                    className="inline-flex text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:text-slate-900 underline underline-offset-4"
                  >
                    Verder bij{" "}
                    {lastLessonIndex >= 0 ? `les ${lastLessonIndex + 1}` : "start"}
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="mt-4 pt-4 border-t border-slate-200">
          <Link
            href="/portaal/dashboard"
            className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4"
          >
            Terug naar dashboard
          </Link>
        </div>
      </div>

      {/* Lessen van actieve module */}
      {activeModule ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Lessen
          </p>

          <nav className="mt-3 space-y-1">
            {(() => {
              const { done } = getModuleStats(activeModule);

              return activeModule.lessons.map((l, idx) => {
                const isActiveLesson = l.slug === lessonSlug;
                const isDone = done.has(l.slug);

                return (
                  <Link
                    key={l.slug}
                    href={`/portaal/leren/${activeModule.slug}/${l.slug}`}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2 text-sm transition ${
                      isActiveLesson ? "bg-slate-50" : "hover:bg-slate-50"
                    }`}
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] text-slate-500">
                      {idx + 1}
                    </span>

                    <span className="leading-snug flex-1">
                      <span className="block font-medium text-slate-900">
                        {l.title}
                      </span>
                      {l.minutes ? (
                        <span className="block text-xs text-slate-500 mt-0.5">
                          {l.minutes} min
                        </span>
                      ) : null}
                    </span>

                    {isDone ? (
                      <span className="mt-1 text-xs text-emerald-700 font-medium">
                        ✓
                      </span>
                    ) : null}
                  </Link>
                );
              });
            })()}
          </nav>
        </div>
      ) : null}
    </aside>
  );
}