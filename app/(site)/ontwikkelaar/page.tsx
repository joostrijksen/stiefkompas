import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Ontwikkelaar van de Methode",
  description:
    "Achtergrond, expertise en visie van de ontwikkelaar van de Stiefkompas-methodiek.",
};

export default function OntwikkelaarPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Ontwikkelaar van de methode
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-4xl">
          Over de ontwikkelaar van de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Stiefkompas-methodiek is ontwikkeld door <strong>[Karin’s naam hier]</strong>, 
          gespecialiseerd in systemisch werken met samengestelde gezinnen. Vanuit haar jarenlange 
          ervaring binnen het maatschappelijk werk en haar deskundigheid in gezinsdynamiek ontwikkelde 
          zij een methodiek die professionals houvast biedt bij complexe stiefsystemen.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          De methode ontstond vanuit de behoefte aan een helder, systemisch kader waarmee hulpverleners 
          eenduidig kunnen analyseren, duiden en interveniëren — zonder te vervallen in simplificatie 
          of individuele schuldvragen.
        </p>
      </section>

      {/* Profiel */}
      <section className="grid gap-10 md:grid-cols-[1fr_1.3fr] border-b border-slate-200 pb-12">
        {/* Foto placeholder */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 h-64 flex items-center justify-center text-xs text-slate-500">
          Foto ontwikkelaar (optioneel)
        </div>

        {/* Inhoud */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-2">
              Professionele achtergrond
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              [Karin’s naam] werkte jarenlang in het maatschappelijk werk, met een focus op 
              gezinnen, opvoedvraagstukken en complexe relatie- en samenwerkingspatronen. 
              Vanuit deze brede praktijkervaring ontwikkelde zij een scherp analytisch vermogen 
              voor de patronen die specifiek zijn voor samengestelde gezinnen.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
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

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
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
      </section>

      {/* Visie */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Visie op stiefsystemen
        </h2>

        <div className="space-y-4 max-w-3xl">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            [Karin’s naam] ziet samengestelde gezinnen als volwaardige systemen die hun eigen 
            dynamiek, geschiedenis en loyaliteiten meebrengen. Problemen ontstaan zelden door 
            individuele keuzes, maar door een samenloop van posities, verwachtingen, 
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
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Waarom deze methodiek werd ontwikkeld
        </h2>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De methode ontstond na jaren van praktijkervaring, waarin duidelijk werd dat 
          hulpverleners vaak werken zonder specifiek, gedeeld kader voor stiefsystemen. 
          Veel gezinnen voelen zich daardoor niet goed begrepen. 
        </p>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Het Kompasmodel brengt structuur, taal en analyse samen, zodat professionals 
          zorgvuldig kunnen werken binnen de complexiteit van samengestelde gezinnen.
        </p>
      </section>
    </div>
  );
}