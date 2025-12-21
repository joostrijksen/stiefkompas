import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Module 2",
  description:
    "Module 2: toepassing in de praktijk. Van analyse naar plan, interventies kiezen en tools functioneel inzetten binnen begeleiding (40–60 uur).",
};

const CONTENTS = [
  { t: "Methodisch werken: analyse → plan → interventie" },
  { t: "Casusstructuur: wat is de hulpvraag echt?" },
  { t: "Interventies per pijler: kiezen, doseren en faseren" },
  { t: "Tools functioneel inzetten (zonder tool-fetisj)" },
  { t: "Rapportage & voortgang: helder, professioneel en toetsbaar" },
  { t: "Complexe situaties: loyaliteit, escalatie, grenzen" },
  { t: "Voorbereiding certificering: bewijs van toepassing" },
  { t: "Afronding: werkstijl, kwaliteitscriteria en next steps" },
];

export default function Module2Page() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#2C4B9A]/16 to-[#17B3B0]/10 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/18 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Opleiding
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Module 2 — Toepassing in de praktijk
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              In Module 2 maak je de stap van begrijpen naar doen. Je leert de methodiek
              toepassen in echte begeleidingstrajecten: analyseren, structureren, interventies
              kiezen en tools functioneel inzetten binnen de route van Stiefkompas.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Dit is een uitgebreide module (±350 pagina's) met een realistische studielast van{" "}
              <span className="font-semibold text-[#0E2A47]">40–60 uur</span>. Je werkt met
              casuïstiek, opdrachten en onderbouwde keuzes — gericht op professioneel handelen.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inschrijven#tarieven"
                className="inline-flex items-center justify-center rounded-full
                  border-2 border-[#0E2A47] bg-[#0E2A47] px-5 py-2.5 text-xs font-bold 
                  uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-[#1a3a5f] 
                  hover:border-[#1a3a5f] transition-all"
              >
                Inschrijven (Module 2)
              </Link>

              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center rounded-full 
                  border-2 border-slate-900 bg-white px-5 py-2.5 text-xs font-semibold 
                  uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 
                  transition-all shadow-sm"
              >
                Terug naar overzicht
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* 2-koloms blok */}
        <section className="grid gap-8 lg:grid-cols-3">
          {/* Links */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              Wat leer je in Module 2?
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Je vertaalt inzicht naar handelen. Je leert keuzes onderbouwen, interventies
              faseren en tools inzetten als ondersteuning — passend bij context, tempo en
              draagkracht van het gezin.
            </p>

            <ul className="mt-6 space-y-2 text-sm md:text-base text-slate-700">
              {[
                "Methodische analyse: ordenen wat er speelt (zonder te versimpelen)",
                "Van hypothese naar plan: doelen, stappen en focus kiezen",
                "Interventies per pijler: kiezen, doseren en timing bepalen",
                "Tools inzetten als middel (functioneel) en niet als doel",
                "Casuïstiek & praktijkopdrachten: toepassen op realistische scenario's",
                "Voorbereiding op certificering: aantoonbaar methodisch handelen",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-[#2C4B9A]">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-sm md:text-base font-semibold text-[#0E2A47]">
                Wat zit er in die 40–60 uur?
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
                <li>Verdieping: interventiekeuzes en rationale per pijler</li>
                <li>Casuïstiek: analyseren → plan → interventie (incl. afwegingen)</li>
                <li>Oefenen met tools: wanneer wel, wanneer niet, en hoe 'doseren'</li>
                <li>Rapportage/voortgang: helder beschrijven en toetsbaar maken</li>
                <li>Portfolio-achtige opdrachten als voorbereiding op certificering</li>
              </ul>
            </div>
          </div>

          {/* Rechts */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Aanbevolen
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Module 1 geeft het begrippenkader en de structuur. Module 2 bouwt daarop door
                met toepassing, afwegingen en interventies in trajecten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Tijdsinvestering (indicatie)</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  <span className="font-semibold">40–60 uur</span> zelfstudie
                </li>
                <li>Omvang: ±350 pagina's</li>
                <li>Advies tempo: 5–10 uur per week</li>
                <li>Doorlooptijd: ±4–8 weken (flexibel)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-white p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Doel na afronding</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Je kunt zelfstandig trajecten structureren en interventies kiezen binnen
                Stiefkompas — onderbouwd, passend en uitvoerbaar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Wat heb je nodig?</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Basisbegrippen uit Module 1</li>
                <li>Bereidheid om keuzes te onderbouwen (waarom dit, waarom nu?)</li>
                <li>Tijd om casuïstiek en opdrachten serieus uit te werken</li>
              </ul>
            </div>

            <Link
              href="/opleiding/certificering"
              className="inline-flex w-full items-center justify-center rounded-full 
                border-2 border-slate-900 bg-white px-5 py-2.5 text-xs font-semibold 
                uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 
                transition-all shadow-sm"
            >
              Lees over certificering
            </Link>
          </div>
        </section>

        {/* Inhoudsopgave */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Inhoudsopgave (indicatief)
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Definitieve indeling kan nog licht wijzigen, maar dit geeft een realistisch beeld.
          </p>

          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {CONTENTS.map((c, i) => (
              <li
                key={c.t}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Les {i + 1}
                </div>
                <div className="text-sm font-semibold text-[#0E2A47]">{c.t}</div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inschrijven#tarieven"
              className="inline-flex items-center justify-center rounded-full
                border-2 border-[#0E2A47] bg-[#0E2A47] px-5 py-2.5 text-xs font-bold 
                uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-[#1a3a5f] 
                hover:border-[#1a3a5f] transition-all"
            >
              Inschrijven (Module 2)
            </Link>

            <Link
              href="/opleiding/module-1"
              className="inline-flex items-center justify-center rounded-full 
                border-2 border-slate-900 bg-white px-5 py-2.5 text-xs font-semibold 
                uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 
                transition-all shadow-sm"
            >
              Terug naar Module 1
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            Wil je certificeren? Na afronding van Module 1 en 2 kun je door naar "Toetsing & certificering".
          </p>
        </section>
      </div>
    </div>
  );
}