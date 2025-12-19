import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Wetenschappelijke basis",
  description:
    "De wetenschappelijke fundamenten van de Stiefkompas-methodiek: systeemtheorie, hechtingsleer, loyaliteit, stressregulatie, pedagogische consistentie en communicatiemodellen.",
};

export default function WetenschappelijkeBasisPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Wetenschappelijke fundamenten
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          De theoretische kaders achter de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Stiefkompas-methodiek is opgebouwd uit solide wetenschappelijke inzichten 
          uit de systeemtheorie, hechtingsleer, loyaliteitsdynamiek, stressregulatie en 
          communicatiemodellen. Deze fundamenten bieden een professioneel kader om 
          samengestelde gezinnen te begrijpen en te begeleiden, los van persoonlijke 
          meningen of interpretaties.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Deze pagina geeft een overzicht van de belangrijkste theoretische pijlers waarop het 
          Kompasmodel rust, met aandacht voor de relevantie binnen stiefsystemen.
        </p>
      </section>

      {/* Systeemtheorie */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          1. Systeemtheorie: het gezin als dynamisch geheel
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            De systeemtheorie beschouwt een gezin niet als losse individuen, maar als een 
            netwerk van relaties, patronen en interacties. In samengestelde gezinnen wordt dit 
            extra complex: er zijn meerdere subsystemen (ouders, kinderen, stiefouders) en 
            grensgebieden die voortdurend in beweging zijn.
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Kernconcepten
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Circulaire causaliteit i.p.v. lineaire verklaringen</li>
              <li>Subsystemen (ouderpaar, stiefouder–kind, siblings, co-ouders)</li>
              <li>Grenzen en rollen als structurele bouwstenen</li>
              <li>Interactiepatronen die zichzelf versterken of vastzetten</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hechtingsleer */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          2. Hechtingsleer: basisveiligheid in veranderende relaties
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            Hechting vormt de basis van emotionele veiligheid. In samengestelde gezinnen 
            verschuift de context regelmatig: nieuwe partners, wisselende woonregelingen en 
            extra hechtingsfiguren kunnen stress of verwarring veroorzaken. Een veilige 
            hechtingsbasis helpt kinderen en volwassenen om nieuwe relaties aan te gaan zonder 
            eerdere verbindingen te verliezen.
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Relevante inzichten
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hechtingssystemen activeren snel bij onvoorspelbaarheid</li>
              <li>Overgangen (halen/brengen) kunnen stresspieken geven</li>
              <li>Kinderen hechten in lagen: ouder, stiefouder, stiefsiblings</li>
              <li>Veiligheid ontstaat door voorspelbaarheid en afstemming</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Loyaliteitsdynamiek */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          3. Loyaliteit en posities: kern van de stiefdynamiek
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            Loyaliteit is een fundamenteel principe binnen familierelaties. In samengestelde 
            gezinnen kunnen verticale loyaliteit (naar ouders) en horizontale loyaliteit 
            (tussen partners) botsen. Onzichtbare verwachtingen, rolverwarring en loyaliteitsconflicten 
            zijn belangrijke voorspellers van spanningen.
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Belangrijke begrippen
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verticale vs. horizontale loyaliteit</li>
              <li>Onzichtbare bindingen en impliciete verwachtingen</li>
              <li>Klem-positie van kinderen</li>
              <li>Herpositioneren en herstructureren van subsystemen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stress & regulatie */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          4. Stressregulatie: omgaan met verandering en overprikkeling
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            Samengestelde gezinnen kennen meer transities, onvoorspelbaarheid en 
            emotionele belasting dan eerste gezinnen. Stressregulatie is daarom een 
            essentieel concept: hoe reguleren gezinsleden hun emoties? Hoe beïnvloeden 
            elkaar versterkende stresspatronen de relaties?
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Toepassingen in het model
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Herkennen van stresspieken rond wisselweken</li>
              <li>Normaliseren van een langere “hechtingstijd” binnen stiefsystemen</li>
              <li>Dit onderscheidt stress van conflict of weerstand</li>
              <li>Vroegtijdige interventies verminderen escalatie</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pedagogische consistentie */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          5. Pedagogische consistentie en rolafbakening
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            Pedagogische consistentie is cruciaal voor rust en voorspelbaarheid. In
            samengestelde gezinnen bestaan vaak verschillen in opvoedstijl, regels en 
            verwachtingen. Het afbakenen van bevoegdheden — wie beslist waarover —
            voorkomt spanning en versterkt de ouderlijke samenwerking.
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Praktische implicaties
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Duidelijke rolverdeling ouder–stiefouder</li>
              <li>Afspraken die aansluiten op het ontwikkelingsniveau van kinderen</li>
              <li>Voorspelbaarheid in regels en routines</li>
              <li>Conflictpreventie door gezamenlijke kaders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Communicatie & conflictmodellen */}
      <section className="space-y-4 border-b border-slate-200 pb-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          6. Communicatie- en conflictmodellen
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
            Communicatie binnen samengestelde gezinnen wordt beïnvloed door emoties, 
            verwachtingen en het verleden. Systemische communicatiemodellen helpen om 
            circulaire patronen te herkennen, onderliggende betekenissen te onderzoeken 
            en escalatie te voorkomen.
          </p>

          <div className="text-sm text-slate-600 leading-relaxed">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
              Centrale inzichten
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Circulaire patronen en herhalende interacties</li>
              <li>Intentie vs. effect in communicatie</li>
              <li>De-escalatie door vertraging en perspectiefwisseling</li>
              <li>Neutraliteit en systemische taal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Afsluiting */}
      <section className="space-y-3 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
        <p>
          De wetenschappelijke kaders vormen samen het fundament van het Stiefkompas-model. 
          Ze maken het mogelijk om niet alleen zicht te krijgen op gedrag, maar vooral op 
          de onderliggende dynamiek binnen de complexe context van een samengesteld gezin.
        </p>
        <p>
          Deze inzichten worden verder uitgewerkt en toegepast in de Stiefkompas-trainingen 
          en middels praktische tools zoals de Gezinskompas Scan, de Rollenkaart, het 
          Communicatiekompas en het Stiefkompas Plan.
        </p>
      </section>
    </div>
  );
}