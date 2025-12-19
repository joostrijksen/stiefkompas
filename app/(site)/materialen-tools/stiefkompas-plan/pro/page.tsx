import type { Metadata } from "next";
import Link from "next/link";
import ProGate from "@/app/components/ProGate";

export const metadata: Metadata = {
  title: "Stiefkompas Plan (routeboek) – Pro – Stiefkompas",
  description:
    "De pro-variant van het Stiefkompas Plan (routeboek) is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals met licentie.",
};

export default function StiefkompasPlanProPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – pro
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Stiefkompas Plan (routeboek) – Pro
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De pro-variant is ontwikkeld voor professioneel gebruik in begeleidingstrajecten.
          Je krijgt toegang tot het volledige routeboek, formats en begeleiderskaders via het portaal.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/materialen-tools/stiefkompas-plan"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
          >
            Naar basisuitleg
          </Link>

          <Link
            href="/training-certificering"
            className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Certificering & licentie
          </Link>
        </div>
      </section>

      {/* Wat zit er in Pro */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Wat krijg je in de pro-variant?
          </h2>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Het volledige routeboek (download/print) voor trajecten en trainingen.</li>
            <li>Formats voor doelen, afspraken, evaluaties en borging in de praktijk.</li>
            <li>Begeleidershandleiding: volgorde, prioritering en trajectopbouw.</li>
            <li>Koppeling naar alle tools en pijlers binnen het Kompasmodel.</li>
            <li>Voorbeeldroutes voor verschillende gezinssituaties.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            De pro-materialen zijn bedoeld voor gecertificeerde Stiefkompas-professionals met licentie.
            Toegang verloopt via het portaal.
          </p>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Toegang
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Heb je al een licentie? Log dan in via het portaal om de materialen te openen.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex w-full justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Meer over certificering
          </Link>
        </aside>
      </section>

      {/* Gate */}
      <ProGate
        title="Stiefkompas Plan – Pro materialen"
        teaser="In het portaal vind je het volledige routeboek, formats, begeleidershandleiding en verdiepende werkbladen. Alleen beschikbaar voor gecertificeerde professionals met licentie."
      />
    </div>
  );
}