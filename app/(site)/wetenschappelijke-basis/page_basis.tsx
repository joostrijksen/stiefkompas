import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Wetenschappelijke basis",
  description:
    "De wetenschappelijke fundamenten van de Stiefkompas-methodiek: systeemtheorie, hechtingsleer, loyaliteit, stressregulatie, pedagogische consistentie en communicatiemodellen.",
};

export default function WetenschappelijkeBasisPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="space-y-14">
        {/* Intro */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
            Wetenschappelijke fundamenten
          </p>

          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#0E2A47] md:text-4xl">
            De theoretische kaders achter de Stiefkompas methodiek
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            De Stiefkompas methodiek is opgebouwd uit wetenschappelijke inzichten uit de
            systeemtheorie, hechtingsleer, loyaliteitsdynamiek, stressregulatie en
            communicatiemodellen. Deze fundamenten bieden een professioneel kader om
            samengestelde gezinnen te begrijpen en te begeleiden, los van persoonlijke
            meningen of interpretaties.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
            Deze pagina geeft een overzicht van de belangrijkste theoretische pijlers waarop het
            Kompasmodel rust, met aandacht voor de relevantie binnen stiefsystemen.
          </p>
        </section>

        {/* 1. Systeemtheorie */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">1.</span> Systeemtheorie: het gezin als dynamisch geheel
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              De systeemtheorie beschouwt een gezin niet als losse individuen, maar als een netwerk
              van relaties, patronen en interacties. In samengestelde gezinnen is dit extra complex:
              er zijn meerdere subsystemen (ouders, kinderen, stiefouders) en grensgebieden die
              voortdurend in beweging zijn.
            </p>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernconcepten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Circulaire causaliteit in plaats van lineaire verklaringen</li>
                <li>Subsystemen (ouderpaar, stiefouder kind, siblings, co ouders)</li>
                <li>Grenzen en rollen als structurele bouwstenen</li>
                <li>Interactiepatronen die zichzelf versterken of vastzetten</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 2. Hechtingsleer */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">2.</span> Hechtingsleer: basisveiligheid in veranderende relaties
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Hechting vormt de basis van emotionele veiligheid. In samengestelde gezinnen verschuift
              de context regelmatig: nieuwe partners, wisselende woonregelingen en extra
              hechtingsfiguren kunnen stress of verwarring oproepen. Een veilige hechtingsbasis helpt
              kinderen en volwassenen om nieuwe relaties aan te gaan, zonder dat eerdere verbindingen
              worden uitgewist.
            </p>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Relevante inzichten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Hechtingssystemen activeren snel bij onvoorspelbaarheid</li>
                <li>Overgangen (halen en brengen) kunnen stresspieken geven</li>
                <li>Kinderen hechten in lagen: ouder, stiefouder, stiefsiblings</li>
                <li>Veiligheid ontstaat door voorspelbaarheid en afstemming</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 3. Loyaliteit en posities */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">3.</span> Loyaliteit en posities: kern van de stiefdynamiek
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Loyaliteit is een fundamenteel principe in familierelaties. In samengestelde gezinnen
              kunnen verticale loyaliteit (naar ouders) en horizontale loyaliteit (tussen partners)
              botsen. Onzichtbare verwachtingen, rolverwarring en loyaliteitsconflicten zijn
              belangrijke bronnen van spanning.
            </p>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Belangrijke begrippen
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Verticale en horizontale loyaliteit</li>
                <li>Onzichtbare bindingen en impliciete verwachtingen</li>
                <li>Klempositie van kinderen</li>
                <li>Herpositioneren en herstructureren van subsystemen</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 4. Stressregulatie */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">4.</span> Stressregulatie: omgaan met verandering en overprikkeling
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Samengestelde gezinnen kennen meer transities, onvoorspelbaarheid en emotionele belasting
              dan eerste gezinnen. Stressregulatie beschrijft hoe gezinsleden met spanning omgaan en
              hoe stresspatronen relaties kunnen versterken of onder druk zetten. Inzicht hierin helpt
              om conflict en stress van elkaar te onderscheiden en eerder te intervenieren.
            </p>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Toepassing in het model
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Herkennen van stresspieken rond wisselweken</li>
                <li>Rekening houden met een langere gewenningstijd</li>
                <li>Stress onderscheiden van weerstand of conflict</li>
                <li>Vroegtijdige interventies verminderen escalatie</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 5. Pedagogische consistentie */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">5.</span> Pedagogische consistentie en rolafbakening
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Pedagogische consistentie draagt bij aan rust en voorspelbaarheid voor kinderen. In
              samengestelde gezinnen bestaan vaak verschillen in opvoedstijl, regels en verwachtingen.
              Het helder afbakenen van bevoegdheden (wie beslist waarover) verkleint rolverwarring en
              versterkt de samenwerking tussen volwassenen.
            </p>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Praktische implicaties
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Duidelijke rolverdeling tussen ouder en stiefouder</li>
                <li>Afspraken passend bij de leeftijd en ontwikkeling</li>
                <li>Voorspelbaarheid in regels en routines</li>
                <li>Conflictpreventie door gezamenlijke kaders</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 6. Communicatie en conflictmodellen */}
        <section className="space-y-4 border-b border-slate-200 pb-12">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">6.</span> Communicatie en conflictmodellen
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Communicatie in samengestelde gezinnen wordt beïnvloed door emoties, verwachtingen en
              het verleden. Systemische communicatiemodellen helpen om herhalende patronen te zien,
              betekenis te verhelderen en gesprekken te vertragen wanneer spanning oploopt. Zo ontstaat
              ruimte voor herstel en het doorbreken van vastgelopen interacties.
            </p>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Centrale inzichten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Circulaire patronen en herhalende interacties</li>
                <li>Intentie en effect in communicatie</li>
                <li>De escalatie verlagen via pauzes en perspectiefwisseling</li>
                <li>Systemische taal en werkzame neutraliteit</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Afsluiting */}
        <section className="max-w-3xl space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
          <p>
            Deze kaders vormen samen het fundament van het Stiefkompas model. Ze helpen om niet alleen
            gedrag te begrijpen, maar vooral de onderliggende dynamiek binnen de complexe context van
            een samengesteld gezin.
          </p>
          <p>
            In de trainingen wordt deze basis uitgewerkt in praktische tools, zoals de Gezinskompas
            Scan, de Rollenkaart, het Communicatiekompas en het Stiefkompas plan.
          </p>
        </section>
      </div>
    </main>
  );
}