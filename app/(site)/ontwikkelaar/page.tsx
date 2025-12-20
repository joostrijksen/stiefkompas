import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stiefkompas – Ontwikkelaar van de Methode",
  description:
    "Achtergrond, expertise en visie van de ontwikkelaar van de Stiefkompas-methodiek.",
};

export default function OntwikkelaarPage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen in logo-kleuren */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/22 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
          <div className="absolute left-[30%] top-[-12%] h-[260px] w-[260px] rounded-full bg-[#F02B8A]/10 blur-3xl" />
        </div>

        {/* Intro */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Ontwikkelaar van de methode
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] max-w-4xl leading-[1.1]">
              Over de ontwikkelaar van de Stiefkompas-methodiek
            </h1>

            <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
              De Stiefkompas-methodiek is ontwikkeld door{" "}
              <strong>Karin van der Sluis - Rijksen</strong>, gespecialiseerd in systemisch
              werken met samengestelde gezinnen. Vanuit haar jarenlange ervaring binnen
              het maatschappelijk werk en haar deskundigheid in gezinsdynamiek ontwikkelde
              zij een methodiek die professionals houvast biedt bij complexe stiefsystemen.
            </p>

            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              De methode ontstond vanuit de behoefte aan een helder, systemisch kader waarmee
              hulpverleners eenduidig kunnen analyseren, duiden en interveniëren — zonder te
              vervallen in simplificatie of individuele schuldvragen.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Profiel */}
        <section className="grid gap-10 lg:gap-12 md:grid-cols-[1fr_1.3fr] border-b border-slate-200 pb-12">
          {/* Foto */}
          <div className="rounded-2xl border border-[#17B3B0]/18 bg-white shadow-sm overflow-hidden">
            <div className="relative aspect-[4/5] w-full bg-slate-50">
              <Image
                src="/karin.png"
                alt="Karin van der Sluis - Rijksen"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover object-[50%_18%]"
              />
              {/* subtiele verzachting/overlays voor web */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>

            <div className="border-t border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Karin van der Sluis - Rijksen
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ontwikkelaar van de Stiefkompas-methodiek
              </p>
            </div>
          </div>

          {/* Inhoud */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
                Professionele achtergrond
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Karin werkte jarenlang in het maatschappelijk werk, met een focus op
                gezinnen, opvoedvraagstukken en complexe relatie- en samenwerkingspatronen.
                Vanuit deze brede praktijkervaring ontwikkelde zij een scherp analytisch vermogen
                voor de patronen die specifiek zijn voor samengestelde gezinnen.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A] mb-3">
                  Expertisegebieden
                </h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Systeemdynamiek binnen samengestelde gezinnen</li>
                  <li>Hechting, loyaliteit en posities</li>
                  <li>Communicatie- en conflictpatronen</li>
                  <li>Stress- en overgangsdynamiek bij wisselweken</li>
                  <li>Professionele gespreksvoering in complexe contexten</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A] mb-3">
                  Opleiding & deskundigheidsbevordering
                </h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Opleiding in systemisch werken</li>
                  <li>Post-hbo of master binnen het maatschappelijk werk (indien van toepassing aanpassen)</li>
                  <li>Bijscholing in hechtingsleer en trauma-informatie</li>
                  <li>Training in gespreksvoering en systemische interventies</li>
                  <li>Ervaring met teamtrainingen en casuïstiekbegeleiding</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/15 bg-gradient-to-br from-white to-slate-50 p-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-[#0E2A47]">Kern van de methode:</span>{" "}
                samenhang brengen in posities, loyaliteiten, hechting, grenzen en ritme — zodat
                professionals én gezinnen dezelfde taal krijgen om vooruit te komen.
              </p>
            </div>
          </div>
        </section>

        {/* Visie */}
        <section className="space-y-6 border-b border-slate-200 pb-12">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Visie op stiefsystemen
          </h2>

          <div className="space-y-4 max-w-3xl">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Karin van der Sluis - Rijksen ziet samengestelde gezinnen als volwaardige systemen
              die hun eigen dynamiek, geschiedenis en loyaliteiten meebrengen. Problemen ontstaan
              zelden door individuele keuzes, maar door een samenloop van posities, verwachtingen,
              interactiepatronen en onzichtbare loyaliteiten.
            </p>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              De Stiefkompas-methodiek helpt professionals én gezinnen om deze patronen zichtbaar
              te maken en te begrijpen, zodat er ruimte ontstaat voor rust, samenwerking en gezonde
              verbindingen.
            </p>
          </div>
        </section>

        {/* Motivatie ontwikkeling */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Waarom deze methodiek werd ontwikkeld
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              De methode ontstond na jaren van praktijkervaring, waarin duidelijk werd dat
              hulpverleners vaak werken zonder specifiek, gedeeld kader voor stiefsystemen.
              Veel gezinnen voelen zich daardoor niet goed begrepen.
            </p>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Het Kompasmodel brengt structuur, taal en analyse samen, zodat professionals
              zorgvuldig kunnen werken binnen de complexiteit van samengestelde gezinnen.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}