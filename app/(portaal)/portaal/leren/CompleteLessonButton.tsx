"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ProgressState = Record<
  string,
  { completedLessonSlugs: string[]; lastLessonSlug?: string }
>;

const STORAGE_KEY = "stiefkompas_leren_progress";

function readProgress(): ProgressState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeProgress(data: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // forceer sidebar refresh (zelfde tab)
  window.dispatchEvent(new Event("storage"));
}

export default function CompleteLessonButton({
  moduleSlug,
  lessonSlug,
  nextLessonSlug,
}: {
  moduleSlug: string;
  lessonSlug: string;
  nextLessonSlug?: string | null;
}) {
  const [tick, setTick] = useState(0);

  const isCompleted = useMemo(() => {
    if (typeof window === "undefined") return false;
    const data = readProgress();
    const set = new Set(data[moduleSlug]?.completedLessonSlugs ?? []);
    return set.has(lessonSlug);
  }, [moduleSlug, lessonSlug, tick]);

  function markCompleted() {
    const data = readProgress();
    const current = data[moduleSlug] ?? { completedLessonSlugs: [] };
    const set = new Set(current.completedLessonSlugs);
    set.add(lessonSlug);

    data[moduleSlug] = {
      completedLessonSlugs: Array.from(set),
      lastLessonSlug: lessonSlug,
    };

    writeProgress(data);
    setTick((t) => t + 1);
  }

  const nextHref = nextLessonSlug
    ? `/portaal/leren/${moduleSlug}/${nextLessonSlug}`
    : `/portaal/leren/${moduleSlug}`;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
      <p className="text-sm text-slate-700 leading-relaxed">
        Rond je deze les af? Markeer hem als voltooid. Je voortgang wordt
        opgeslagen op dit apparaat.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={markCompleted}
          disabled={isCompleted}
          className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition
            ${
              isCompleted
                ? "border-slate-200 text-slate-400 bg-slate-50 cursor-default"
                : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
        >
          {isCompleted ? "Voltooid ✓" : "Markeer als voltooid"}
        </button>

        <Link
          href={nextHref}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
        >
          {nextLessonSlug ? "Verder naar volgende les →" : "Terug naar module →"}
        </Link>
      </div>

      {isCompleted ? (
        <p className="text-xs text-emerald-700">
          Deze les staat nu als voltooid. Je ziet dit ook in de sidebar.
        </p>
      ) : (
        <p className="text-xs text-slate-500">
          Tip: voeg later opdrachten/quiz toe — dan kun je “voltooid” automatisch laten afhangen van afronding.
        </p>
      )}
    </div>
  );
}