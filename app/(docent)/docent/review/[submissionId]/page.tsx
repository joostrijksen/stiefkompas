import Link from "next/link";
import { requireStaff, finalizeStaffReview, getSubmissionForStaffReview } from "../../actions";

export default async function DocentReviewPage({
  params,
}: {
  params: Promise<{ submissionId: string }>;
}) {
  const { submissionId } = await params;
  const { user } = await requireStaff();
  const { submission, assignment, student } = await getSubmissionForStaffReview(submissionId);

  const isMine = submission.reviewed_by === user.id;
  const isClaimed = submission.status === "in_review";
  const canEdit = isClaimed && isMine;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold">Beoordelen</h1>
          <p className="text-slate-600">
            {student.full_name ?? student.email} • {assignment.title} • poging {submission.attempt_no}
          </p>
          <p className="text-slate-600">
            Status: <span className={`font-medium ${
              submission.status === "in_review" ? "text-yellow-600" : ""
            }`}>
              {submission.status}
            </span>
          </p>
          {isClaimed && !isMine && (
            <p className="text-sm text-amber-600 mt-1">
              ⚠️ Deze submission is geclaimd door een andere reviewer
            </p>
          )}
        </div>
        <Link className="text-blue-600 hover:underline" href="/docent/inbox">
          ← Terug naar inbox
        </Link>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-lg">Inzending</h2>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-700">{submission.content ?? ""}</pre>
      </div>

      <form action={finalizeStaffReview} className="rounded-xl border bg-white p-5 space-y-4 shadow-sm">
        <input type="hidden" name="submissionId" value={submission.id} />

        <div>
          <label className="block font-medium text-slate-900">Feedback</label>
          <textarea
            name="feedback"
            className="mt-2 w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500"
            rows={5}
            placeholder="Korte toelichting voor cursist…"
            disabled={!canEdit}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="font-medium text-slate-900">Beslissing</label>
          <select
            name="decision"
            className="rounded-lg border border-slate-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
            defaultValue="reviewed_retry"
            disabled={!canEdit}
          >
            <option value="reviewed_pass">Voldoende</option>
            <option value="reviewed_retry">Herkansing</option>
            <option value="reviewed_reject">Afgewezen</option>
          </select>

          <button
            type="submit"
            className="ml-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!canEdit}
          >
            Opslaan en afronden
          </button>
        </div>

        {!canEdit && (
          <p className="text-sm text-slate-500">
            {isClaimed && !isMine 
              ? "Deze submission is door een ander geclaimd."
              : "Deze submission is al afgerond."}
          </p>
        )}
      </form>
    </div>
  );
}