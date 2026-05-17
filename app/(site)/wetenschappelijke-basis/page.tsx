import type { Metadata } from "next";
import Link from "next/link";

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

          <div className="space-y-4 max-w-3xl">
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Stiefkompas rust op zes wetenschappelijke kaders: systeemtheorie, hechtingstheorie, 
              contextueel denken, emotieregulatie, structurele gezinsbenadering en communicatietheorie. 
              Deze basis biedt taal en structuur om samengestelde gezinnen te begrijpen en te begeleiden: 
              het helpt om niet te blijven hangen in gedrag of schuld, maar om posities, loyaliteiten, 
              veiligheid en rolverdeling werkbaar te maken.
            </p>

            <p className="text-sm leading-relaxed text-slate-600">
              Deze pagina laat zien welke kaders ten grondslag liggen aan de vijf pijlers van het Kompasmodel, 
              hoe theorie vertaald wordt naar praktische begeleiding, en waarom stiefgezin-specifiek onderzoek 
              essentieel is naast algemene gezinstherapie.
            </p>
          </div>
        </section>

        {/* TABEL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A47] md:text-3xl">
            Van theorie naar de vijf pijlers
          </h2>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Elke pijler combineert meerdere theoretische kaders om een specifiek aspect van de 
            stiefgezindynamiek te belichten. Deze tabel laat zien hoe theorie en praktijk samenkomen.
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Pijler</th>
                  <th className="px-4 py-3 font-semibold">Theoretische kaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 font-medium">1. Posities en loyaliteit</td>
                  <td className="px-4 py-3">Systeemtheorie + contextuele benadering</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 font-medium">2. Hechting en veiligheid</td>
                  <td className="px-4 py-3">Hechtingstheorie in context van transities + emotieregulatie</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 font-medium">3. Grenzen en structuur</td>
                  <td className="px-4 py-3">Systeemtheorie + structurele gezinsbenadering</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 font-medium">4. Communicatie en patronen</td>
                  <td className="px-4 py-3">Interactionele communicatietheorie + systeemtheorie</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 font-medium">5. Gezinsritme en rituelen</td>
                  <td className="px-4 py-3">
                    Gezinsritme en routines onderzoek (Fiese, Imber-Black) + hechtingstheorie + emotieregulatie + structurele benadering
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 pt-2">
            Hieronder lees je per kader wat de kernpunten zijn, waarom stiefgezinnen anders zijn, 
            en hoe dit eruitziet in de praktijk van begeleiding.
          </p>
        </section>

        {/* 1. Gezins en systeemtheorie */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">1.</span> Systeemtheorie: het gezin als dynamisch geheel
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Systeemtheorie beschouwt een gezin als een netwerk van relaties waarin iedereen 
                elkaar beïnvloedt. Gedrag ontstaat niet in een vacuüm, maar in interactie met anderen.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                In samengestelde gezinnen zijn meerdere subsystemen actief: het ouderpaar, de 
                kinderen, stiefouder-relaties en co-ouderschap met de ex-partner. Kenmerkend: 
                er zijn parallelle systemen (twee huizen) die elkaar raken maar niet één geheel vormen. 
                Co-ouderschap is de subsystemenbrug waarover spanning vaak loopt en landt in het huis 
                waar je begeleidt.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Circulaire patronen: iedereen reageert op elkaar</li>
                <li>Meerdere subsystemen met eigen dynamiek</li>
                <li>Parallelle systemen (twee huizen) die elkaar raken</li>
                <li>Grenzen en rollen geven veiligheid</li>
                <li>Patronen versterken zichzelf</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 mb-3">
              <strong>Situatie:</strong> Dochter (12) trekt zich terug als stiefvader iets vraagt → 
              stiefvader voelt afwijzing en reageert afstandelijk → dochter ervaart bevestiging 
              dat hij haar niet mag → trekt zich verder terug. <strong>Niet lineair</strong> ("dochter veroorzaakt 
              probleem"), maar <strong>circulair</strong>: beiden reageren op elkaar in een zichzelf versterkend patroon.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Interventie:</strong> Maak het patroon zichtbaar door het te tekenen. Laat beiden benoemen 
              wat ze denken dat de ander bedoelt. Kies één micro-wijziging voor de volgende week (bijv. stiefvader 
              vraagt niets maar zegt: "Fijn dat je er bent" en kijkt wat er gebeurt). Dit doorbreekt het patroon 
              zonder schuldvraag.
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Dit kader helpt spanning te begrijpen als systemische dynamiek in plaats van schuld 
            van één persoon. Het creëert ruimte om posities, grenzen en interacties opnieuw te ordenen.
          </p>
        </section>

        {/* 2. Hechtingstheorie */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">2.</span> Hechtingstheorie: veiligheid in veranderende relaties
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Hechtingstheorie beschrijft hoe emotionele veiligheid ontstaat door nabijheid, 
                beschikbaarheid en afstemming. Veilige hechting groeit geleidelijk door voorspelbare, 
                responsieve interacties.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                In samengestelde gezinnen verschuift de hechtingscontext voor iedereen. Kinderen 
                wennen aan nieuwe hechtingsfiguren en wisselen regelmatig tussen huizen. Biologische 
                ouders balanceren tussen nieuwe partner en bestaande hechtingsrelatie met hun kinderen. 
                Stiefouders bouwen een band op met kinderen die al sterke hechtingsrelaties hebben.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                <strong>Belangrijk:</strong> Hechtingstheorie is een lens, geen label. Niet al het gedrag 
                komt voort uit hechting - het kan ook loyaliteit, stress of rolonduidelijkheid zijn. Ook 
                cruciaal: de stiefouder-kind relatie hoeft geen ouder-kind hechtingsrelatie te worden. 
                Veiligheid en vertrouwen kunnen groeien zonder die verwachting. In veel stiefgezinnen 
                groeit veiligheid eerst via voorspelbaarheid en neutraliteit, niet via intensieve nabijheid. 
                Te veel druk op emotionele closeness werkt averechts.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Onvoorspelbaarheid activeert hechtingsgedrag</li>
                <li>Transities tussen huizen veroorzaken hechtingsstress</li>
                <li>Hechting ontwikkelt zich langzaam en contextgebonden</li>
                <li>Stiefouder-kind band ≠ automatisch ouder-kind hechting</li>
                <li>Veiligheid groeit via voorspelbaarheid en neutraliteit</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#F02B8A]/20 bg-gradient-to-br from-[#F02B8A]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#F02B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Situatie:</strong> Zoon (8) wordt drukker en dwingender in de dagen voor de wissel 
              naar papa's huis. Stiefmoeder ervaart dit als onwil of manipulatie. <strong>Hechtingsperspectief:</strong> 
              Dit is hechtingsstress — het kind anticipeert op de overgang en zoekt contact en 
              bevestiging. Het is geen manipulatie maar een signaal dat het kind tijd en rust nodig 
              heeft rond wisselmomenten. Door dit te normaliseren en voorspelbaarheid te bieden 
              (vast afscheidsritueel, voorspelbare planning) neemt de stress af. <strong>Ook bij volwassenen:</strong> 
              Partners kunnen zelf meer alert en prikkelbaar zijn rond wissels, wat weer doorwerkt in de 
              gezinsdynamiek.
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Hechtingstheorie verklaart waarom relatieopbouw tijd vraagt en waarom tempo, nabijheid 
            en verwachtingen zorgvuldig afgestemd moeten worden. Druk op hechting werkt averechts.
          </p>
        </section>

        {/* 3. Contextuele benadering */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">3.</span> Contextuele benadering: loyaliteit en onzichtbare bindingen
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Contextueel werken richt zich op loyaliteit, verbondenheid en rechtvaardigheid in 
                familierelaties. Loyaliteiten zijn vaak onzichtbaar maar bepalen sterk hoe mensen 
                zich gedragen en welke keuzes ze maken.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Loyaliteit is niet alleen innerlijk, maar ook relationeel en moreel. Mensen voelen 
                vaak onbewust wat eerlijk is of niet: wie veel geeft en zich niet gezien voelt, bouwt 
                spanning op, en dat werkt door in bereidheid tot samenwerking. In samengestelde gezinnen 
                kunnen loyaliteiten botsen: een kind voelt loyaliteit naar beide biologische ouders én 
                moet ruimte maken voor een stiefouder. Volwassenen kunnen klem raken tussen loyaliteit 
                naar eigen kinderen en de nieuwe partner.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Verticale loyaliteit: kind naar ouder</li>
                <li>Horizontale loyaliteit: tussen partners</li>
                <li>Onzichtbare verwachtingen en bindingen</li>
                <li>Morele balans: wie geeft veel zonder erkenning</li>
                <li>Klemposities en herpositionering</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#2C4B9A]/20 bg-gradient-to-br from-[#2C4B9A]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#2C4B9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Situatie:</strong> Dochter (14) vertelt stiefvader niets over school, terwijl 
              ze dit wel met haar biologische vader deelt. Stiefvader voelt zich buitengesloten. 
              <strong>Loyaliteitsperspectief:</strong> Het kind ervaart onbewust dat openheid naar 
              stiefvader voelt als ontrouw aan papa. Dit is geen afwijzing maar loyaliteitsconflict. 
              <strong>Wat de begeleider doet:</strong> Erkenning geven ("Het is logisch dat je vooral met 
              papa wilt delen") en geen druk uitoefenen. De stiefouder kan een eigen, andere rol vinden 
              zonder de biologische band te bedreigen. Door het loyaliteitsconflict te benoemen verkleint 
              de spanning en ontstaat ruimte voor herpositionering.
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Erkenning van loyaliteiten en bewuste herpositionering verkleinen druk en maken 
            samenwerking mogelijk. Het verklaart waarom mensen zich terugtrekken of afstand houden.
          </p>
        </section>

        {/* 4. Emotieregulatie en stress */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#17B3B0]">4.</span> Emotie- en stressregulatie: omgaan met belasting en herstel
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Stressregulatie verklaart hoe spanning ontstaat, oploopt en doorwerkt in gedrag. 
                Bij te veel stress zonder herstel raken mensen overprikkeld en reageren ze sneller 
                geïrriteerd, defensief of afstandelijk.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                <strong>Cruciaal onderscheid:</strong> stressreactie ≠ intentioneel gedrag. Onder stress 
                vallen mensen terug in oude patronen, wordt communicatie korter en harder, en reageren 
                ze vanuit overleving in plaats van overleg. Dit ziet eruit als "niet willen", maar is 
                "niet kunnen op dat moment". Stress werkt ook systeem-onderhoudend: bestaande rolpatronen 
                worden versterkt.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                <strong>Kernprincipe:</strong> Eerst reguleren, dan pas corrigeren. Pas als de stressrespons 
                gedaald is, kun je verwachtingen stellen of afspraken maken.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Samengestelde gezinnen kennen meer transities en wisselmomenten, wat de kans op 
                stress verhoogt. Vooral rond wisseldagen, feestdagen en veranderingen in routines 
                piekt de spanning. Stressreacties herstellen met rust, voorspelbaarheid en emotionele 
                ondersteuning.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Stresspieken rond overgangsmomenten herkennen</li>
                <li>Stressreactie ≠ intentioneel gedrag</li>
                <li>Stress versterkt oude rolpatronen</li>
                <li>Eerst reguleren, dan pas corrigeren</li>
                <li>Vroege regulatie voorkomt escalatie</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Situatie:</strong> Elk weekend als de kinderen terugkomen van hun vader escaleert 
              het binnen een uur. Stiefmoeder ziet dit als bewijs dat de kinderen bij papa ongestructureerd 
              leven. <strong>Stressregulatieperspectief:</strong> De kinderen zijn na de wissel overprikkeld 
              en hebben herstel nodig om te landen. De stiefmoeder reageert direct met verwachtingen ("ruim je 
              spullen op"), wat de stress vergroot. Door eerst ruimte te geven (kind mag even op eigen kamer, 
              rustig eten zonder veel praten) en pas daarna verwachtingen te stellen, verloopt de overgang 
              soepeler. Dit normaliseert stress als fysiologische reactie op transitie, niet als karakter 
              of opzet.
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Dit kader helpt gedrag te begrijpen als reactie op belasting in plaats van als karakter 
            of intentie. Het voorkomt misverstanden en vergroot compassie binnen het gezin.
          </p>
        </section>

        {/* 5. Structurele gezinsbenadering */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#F02B8A]">5.</span> Structurele gezinsbenadering: grenzen, rollen en legitimiteit
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                De structurele benadering kijkt naar grenzen, rollen, hiërarchie en de organisatie 
                van het dagelijks leven. Heldere structuur geeft veiligheid en voorspelbaarheid.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                In samengestelde gezinnen botsen vaak verschillende opvoedstijlen, regels en 
                verwachtingen uit eerdere gezinssituaties. Wie beslist waarover? En cruciaal in 
                stiefgezinnen: <strong>wie krijgt steun van de biologische ouder als het spannend wordt?</strong> 
                Dat is legitimiteit: niet alleen praktisch kunnen ("ik kan tafel dekken vragen"), maar 
                relationeel mogen ("mama steunt me als zoon weigert"). Structuur gaat ook over hiërarchie 
                en coalities: wie staat met wie, en wie voelt zich alleen.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#F02B8A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Rollen ouder en stiefouder expliciet maken</li>
                <li>Legitimiteit: steun van biologische ouder cruciaal</li>
                <li>Bevoegdheden en beslisruimte afbakenen</li>
                <li>Hiërarchie en coalities benoemen</li>
                <li>Regels en routines voorspelbaar vormgeven</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#F02B8A]/20 bg-gradient-to-br from-[#F02B8A]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#F02B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Situatie:</strong> Stiefvader vraagt zoon (10) om tafel te dekken. Zoon weigert. 
              Stiefvader verheft zijn stem. Moeder springt ertussen: "Laat hem, ik doe het wel." Stiefvader 
              voelt zich ondergraven. <strong>Structureel perspectief:</strong> De rolverdeling is onduidelijk. 
              Mag stiefvader vragen stellen? Wie heeft het laatste woord? Door vooraf af te spreken dat 
              stiefvader dagelijkse dingen (zoals tafeldekken) mag vragen <strong>én dat moeder hem hierin steunt</strong> 
              (niet overruled), wordt de structuur helder. Dit betekent niet dat stiefvader automatisch gezag 
              krijgt, maar dat er afspraken komen over dagelijkse dingen en dat de ouder die legitimeert. 
              Kind weet wat te verwachten, spanning neemt af.
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Grenzen en structuur gaan niet over controle, maar over duidelijkheid. Tools zoals de 
            Rollenkaart helpen om rollen, bevoegdheden en afspraken zichtbaar te maken en vast te leggen.
          </p>
        </section>

        {/* 6. Interactionele communicatietheorie */}
        <section className="space-y-5 border-b border-slate-200 pb-12">
          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A47] md:text-2xl">
            <span className="text-[#2C4B9A]">6.</span> Communicatietheorie: patronen en betekenis
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Interactionele communicatie beschouwt gesprekken als wederzijdse processen waarin 
                reacties op elkaar aansluiten en voorspelbare patronen vormen. Het gaat niet alleen 
                om wat gezegd wordt, maar vooral om hoe het gesprek zich ontwikkelt.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                In samengestelde gezinnen spelen emoties, loyaliteiten en eerdere ervaringen mee, 
                waardoor misverstanden en defensieve reacties sneller escaleren. Intentie en effect 
                lopen vaak uit elkaar. In stiefgezinnen is praten over hoe er gepraat wordt 
                (<strong>metacommunicatie</strong>) vaak de sleutel: "Ik merk dat als ik vraag, je dichtgaat - 
                kunnen we anders communiceren?"
              </p>

              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                <strong>Belangrijk:</strong> Communicatiepatronen worden vaak gevoed door onderlaag uit 
                eerdere kaders: loyaliteit ("ik mag niets tegen stiefvader zeggen"), stress ("ik ben 
                overprikkeld en reageer kort"), of rolonduidelijkheid ("mag jij mij wel iets vragen?"). 
                Daarom werken communicatietools het best als je óók de onderlaag meeneemt: loyaliteit, 
                stress en rolonduidelijkheid.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
                Kernpunten
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Herhalende patronen in plaats van losse incidenten</li>
                <li>Verschil tussen intentie en effect</li>
                <li>Non-verbaal gedrag als betekenisdrager</li>
                <li>Metacommunicatie: praten over hoe gepraat wordt</li>
                <li>Patronen gevoed door loyaliteit, stress, rol</li>
                <li>Vertragen en perspectiefwisseling verlaagt escalatie</li>
              </ul>
            </aside>
          </div>

          {/* PRAKTIJKVOORBEELD */}
          <div className="rounded-2xl border border-[#2C4B9A]/20 bg-gradient-to-br from-[#2C4B9A]/5 to-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#2C4B9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              In de praktijk
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Situatie:</strong> Stiefmoeder vraagt dochter (13) hoe het op school was. Dochter 
              zegt kortaf "goed" en loopt weg. Stiefmoeder voelt zich afgewezen en trekt zich terug. 
              Later die avond vraagt vader hetzelfde en dochter vertelt uitgebreid. Stiefmoeder is gekwetst. 
              <strong>Communicatieperspectief:</strong> Intentie stiefmoeder = interesse tonen. Effect = 
              kind ervaart de vraag als druk, beoordeling of controle (niet per se verhoor, maar wel ongemak). 
              Het patroon versterkt zich: stiefmoeder probeert harder → kind trekt verder terug → stiefmoeder 
              voelt afwijzing. Door het patroon te benoemen ("ik merk dat als ik vraag, je dichtgaat") en 
              anders te communiceren (niet vragen maar meedelen: "fijn dat je er bent") kan het patroon 
              doorbroken worden. De onderlaag is hier loyaliteit (kind wil alleen met papa delen) en rolonduidelijkheid 
              (mag stiefmoeder wel vragen?).
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Het Communicatiekompas helpt om patronen zichtbaar te maken en intentie, effect en 
            misverstanden te verkennen, zodat gesprekken minder escaleren en er meer begrip ontstaat.
          </p>
        </section>

        {/* CO-PARENTING SECTIE */}
        <section className="space-y-5 border-b border-slate-200 pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A47] md:text-3xl">
            Interparental conflict en co-ouderschap
          </h2>

          <div className="space-y-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              Een factor die alle zes kaders beïnvloedt: <strong>de mate van conflict tussen de biologische 
              ouders</strong> (interparental conflict). Hoog conflict tussen ex-partners verhoogt spanning in 
              beide huizen, beperkt samenwerking en zet kinderen onder loyaliteitsdruk.
            </p>

            <p>
              Onderzoek laat consistent zien dat het conflictniveau na de scheiding <strong>een van de 
              sterkste voorspellers</strong> is voor welzijn van kinderen, belangrijker dan de scheiding 
              op zichzelf (Amato, 2010; Hetherington & Kelly, 2002). Kinderen die blijven blootgesteld 
              aan interparental conflict vertonen meer internaliserende en externaliserende problemen, 
              ongeacht de gezinsvorm.
            </p>

            <p>
              In stiefgezinnen speelt dit op meerdere niveaus:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Conflict tussen ex-partners loopt via kinderen het nieuwe huis in (kinderen zijn boodschappers, 
              worden bevraagd, voelen spanning)</li>
              <li>Hoog conflict maakt co-ouderschap rigide: kleine afwijkingen worden groot, flexibiliteit 
              verdwijnt, communicatie loopt via advocaten of mail</li>
              <li>Kinderen ontwikkelen loyaliteitsconflict: openheid naar stiefouder voelt als verraad aan 
              biologische ouder</li>
              <li>Nieuwe partner (stiefouder) wordt snel onderdeel van conflict: wordt gezien als bedreiging, 
              vervanger, of oorzaak van problemen</li>
            </ul>

            <p>
              <strong>In begeleiding betekent dit:</strong> beoordeel het co-ouderschap niveau en betrek dit 
              in je analyse en interventiekeuzes. Bij laag-conflict co-ouderschap zijn interventies gericht op 
              afstemming en samenwerking mogelijk. Bij hoog-conflict co-ouderschap ligt de focus op bescherming, 
              grenzen, en het verminderen van druk op kinderen. Je werkt dan binnen één huis aan wat daar wél 
              kan, zonder te wachten op medewerking van de ex-partner.
            </p>

            <p>
              <strong>Belangrijk:</strong> Bij situaties met structureel hoog conflict, veiligheidsrisico's of 
              juridische complexiteit is gespecialiseerde mediation of juridische begeleiding noodzakelijk. De 
              focus in Stiefkompas ligt dan op wat binnen één huis wél kan: kind beschermen en druk verlagen, 
              zonder te wachten op samenwerking van de ex-partner.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-w-3xl">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Relevante literatuur
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>• Amato, P.R. (2010) - Research on divorce: Continuing trends and new developments</li>
              <li>• Hetherington, E.M. & Kelly, J. (2002) - For Better or For Worse: Divorce Reconsidered</li>
              <li>• Ahrons, C.R. (2004) - We're Still Family: What Grown Children Have to Say About Their 
              Parents' Divorce</li>
            </ul>
          </div>
        </section>

        {/* NIEUW: FASEN SECTIE */}
        <section className="space-y-5 border-b border-slate-200 pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A47] md:text-3xl">
            Fases in stiefgezinsvorming
          </h2>

          <div className="space-y-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              Naast de zes theoretische kaders en inzicht in co-ouderschap speelt ook <strong>tijd en 
              ontwikkeling</strong> een cruciale rol. Stiefgezinnen ontwikkelen zich in fases, waarbij 
              iedere fase eigen uitdagingen en interventies kent.
            </p>

            <p>
              Patricia Papernow beschrijft dit proces in haar werk over stepfamily development. Zij 
              onderscheidt vroege, middelste en latere fases, waarbij <strong>verwachtingen over tempo 
              vaak de grootste bron van teleurstelling zijn</strong>. Veel gezinnen en professionals 
              onderschatten hoeveel tijd nodig is voor stabilisatie en wederzijdse aanpassing.
            </p>

            <p>
              <strong>In begeleiding betekent dit:</strong> interventies verschillen per fase. In de vroege 
              fase ligt de focus op verwachtingen managen, rollen afbakenen en voorspelbaarheid creëren. 
              In de middelste fase op conflictregulatie en samenwerking tussen volwassenen. In latere 
              fases op het versterken van wat werkt en ruimte maken voor individualisering.
            </p>

            <p>
              Het Kompasmodel helpt om te bepalen in welke fase het gezin zit en welke pijler op dit moment 
              prioriteit heeft. Fasedenken voorkomt dat professionals te vroeg ingrijpen op aspecten die 
              nog niet aan de orde zijn, of te lang wachten met stappen die het gezin wel aankan.
            </p>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-5 shadow-sm max-w-3xl">
            <h3 className="text-sm font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
              <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Relevante literatuur
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>• Papernow, P. (2013) - Surviving and Thriving in Stepfamily Relationships: What Works 
              and What Doesn't</li>
              <li>• Papernow, P. (1993) - Becoming a Stepfamily: Patterns of Development in Remarried Families</li>
            </ul>
          </div>
        </section>

        {/* Van theorie naar werkwijze */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A47] md:text-3xl">
            Van kaders naar werkwijze
          </h2>

          <div className="space-y-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              Deze zes kaders, aangevuld met inzicht in co-ouderschap, interparental conflict en 
              fases in stiefgezinsvorming, maken het mogelijk om niet alleen gedrag te begrijpen, 
              maar vooral de onderliggende dynamiek binnen een samengesteld gezin. Theorie biedt taal, 
              structuur en houvast, zowel voor professionals als voor gezinnen zelf.
            </p>
            
            <p>
              In de Stiefkompas methodiek komen deze kaders samen in vijf concrete pijlers. De methodiek 
              combineert klassieke gezinstherapie kaders met stiefgezin-specifiek onderzoek, waardoor je 
              evidence-informed werkt: theoretisch onderbouwd én praktisch toepasbaar. De theorie komt tot 
              leven via instrumenten zoals de Gezinskompas Scan, de Rollenkaart, het Communicatiekompas en 
              het Stiefkompas Plan. Deze tools helpen om abstract denken om te zetten in concrete gesprekken 
              en afspraken.
            </p>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Praktische toepassing
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              In de Stiefkompas training leer je hoe je deze theoretische inzichten vertaalt naar 
              praktisch handelen. Je oefent met casuïstiek, gebruikt de instrumenten en leert patronen 
              herkennen en bespreekbaar maken in je sessies met samengestelde gezinnen.
            </p>
          </div>
        </section>

        {/* BRONNEN */}
        <section className="space-y-5 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A47] md:text-3xl">
            Belangrijkste bronnen
          </h2>

          <div className="space-y-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              De Stiefkompas methodiek is gebaseerd op werk van vooraanstaande onderzoekers en 
              therapeuten in gezinstherapie, systeemdenken en ontwikkelingspsychologie. Hieronder 
              een selectie van de belangrijkste bronnen per theoretisch kader.
            </p>

            <p>
              <strong>Waarom stiefgezin-specifiek onderzoek essentieel is:</strong> Klassieke 
              gezinstherapie verklaart veel, maar stiefgezinnen hebben structureel andere kenmerken: 
              transities tussen huizen, co-ouderschap met ex-partners, en legitimiteitsvragen die in 
              biologische gezinnen niet spelen. Daarom rust Stiefkompas ook op stiefgezin-specifiek 
              onderzoek dat deze unieke dynamiek in kaart brengt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Systeem */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Systeemtheorie
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Bateson, G. (1972) - <em>Steps to an Ecology of Mind</em></li>
                <li>• Von Bertalanffy, L. (1968) - <em>General System Theory</em></li>
                <li>• Selvini Palazzoli, M. (1978) - <em>Paradox and Counterparadox</em></li>
              </ul>
            </div>

            {/* Hechting */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Hechtingstheorie
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Bowlby, J. (1969) - <em>Attachment and Loss</em></li>
                <li>• Ainsworth, M. (1978) - <em>Patterns of Attachment</em></li>
                <li>• Cassidy, J. & Shaver, P. (2016) - <em>Handbook of Attachment</em></li>
              </ul>
            </div>

            {/* Contextueel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Contextuele benadering
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Boszormenyi-Nagy, I. (1973) - <em>Invisible Loyalties</em></li>
                <li>• Boszormenyi-Nagy, I. (1986) - <em>Between Give and Take</em></li>
                <li>• Van Heusden, A. & Van den Eerenbeemt, E. (2001) - <em>Balans in Beweging</em></li>
              </ul>
            </div>

            {/* Stress */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Emotie- en stressregulatie
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Porges, S. (2011) - <em>The Polyvagal Theory</em></li>
                <li>• Siegel, D. (2012) - <em>The Developing Mind</em></li>
                <li>• Van der Kolk, B. (2014) - <em>The Body Keeps the Score</em></li>
              </ul>
            </div>

            {/* Structureel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Structurele gezinsbenadering
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Minuchin, S. (1974) - <em>Families and Family Therapy</em></li>
                <li>• Minuchin, S. & Fishman, H.C. (1981) - <em>Family Therapy Techniques</em></li>
                <li>• Aponte, H. & Van Deusen, J. (1981) - <em>Structural Family Therapy</em></li>
              </ul>
            </div>

            {/* Communicatie */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Communicatietheorie
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Watzlawick, P. (1967) - <em>Pragmatics of Human Communication</em></li>
                <li>• Gottman, J. (1999) - <em>The Marriage Clinic</em></li>
                <li>• Fisher, R. & Ury, W. (1981) - <em>Getting to Yes</em></li>
              </ul>
            </div>

            {/* Stiefgezin-specifiek */}
            <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-5 shadow-sm lg:col-span-2">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Stiefgezin-specifiek onderzoek
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Papernow, P. (2013) - <em>Surviving and Thriving in Stepfamily Relationships</em></li>
                <li>• Papernow, P. (1993) - <em>Becoming a Stepfamily: Patterns of Development in Remarried Families</em></li>
                <li>• Bray, J. & Kelly, J. (1998) - <em>Stepfamilies: Love, Marriage, and Parenting in the First Decade</em></li>
                <li>• Visher, E.B. & Visher, J.S. (1996) - <em>Therapy with Stepfamilies</em></li>
                <li>• Ganong, L. & Coleman, M. (2017) - <em>Stepfamily Relationships: Development, Dynamics, and Interventions</em></li>
                <li>• Hetherington, E.M. & Kelly, J. (2002) - <em>For Better or For Worse: Divorce Reconsidered</em></li>
                <li>• Ahrons, C.R. (2004) - <em>We're Still Family: What Grown Children Have to Say About Their Parents' Divorce</em></li>
              </ul>
            </div>

            {/* Routines */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0E2A47] mb-3">
                Gezinsritme en rituelen
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Fiese, B. (2006) - <em>Family Routines and Rituals</em></li>
                <li>• Imber-Black, E. (1988) - <em>Rituals in Families and Family Therapy</em></li>
                <li>• Fiese, B. & Wamboldt, F. (2000) - <em>Family Routines, Rituals, and Asthma Management</em></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA AFSLUITING */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0E2A47] via-[#0E2A47] to-[#2C4B9A] p-10 sm:p-14 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#17B3B0]/15 blur-2xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-[#F02B8A]/12 blur-2xl" />

          <div className="relative space-y-6 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Theorie in de praktijk leren toepassen?
            </h3>

            <p className="text-lg text-white/90 leading-relaxed">
              In de Stiefkompas training leer je deze theoretische kaders omzetten naar concrete 
              begeleiding. Je oefent met echte casussen, gebruikt de instrumenten in rollenspellen 
              en krijgt alle tools in handen om systemisch en evidence-informed te werken met 
              samengestelde gezinnen.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center rounded-full bg-[#17B3B0] px-8 py-4 text-base font-semibold text-white hover:bg-[#149390] transition shadow-lg"
              >
                Bekijk de training
              </Link>
              <Link
                href="/materialen-tools"
                className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition border-2 border-white"
              >
                Verken de tools
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}