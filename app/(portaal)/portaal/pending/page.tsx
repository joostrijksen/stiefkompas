import Link from "next/link";

export default function PendingPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Portaal
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Toegang in behandeling
        </h1>
        <p className="text-slate-700">
          Je account is aangemaakt, maar je toegang is nog niet geactiveerd. Zodra je
          aanvraag is goedgekeurd, krijg je volledige toegang tot de leeromgeving en (na
          certificering) de Pro tools.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
        <p className="text-sm text-slate-700">
          Tip: controleer of je de juiste gegevens hebt ingevuld bij je aanvraag. Als je
          niets hoort, neem dan contact op.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
          >
            Contact opnemen
          </Link>

          <Link
            href="/training-certificering"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Certificering bekijken
          </Link>
        </div>
      </div>
    </div>
  );
}