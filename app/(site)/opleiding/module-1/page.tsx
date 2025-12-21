import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Module 1",
  description:
    "Module 1: basis van de Stiefkompas-methodiek. Leer het Kompasmodel, de pijlers en het methodisch kijken naar stiefgezinsdynamiek (40–60 uur).",
};

const CONTENTS = [
  { t: "Intro: wat is Stiefkompas (en wat niet)" },
  { t: "Het Kompasmodel: opbouw, taal en route" },
  { t: "De vijf pijlers: overzicht, kernbegrippen en samenhang" },
  { t: "Systemisch kijken: posities, loyaliteit en verlies" },
  { t: "Patronen herkennen: grenzen, hechting, communicatie" },
  { t: "Casusdenken: van situatie naar hypothese en focus" },
  { t: "Oefenen: reflectie-opdrachten en mini-casuïstiek" },
  { t: "Afronding: samenvatten + voorbereiding op Module 2" },
];

export default function Module1Page() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#17B3B0]/22 to-[#2C4B9A]/12 blur-2xl"
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
              Module 1 — Basis van de methodiek
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              In Module 1 leg je het fundament van Stiefkompas. Je leert de taal en structuur van
              het Kompasmodel, herkent kernpatronen in samengestelde gezinnen en oefent met
              methodisch kijken via casuïstiek en reflectie.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Dit is een uitgebreide module (±350 pagina's) met een realistische studielast van{" "}
              <span className="font-semibold text-[#0E2A47]">40–60 uur</span>. Je bouwt hiermee een
              stevig begrippenkader op — bedoeld voor professioneel gebruik.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inschrijven#tarieven"
                className="inline-flex items-center justify-center rounded-full
                  border-2 border-[#0E2A47] bg-[#0E2A47] px-5 py-2.5 text-xs font-bold 
                  uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-[#1a3a5f] 
                  hover:border-[#1a3a5f] transition-all"
              >
                Inschrijven (Module 1)
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
              Wat leer je in Module 1?
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Je ontwikkelt een stevig begrippenkader en een methodische blik. Daardoor kun je
              situaties sneller ordenen, taal geven aan wat er speelt en passende vervolgstappen
              kiezen binnen begeleiding — zonder te verdrinken in complexiteit.
            </p>

            <ul className="mt-6 space-y-2 text-sm md:text-base text-slate-700">
              {[
                "De uitgangspunten en positionering van Stiefkompas (wat het wél en níet is)",
                "Het Kompasmodel: structuur, logica, route en 'taal' voor de praktijk",
                "De vijf pijlers: kernbegrippen, signalen en samenhang",
                "Veelvoorkomende patronen: loyaliteit, verlies, grenzen, hechting, communicatie",
                "Van observatie naar hypothese: methodisch denken en focus kiezen",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-[#17B3B0]">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-sm md:text-base font-semibold text-[#0E2A47]">
                Wat zit er in die 40–60 uur?
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
                <li>Theorie + verdieping (begrippenkader, samenhang, onderbouwing)</li>
                <li>Casuïstiek: herkennen, ordenen en analyseren met het Kompasmodel</li>
                <li>Reflectie-opdrachten (professionele houding, positie en interventiekeuzes)</li>
                <li>Mini-toetsmomenten / checks (om begrip te borgen)</li>
                <li>Samenvatten en toepassen: van 'weten' naar 'doen'</li>
              </ul>
            </div>
          </div>

          {/* Rechts */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Voor wie?
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Voor professionals die met samengestelde gezinnen werken en een heldere methode
                willen om complexiteit te ordenen: taal, structuur en een route die je in de
                praktijk kunt blijven gebruiken.
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

            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Wat heb je nodig?</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Basiservaring met gezins-/relatiecontext is helpend</li>
                <li>Bereidheid om te reflecteren op rol, positie en keuzes</li>
                <li>Tijd om casuïstiek en opdrachten serieus uit te werken</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inhoudsopgave */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Inhoudsopgave (indicatief)
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Definitieve indeling kan nog licht wijzigen, maar dit geeft een realistisch beeld van
            de onderwerpen en opbouw.
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
              Inschrijven (Module 1)
            </Link>

            <Link
              href="/opleiding/module-2"
              className="inline-flex items-center justify-center rounded-full 
                border-2 border-slate-900 bg-white px-5 py-2.5 text-xs font-semibold 
                uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 
                transition-all shadow-sm"
            >
              Lees over Module 2
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            Tip: wil je later certificeren? Volg daarna Module 2 en ga vervolgens naar "Toetsing & certificering".
          </p>
        </section>
      </div>
    </div>
  );
}