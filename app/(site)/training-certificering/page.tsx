import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Online opleiding & certificering",
  description:
    "Online leeromgeving voor professionals die willen werken met de Stiefkompas-methodiek. Twee uitgebreide modules (40–60 uur per module) en certificering voor professioneel gebruik.",
};

export default function TrainingCertificeringPage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen (logo-kleuren) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[8%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-12deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[0%] h-[560px] w-[560px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/20 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
          <div className="absolute left-[30%] top-[-10%] h-[260px] w-[260px] rounded-full bg-[#F02B8A]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Online opleiding & certificering
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Leer Stiefkompas toepassen — volledig online, in je eigen tempo
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Stiefkompas is ontwikkeld voor professionals die werken met samengestelde gezinnen.
              In de leeromgeving leer je de methodiek begrijpen én methodisch toepassen: van
              analyse tot planvorming, inclusief het zorgvuldig inzetten van de officiële tools.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Geen klassikale bijeenkomsten. Je leert via theorie, casuïstiek en opdrachten.
              De modules zijn bewust diepgaand opgezet (±350 pagina's per module), zodat je als
              professional echt een stevig begrippenkader én een toepasbare route opbouwt.
              Certificering geeft toegang tot pro-materialen en professioneel gebruik binnen
              jouw praktijk of organisatie.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inschrijven"
                className="inline-flex items-center justify-center rounded-full
                  border-2 border-[#0E2A47] bg-[#0E2A47] px-5 py-2.5 text-xs font-bold 
                  uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-[#1a3a5f] 
                  hover:border-[#1a3a5f] transition-all"
              >
                Bekijk tarieven & inschrijven
              </Link>

              <Link
                href="/materialen-tools"
                className="inline-flex items-center justify-center rounded-full
                  border-2 border-slate-900 bg-white px-5 py-2.5 text-xs font-semibold
                  uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 transition-all shadow-sm"
              >
                Bekijk tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* OVERZICHT */}
        <section className="grid gap-10 md:grid-cols-2">
          {/* Module 1 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              <span className="text-[#17B3B0]">Module 1</span> — Basis van de methodiek
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Je legt het fundament: visie, uitgangspunten, taal en de opbouw van het Kompasmodel.
              Je leert systemisch kijken naar stiefgezinsdynamiek en kernpatronen herkennen — zodat je
              als professional sneller ziet wat er onder het zichtbare gedrag speelt.
            </p>

            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-5">
              <li>Uitgangspunten en begrippenkader</li>
              <li>De vijf pijlers van het Kompasmodel</li>
              <li>Evidence-informed en contextueel handelen</li>
              <li>Casusgericht leren met reflectie-opdrachten</li>
            </ul>

            <div className="mb-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-[#0E2A47] mb-1">Studielast (indicatie)</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>± 40–60 uur (afhankelijk van ervaring en tempo)</li>
                <li>Omvang: ± 350 pagina's (theorie + opdrachten)</li>
                <li>Praktisch: 5–10 uur per week = ± 4–8 weken doorlooptijd</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/inschrijven#tarieven"
                className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                Tarief Module 1 bekijken
              </Link>

              <Link
                href="/opleiding/module-1"
                className="inline-flex rounded-full border border-[#17B3B0]/30 bg-[#17B3B0]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#17B3B0]/15 transition"
              >
                Meer info (inhoud & opbouw)
              </Link>
            </div>
          </div>

          {/* Module 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              <span className="text-[#2C4B9A]">Module 2</span> — Toepassing in de praktijk
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Je leert methodisch werken in begeleidingstrajecten: analyseren, structureren,
              keuzes maken in interventies en de tools functioneel inzetten binnen de methodiek.
              Het doel is dat je niet "iets probeert", maar met een duidelijke route begeleidt.
            </p>

            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-5">
              <li>Van analyse naar plan: route en stappen</li>
              <li>Passend inzetten van materialen en tools</li>
              <li>Patronen duiden: loyaliteit, rollen, grenzen, communicatie</li>
              <li>Opdrachten op basis van herkenbare casuïstiek</li>
            </ul>

            <div className="mb-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-[#0E2A47] mb-1">Studielast (indicatie)</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>± 40–60 uur (incl. opdrachten en casuïstiek)</li>
                <li>Omvang: ± 350 pagina's</li>
                <li>Praktisch: 5–10 uur per week = ± 4–8 weken</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/inschrijven#tarieven"
                className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                Tarief Module 2 bekijken
              </Link>

              <Link
                href="/opleiding/module-2"
                className="inline-flex rounded-full border border-[#2C4B9A]/30 bg-[#2C4B9A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#2C4B9A]/15 transition"
              >
                Meer info (inhoud & opbouw)
              </Link>
            </div>
          </div>

          {/* Certificering */}
          <div className="rounded-2xl border border-[#F02B8A]/18 bg-white p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-3">
              Toetsing & <span className="text-[#F02B8A]">certificering</span>
            </h2>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4 max-w-3xl">
              Na Module 1 en 2 kun je deelnemen aan toetsing en certificering. Hiermee toon je aan
              dat je Stiefkompas methodisch toepast en krijg je toegang tot pro-materialen en
              gebruiksrechten binnen je eigen praktijk of organisatie.
            </p>

            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-4">
              <li>Toets + 1 herkansing inbegrepen</li>
              <li>Beoordeling van opdrachten en casusuitwerking</li>
              <li>Richtlijnen voor professioneel en zorgvuldig gebruik</li>
              <li>Toegang tot updates, werkkaarten en formats</li>
            </ul>

            <div className="mb-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-[#0E2A47] mb-1">Geldigheid & verlenging</div>
              <p className="leading-relaxed">
                Certificering is <strong>1 jaar</strong> geldig. Verlenging kost <strong>€ 85 per jaar</strong>
                en kun je aanvragen via het portaal wanneer je al gecertificeerd bent.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inschrijven#tarieven"
                className="inline-flex rounded-full border border-[#0E2A47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
              >
                Tarieven toets & certificering
              </Link>

              <Link
                href="/opleiding/certificering"
                className="inline-flex rounded-full border border-[#F02B8A]/25 bg-[#F02B8A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#F02B8A]/15 transition"
              >
                Meer info over certificering
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Let op: certificering is bedoeld voor professioneel gebruik van de methodiek en de officiële tools.
            </p>
          </div>
        </section>

        {/* VOOR WIE + KAART */}
        <section className="border-t border-slate-200 pt-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
                Voor wie is dit bedoeld?
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                De opleiding is ontwikkeld voor professionals die werken binnen de context van gezinnen,
                relaties en opvoeding. Bijvoorbeeld:
              </p>

              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Maatschappelijk werkers</li>
                <li>Systeem- en gezinscoaches</li>
                <li>Jeugdhulpverleners</li>
                <li>Stiefcoaches</li>
                <li>Psychosociaal therapeuten</li>
                <li>Wijkteamprofessionals</li>
              </ul>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stiefkompas is bedoeld voor professionals die méér willen dan losse tips: je bouwt een
                stevig fundament, een gedeelde taal en een methode waarmee je gezinnen kunt begeleiden
                zonder te verdwalen in de complexiteit.
              </p>
            </div>

            {/* Rechter kaart */}
            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Studielast & aanbeveling
              </p>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  <span className="font-semibold">Module 1:</span> 40–60 uur <br />
                  <span className="text-slate-600">(+/- 350 pagina's)</span>
                </p>
                <p>
                  <span className="font-semibold">Module 2:</span> 40–60 uur <br />
                  <span className="text-slate-600">(+/- 350 pagina's)</span>
                </p>
                <p>
                  <span className="font-semibold">Certificering:</span> 6–12 uur <br />
                  <span className="text-slate-600">(toets + casusuitwerking)</span>
                </p>

                <div className="h-px bg-slate-200" />

                <p>
                  <span className="font-semibold">Aanbevolen tempo:</span> 5–10 uur per week.
                  Dat betekent gemiddeld 4–8 weken per module (afhankelijk van ervaring en ritme).
                </p>

                <p className="text-xs text-slate-500">
                  Je kunt volledig in je eigen tempo werken: sneller of juist verspreid over meerdere maanden.
                </p>
              </div>

              <Link
                href="/inschrijven"
                className="inline-flex w-full items-center justify-center rounded-full
                  border-2 border-[#0E2A47] bg-[#0E2A47] px-5 py-2.5 text-xs font-bold 
                  uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-[#1a3a5f] 
                  hover:border-[#1a3a5f] transition-all"
              >
                Naar inschrijven
              </Link>

              <p className="text-xs text-slate-500 leading-relaxed">
                Organisaties kunnen ook informeren naar licentie- en implementatieafspraken.
              </p>
            </div>
          </div>
        </section>

        {/* WAT KRIJG JE */}
        <section className="border-t border-slate-200 pt-10">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              Wat je krijgt in de leeromgeving
            </h2>

            <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
              <li>Heldere leerroute: theorie → casus → opdracht → reflectie</li>
              <li>Modulair leren: je volgt onderdelen in jouw tempo</li>
              <li>Veel oefening met casuïstiek: herkennen, duiden en keuzes maken</li>
              <li>Toetsing richting certificering (incl. herkansing)</li>
              <li>Toegang tot pro-materialen na certificering</li>
              <li>Doorlopende updates en aanscherpingen van tools en formats</li>
            </ul>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Stiefkompas is niet "even een training": je bouwt een professionele basis waarmee je
              gezinssystemen beter begrijpt, sneller patronen herkent en steviger kunt begeleiden.
            </p>
          </div>
        </section>

        {/* AFSLUIT */}
        <section className="max-w-3xl space-y-3 text-sm md:text-base text-slate-700 leading-relaxed pb-4">
          <p>
            Stiefkompas biedt een professioneel begrippenkader en een methodische route voor
            begeleiding van samengestelde gezinnen — met aandacht voor loyaliteit, posities,
            hechting, grenzen en communicatie.
          </p>
          <p>
            Wil je meteen zien wat het kost en welke route het beste past? Ga naar de inschrijfpagina.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="mt-10 rounded-3xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/10 via-white to-white p-8 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47] mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
            Kies jouw leerroute, rond de betaling af en krijg toegang tot de online leeromgeving.
          </p>
          <Link
            href="/inschrijven"
            className="inline-flex rounded-full border border-[#0E2A47] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
          >
            Bekijk tarieven & inschrijven
          </Link>
        </section>
      </div>
    </div>
  );
}