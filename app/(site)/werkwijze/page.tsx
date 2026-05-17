import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Werkwijze – Stiefkompas",
  description:
    "Hoe werk je met het Kompasmodel? Een cyclisch proces dat zich aanpast aan de fase, context en behoeften van het gezin.",
};

const INK = "#0E2A47";
const TEXT = "rgba(14, 42, 71, 0.72)";
const BORDER = "rgba(14, 42, 71, 0.14)";

export default function WerkwijzePage() {
  return (
    <div className="relative bg-white">
      {/* COMPACT HEADER */}
      <section className="border-b" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.5)' }}>
                Stiefkompas / Werkwijze
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ color: INK }}>
                Hoe werk je met het Kompasmodel?
              </h1>
              <p className="text-xl leading-relaxed max-w-3xl" style={{ color: TEXT }}>
                Het Kompasmodel is geen lineair stappenplan, maar een cyclisch proces dat zich aanpast aan de 
                fase, context en behoeften van het gezin. Wat Stiefkompas onderscheidt is de focus op posities, 
                patronen en legitimiteit – niet op gehoorzaamheid of 'goed gedrag'.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">

        {/* DE 5 STAPPEN + CYCLISCH */}
        <section className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "1",
                title: "Intake & verkenning",
                desc: "Je brengt de gezinssituatie in kaart: wie zijn de gezinsleden, wat is de aanleiding, welke patronen herken je direct?",
                distinct: "We starten altijd met posities en geschiedenislijnen, niet met probleemgedrag."
              },
              {
                n: "2",
                title: "Analyse met het Kompasmodel",
                desc: "Je gebruikt de vijf pijlers om te verkennen waar spanning ontstaat en welke onderliggende dynamiek meespeelt.",
                distinct: "We zoeken de klem en de misplaatsing van verantwoordelijkheid, niet één oorzaak."
              },
              {
                n: "3",
                title: "Prioritering & focus",
                desc: "Samen met het gezin bepaal je welke pijler nu het meest urgent of werkbaar is.",
                distinct: "Eerst basisveiligheid en legitimiteit van rollen, daarna pas opvoedafspraken."
              },
              {
                n: "4",
                title: "Planvorming & interventie",
                desc: "Op basis van de gekozen focus werk je toe naar concrete, haalbare stappen.",
                distinct: "Kleine systeemwijzigingen met hoge voorspelbaarheid, geen grote veranderingen tegelijk."
              },
              {
                n: "5",
                title: "Evaluatie & bijstelling",
                desc: "Je evalueert regelmatig: wat werkt, wat verschuift, waar ontstaat nieuwe spanning?",
                distinct: "We meten op spanning en samenwerking, niet op gehoorzaamheid of 'gedrag'."
              },
              {
                n: "↻",
                title: "Cyclisch proces",
                desc: "De methodiek is geen rechte lijn. Je keert terug naar eerdere pijlers wanneer de situatie daarom vraagt, zodat het Kompasmodel blijft meebewegen met de ontwikkeling van het gezin.",
                distinct: ""
              }
            ].map((item) => (
              <div key={item.n} className="p-6 rounded-xl bg-white space-y-3" style={{ border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    {item.n}
                  </span>
                  <h3 className="text-lg font-semibold" style={{ color: INK }}>{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
                {item.distinct && (
                  <p className="text-sm leading-relaxed italic" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                    <strong>Onderscheidend:</strong> {item.distinct}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl mx-auto" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Belangrijk principe
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Het Kompasmodel vraagt om professioneel oordeel en afstemming. Je hoeft geen specialist te 
              zijn, maar je werkt wel bewust en onderbouwd. De training geeft je die basis en de vertaalslag 
              naar praktijk, zodat je het Kompasmodel zorgvuldig en systemisch kunt inzetten.
            </p>
          </div>
        </section>

        {/* PRAKTISCHE TOEPASSING */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Praktische toepassing
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              De werkwijze vertaalt zich naar concrete handelingen in je praktijk. Hieronder zie je hoe 
              de cyclus zich kan ontwikkelen in een begeleidingstraject.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="p-8 rounded-xl bg-white space-y-6" style={{ border: `1px solid ${BORDER}` }}>
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: INK }}>
                  Eerste fase: Verkennen en begrijpen
                </h3>
                <p className="text-base leading-relaxed" style={{ color: TEXT }}>
                  In de beginfase ligt de nadruk op het in kaart brengen van het gezinssysteem. Je verkent 
                  posities, loyaliteiten en hechtingspatronen voordat je concrete interventies doet.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    1
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Intake voeren</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Wie zijn de gezinsleden, wat is de geschiedenis, welke patronen zie je?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    2
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Kompasmodel toepassen</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Doorloop de vijf pijlers om spanning en knelpunten te identificeren.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    3
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Focus bepalen</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Bespreek met het gezin welke pijler nu voorrang krijgt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white space-y-6" style={{ border: `1px solid ${BORDER}` }}>
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: INK }}>
                  Tweede fase: Interveniëren en evalueren
                </h3>
                <p className="text-base leading-relaxed" style={{ color: TEXT }}>
                  Na analyse werk je toe naar concrete interventies. Je begeleidt het gezin bij kleine, 
                  haalbare stappen en evalueert regelmatig de voortgang.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    4
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Plan opstellen</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Werk concrete, haalbare stappen uit binnen de gekozen focus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    5
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Evalueren en bijstellen</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Meet op spanning en samenwerking, niet op gedrag. Wat werkt, wat niet?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" 
                        style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
                    ↻
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: INK }}>Terug naar analyse</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
                      Nieuwe spanning? Keer terug naar het Kompasmodel voor heranalyse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VERSCHIL MET ANDERE BENADERINGEN */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Wat maakt deze werkwijze anders?
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              De Stiefkompas werkwijze onderscheidt zich van andere benaderingen door de specifieke 
              aandacht voor de unieke dynamiek van samengestelde gezinnen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Systemisch, niet individueel",
                desc: "We kijken naar patronen en posities binnen het gezin, niet naar 'wie het probleem is'. Gedrag wordt begrepen in context, niet als karakter."
              },
              {
                title: "Positie voor gedrag",
                desc: "We starten met het ordenen van posities en legitimiteit voordat we naar gedragsverandering kijken. Eerst de basis op orde, dan pas de details."
              },
              {
                title: "Cyclisch, niet lineair",
                desc: "Het proces is geen stappenplan maar een voortdurende cyclus van analyse, interventie en evaluatie die meebeweegt met het gezin."
              },
              {
                title: "Meten op spanning, niet op gedrag",
                desc: "We evalueren op basis van spanning en samenwerking in het systeem, niet op gehoorzaamheid of 'goed gedrag' van individuele gezinsleden."
              },
              {
                title: "Kleine stappen, grote impact",
                desc: "We kiezen bewust voor kleine, voorspelbare systeemwijzigingen in plaats van grote veranderingen tegelijk. Timing en volgorde zijn cruciaal."
              },
              {
                title: "Focus op legitimiteit",
                desc: "De stiefouder krijgt pas opvoedtaken wanneer de legitimiteit is gegeven door de biologische ouder. Praktisch kunnen is niet genoeg."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TOOLS DIE JE GEBRUIKT */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Tools die je gebruikt in de werkwijze
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Binnen elke fase gebruik je concrete tools om de methodiek toe te passen. Deze tools 
              helpen om abstract systemisch denken om te zetten naar concrete gesprekken en interventies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Gezinskompas Scan",
                desc: "Brengt snel in beeld waar spanning ontstaat en welke pijlers aandacht nodig hebben.",
                phase: "Intake & Analyse"
              },
              {
                title: "Rollenkaart",
                desc: "Verduidelijkt posities, verwachtingen en legitimiteit binnen het gezinssysteem.",
                phase: "Analyse"
              },
              {
                title: "Communicatiekompas",
                desc: "Identificeert terugkerende patronen en helpt deze bespreekbaar te maken.",
                phase: "Analyse & Interventie"
              },
              {
                title: "Grenzenkompas",
                desc: "Concretiseert regels, grenzen en verantwoordelijkheden per gezinslid.",
                phase: "Planvorming"
              },
              {
                title: "Weekstructuurkaart",
                desc: "Brengt routines, wisselmomenten en voorspelbaarheid in kaart.",
                phase: "Planvorming"
              },
              {
                title: "Gezinsrituelenkaart",
                desc: "Verkent bestaande rituelen en ontwikkelt nieuwe passende vormen.",
                phase: "Planvorming"
              },
              {
                title: "Stiefkompas Plan",
                desc: "Legt prioriteiten, acties en vervolgstappen vast in samenwerking met het gezin.",
                phase: "Interventie"
              },
              {
                title: "Casusbespreking format",
                desc: "Structureert intervisie en supervisie voor professionele reflectie.",
                phase: "Evaluatie"
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white space-y-3" style={{ border: `1px solid ${BORDER}` }}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(14, 42, 71, 0.5)' }}>
                  {item.phase}
                </div>
                <h3 className="text-base font-semibold" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl mx-auto" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Meer weten over de tools?
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Op de{" "}
              <Link href="/materialen-tools" className="font-semibold hover:opacity-70 transition" style={{ color: INK }}>
                materialen & tools pagina
              </Link>
              {" "}vind je uitgebreide beschrijvingen en voorbeelden van alle instrumenten.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 lg:py-32 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(to bottom right, ${INK}, #1a3a5c, ${INK})` }}>
          <div className="relative space-y-10 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Klaar om de werkwijze te leren?
            </h2>

            <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              In de training leer je deze werkwijze stap voor stap toepassen, met praktijkoefeningen, 
              casuïstiek en begeleiding bij je eigen cases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-bold rounded-xl bg-white hover:bg-slate-100 transition-all shadow-2xl"
                style={{ color: INK }}
              >
                Bekijk de opleiding
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/methode"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl transition-colors hover:bg-white/10 border-2 border-white text-white"
              >
                Terug naar de methodiek
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}