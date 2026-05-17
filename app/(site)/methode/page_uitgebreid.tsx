import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – De methodiek en het Kompasmodel",
  description:
    "Uitleg van de Stiefkompas methodiek en het Kompasmodel met vijf pijlers: posities en loyaliteit, hechting en veiligheid, grenzen en structuur, communicatie en patronen, gezinsritme en rituelen.",
};

export default function MethodePage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* zachte vormen (logo kleuren) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[440px] w-[440px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#17B3B0]/25 to-[#2C4B9A]/15 blur-2xl"
            style={{ transform: "rotate(-16deg)" }}
          />
          <div
            className="absolute -left-[14%] bottom-[6%] h-[420px] w-[420px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-[#F02B8A]/22 to-[#2C4B9A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-slate-200/60">
              <span className="h-2 w-2 rounded-full bg-[#17B3B0]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                De Stiefkompas methodiek
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0E2A47] leading-[1.08]">
              Het Kompasmodel – vijf pijlers om dynamiek te duiden
            </h1>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                De Stiefkompas methodiek helpt om de dynamiek van samengestelde gezinnen systematisch
                te begrijpen en om vastgelopen patronen en terugkerende problemen te doorbreken.
                Daarbij ligt de focus niet op individueel gedrag, maar op patronen, posities en
                relaties binnen het gezinssysteem.
              </p>

              <p>
                Praktisch betekent dit dat je sneller zicht krijgt op wat er werkelijk speelt, samen
                prioriteiten kunt aanbrengen (wat nu, wat later) en het gesprek voert in taal die
                aansluit bij het gezin, zonder problemen te bagatelliseren of te moraliseren.
              </p>
            </div>

            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white/70 backdrop-blur px-6 py-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
                Voor professionals
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Na deze pagina kun je het Kompasmodel uitleggen aan een gezin, een intake structureren 
                volgens de vijf pijlers en een eerste focus kiezen die aansluit bij de situatie van het gezin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* NIEUW: WAT MAAKT STIEFGEZINNEN ANDERS */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Wat maakt samengestelde gezinnen anders?
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Samengestelde gezinnen kennen een specifieke dynamiek die vraagt om een andere benadering 
              dan reguliere gezinsbegeleiding. Het Kompasmodel is niet algemene systeemtherapie plus vijf 
              thema's, maar een methodiek die vanaf de basis is ontwikkeld voor de unieke kenmerken van 
              stiefgezinnen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17B3B0]/15 text-[#17B3B0]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Twee huishoudens
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Kinderen bewegen tussen twee gezinssystemen met verschillende regels, routines en 
                    verwachtingen. Dit vraagt om constante afstemming en aanpassing.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#F02B8A]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F02B8A]/15 text-[#F02B8A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Wisselmomenten als stressor
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Elke overgang tussen huizen roept spanning, aanpassing en soms loyaliteitsconflict 
                    op. Deze momenten keren structureel terug.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C4B9A]/15 text-[#2C4B9A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Meervoudige loyaliteiten
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Verticale loyaliteit (ouder-kind) en horizontale loyaliteit (partners) spelen 
                    tegelijk, wat klemposities en spanning kan veroorzaken.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17B3B0]/15 text-[#17B3B0]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Stiefouder zonder legitimiteit
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Stiefouders hebben geen vanzelfsprekende positie of autoriteit. Legitimiteit 
                    moet worden opgebouwd en expliciet worden gegeven.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#F02B8A]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F02B8A]/15 text-[#F02B8A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Rouw, verlies en vergelijking
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Het vorige gezin bestaat niet meer. Er is verlies en blijvende vergelijking 
                    met vroeger, wat besluitvorming en rituelen kan belasten.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C4B9A]/15 text-[#2C4B9A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                    Onduidelijke grenzen
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Waar eindigt co-ouderschap en waar begint de nieuwe partnerrelatie? Deze 
                    grenzen zijn vaak onduidelijk en bron van conflict.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Waarom dit belangrijk is
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Deze kenmerken maken dat algemene gezinsbegeleiding vaak tekortschiet. Het Kompasmodel 
              is specifiek ontwikkeld om deze complexiteit te ordenen en werkbaar te maken, zodat je 
              als professional grip krijgt zonder te versimpelen.
            </p>
          </div>
        </section>

        {/* NIEUW: HOE WERK JE MET HET KOMPASMODEL (AANGESCHERPT) */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Hoe werk je met het Kompasmodel?
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Het Kompasmodel is geen lineair stappenplan, maar een cyclisch proces dat zich aanpast aan de 
              fase, context en behoeften van het gezin. Wat Stiefkompas onderscheidt is de focus op posities, 
              patronen en legitimiteit – niet op gehoorzaamheid of 'goed gedrag'.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17B3B0]/15 text-lg font-semibold text-[#0E2A47]">
                  1
                </span>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Intake & verkenning</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Je brengt de gezinssituatie in kaart: wie zijn de gezinsleden, wat is de aanleiding, 
                welke patronen herken je direct?
              </p>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                <strong>Onderscheidend:</strong> We starten altijd met posities en geschiedenislijnen, 
                niet met probleemgedrag.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-gradient-to-br from-[#2C4B9A]/5 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C4B9A]/15 text-lg font-semibold text-[#0E2A47]">
                  2
                </span>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Analyse met het Kompasmodel</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Je gebruikt de vijf pijlers om te verkennen waar spanning ontstaat en welke onderliggende 
                dynamiek meespeelt.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                <strong>Onderscheidend:</strong> We zoeken de klem en de misplaatsing van verantwoordelijkheid, 
                niet één oorzaak.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F02B8A]/20 bg-gradient-to-br from-[#F02B8A]/5 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F02B8A]/15 text-lg font-semibold text-[#0E2A47]">
                  3
                </span>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Prioritering & focus</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Samen met het gezin bepaal je welke pijler nu het meest urgent of werkbaar is.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                <strong>Onderscheidend:</strong> Eerst basisveiligheid en legitimiteit van rollen, 
                daarna pas opvoedafspraken.
              </p>
            </div>

            <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17B3B0]/15 text-lg font-semibold text-[#0E2A47]">
                  4
                </span>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Planvorming & interventie</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Op basis van de gekozen focus werk je toe naar concrete, haalbare stappen.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                <strong>Onderscheidend:</strong> Kleine systeemwijzigingen met hoge voorspelbaarheid, 
                geen grote veranderingen tegelijk.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-gradient-to-br from-[#2C4B9A]/5 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C4B9A]/15 text-lg font-semibold text-[#0E2A47]">
                  5
                </span>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Evaluatie & bijstelling</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Je evalueert regelmatig: wat werkt, wat verschuift, waar ontstaat nieuwe spanning?
              </p>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                <strong>Onderscheidend:</strong> We meten op spanning en samenwerking, niet op 
                gehoorzaamheid of 'gedrag'.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <svg className="h-8 w-8 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="text-lg font-semibold text-[#0E2A47]">Cyclisch proces</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                De methodiek is geen rechte lijn. Je keert terug naar eerdere pijlers wanneer de situatie 
                daarom vraagt, zodat het Kompasmodel blijft meebewegen met de ontwikkeling van het gezin.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2C4B9A]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Belangrijk principe
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Het Kompasmodel vraagt om professioneel oordeel en afstemming. Je hoeft geen specialist te 
              zijn, maar je werkt wel bewust en onderbouwd. De training geeft je die basis en de vertaalslag 
              naar praktijk, zodat je het Kompasmodel zorgvuldig en systemisch kunt inzetten.
            </p>
          </div>
        </section>

        {/* BESTAAND: DE 5 PIJLERS (MET AANSCHERPINGEN) */}
        <div className="space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47] mb-4">
              De vijf pijlers van het Kompasmodel
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Elk van de vijf pijlers belicht een specifiek aspect van de dynamiek in samengestelde gezinnen. 
              Samen vormen zij een compleet analysekader dat richting geeft aan begeleiding.
            </p>
          </div>

          <PijlerBlock
            n="01"
            accent="teal"
            title="Posities en loyaliteit"
            intro={`Deze pijler richt zich op posities en loyaliteiten binnen het samengestelde gezin. Niet alleen de formele rollen, maar vooral de plek die iemand inneemt en de verwachtingen die daarbij horen.

Deze posities bepalen waar loyaliteiten ontstaan. Loyaliteiten kunnen steunend zijn, maar ook spanningen oproepen, vooral wanneer gezinsleden het gevoel hebben te moeten kiezen tussen verschillende loyaliteiten. Dit kan leiden tot klemposities, bij kinderen en volwassenen.

Inzicht in deze dynamiek helpt begeleiders om samen met gezinnen passende vervolgstappen te bepalen en het evenwicht te herstellen.`}
            signals={[
              "Kinderen voelen zich verantwoordelijk voor het welzijn van een ouder",
              "Stiefouder ervaart afstand of afwijzing en raakt sneller gefrustreerd",
              "Er ontstaat spanning zodra grenzen of opvoeding ter sprake komen",
            ]}
            theory="Deze pijler is gebaseerd op systeemtheorie en loyaliteitsleer. Verticale loyaliteit (tussen ouders en kinderen) en horizontale loyaliteit (tussen partners) raken in samengestelde gezinnen vaak op een andere manier met elkaar verweven."
            elements={[
              "In beeld brengen van gezinsposities en onderlinge verhoudingen",
              "Erkennen en bespreekbaar maken van de verschillende onderlinge loyaliteiten",
              "Signaleren en herpositioneren van klemposities",
            ]}
            instruments={["Rollenkaart", "Loyaliteitsdiagram"]}
            definitions={{
              title: "Begrippen in deze pijler",
              items: [
                {
                  term: "Positie",
                  definition: "De plek die iemand inneemt in het gezinssysteem, met bijbehorende verwachtingen en verantwoordelijkheden."
                },
                {
                  term: "Rol",
                  definition: "Het gedrag en de taken die iemand feitelijk uitvoert binnen het gezin."
                },
                {
                  term: "Herpositioneren",
                  definition: "Verantwoordelijkheid en verwachtingen terugleggen waar ze horen, zodat klemposities worden opgelost."
                }
              ]
            }}
          />

          <PijlerBlock
            n="02"
            accent="magenta"
            title="Hechting en veiligheid"
            intro={`Deze pijler richt zich op hechting en veiligheid binnen het samengestelde gezin. Hechting beïnvloedt hoe kinderen en volwassenen nieuwe relaties aangaan en wat zij nodig hebben om zich veilig te voelen.

Veranderingen in samenstelling, woonritme en relatieverhoudingen kunnen bestaande hechtingspatronen onder druk zetten. Kinderen en volwassenen kunnen verschillend reageren op nabijheid, afstand en verandering, waardoor spanning kan ontstaan in de onderlinge afstemming.

Emotionele veiligheid gaat over voorspelbaarheid, gezien en gehoord worden en ruimte voor eigen tempo. Wanneer deze basis wankelt, wordt het opbouwen van nieuwe verbindingen bemoeilijkt.

Inzicht in hechtingspatronen en ervaren veiligheid helpt begeleiders om samen met gezinnen een basis van vertrouwen te versterken waarin nieuwe verbindingen kunnen groeien.`}
            signals={[
              "Toename van spanning of veranderingen in gedrag rondom wisselmomenten (halen en brengen, wisselweken)",
              "Terugtrekken, claimen of testen van nabijheid in relaties",
              "Volwassenen voelen zich snel afgewezen of overvraagd",
            ]}
            theory="Deze pijler is gebaseerd op hechtingstheorie en inzichten over emotionele veiligheid in relaties. In samengestelde gezinnen kunnen verschuivingen in samenstelling, woonritme en relatieverhoudingen ervoor zorgen dat bestaande hechtingspatronen onder druk komen te staan."
            elements={[
              "Verkennen van basisveiligheid en emotionele beschikbaarheid",
              "Afstemmen van nabijheid, afstand en tempo in relatieopbouw",
              "Versterken van vertrouwen en voorspelbaarheid in relaties",
            ]}
            instruments={["Gezinskompas Scan", "Communicatiekompas"]}
            extra="De relatie tussen stiefouder en stiefkind volgt niet dezelfde hechtingslogica als tussen biologische ouder en kind. Druk op hechting werkt vaak averechts. Veiligheid en vertrouwen moeten geleidelijk groeien, zonder verwachting van directe ouder-kind binding."
          />

          <PijlerBlock
            n="03"
            accent="slate"
            title="Grenzen en structuur"
            intro={`In samengestelde gezinnen bestaan vaak verschillende opvoedstijlen, regels en verwachtingen die zijn ontstaan in eerdere gezinssituaties. Deze verschillen kunnen spanningen en discussies geven, vooral wanneer onduidelijk is wie waarover gaat.

Deze pijler helpt om grenzen en structuur te verduidelijken, zodat gezinsleden weten wat zij van elkaar kunnen verwachten. Het gaat niet om het vastleggen van de juiste regels, maar om het creëren van voorspelbaarheid in het dagelijks gezinsleven.

Duidelijke afspraken over verantwoordelijkheden, besluitvorming en opvoeding geven rust en voorkomen dat kinderen of volwassenen in een rol terechtkomen die niet bij hen past. Dit ondersteunt samenwerking en voorkomt dat spanningen escaleren of blijven sluimeren.`}
            signals={[
              "Discussies over regels (bij mama mag het wel, bij papa niet)",
              "Stiefouder raakt overvraagd en reageert met overinzet of terugtrekking",
              "Onduidelijkheid over wie beslist waarover in het dagelijks gezinsleven",
            ]}
            theory="Deze pijler is gebaseerd op systeemtheorie en pedagogische inzichten over grenzen en structuur. In samengestelde gezinnen zijn rollen, verantwoordelijkheden en besluitvorming vaak minder vanzelfsprekend. Door deze expliciet te maken, ontstaat voorspelbaarheid en duidelijkheid, wat bijdraagt aan rust en samenwerking binnen het gezin."
            elements={[
              "Concretiseren van regels, grenzen en verwachtingen",
              "Heldere afstemming over rollen en verantwoordelijkheden",
              "Herkennen van rolverwarring en escalatiepunten",
            ]}
            instruments={["Grenzenkompas", "Weekstructuurkaart"]}
            extra="Timing is cruciaal: eerst de partnerlijn en co-ouder afspraken helder, daarna pas de stiefouder opvoedrol uitbreiden. En altijd met legitimiteit: mag je het vragen (gezag), niet alleen kan je het regelen (praktisch)."
          />

          <PijlerBlock
            n="04"
            accent="blue"
            title="Communicatie en patronen"
            intro={`Deze pijler richt zich op hoe gezinsleden met elkaar communiceren en welke vaste patronen daarin telkens terugkeren. Communicatie gaat verder dan woorden alleen: het grootste deel van wat we communiceren gebeurt non-verbaal, door lichaamstaal, gezichtsuitdrukkingen en gedrag.

Niet de inhoud van losse uitspraken staat centraal, maar de manier waarop reacties (verbaal én non-verbaal) elkaar opvolgen en beïnvloeden. In veel samengestelde gezinnen ontstaan herkenbare patronen waarin opmerkingen, gedragingen of non-verbale signalen leiden tot defensieve reacties, misverstanden of oplopende spanning.

Inzicht in deze communicatiepatronen helpt coaches om samen met gezinnen te werken aan helderdere en opener communicatie, waarin iedereen zich gehoord voelt.`}
            signals={[
              "Dezelfde ruzies keren steeds terug, met vaste patronen waarin gezinsleden voorspelbaar reageren en dezelfde rollen innemen",
              "Intenties worden verkeerd geïnterpreteerd, waardoor gezinsleden zich snel aangevallen voelen",
              "Escalatie op momenten van stress of tijdsdruk",
            ]}
            theory="Deze pijler sluit aan bij systeemtheoretische communicatiemodellen en conflictmodellen, waarin niet één oorzaak of schuldvraag centraal staat, maar terugkerende interactiepatronen tussen gezinsleden. Gedrag wordt hierbij begrepen als onderdeel van een wederzijds beïnvloedend systeem, in plaats van als een lineaire oorzaak-gevolg relatie."
            elements={[
              "In kaart brengen van terugkerende interactiepatronen",
              "Zichtbaar maken van het verschil tussen intentie en effect",
              "Aanleren van herstelvaardigheden en het doorbreken van patronen",
            ]}
            instruments={["Communicatiekompas", "Casusbespreking format"]}
            patterns={[
              {
                name: "Patroon 1: Verdediging en isolatie",
                description: "Partner verdedigt eigen kind → stiefouder voelt zich alleen staan → frustratie en escalatie → afstand groeit → volgend conflict begint vanuit grotere afstand."
              },
              {
                name: "Patroon 2: Correctie en terugtrekking",
                description: "Kind test grenzen → stiefouder reageert → biologische ouder corrigeert stiefouder → stiefouder trekt zich gekwetst terug → kind test opnieuw → afstand tussen stiefouder en gezin groeit."
              }
            ]}
          />

          <PijlerBlock
            n="05"
            accent="magenta"
            title="Gezinsritme en rituelen"
            intro={`In deze pijler staat het gezamenlijke gezinsritme centraal. Het gaat om hoe het dagelijks leven is georganiseerd, welke routines terugkeren en welke momenten betekenis krijgen. Denk aan opstaan en naar school gaan, eetmomenten, wisseldagen, weekenden, feestdagen en overgangsmomenten. Deze terugkerende structuren geven houvast en voorspelbaarheid, vooral in gezinnen waar niet iedereen altijd tegelijk aanwezig is.

Rituelen spelen hierin een belangrijke rol. Zij helpen om verbondenheid te ervaren en geven betekenis aan samen zijn, zonder dat eerdere gezinnen, relaties of ervaringen worden uitgewist. In stiefgezinnen is het zoeken naar een passend ritme vaak complex, omdat verschillende gewoontes, opvoedstijlen en loyaliteiten samenkomen. Wat voor het ene gezinslid vertrouwd voelt, kan voor een ander juist onwennig of beladen zijn.

Door bewust stil te staan bij gezinsritme en rituelen ontstaat ruimte om nieuwe vormen te ontwikkelen die recht doen aan ieders positie. Niet door alles gelijk te trekken, maar door af te stemmen en keuzes te maken die rust, duidelijkheid en erkenning bieden. Een gedragen ritme helpt om spanning te verminderen, verwachtingen te verduidelijken en het gevoel van samen gezin zijn te versterken.`}
            signals={[
              "Spanning rond feestdagen en vakanties, waarbij onduidelijkheid ontstaat over wie wel en wie niet wordt betrokken",
              "Onrust door wisselende routines tussen twee huizen",
              "Onuitgesproken rouw of blijvende vergelijking met het gezinsleven van vroeger",
            ]}
            theory="Ritme en rituelen dragen vanuit systeemtheoretisch en ontwikkelingspsychologisch perspectief bij aan voorspelbaarheid, emotionele veiligheid en betekenisgeving. In samengestelde gezinnen vraagt dit om bewuste afstemming, omdat meerdere gezinsgeschiedenissen, ritmes en tradities samenkomen."
            elements={[
              "Verkennen van bestaande routines en knelpunten",
              "Afstemmen van rituelen, verwachtingen en betekenisgeving",
              "Ruimte maken voor rouw, verleden en nieuwe verbondenheid",
            ]}
            instruments={["Gezinsrituelenkaart", "Stiefkompas Plan"]}
            ritualCategories={[
              {
                name: "Rituelen voor verbinding",
                description: "Gezamenlijke momenten die verbondenheid creëren binnen het nieuwe gezin, zoals wekelijkse eetmomenten of gezinsactiviteiten."
              },
              {
                name: "Rituelen voor overgang en wissel",
                description: "Vaste routines rond wisselmomenten die voorspelbaarheid bieden en stress verminderen, zoals een vast afscheidsritueel."
              },
              {
                name: "Rituelen voor erkenning van verleden",
                description: "Momenten die ruimte geven aan het gezinsleven van vroeger zonder terug te willen, zoals een fotoboek of verhalen delen."
              }
            ]}
          />
        </div>

        {/* NIEUW: ONDERBOUWING & BRONNEN */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Onderbouwing & bronnen
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              De Stiefkompas methodiek is niet zomaar bedacht, maar rust op wetenschappelijk onderbouwde 
              kaders die we vertalen naar praktische tools en werkwijzen voor professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Systeemtheorie
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Gezinnen als dynamische systemen met wederzijdse beïnvloeding, subsystemen en circulaire patronen.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Hechtingstheorie
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Inzichten over emotionele veiligheid, nabijheid en de rol van voorspelbaarheid bij relatieopbouw.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Contextuele benadering
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Loyaliteitsdynamiek, onzichtbare bindingen en het belang van rechtvaardigheid en erkenning in families.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Stressregulatie
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Inzichten over stresspieken, herstel en het onderscheid tussen stress-reacties en intentioneel gedrag.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Structurele gezinsbenadering
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Grenzen, hiërarchie, rollen en de organisatie van het dagelijks gezinsleven als basis voor stabiliteit.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2">
                Communicatietheorie
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Interactionele patronen, non-verbale communicatie en het verschil tussen intentie en effect.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Van theorie naar praktijk
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              De methodiek vertaalt deze theoretische kaders naar concrete, toepasbare tools en werkvormen. 
              Hierdoor werk je evidence-informed: je interventies zijn theoretisch onderbouwd, maar blijven 
              praktisch en werkbaar in de dagelijkse begeleiding. Voor een uitgebreide toelichting, zie de{" "}
              <Link href="/wetenschappelijke-basis" className="text-[#17B3B0] hover:text-[#0E2A47] font-semibold">
                wetenschappelijke basis pagina
              </Link>.
            </p>
          </div>
        </section>

        {/* BESTAAND: WAT STIEFKOMPAS NIET IS */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Wat Stiefkompas bewust niet is
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Positionering ontstaat niet alleen door te benoemen wat je wel doet, maar ook door expliciet 
              te maken wat je niet doet. Dit helpt professionals om te begrijpen waar Stiefkompas voor staat 
              en waar het verschil ligt met andere benaderingen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Geen protocollair werken
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Stiefkompas is geen stappenplan of protocol dat je mechanisch doorloopt. Het biedt een kader 
                voor analyse en duiding, maar vraagt altijd om professioneel oordeel en maatwerk. Elke situatie 
                is anders en vraagt om andere accenten en interventies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Geen schuld toewijzen
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                De methodiek zoekt niet naar individuele schuldigen of 'de oorzaak' van problemen. In plaats 
                daarvan kijkt Stiefkompas naar circulaire patronen, posities en onderlinge beïnvloeding binnen 
                het systeem. Gedrag wordt begrepen in context, niet als karakter of intentie.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Geen quick fixes of tips
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Stiefkompas biedt geen snelle oplossingen of lijstjes met tips. Verandering in gezinsdynamiek 
                vraagt tijd, afstemming en diepgang. De methodiek helpt om onderliggende patronen te begrijpen 
                en duurzame verschuivingen in gang te zetten, niet om symptomen te onderdrukken.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0E2A47] mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Geen vervanging van specialistische hulp
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Stiefkompas is een methodiek voor begeleiding van samengestelde gezinnen, maar geen behandeling 
                voor ernstige psychische problematiek, complexe trauma's of acute crisissituaties. In die gevallen 
                is verwijzing naar gespecialiseerde hulp noodzakelijk.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Waar Stiefkompas wel voor staat
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Stiefkompas staat voor zorgvuldig, systemisch werken met aandacht voor de unieke dynamiek van 
              samengestelde gezinnen. Het biedt professionals een theoretisch onderbouwd kader, praktische 
              tools en een gedeelde taal om complexe gezinssituaties te begeleiden met rust, overzicht en 
              professionaliteit.
            </p>
          </div>
        </section>

        {/* BESTAAND: VOOR WIE IS DEZE METHODIEK */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Voor wie is deze methodiek bedoeld?
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Stiefkompas is ontwikkeld voor professionals die werken met samengestelde gezinnen en behoefte 
              hebben aan structuur, overzicht en theoretische verankering in hun begeleiding.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#17B3B0]/20 bg-gradient-to-br from-[#17B3B0]/5 to-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0E2A47] mb-3">
                  Professionele achtergrond
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#17B3B0] mt-0.5">✓</span>
                    <span>Stiefgezinscoaches en relatietherapeuten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#17B3B0] mt-0.5">✓</span>
                    <span>Maatschappelijk werkers in jeugdzorg en gezinshulp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#17B3B0] mt-0.5">✓</span>
                    <span>Systeemtherapeuten en gezinstherapeuten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#17B3B0] mt-0.5">✓</span>
                    <span>Wijkteamprofessionals en ambulant begeleiders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#17B3B0] mt-0.5">✓</span>
                    <span>Jeugdhulpverleners en gezinscoaches</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#2C4B9A]/20 bg-gradient-to-br from-[#2C4B9A]/5 to-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0E2A47] mb-3">
                  Voorkennis en werkhouding
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Je hoeft geen specialist in stiefgezinnen te zijn, maar de methodiek vraagt wel om:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C4B9A] mt-0.5">•</span>
                    <span>Basiskennis van systemisch denken of interesse om dit te leren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C4B9A] mt-0.5">•</span>
                    <span>Ervaring met gezinsbegeleiding of relatiewerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C4B9A] mt-0.5">•</span>
                    <span>Bereidheid tot reflectie en professionele ontwikkeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C4B9A] mt-0.5">•</span>
                    <span>Aandacht voor context, posities en relatiedynamiek</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-[#F02B8A]/20 bg-gradient-to-br from-[#F02B8A]/5 to-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0E2A47] mb-3">
                  Passende context
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Stiefkompas past bij professionals die:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F02B8A] mt-0.5">•</span>
                    <span>Zelfstandig of in teamverband werken met gezinnen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F02B8A] mt-0.5">•</span>
                    <span>Ruimte hebben voor diepgang en meerdere contactmomenten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F02B8A] mt-0.5">•</span>
                    <span>Werken vanuit begeleiding, niet crisis-interventie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F02B8A] mt-0.5">•</span>
                    <span>Behoefte hebben aan structuur zonder rigide protocollen</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0E2A47] mb-3">
                  Minder geschikt voor
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  De methodiek is minder geschikt wanneer:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">×</span>
                    <span>Je uitsluitend korte, incidentele contacten hebt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">×</span>
                    <span>Het gezin in acute crisis verkeert (eerst stabiliseren)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">×</span>
                    <span>Er sprake is van ernstige psychiatrie of complexe trauma's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">×</span>
                    <span>Je een directieve, protocol-gedreven aanpak zoekt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Passende match?
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Als je werkt met samengestelde gezinnen en jezelf herkent in bovenstaande beschrijving, dan biedt 
              Stiefkompas waarschijnlijk waardevolle verdieping voor jouw praktijk. In de training leer je de 
              methodiek stap voor stap toepassen en krijg je alle tools en materialen om direct aan de slag te gaan.
            </p>
          </div>
        </section>

        {/* NIEUW: WAT JE IN DE TRAINING KRIJGT */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
              Wat je in de Stiefkompas training krijgt
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              De methodiek op deze pagina geeft je inzicht in het Kompasmodel. De training brengt het tot leven 
              en maakt je bekwaam om zelfstandig met Stiefkompas te werken in je praktijk.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Alle tools & materialen
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Rollenkaart, Communicatiekompas, Grenzenkompas, Stiefkompas Plan en meer – download, print en gebruik direct.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#2C4B9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Casuïstiek & voorbeelden
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Geanonimiseerde cases, rollenspellen en uitgewerkte scenario's om je te laten zien hoe het werkt.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F02B8A]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#F02B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Formats & checklists
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Intake-format, evaluatieformulier, casusoverzicht en stappenplannen voor methodisch werken.
              </p>
            </div>

            <div className="rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#17B3B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Voorbeeldscripts
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Gespreksteksten en vraagstellingen die je kunt gebruiken tijdens intake, analyse en interventie.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2C4B9A]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#2C4B9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Intervisie & supervisie
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Begeleiding bij je eigen cases, feedback op je werk en leren van collega-professionals.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F02B8A]/20 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#0E2A47] mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-[#F02B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certificering
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Na afronding kun je certificeren als Stiefkompas-professional met aantoonbare kwalificatie.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#17B3B0]/15 bg-white p-6 shadow-sm max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2C4B9A] mb-2">
              Resultaat
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Na de training kun je zelfstandig intake voeren, analyseren met het Kompasmodel, prioriteren, 
              een plan opstellen en gezinnen begeleiden met de Stiefkompas-methodiek. Je werkt evidence-informed, 
              systemisch en met vertrouwen in complexe gezinssituaties.
            </p>
          </div>
        </section>

        {/* BESTAAND: AFSLUITING */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0E2A47] via-[#0E2A47] to-[#2C4B9A] p-10 sm:p-14 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#17B3B0]/15 blur-2xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-[#F02B8A]/12 blur-2xl" />

          <div className="relative space-y-6 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Klaar om met Stiefkompas te werken?
            </h3>

            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                Je hebt nu een compleet overzicht van de Stiefkompas methodiek: wat het is, hoe je ermee werkt, 
                voor wie het bedoeld is en wat je in de training krijgt. De volgende stap is de methodiek leren 
                toepassen in je eigen praktijk.
              </p>
              <p>
                In de training leer je het Kompasmodel, de onderliggende theorie en alle tools zorgvuldig en 
                systemisch inzetten – met begeleiding, feedback en concrete oefeningen.
              </p>
            </div>

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
                Tools en materialen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PijlerBlock({
  n,
  accent,
  title,
  intro,
  signals,
  theory,
  elements,
  instruments,
  definitions,
  extra,
  patterns,
  ritualCategories,
}: {
  n: string;
  accent: "teal" | "magenta" | "blue" | "slate";
  title: string;
  intro: string;
  signals: string[];
  theory: string;
  elements: string[];
  instruments: string[];
  definitions?: {
    title: string;
    items: Array<{ term: string; definition: string }>;
  };
  extra?: string;
  patterns?: Array<{ name: string; description: string }>;
  ritualCategories?: Array<{ name: string; description: string }>;
}) {
  const accentStyles =
    accent === "teal"
      ? {
          border: "border-[#17B3B0]/20",
          bg: "from-[#17B3B0]/10 via-white to-white",
          badge: "bg-[#17B3B0]/15 text-[#0E2A47]",
          dot: "text-[#17B3B0]",
          blob: "from-[#17B3B0]/25 to-[#2C4B9A]/12",
          rail: "bg-[#17B3B0]",
        }
      : accent === "magenta"
      ? {
          border: "border-[#F02B8A]/18",
          bg: "from-[#F02B8A]/8 via-white to-white",
          badge: "bg-[#F02B8A]/14 text-[#0E2A47]",
          dot: "text-[#F02B8A]",
          blob: "from-[#F02B8A]/20 to-[#2C4B9A]/10",
          rail: "bg-[#F02B8A]",
        }
      : accent === "blue"
      ? {
          border: "border-[#2C4B9A]/18",
          bg: "from-[#2C4B9A]/8 via-white to-white",
          badge: "bg-[#2C4B9A]/14 text-[#0E2A47]",
          dot: "text-[#2C4B9A]",
          blob: "from-[#2C4B9A]/20 to-[#17B3B0]/10",
          rail: "bg-[#2C4B9A]",
        }
      : {
          border: "border-slate-200",
          bg: "from-slate-50 via-white to-white",
          badge: "bg-slate-100 text-slate-800",
          dot: "text-slate-500",
          blob: "from-slate-200/25 to-slate-300/15",
          rail: "bg-slate-700",
        };

  const introParagraphs = intro
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative">
      <div
        className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 lg:p-12 shadow-md ${accentStyles.border} ${accentStyles.bg}`}
      >
        <div className={`absolute left-0 top-0 h-full w-2 ${accentStyles.rail}`} />
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${accentStyles.blob}`}
        />

        <div className="relative space-y-6">
          <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${accentStyles.badge}`}>
            <span className="text-2xl font-semibold">{n}</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Pijler</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0E2A47]">
            {title}
          </h2>

          <div className="text-lg text-slate-600 leading-relaxed max-w-3xl space-y-4">
            {introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 4 KAARTEN */}
          <div className="grid gap-6 lg:grid-cols-4 pt-4">
            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${accentStyles.dot}`}>
                Signalen in de praktijk
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {signals.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accentStyles.dot}`}>•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Theoretische basis
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{theory}</p>
            </div>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Werkzame elementen
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {elements.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accentStyles.dot}`}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Gekoppelde instrumenten
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {instruments.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accentStyles.dot}`}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OPTIONAL: DEFINITIONS (Pijler 1) */}
          {definitions && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6 max-w-3xl">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                {definitions.title}
              </h3>
              <dl className="space-y-3">
                {definitions.items.map((item) => (
                  <div key={item.term}>
                    <dt className="text-sm font-semibold text-[#0E2A47] inline">{item.term}:</dt>{" "}
                    <dd className="text-sm text-slate-700 inline leading-relaxed">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* OPTIONAL: EXTRA TEXT (Pijler 2, 3) */}
          {extra && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 mb-2">
                Belangrijk
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">{extra}</p>
            </div>
          )}

          {/* OPTIONAL: PATTERNS (Pijler 4) */}
          {patterns && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6 max-w-3xl">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Typische communicatiepatronen in stiefgezinnen
              </h3>
              <div className="space-y-4">
                {patterns.map((pattern) => (
                  <div key={pattern.name}>
                    <h4 className="text-sm font-semibold text-[#0E2A47] mb-1">{pattern.name}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{pattern.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OPTIONAL: RITUAL CATEGORIES (Pijler 5) */}
          {ritualCategories && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6 max-w-3xl">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Drie categorieën rituelen
              </h3>
              <div className="space-y-4">
                {ritualCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="text-sm font-semibold text-[#0E2A47] mb-1">{category.name}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}