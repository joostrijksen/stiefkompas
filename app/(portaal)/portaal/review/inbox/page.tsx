import Link from "next/link";
import { listReviewInbox } from "../actions";

export default async function ReviewInboxPage() {
  const rows = await listReviewInbox();

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Review inbox</h1>

      <div className="rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 text-sm font-medium">
            <tr>
              <th className="p-3 text-left">Cursist</th>
              <th className="p-3 text-left">Opdracht</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actie</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row: any) => (
              <tr key={row.id} className="border-t text-sm">
                <td className="p-3">
                  {row.profiles?.full_name ?? row.profiles?.email ?? "—"}
                </td>
                <td className="p-3">{row.assignments?.title ?? "—"}</td>
                <td className="p-3">{row.assignments?.type ?? "—"}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">
                  <Link className="underline" href={`/portaal/review/${row.id}`}>
                    Open review
                  </Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-sm text-muted-foreground text-center">
                  Geen openstaande reviews 🎉
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}