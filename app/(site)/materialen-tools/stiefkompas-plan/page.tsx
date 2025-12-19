import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas Plan (routeboek) – Stiefkompas",
  description:
    "Basisuitleg van het Stiefkompas Plan (routeboek). De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function StiefkompasPlanPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Stiefkompas Plan (routeboek)
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Het Stiefkompas Plan is het routeboek waarin inzichten, afspraken en vervolgstappen
          worden vastgelegd. Het helpt om structuur te geven aan het traject en om keuzes
          te borgen in de praktijk, zodat vooruitgang zichtbaar en herhaalbaar wordt.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/materialen-tools"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
          >
            Terug naar tools
          </Link>

          <Link
            href="/training-certificering"
            className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Certificering & licentie
          </Link>
        </div>
      </section>

      {/* Intro / uitleg */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Waarvoor gebruik je het Stiefkompas Plan?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            In stiefgezinnen is er vaak veel tegelijk: rollen, grenzen, loyaliteiten,
            communicatie en ritme. Het Stiefkompas Plan helpt om overzicht te creëren,
            prioriteiten te kiezen en afspraken concreet te maken. Het routeboek vormt
            de rode draad door het traject.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Brengt focus aan: wat pakken we eerst op en waarom?</li>
            <li>Maakt afspraken toetsbaar en herhaalbaar (wie doet wat, wanneer?).</li>
            <li>Ondersteunt evaluatie: wat werkte en wat vraagt bijsturing?</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg. De pro-variant bevat het volledige routeboek,
            formats en begeleiderskaders via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Het plan is geen “contract”, maar een werkdocument dat meebeweegt. Het doel is
            helderheid en vertrouwen in de volgende stap.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex w-full justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Bekijk certificering
          </Link>
        </aside>
      </section>

      {/* Voorbeeldblok */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Voorbeeld: van inzicht naar afspraak
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Het Stiefkompas Plan helpt om inzichten te vertalen naar gedrag in het dagelijks leven.
          Niet alles tegelijk, maar één stap die haalbaar is en effect heeft.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Grenzen in huis
            </p>
            <p className="text-sm text-slate-700">
              Inzicht: afspraken zijn impliciet, waardoor er discussie ontstaat op drukke momenten.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Vertaling:</strong> één duidelijke huisafspraak voor doordeweekse avonden, met evaluatiemoment.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Partnerrol beschermen
            </p>
            <p className="text-sm text-slate-700">
              Inzicht: gesprekken gaan alleen nog over de kinderen en spanning stapelt op.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Vertaling:</strong> een vast wekelijks moment voor partners om te checken hoe het gaat.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Wisselmomenten
            </p>
            <p className="text-sm text-slate-700">
              Inzicht: onrust is voorspelbaar rond wissels en overgangsmomenten.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Vertaling:</strong> een klein ritueel en een vaste checklist voor het wisselmoment.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Het plan maakt afspraken concreet, maar houdt ruimte voor nuance en bijsturing.
        </p>
      </section>

      {/* Wat zit er doorgaans in */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wat staat er doorgaans in het routeboek?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Startpunt en focuspijlers (waar beginnen we en waarom?).</li>
          <li>Doelen en gewenste veranderingen in het dagelijks leven.</li>
          <li>Afspraken per thema: rollen, grenzen, structuur, communicatie en rituelen.</li>
          <li>Evaluatiemomenten: wat werkte, wat schuurt, wat vraagt bijstelling?</li>
        </ul>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat het volledige routeboek (download/print), formats voor doelen,
            afspraken en evaluatie, plus begeleiderskaders om tools en pijlers logisch te verbinden.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/stiefkompas-plan/pro"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Naar pro-pagina
            </Link>

            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Meer over certificering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}