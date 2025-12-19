import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Online opleiding & certificering",
  description:
    "Online leeromgeving voor professionals die willen werken met de Stiefkompas-methodiek. Modulair leren, opdrachten en toetsing richting certificering.",
};

export default function TrainingCertificeringPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Online opleiding & certificering
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Online scholing in de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Stiefkompas-methodiek is ontwikkeld voor professionals die werken met
          samengestelde gezinnen. Stiefkompas biedt een online leeromgeving waarin je
          de methodiek leert begrijpen en toepassen — inclusief het zorgvuldig en
          contextueel inzetten van de officiële tools binnen begeleiding.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          De opleiding is volledig online en modulair. Er vinden geen live trainingen of
          klassikale bijeenkomsten plaats. Je leert in je eigen tempo via theorie,
          praktijkopdrachten, casuïstiek en toetsing.
        </p>
      </section>

      {/* Opleiding overzicht */}
      <section className="grid gap-10 md:grid-cols-2">
        {/* Basis */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">
            Module 1 — Basis van de methodiek
          </h2>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            In deze module leg je het fundament: visie, uitgangspunten en de opbouw van
            het Kompasmodel. Je leert methodisch kijken naar stiefgezinsdynamiek en
            herkent kernpatronen die vaak tot spanning leiden.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-4">
            <li>Uitgangspunten en taal van de Stiefkompas-methodiek</li>
            <li>De vijf pijlers van het Kompasmodel</li>
            <li>Systemisch kijken en evidence-informed handelen</li>
            <li>Reflectievragen en casusgericht leren</li>
          </ul>

          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Binnenkort beschikbaar
          </div>
        </div>

        {/* Toepassing */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">
            Module 2 — Toepassing in de praktijk
          </h2>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Je leert methodisch werken in begeleidingstrajecten: analyseren, structureren
            en interventies kiezen. De officiële tools worden ingezet als ondersteuning
            binnen de methodiek — niet als doel op zichzelf.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-4">
            <li>Van analyse naar plan: methodisch handelen</li>
            <li>Passend inzetten van tools binnen de methode</li>
            <li>Communicatie- en loyaliteitspatronen duiden</li>
            <li>Praktijkopdrachten op basis van casuïstiek</li>
          </ul>

          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Binnenkort beschikbaar
          </div>
        </div>

        {/* Certificering */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">
            Certificering tot Stiefkompas-professional
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4 max-w-3xl">
            Na afronding van de modules kun je deelnemen aan het certificeringstraject
            binnen de online leeromgeving. Certificering is gebaseerd op opdrachten en
            toetsing van methodisch handelen volgens de Stiefkompas-richtlijnen.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-4">
            <li>Toetsing op begrip en toepassing van de methodiek</li>
            <li>Beoordeling van praktijkopdrachten en casusuitwerking</li>
            <li>Reflectie op rol, positie en systemische interventies</li>
            <li>Toegang tot materialen, werkkaarten en updates</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Gecertificeerde professionals mogen de Stiefkompas-methodiek en de officiële
            tools toepassen binnen hun eigen praktijk of organisatie, conform de
            richtlijnen en kwaliteitsstandaarden van Stiefkompas.
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Meer informatie aanvragen
          </Link>
        </div>
      </section>

      {/* Voor wie? */}
      <section className="space-y-4 border-t border-slate-200 pt-10 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Voor welke professionals?
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          De online Stiefkompas-opleiding is ontwikkeld voor professionals die werken
          binnen de context van gezinnen, relaties en opvoeding. Denk aan:
        </p>

        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Maatschappelijk werkers</li>
          <li>Systeem- en gezinscoaches</li>
          <li>Jeugdhulpverleners</li>
          <li>Stiefcoaches</li>
          <li>Psychosociaal therapeuten</li>
          <li>Wijkteamprofessionals</li>
        </ul>
      </section>

      {/* Afsluit */}
      <section className="max-w-3xl space-y-3 text-sm md:text-base text-slate-700 leading-relaxed pb-4">
        <p>
          De leeromgeving sluit aan bij actuele inzichten binnen systeemdynamiek,
          hechting en evidence-informed gezinsinterventies. Je doorloopt een duidelijke
          leerroute met theorie, casuïstiek, opdrachten en toetsing.
        </p>
        <p>
          Vanaf 2026 wordt aanvullende literatuur, een officieel handboek en een
          materiaalbibliotheek beschikbaar voor deelnemers en gecertificeerde gebruikers.
        </p>
      </section>
    </div>
  );
}