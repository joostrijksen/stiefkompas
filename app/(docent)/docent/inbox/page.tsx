import Link from "next/link";
import { listStaffInbox, claimSubmission, requireStaff } from "../actions";

export default async function DocentInboxPage() {
  const { user } = await requireStaff();
  const items = await listStaffInbox();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Inbox</h1>
        <p className="text-slate-600">
          Te beoordelen inzendingen (submitted / resubmitted / in_review).
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-slate-600">
          Geen openstaande reviews.
        </div>
      ) : (
        <div className="rounded-xl border bg-white overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-3 font-medium text-slate-700">Cursist</th>
                <th className="text-left p-3 font-medium text-slate-700">Opdracht</th>
                <th className="text-left p-3 font-medium text-slate-700">Type</th>
                <th className="text-left p-3 font-medium text-slate-700">Status</th>
                <th className="text-left p-3 font-medium text-slate-700">Poging</th>
                <th className="text-right p-3 font-medium text-slate-700">Actie</th>
              </tr>
            </thead>

            <tbody>
              {items.map((row: any) => {
                const isClaimed = row.status === "in_review";
                const isMine = isClaimed && row.reviewed_by === user.id;

                return (
                  <tr key={row.id} className="border-t hover:bg-slate-50">
                    <td className="p-3">
                      {row.student?.full_name ?? row.student?.email ?? "—"}
                    </td>

                    <td className="p-3">{row.assignment?.title ?? "—"}</td>
                    <td className="p-3">{row.assignment?.type ?? "—"}</td>

                    <td className="p-3">
                      <span
                        className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          isClaimed
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>

                    <td className="p-3">{row.attempt_no ?? "—"}</td>

                    <td className="p-3 text-right">
                      {isClaimed ? (
                        isMine ? (
                          <Link
                            className="text-blue-600 hover:underline font-medium"
                            href={`/docent/review/${row.id}`}
                          >
                            Open review
                          </Link>
                        ) : row.reviewer ? (
                          <span className="text-slate-500 text-sm">
                            Geclaimd door {row.reviewer.full_name ?? row.reviewer.email}
                          </span>
                        ) : (
                          <span className="text-slate-500 text-sm">Geclaimd</span>
                        )
                      ) : (
                        <form action={claimSubmission} className="inline">
                          <input type="hidden" name="submissionId" value={row.id} />
                          <button className="text-blue-600 hover:underline font-medium">
                            Claim &amp; open
                          </button>
                        </form>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}