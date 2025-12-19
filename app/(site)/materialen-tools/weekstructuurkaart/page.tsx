import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekstructuurkaart – Stiefkompas",
  description:
    "Basisuitleg van de Weekstructuurkaart. De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function WeekstructuurkaartPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Weekstructuurkaart
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Weekstructuurkaart brengt ritme, wissels en overgangsmomenten in beeld.
          In stiefgezinnen zijn juist die overgangen vaak stresspunten. Door samen
          een realistisch weekoverzicht te maken ontstaat meer voorspelbaarheid, rust
          en grip op terugkerende spanningsmomenten.
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
            Waarvoor gebruik je de Weekstructuurkaart?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Veel spanningen zijn voorspelbaar als je ze koppelt aan het weekritme.
            Denk aan wisselmomenten, drukte rond school, sport, bedtijden, of
            “wie is wanneer waar”. De Weekstructuurkaart helpt om dat ritme zichtbaar
            te maken, zodat je kunt sturen op voorspelbaarheid in plaats van brandjes blussen.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Maakt overgangsmomenten bespreekbaar zonder verwijt.</li>
            <li>Helpt om stresspieken te herkennen en te ontlasten.</li>
            <li>Ondersteunt bij het maken van kleine, haalbare structuurafspraken.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg. De pro-variant bevat formats (print/download),
            begeleidervragen en voorbeeldstructuren via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Werk met de <strong>realistische week</strong>, niet de ideale. Het doel is rust en
            voorspelbaarheid, niet perfectie.
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
          Voorbeeld: overgangsmomenten herkennen
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Overgangen zijn vaak “kritieke momenten”: van het ene huis naar het andere,
          van school naar thuis, van drukte naar rust. Met de Weekstructuurkaart kun je
          samen markeren waar spanning meestal oploopt.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Wisselweekend
            </p>
            <p className="text-sm text-slate-700">
              Op zondagavond ontstaat vaak gedoe rond spullen, bedtijd en afspraken.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Structuurvraag:</strong> wat helpt vlak vóór de wissel (checklist, ritueel, tijdslot)?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Doordeweeks na school
            </p>
            <p className="text-sm text-slate-700">
              Na school is er weinig rust, waardoor discussies sneller escaleren.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Structuurvraag:</strong> welke vaste “landing” werkt (eten, pauze, taakverdeling)?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Grenzen en afspraken
            </p>
            <p className="text-sm text-slate-700">
              Als het druk is, worden grenzen onduidelijk en gaat de toon omhoog.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Structuurvraag:</strong> welke afspraak is het meest helpend op drukke dagen?
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Het doel is niet om alles vast te leggen, maar om op de meest gevoelige momenten
          voorspelbaarheid en rust te organiseren.
        </p>
      </section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je de Weekstructuurkaart in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij stress rond wissels, halen/brengen of overgangsmomenten.</li>
          <li>Wanneer routines per huis verschillen en dat botsingen geeft.</li>
          <li>Als gedrag van kinderen voorspelbaar samenvalt met bepaalde dagen of tijden.</li>
          <li>Wanneer er veel onrust is door volle agenda’s, sport, werk en planning.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Breng de realistische week in kaart (wie is wanneer waar?).</li>
          <li>Markeer overgangsmomenten en voorspelbare stresspieken.</li>
          <li>Kies één kleine structuurafspraak die iedereen kan volhouden.</li>
          <li>Evalueer na 2–3 weken en stuur bij op wat werkt.</li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat printbare weekformats, begeleidershandleiding,
            voorbeeldstructuren en interventies voor overgangsstress. Beschikbaar voor
            gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/weekstructuurkaart/pro"
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