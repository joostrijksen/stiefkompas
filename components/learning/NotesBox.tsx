"use client";

import { useEffect, useState } from "react";

type NotesMeta = {
  moduleSlug: string;
  chapterSlug: string;
  chapterTitle: string;
  blockSlug: string;
  blockTitle: string;
};

export default function NotesBox({
  noteId,
  placeholder = "Maak hier je eigen aantekeningen…",
  meta,
}: {
  noteId: string;
  placeholder?: string;
  meta: NotesMeta;
}) {
  const storageKey = `stiefkompas_note_v1:${noteId}`;

  const [value, setValue] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // laden bij openen
  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      if (parsed?.content) {
        setValue(parsed.content);
        setSavedAt(parsed.savedAt ?? null);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  function save() {
    const payload = {
      content: value,
      savedAt: new Date().toISOString(),
      meta,
    };

    localStorage.setItem(storageKey, JSON.stringify(payload));
    setSavedAt(payload.savedAt);

    // event voor studiehulp
    window.dispatchEvent(new Event("stiefkompas:note-saved"));
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900 mb-2">
        Aantekeningen
      </p>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 leading-6 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
      />

      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          {savedAt
            ? `Opgeslagen · ${new Date(savedAt).toLocaleString("nl-NL")}`
            : "Nog niet opgeslagen"}
        </p>

        <button
          type="button"
          onClick={save}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 hover:bg-slate-100"
        >
          Opslaan
        </button>
      </div>
    </div>
  );
}