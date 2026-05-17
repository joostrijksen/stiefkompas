import Link from "next/link";
import { requireStaff } from "./actions";

export default async function DocentHome() {
  await requireStaff();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Docentdashboard</h1>
        <p className="mt-2 text-slate-600">
          Vanaf hier beheer je beoordelingen (later ook cohorts, voortgang, certificering).
        </p>
      </div>

      <Link 
        className="inline-block rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors" 
        href="/docent/inbox"
      >
        Naar inbox
      </Link>
    </div>
  );
}