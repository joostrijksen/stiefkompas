import { redirect } from "next/navigation";
import {
  getLatestSubmissionForAssignment,
  getOrCreateDraft,
  startNewAttempt,
  submitSubmission,
} from "../actions";
import AssignmentEditor from "./ui";

function statusLabel(status?: string | null) {
  switch (status) {
    case "draft":
      return {
        title: "Concept",
        desc: "Je werkt aan een concept. Vergeet niet om in te dienen.",
        tone: "border-slate-200 bg-slate-50 text-slate-900",
        icon: "📝",
      };
    case "submitted":
    case "resubmitted":
      return {
        title: "Ingediend",
        desc: "Je opdracht is ingediend en wacht op beoordeling.",
        tone: "border-blue-200 bg-blue-50 text-blue-900",
        icon: "✅",
      };
    case "in_review":
      return {
        title: "In beoordeling",
        desc: "Een docent is bezig met de beoordeling.",
        tone: "border-amber-200 bg-amber-50 text-amber-900",
        icon: "⏳",
      };
    case "reviewed_pass":
      return {
        title: "Voldoende",
        desc: "Je opdracht is goedgekeurd.",
        tone: "border-emerald-200 bg-emerald-50 text-emerald-900",
        icon: "🎉",
      };
    case "reviewed_retry":
      return {
        title: "Herkansing",
        desc: "Je mag een nieuwe poging doen.",
        tone: "border-orange-200 bg-orange-50 text-orange-900",
        icon: "🔁",
      };
    case "reviewed_reject":
      return {
        title: "Afgewezen",
        desc: "Deze inzending is afgewezen.",
        tone: "border-red-200 bg-red-50 text-red-900",
        icon: "⛔",
      };
    default:
      return {
        title: "Status onbekend",
        desc: "Er is iets onbekends met de status.",
        tone: "border-slate-200 bg-white text-slate-900",
        icon: "❓",
      };
  }
}

function formatDateTime(value?: string | null) {
  if (!value) return null;
  return new Date(value).toLocaleString("nl-NL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function OpdrachtPage({
  params,
}: {
  params: Promise<{ assignmentId: string }>;
}) {
  const { assignmentId } = await params;

  if (!assignmentId) {
    return (
      <div className="rounded-xl border bg-white p-6">
        <h1 className="text-xl font-semibold">Ongeldige opdracht</h1>
        <p className="mt-2 text-slate-600">Geen assignmentId in URL.</p>
      </div>
    );
  }

  const latest = await getLatestSubmissionForAssignment(assignmentId);

  let submissionId: string | undefined = latest?.id ?? undefined;
  let status: string | undefined = (latest?.status as string | undefined) ?? undefined;

  // Geen submission? -> maak draft
  if (!submissionId) {
    submissionId = await getOrCreateDraft(assignmentId);
    status = "draft";
  }

  const isRetry = status === "reviewed_retry";
  const canEdit = status === "draft";

  // Alles behalve draft = read-only (retry blijft read-only; je start een nieuwe poging via knop)
  const readOnly = !canEdit;

  const isLocked =
    status === "submitted" ||
    status === "resubmitted" ||
    status === "in_review" ||
    status === "reviewed_pass" ||
    status === "reviewed_reject";

  const s = statusLabel(status);

  async function onSubmitAction() {
    "use server";
    await submitSubmission(submissionId!);
    redirect(`/portaal/leren/opdracht/${assignmentId}`);
  }

  async function onStartNewAttemptAction() {
    "use server";
    await startNewAttempt(assignmentId);
    redirect(`/portaal/leren/opdracht/${assignmentId}`);
  }

  return (
    <div className="space-y-6">
      {/* Statusbanner */}
      <div className={`rounded-xl border p-5 shadow-sm ${s.tone}`}>
        <div className="flex items-start justify-between gap-6">
          <div className="flex gap-3">
            <div className="text-xl leading-none">{s.icon}</div>

            <div>
              <h1 className="text-2xl font-semibold">Opdracht</h1>

              <div className="mt-1">
                <div className="font-semibold">{s.title}</div>
                <p className="text-sm opacity-90">{s.desc}</p>

                <p className="mt-2 text-xs opacity-75">
                  Status: <span className="font-medium">{status}</span>
                  {latest?.attempt_no ? <> • poging {latest.attempt_no}</> : null}
                  {latest?.submitted_at ? (
                    <> • ingediend op {formatDateTime(latest.submitted_at)}</>
                  ) : null}
                </p>
              </div>

              {(latest as any)?.reviewer_feedback ? (
                <div className="mt-3 rounded-lg border border-slate-200 bg-white/60 p-3 text-sm">
                  <div className="font-medium">Feedback docent</div>
                  <div className="mt-1 whitespace-pre-wrap opacity-90">
                    {(latest as any)?.reviewer_feedback}
                  </div>
                </div>
              ) : null}

              {/* ✅ Extra duidelijke one-liner bij locked statussen */}
              {isLocked ? (
                <p className="mt-3 text-sm opacity-90">
                  Je inzending is ingediend. Bewerken is geblokkeerd totdat je een uitslag hebt.
                </p>
              ) : null}
            </div>
          </div>

          {/* Acties rechts */}
          <div className="flex items-center gap-3">
            {isRetry ? (
              <form action={onStartNewAttemptAction}>
                <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
                  Nieuwe poging starten
                </button>
              </form>
            ) : null}

            {canEdit ? (
              <form action={onSubmitAction}>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Indienen
                </button>
              </form>
            ) : null}

            {/* ❌ Geen extra “Vergrendeld”-tekst meer hier; editor toont dat al */}
          </div>
        </div>
      </div>

      <AssignmentEditor
        submissionId={submissionId!}
        initialContent={(latest?.content as string) ?? ""}
        readOnly={readOnly}
      />
    </div>
  );
}