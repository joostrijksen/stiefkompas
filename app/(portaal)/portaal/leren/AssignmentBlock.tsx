"use client";

import { useEffect, useMemo, useState } from "react";

type Assignment = {
  id: string;
  title: string;
  prompt: string;
  placeholder?: string;
};

type LessonWorkState = Record<
  string,
  Record<
    string,
    {
      text?: string;
      submitted?: boolean;
      submittedAt?: string;
      updatedAt?: string;
    }
  >
>;

const STORAGE_KEY = "stiefkompas_leren_work";

function readWork(): LessonWorkState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeWork(data: LessonWorkState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
}

export default function AssignmentBlock({
  moduleSlug,
  lessonSlug,
  assignment,
}: {
  moduleSlug: string;
  lessonSlug: string;
  assignment: Assignment;
}) {
  const storageKey = useMemo(
    () => `${moduleSlug}:${lessonSlug}`,
    [moduleSlug, lessonSlug]
  );

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const work = readWork();
    const entry = work[storageKey]?.[assignment.id];
    if (entry?.text) setText(entry.text);
    if (entry?.submitted) setSubmitted(true);
  }, [storageKey, assignment.id]);

  function saveDraft() {
    const work = readWork();
    work[storageKey] = work[storageKey] ?? {};
    work[storageKey][assignment.id] = {
      ...work[storageKey][assignment.id],
      text,
      submitted: work[storageKey][assignment.id]?.submitted ?? false,
      updatedAt: new Date().toISOString(),
    };
    writeWork(work);
    setInfo("Concept opgeslagen.");
    setTimeout(() => setInfo(null), 2000);
  }

  function submit() {
    const work = readWork();
    work[storageKey] = work[storageKey] ?? {};
    work[storageKey][assignment.id] = {
      ...work[storageKey][assignment.id],
      text,
      submitted: true,
      submittedAt: work[storageKey][assignment.id]?.submittedAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    writeWork(work);
    setSubmitted(true);
    setInfo("Opdracht ingeleverd.");
    setTimeout(() => setInfo(null), 2500);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {assignment.title}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            {assignment.prompt}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]
            ${
              submitted
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : text.trim().length
                ? "border-slate-200 bg-slate-50 text-slate-700"
                : "border-slate-200 bg-white text-slate-500"
            }`}
        >
          {submitted ? "Ingeleverd" : text.trim().length ? "Concept" : "Nieuw"}
        </span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder={assignment.placeholder ?? "Schrijf je antwoord hier..."}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-200"
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={saveDraft}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
        >
          Concept opslaan
        </button>

        <button
          type="button"
          onClick={submit}
          disabled={submitted || !text.trim().length}
          className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition
            ${
              submitted || !text.trim().length
                ? "border-slate-200 text-slate-400 bg-slate-50 cursor-default"
                : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
        >
          {submitted ? "Ingeleverd ✓" : "Inleveren"}
        </button>

        {info ? <p className="text-xs text-slate-600">{info}</p> : null}
      </div>

      <p className="text-xs text-slate-500">
        (V1) Dit wordt lokaal opgeslagen. Later koppelen we dit aan jouw account in het portaal.
      </p>
    </div>
  );
}