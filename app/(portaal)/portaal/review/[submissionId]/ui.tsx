"use client";

import { useMemo, useState, useTransition } from "react";
import { saveReview } from "../actions";

export default function ReviewForm({
  submissionId,
  rubricName,
  items,
  initialResults,
  initialDecision,
  initialFeedback,
}: {
  submissionId: string;
  rubricName: string;
  items: { id: string; label: string; description?: string | null }[];
  initialResults: Record<string, boolean>;
  initialDecision: "pass" | "retry" | "reject";
  initialFeedback: string;
}) {
  const [decision, setDecision] = useState<"pass" | "retry" | "reject">(initialDecision);
  const [feedback, setFeedback] = useState(initialFeedback);
  const [results, setResults] = useState<Record<string, boolean>>(initialResults);
  const [isPending, startTransition] = useTransition();

  const allPass = useMemo(() => items.length > 0 && items.every(i => results[i.id] === true), [items, results]);

  return (
    <div className="space-y-4 rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{rubricName}</div>
          <div className="text-xs text-muted-foreground">
            {items.length ? (allPass ? "Alles voldoende" : "Nog niet alles voldoende") : "Nog geen rubric-items"}
          </div>
        </div>
      </div>

      {items.length > 0 && (
        <div className="space-y-2">
          {items.map((it) => (
            <label key={it.id} className="flex gap-3 items-start rounded-lg border p-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={results[it.id] === true}
                onChange={(e) => setResults((r) => ({ ...r, [it.id]: e.target.checked }))}
              />
              <div>
                <div className="text-sm font-medium">{it.label}</div>
                {it.description && <div className="text-xs text-muted-foreground">{it.description}</div>}
              </div>
            </label>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <div className="text-sm font-medium">Besluit</div>
        <div className="flex gap-3 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="decision" checked={decision === "pass"} onChange={() => setDecision("pass")} />
            Voldoende
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="decision" checked={decision === "retry"} onChange={() => setDecision("retry")} />
            Herkansing
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="decision" checked={decision === "reject"} onChange={() => setDecision("reject")} />
            Afgewezen
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Feedback</div>
        <textarea
          className="w-full min-h-[140px] rounded-xl border p-3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Korte toelichting + next steps..."
        />
      </div>

      <button
        className="rounded-xl bg-black text-white px-4 py-2 disabled:opacity-50"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await saveReview({
              submissionId,
              // @ts-ignore
              decision,
              reviewer_feedback: feedback,
              rubric_results: results,
            });
            window.location.href = "/portaal/review/inbox";
          })
        }
      >
        Opslaan & terug naar inbox
      </button>
    </div>
  );
}