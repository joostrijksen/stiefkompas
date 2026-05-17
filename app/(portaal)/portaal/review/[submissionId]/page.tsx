import Link from "next/link";
import { getRubricForAssignment, getSubmissionForReview, reviewSubmissionForm } from "../actions";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ submissionId: string }>;
}) {
  const { submissionId } = await params;
  
  if (!submissionId) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold">Ongeldige review</h1>
        <p className="mt-2 text-slate-600">Geen submissionId in URL.</p>
        <Link className="underline mt-6 inline-block" href="/portaal/review/inbox">
          Terug naar inbox
        </Link>
      </div>
    );
  }

  const submission = await getSubmissionForReview(submissionId);
  const assignment = submission.assignments as any;
  const student = submission.profiles as any;

  const rubric = (assignment as any)?.[0]?.id ? await getRubricForAssignment((assignment as any)?.[0]?.id) : null;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold">Review</h1>
          <p className="mt-1 text-slate-600">
            Opdracht: <span className="font-medium">{(assignment as any)?.title ?? (assignment as any)?.[0]?.title ?? "—"}</span> · Type:{" "}
            <span className="font-medium">{(assignment as any)?.type ?? (assignment as any)?.[0]?.type ?? "—"}</span>
          </p>
          <p className="mt-1 text-slate-600">
            Cursist: <span className="font-medium">{student?.full_name ?? student?.email ?? "—"}</span>
          </p>
          <p className="mt-1 text-slate-600">
            Status: <span className="font-medium">{submission.status}</span>
          </p>
        </div>

        <Link className="underline" href="/portaal/review/inbox">
          ← Terug naar inbox
        </Link>
      </div>

      <div className="mt-8 grid gap-6">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Inzending</h2>
          <div className="mt-3 whitespace-pre-wrap text-slate-800">{submission.content ?? ""}</div>
        </div>

        <form action={reviewSubmissionForm} className="rounded-xl border p-5">
          <input type="hidden" name="submissionId" value={submissionId} />
          
          <h2 className="text-lg font-semibold">Beoordeling</h2>

          {rubric?.rubric_items?.length ? (
            <div className="mt-4 space-y-4">
              {rubric.rubric_items.map((item: any) => (
                <div key={item.id} className="rounded-lg border p-4">
                  <div className="font-medium">{item.label}</div>
                  {item.description ? <div className="mt-1 text-sm text-slate-600">{item.description}</div> : null}

                  <div className="mt-3 flex gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" name={`crit_${item.id}`} value="pass" required />
                      <span>Voldoende</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name={`crit_${item.id}`} value="fail" required />
                      <span>Onvoldoende</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-slate-600">Geen rubric gevonden voor deze opdracht.</p>
          )}

          <div className="mt-6">
            <label className="block font-medium">Feedback (optioneel)</label>
            <textarea
              name="feedback"
              className="mt-2 w-full rounded-lg border p-3 min-h-[120px]"
              placeholder="Korte toelichting voor cursist…"
            />
          </div>

          <div className="mt-6">
            <label className="block font-medium">Beslissing</label>
            <select name="decision" className="mt-2 rounded-lg border p-2" defaultValue="reviewed_retry">
              <option value="reviewed_pass">Voldoende (pass)</option>
              <option value="reviewed_retry">Herkansing (retry)</option>
              <option value="reviewed_reject">Afgewezen (reject)</option>
            </select>
          </div>

          <button className="mt-6 rounded-lg bg-black text-white px-4 py-2">Opslaan</button>
        </form>
      </div>
    </div>
  );
}