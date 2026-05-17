import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Wetenschappelijke basis",
  description:
    "De theoretische kaders achter de Stiefkompas methodiek: gezins en systeemtheorie, hechtingstheorie, contextuele benadering, emotieregulatie en stress, structurele gezinstherapie en communicatietheorie.",
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
            De Stiefkompas methodiek is opgebouwd uit wetenschappelijke kaders uit gezins en
            systeemdenken, hechtingstheorie, contextueel werken rond loyaliteit, inzichten uit
            emotieregulatie en stress, structurele gezinsbenaderingen rond grenzen en rollen, en
            communicatietheorie over interactiepatronen. Deze basis biedt taal en structuur om
            samengestelde gezinnen te begrijpen en te begeleiden, los van persoonlijke meningen of
            interpretaties.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
            Deze pagina geeft een overzicht van de belangrijkste kaders waarop het Kompasmodel rust
            en laat zien hoe ze samenkomen in de vijf pijlers van de methodiek.
          </p>
        </section>

        {/* 1. Gezins en systeemtheorie */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">1.</span> Gezins en systeemtheorie: het gezin als dynamisch geheel
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Gezins en systeemtheorie beschouwt een gezin niet als losse individuen, maar als een
              netwerk van relaties, patronen en wederzijdse beïnvloeding. In samengestelde gezinnen
              is dit extra complex: er zijn meerdere subsystemen (ouderpaar, kinderen, stiefouder
              relaties en co ouderschap buiten het huishouden) en grenzen die voortdurend in
              beweging zijn.
            </p>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Circulaire processen in plaats van lineaire verklaringen</li>
                <li>Subsystemen met elk een eigen dynamiek</li>
                <li>Grenzen en rollen als bouwstenen van veiligheid</li>
                <li>Patronen die zichzelf versterken of vastzetten</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Dit kader helpt om spanning te begrijpen als systemische dynamiek en niet als schuld van
            een individu. Daarmee ontstaat ruimte om posities, grenzen en interacties te herordenen
            op een manier die het dagelijks functioneren ondersteunt.
          </p>
        </section>

        {/* 2. Hechtingstheorie */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">2.</span> Hechtingstheorie: veiligheid in veranderende relaties
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Hechtingstheorie beschrijft hoe emotionele veiligheid ontstaat door nabijheid, beschikbaarheid en afstemming. In samengestelde gezinnen verschuift de hechtingscontext voor kinderen én volwassenen. Kinderen wennen aan één of meer nieuwe hechtingsfiguren en aan regelmatige wisselmomenten tussen twee huizen. Biologische ouders balanceren tussen hun hechtingsbehoefte aan de nieuwe partner en hun hechtingsrelatie met hun kinderen, terwijl stiefouders een band opbouwen met kinderen die al sterke hechtingsrelaties hebben met hun biologische ouders. Deze verschillende, maar met elkaar verweven hechtingsprocessen vragen tijd en afstemming en kunnen gevoelens van onzekerheid en stress oproepen.
            </p>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Onvoorspelbaarheid roept hechtingsgedrag op</li>
                <li>Wisselmomenten kunnen stress en onrust veroorzaken</li>
                <li>Hechting ontwikkelt zich geleidelijk en contextgebonden</li>
                <li>Veiligheid groeit door voorspelbaarheid en afstemming</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Hechtingstheorie onderbouwt waarom relatieopbouw tijd vraagt en waarom tempo, nabijheid en verwachtingen zorgvuldig afgestemd moeten worden op wat kinderen en volwassenen nodig hebben.
          </p>
        </section>

        {/* 3. Contextuele benadering */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">3.</span> Contextuele benadering: loyaliteit en onzichtbare bindingen
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              CContextueel werken richt zich op loyaliteit, verbondenheid en rechtvaardigheid in familierelaties. In samengestelde gezinnen kunnen loyaliteiten botsen, bijvoorbeeld tussen de band van een kind met een biologische ouder en de band met de stiefouder. Ook volwassenen kunnen klem raken tussen loyaliteit naar hun eigen kinderen en de nieuwe partner, of tussen zorgverplichtingen en hun eigen behoeften.</p>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Verticale loyaliteit richting ouders</li>
                <li>Horizontale loyaliteit binnen partnerrelaties</li>
                <li>Onzichtbare verwachtingen en bindingen</li>
                <li>Klemposities en herstel van posities</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Dit verklaart waarom kinderen of volwassenen zich kunnen terugtrekken of afstand houden: vaak komt dit voort uit loyaliteit aan de biologische ouder of uit een klempositie tussen verschillende verwachtingen. Erkenning van deze loyaliteiten en bewuste herpositionering verkleinen de druk en maken samenwerking mogelijk.</p>
        </section>

        {/* 4. Emotieregulatie en stress */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">4.</span> Emotie- en stressregulatie: omgaan met belasting en herstel
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Inzichten uit stressregulatie verklaren hoe spanning ontstaat, oploopt en doorwerkt in gedrag en relaties. Samengestelde gezinnen kennen meer transities en wisselmomenten, wat de kans op overprikkeling en snellere escalatie verhoogt, vooral rond wisseldagen, feestdagen en veranderingen in routines.
Stressreacties zijn tijdelijk en herstellen met rust, voorspelbaarheid en emotionele ondersteuning. Stressregulatie helpt om gedrag te begrijpen als reactie op belasting, in plaats van als karakter of intentie. Dit voorkomt misverstanden en versterkt compassie binnen het gezin.
            </p>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Stresspieken rond overgangsmomenten herkennen</li>
                <li>Stress onderscheiden van onwil of weerstand</li>
                <li>Normaliseren van langere aanpassingstijd</li>
                <li>Vroegtijdig reguleren voorkomt escalatie</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Emotie- en stressregulatie helpt om gedrag te begrijpen als reactie op belasting, in plaats van als karakter of intentie. Dit voorkomt misverstanden, vergroot compassie en helpt om het juiste moment te kiezen voor gesprekken en afspraken.
          </p>
        </section>

        {/* 5. Structurele gezinsbenadering */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">5.</span> Structurele gezinsbenadering: grenzen rollen en structuur
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              De structurele gezinsbenadering kijkt naar grenzen, rollen, hiërarchie en de
              organisatie van het dagelijks leven. In samengestelde gezinnen ontstaan verschillen in
              opvoedstijl, regels en verwachtingen vanuit eerdere gezinssituaties. Heldere grenzen en
              rolafspraken voorkomen rolverwarring en maken samenwerking tussen volwassenen mogelijk.
            </p>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Rolverdeling ouder en stiefouder expliciet maken</li>
                <li>Bevoegdheden en beslisruimte afbakenen</li>
                <li>Regels en routines voorspelbaar vormgeven</li>
                <li>Gezamenlijke kaders verkleinen conflict</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Grenzen en structuur gaan niet over controle, maar over duidelijkheid. Tools zoals de
            Rollenkaart en het Stiefkompas Plan helpen om rollen, bevoegdheden en afspraken zichtbaar
            te maken en vast te leggen, zodat er minder interpretatie en meer voorspelbaarheid ontstaat.
          </p>
        </section>

        {/* 6. Interactionele communicatietheorie */}
        <section className="space-y-4 border-b border-slate-200 pb-12">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">6.</span> Interactionele communicatietheorie: patronen en betekenis
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Interactionele communicatie benadert gesprekken als wederzijdse processen: reacties
              sluiten op elkaar aan en vormen voorspelbare patronen. In samengestelde gezinnen spelen
              emoties, loyaliteiten en eerdere ervaringen mee, waardoor misverstanden en defensieve
              reacties sneller kunnen escaleren. Het gaat dus niet alleen om wat er gezegd wordt, maar
              vooral om hoe het gesprek zich ontwikkelt.
            </p>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Herhalende patronen en wederzijdse beïnvloeding</li>
                <li>Verschil tussen intentie en effect</li>
                <li>Non verbaal gedrag als betekenisdrager</li>
                <li>Vertragen en perspectiefwisseling verlaagt escalatie</li>
              </ul>
            </aside>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            In Stiefkompas werk je met interventies die het gesprek vertragen, betekenis verhelderen
            en herstel mogelijk maken. Het Communicatiekompas helpt om patronen zichtbaar te maken en
            intentie, effect en misverstanden te verkennen, zodat gesprekken minder escaleren en er
            meer wederzijds begrip ontstaat.
          </p>
        </section>

        {/* Van theorie naar pijlers */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            Van theorie naar de vijf pijlers
          </h2>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            De kaders hierboven vormen samen de basis van het Kompasmodel met vijf pijlers. Elke pijler
            combineert meerdere kaders om een specifiek aspect van de stiefdynamiek te belichten.
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Pijler</th>
                  <th className="px-4 py-3 font-semibold">Theoretische kaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium">1. Posities en loyaliteit</td>
                  <td className="px-4 py-3">Gezins en systeemtheorie + contextuele benadering</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2. Hechting en veiligheid</td>
                  <td className="px-4 py-3">Hechtingstheorie + emotieregulatie en stress</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3. Grenzen en structuur</td>
                  <td className="px-4 py-3">Gezins en systeemtheorie + structurele gezinsbenadering</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">4. Communicatie en patronen</td>
                  <td className="px-4 py-3">Interactionele communicatietheorie + gezins en systeemtheorie</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">5. Gezinsritme en rituelen</td>
                  <td className="px-4 py-3">
                    Onderzoek naar gezinsroutines en rituelen + hechtingstheorie + emotieregulatie en stress + structurele gezinsbenadering
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Pijler 5 neemt een bijzondere positie in: routines en rituelen verbinden structuur met
            betekenis. Ze ondersteunen voorspelbaarheid, verbondenheid en herstel, zonder eerdere
            gezinsgeschiedenissen uit te wissen. In Stiefkompas wordt dit zichtbaar gemaakt in afspraken
            over ritme, overgangsmomenten en rituelen die passen bij ieders positie.
          </p>
        </section>

        {/* Theorie in actie */}
        <section className="max-w-3xl space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            Theorie in actie
          </h2>

          <p>
            Deze kaders maken het mogelijk om niet alleen gedrag te begrijpen, maar vooral de onderliggende
            dynamiek binnen een samengesteld gezin. Theorie biedt taal, structuur en houvast, zowel voor
            professionals als voor gezinnen zelf.
          </p>
          <p>
            In de Stiefkompas trainingen leren deelnemers hoe zij deze inzichten vertalen naar praktisch
            handelen. De theorie komt tot leven via instrumenten zoals de Gezinskompas Scan, de Rollenkaart,
            het Communicatiekompas en het Stiefkompas Plan.
          </p>
        </section>
      </div>
    </main>
  );
}