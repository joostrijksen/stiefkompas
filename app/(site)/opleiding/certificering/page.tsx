import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Certificering",
  description:
    "Toetsing, 1x herkansing en certificering tot Stiefkompas-professional. Geldigheid 1 jaar en verlengen via het portaal.",
};

const WHAT_YOU_GET = [
  "Certificaat + registratie als Stiefkompas-professional",
  "Toegang tot pro-materialen (na certificering, conform voorwaarden)",
  "Richtlijnen, formats en updates voor professioneel gebruik",
  "Bewijs van methodische toepassing (toetsbaar en herhaalbaar)",
];

const HOW_IT_WORKS = [
  "Je rondt Module 1 en Module 2 af (of aantoonbaar equivalent).",
  "Je levert toets- en/of praktijkonderdelen aan binnen de leeromgeving.",
  "Beoordeling op methodische toepassing (niet op ‘mooie woorden’).",
  "Bij onvoldoende: 1 herkansing is inbegrepen.",
  "Bij voldoende: certificering wordt geactiveerd voor 1 jaar.",
];

const ASSESSED_ON = [
  "Begrip van het Kompasmodel en de samenhang van de pijlers",
  "Methodisch redeneren: observatie → hypothese → plan → interventie",
  "Passend kiezen en doseren van interventies (tempo & draagkracht)",
  "Functioneel gebruik van tools (middel, geen doel)",
  "Professionele verslaglegging: helder, toetsbaar en zorgvuldig",
];

// CTA styles (leesbaar op elke achtergrond)
const CTA_PRIMARY =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition " +
  "border border-[#2C4B9A]/25 bg-[#2C4B9A]/12 text-[#0E2A47] " +
  "hover:bg-[#2C4B9A]/18 hover:border-[#2C4B9A]/35 focus:outline-none focus:ring-2 focus:ring-[#2C4B9A]/20";

const CTA_SECONDARY =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition " +
  "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 " +
  "focus:outline-none focus:ring-2 focus:ring-slate-200";

export default function CertificeringPage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#F02B8A]/14 to-[#2C4B9A]/10 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/16 to-[#17B3B0]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Certificering
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Toets + 1x herkansing + certificering
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Certificering toont aan dat je Stiefkompas{" "}
              <span className="font-semibold">methodisch</span> kunt toepassen in begeleiding.
              Je laat zien dat je situaties kunt ordenen, keuzes kunt onderbouwen en interventies
              passend kunt faseren — met zorgvuldig en functioneel gebruik van de officiële tools.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Na certificering ontvang je een certificaat en registratie als Stiefkompas-professional,
              inclusief toegang tot pro-materialen en richtlijnen (conform voorwaarden).
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/inschrijven#tarieven" className={CTA_PRIMARY}>
                Start certificering
              </Link>

              <Link href="/training-certificering" className={CTA_SECONDARY}>
                Terug naar overzicht
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Top grid */}
        <section className="grid gap-8 lg:grid-cols-3">
          {/* Links: uitleg */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              Hoe werkt certificering?
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Certificering is opgezet als een professionele kwaliteitscheck: niet “kennis stampen”,
              maar aantoonbaar kunnen toepassen. De toetsing is gericht op jouw methodische keuzes en
              onderbouwing.
            </p>

            <ol className="mt-6 space-y-3 text-sm md:text-base text-slate-700">
              {HOW_IT_WORKS.map((x, idx) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                    {idx + 1}
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-sm md:text-base font-semibold text-[#0E2A47]">
                Waar word je op beoordeeld?
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
                {ASSESSED_ON.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-[#F02B8A]/20 bg-white p-6">
              <h3 className="text-sm md:text-base font-semibold text-[#0E2A47]">
                Wat krijg je na certificering?
              </h3>
              <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-700">
                {WHAT_YOU_GET.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-[#F02B8A]">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Let op: certificering is bedoeld voor professioneel gebruik van de methodiek en de officiële tools,
                binnen de richtlijnen en voorwaarden van Stiefkompas.
              </p>
            </div>
          </div>

          {/* Rechts: kaart */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Voorwaarden
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Certificering is bedoeld na afronding van{" "}
                <span className="font-semibold">Module 1</span> en{" "}
                <span className="font-semibold">Module 2</span> (of aantoonbaar equivalent).
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Tijdsinvestering (indicatie)</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  <span className="font-semibold">6–10 uur</span> voorbereiding & toetsing
                </li>
                <li>Afhankelijk van jouw tempo en ervaring</li>
                <li>Herkansing (1x) inbegrepen</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-[#0E2A47]">Geldigheid & verlengen</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Certificering is <span className="font-semibold">1 jaar geldig</span>. Verlenging kost{" "}
                <span className="font-semibold">€ 85 per jaar</span> en vraag je aan via het{" "}
                <span className="font-semibold">portaal</span> (alleen voor gecertificeerden).
              </p>
            </div>

            <Link href="/inschrijven#tarieven" className={CTA_PRIMARY + " w-full"}>
              Start certificering
            </Link>

            <div className="text-xs text-slate-500 leading-relaxed">
              Twijfel je of certificering nu al past? Bekijk eerst Module 1 en 2, of stem even af.
            </div>

            <Link href="/contact" className={CTA_SECONDARY + " w-full"}>
              Contact
            </Link>
          </div>
        </section>

        {/* Onderblok: doorverwijzingen */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Logische route
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            Certificering is het sluitstuk. Wil je eerst de inhoud en studielast helder zien? Lees dan
            Module 1 en Module 2. Daarna kun je via de inschrijfpagina de route kiezen die bij je past.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/opleiding/module-1" className={CTA_SECONDARY}>
              Lees over Module 1
            </Link>

            <Link href="/opleiding/module-2" className={CTA_SECONDARY}>
              Lees over Module 2
            </Link>

            <Link href="/inschrijven#tarieven" className={CTA_PRIMARY}>
              Naar tarieven & inschrijven
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}