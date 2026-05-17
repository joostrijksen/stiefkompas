"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { autosaveSubmission } from "../actions";

function formatTime(date: Date) {
  return date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
}

export default function AssignmentEditor({
  submissionId,
  initialContent,
  readOnly,
}: {
  submissionId: string;
  initialContent: string;
  readOnly: boolean;
}) {
  const [content, setContent] = useState(initialContent ?? "");
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const dirtyRef = useRef(false);

  useEffect(() => {
    setContent(initialContent ?? "");
    setSavedAt(null);
    setSaving(false);
    dirtyRef.current = false;
  }, [initialContent, submissionId]);

  const isDirty = useMemo(() => {
    return (content ?? "") !== (initialContent ?? "");
  }, [content, initialContent]);

  useEffect(() => {
    if (readOnly) return;
    if (!dirtyRef.current) return;
    if (!isDirty) return;

    const t = setTimeout(() => {
      startTransition(async () => {
        setSaving(true);
        try {
          await autosaveSubmission(submissionId, content);
          setSavedAt(formatTime(new Date()));
          dirtyRef.current = false;
        } finally {
          setSaving(false);
        }
      });
    }, 600);

    return () => clearTimeout(t);
  }, [content, submissionId, readOnly, isDirty, startTransition]);

  // ✅ Belangrijk: bij readOnly géén extra statusText, anders krijg je “Vergrendeld Vergrendeld”
  const statusText = !readOnly
    ? saving || isPending
      ? "Opslaan…"
      : savedAt
        ? `Opgeslagen om ${savedAt}`
        : "Nog niet opgeslagen"
    : null;

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold text-lg">Jouw antwoord</h2>
          {readOnly ? (
  <p className="mt-1 text-sm text-slate-600">
    Deze inzending is afgerond. Start een nieuwe poging om verder te werken.
  </p>
          ) : (
            <p className="mt-1 text-sm text-slate-600">
              Je kunt schrijven; we slaan automatisch op.
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {readOnly ? (
            <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-2 py-1 text-xs text-slate-700">
              🔒 Vergrendeld
            </span>
          ) : isDirty ? (
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs text-amber-800">
              ● Niet opgeslagen
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs text-emerald-800">
              ✓ Up-to-date
            </span>
          )}

          {!readOnly && statusText ? (
            <span className="text-xs text-slate-500">{statusText}</span>
          ) : null}
        </div>
      </div>

      <textarea
        className="mt-3 w-full min-h-[280px] rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-600"
        placeholder={readOnly ? "" : "Schrijf je antwoord…"}
        value={content}
        onChange={(e) => {
          if (readOnly) return;
          dirtyRef.current = true;
          setContent(e.target.value);
        }}
        disabled={readOnly}
      />
    </div>
  );
}