import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Online opleiding & certificering",
  description:
    "Online leeromgeving voor professionals die willen werken met de Stiefkompas-methodiek. Modulair leren, opdrachten en toetsing richting certificering.",
};

export default function TrainingCertificeringPage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen (logo-kleuren) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[8%] h-[520px] w-[520px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-12deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[0%] h-[560px] w-[560px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-[#2C4B9A]/20 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
          <div className="absolute left-[30%] top-[-10%] h-[260px] w-[260px] rounded-full bg-[#F02B8A]/10 blur-3xl" />
        </div>

        {/* Intro (jouw content, maar als hero) */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Online opleiding & certificering
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] max-w-3xl leading-[1.1]">
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
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Opleiding overzicht */}
        <section className="grid gap-10 md:grid-cols-2">
          {/* Basis */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              <span className="text-[#17B3B0]">Module 1</span> — Basis van de methodiek
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

            <div className="inline-flex items-center rounded-full bg-[#17B3B0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
              Binnenkort beschikbaar
            </div>
          </div>

          {/* Toepassing */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              <span className="text-[#2C4B9A]">Module 2</span> — Toepassing in de praktijk
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

            <div className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
              Binnenkort beschikbaar
            </div>
          </div>

          {/* Certificering */}
          <div className="rounded-2xl border border-[#F02B8A]/18 bg-white p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              Certificering tot <span className="text-[#F02B8A]">Stiefkompas-professional</span>
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
              className="inline-flex rounded-full border border-[#0E2A47] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
            >
              Meer informatie aanvragen
            </Link>
          </div>
        </section>

        {/* Voor wie? */}
        <section className="space-y-4 border-t border-slate-200 pt-10 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
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
    </div>
  );
}