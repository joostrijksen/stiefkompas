"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const INK = "#0E2A47";
const TEXT = "rgba(14, 42, 71, 0.72)";
const BORDER = "rgba(14, 42, 71, 0.14)";

export default function MethodePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const tocItems = [
    { id: "stiefgezin-specifiek", label: "Wat maakt samengestelde gezinnen anders?" },
    { id: "hoe-werkt-het", label: "Hoe werk je met het Kompasmodel?" },
    { id: "pijlers", label: "De vijf pijlers van het Kompasmodel" },
    { id: "onderbouwing", label: "Onderbouwing & bronnen" },
    { id: "wat-niet", label: "Wat Stiefkompas bewust niet is" },
    { id: "voor-wie", label: "Voor wie is deze methodiek bedoeld?" },
    { id: "training", label: "Wat je in de training krijgt" },
  ];

  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Subtiel kompas grid achtergrond */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <div className="relative w-[800px] h-[800px]">
            <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: INK }} />
            <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: INK }} />
            <div className="absolute inset-0 rotate-45">
              <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: INK }} />
              <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: INK }} />
            </div>
            <div className="absolute inset-0 border rounded-full" style={{ borderColor: INK }} />
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]" 
                 style={{ background: 'rgba(14, 42, 71, 0.08)', color: INK }}>
              De Stiefkompas methodiek
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]" style={{ color: INK }}>
              Het Kompasmodel – vijf pijlers om dynamiek te duiden
            </h1>

            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: TEXT }}>
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

            <div className="rounded-2xl border bg-white/80 backdrop-blur px-8 py-6 shadow-sm max-w-2xl mx-auto text-left" style={{ borderColor: BORDER }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: INK }}>
                Voor professionals
              </p>
              <p className="text-base leading-relaxed" style={{ color: TEXT }}>
                Na deze pagina kun je het Kompasmodel uitleggen aan een gezin, een intake structureren 
                volgens de vijf pijlers en een eerste focus kiezen die aansluit bij de situatie van het gezin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-20">
        
        {/* INHOUDSOPGAVE */}
        <section className="relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm" style={{ borderColor: BORDER }}>
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center justify-between w-full text-left mb-6 group"
          >
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: INK }}>
              Inhoudsopgave
            </h2>
            <svg 
              className={`h-6 w-6 transition-transform ${tocOpen ? 'rotate-180' : ''}`}
              style={{ color: INK }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {tocOpen && (
            <div className="space-y-2">
              {tocItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl transition-all hover:bg-[rgba(14,42,71,0.05)]"
                  style={{ border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold" style={{ color: 'rgba(14, 42, 71, 0.5)' }}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium" style={{ color: INK }}>
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* WAT MAAKT STIEFGEZINNEN ANDERS */}
        <section id="stiefgezin-specifiek" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Wat maakt samengestelde gezinnen anders?
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Samengestelde gezinnen kennen een specifieke dynamiek die vraagt om een andere benadering 
              dan reguliere gezinsbegeleiding. Het Kompasmodel is niet algemene systeemtherapie plus vijf 
              thema's, maar een methodiek die vanaf de basis is ontwikkeld voor de unieke kenmerken van 
              stiefgezinnen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Twee huishoudens",
                desc: "Kinderen bewegen tussen twee gezinssystemen met verschillende regels, routines en verwachtingen. Dit vraagt om constante afstemming en aanpassing."
              },
              {
                title: "Wisselmomenten als stressor",
                desc: "Elke overgang tussen huizen roept spanning, aanpassing en soms loyaliteitsconflict op. Deze momenten keren structureel terug."
              },
              {
                title: "Meervoudige loyaliteiten",
                desc: "Verticale loyaliteit (ouder-kind) en horizontale loyaliteit (partners) spelen tegelijk, wat klemposities en spanning kan veroorzaken."
              },
              {
                title: "Stiefouder zonder legitimiteit",
                desc: "Stiefouders hebben geen vanzelfsprekende positie of autoriteit. Legitimiteit moet worden opgebouwd en expliciet worden gegeven."
              },
              {
                title: "Rouw, verlies en vergelijking",
                desc: "Het vorige gezin bestaat niet meer. Er is verlies en blijvende vergelijking met vroeger, wat besluitvorming en rituelen kan belasten."
              },
              {
                title: "Onduidelijke grenzen",
                desc: "Waar eindigt co-ouderschap en waar begint de nieuwe partnerrelatie? Deze grenzen zijn vaak onduidelijk en bron van conflict."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Waarom dit belangrijk is
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Deze kenmerken maken dat algemene gezinsbegeleiding vaak tekortschiet. Het Kompasmodel 
              is specifiek ontwikkeld om deze complexiteit te ordenen en werkbaar te maken, zodat je 
              als professional grip krijgt zonder te versimpelen.
            </p>
          </div>
        </section>

        {/* HOE WERK JE MET HET KOMPASMODEL */}
        <section id="hoe-werkt-het" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Hoe werk je met het Kompasmodel?
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Het Kompasmodel is geen lineair stappenplan, maar een cyclisch proces dat zich aanpast aan de 
              fase, context en behoeften van het gezin. Wat Stiefkompas onderscheidt is de focus op posities, 
              patronen en legitimiteit – niet op gehoorzaamheid of 'goed gedrag'.
            </p>
          </div>

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
                n: "→",
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

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
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

        {/* DE 5 PIJLERS */}
        <div id="pijlers" className="scroll-mt-20 space-y-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: INK }}>
              De vijf pijlers van het Kompasmodel
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Elk van de vijf pijlers belicht een specifiek aspect van de dynamiek in samengestelde gezinnen. 
              Samen vormen zij een compleet analysekader dat richting geeft aan begeleiding.
            </p>
          </div>

          <PijlerBlock
            n="01"
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

        {/* ONDERBOUWING & BRONNEN */}
        <section id="onderbouwing" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Onderbouwing & bronnen
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              De Stiefkompas methodiek is niet zomaar bedacht, maar rust op wetenschappelijk onderbouwde 
              kaders die we vertalen naar praktische tools en werkwijzen voor professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Systeemtheorie",
                desc: "Gezinnen als dynamische systemen met wederzijdse beïnvloeding, subsystemen en circulaire patronen."
              },
              {
                title: "Hechtingstheorie",
                desc: "Inzichten over emotionele veiligheid, nabijheid en de rol van voorspelbaarheid bij relatieopbouw."
              },
              {
                title: "Contextuele benadering",
                desc: "Loyaliteitsdynamiek, onzichtbare bindingen en het belang van rechtvaardigheid en erkenning in families."
              },
              {
                title: "Stressregulatie",
                desc: "Inzichten over stresspieken, herstel en het onderscheid tussen stress-reacties en intentioneel gedrag."
              },
              {
                title: "Structurele gezinsbenadering",
                desc: "Grenzen, hiërarchie, rollen en de organisatie van het dagelijks gezinsleven als basis voor stabiliteit."
              },
              {
                title: "Communicatietheorie",
                desc: "Interactionele patronen, non-verbale communicatie en het verschil tussen intentie en effect."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-base font-semibold mb-2" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Van theorie naar praktijk
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              De methodiek vertaalt deze theoretische kaders naar concrete, toepasbare tools en werkvormen. 
              Hierdoor werk je evidence-informed: je interventies zijn theoretisch onderbouwd, maar blijven 
              praktisch en werkbaar in de dagelijkse begeleiding. Voor een uitgebreide toelichting, zie de{" "}
              <Link href="/wetenschappelijke-basis" className="font-semibold hover:opacity-70 transition" style={{ color: INK }}>
                wetenschappelijke basis pagina
              </Link>.
            </p>
          </div>
        </section>

        {/* WAT STIEFKOMPAS NIET IS */}
        <section id="wat-niet" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Wat Stiefkompas bewust niet is
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Positionering ontstaat niet alleen door te benoemen wat je wel doet, maar ook door expliciet 
              te maken wat je niet doet. Dit helpt professionals om te begrijpen waar Stiefkompas voor staat 
              en waar het verschil ligt met andere benaderingen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Geen protocollair werken",
                desc: "Stiefkompas is geen stappenplan of protocol dat je mechanisch doorloopt. Het biedt een kader voor analyse en duiding, maar vraagt altijd om professioneel oordeel en maatwerk. Elke situatie is anders en vraagt om andere accenten en interventies."
              },
              {
                title: "Geen schuld toewijzen",
                desc: "De methodiek zoekt niet naar individuele schuldigen of 'de oorzaak' van problemen. In plaats daarvan kijkt Stiefkompas naar circulaire patronen, posities en onderlinge beïnvloeding binnen het systeem. Gedrag wordt begrepen in context, niet als karakter of intentie."
              },
              {
                title: "Geen quick fixes of tips",
                desc: "Stiefkompas biedt geen snelle oplossingen of lijstjes met tips. Verandering in gezinsdynamiek vraagt tijd, afstemming en diepgang. De methodiek helpt om onderliggende patronen te begrijpen en duurzame verschuivingen in gang te zetten, niet om symptomen te onderdrukken."
              },
              {
                title: "Geen vervanging van specialistische hulp",
                desc: "Stiefkompas is een methodiek voor begeleiding van samengestelde gezinnen, maar geen behandeling voor ernstige psychische problematiek, complexe trauma's of acute crisissituaties. In die gevallen is verwijzing naar gespecialiseerde hulp noodzakelijk."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Waar Stiefkompas wel voor staat
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Stiefkompas staat voor zorgvuldig, systemisch werken met aandacht voor de unieke dynamiek van 
              samengestelde gezinnen. Het biedt professionals een theoretisch onderbouwd kader, praktische 
              tools en een gedeelde taal om complexe gezinssituaties te begeleiden met rust, overzicht en 
              professionaliteit.
            </p>
          </div>
        </section>

        {/* VOOR WIE IS DEZE METHODIEK */}
        <section id="voor-wie" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Voor wie is deze methodiek bedoeld?
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              Stiefkompas is ontwikkeld voor professionals die werken met samengestelde gezinnen en behoefte 
              hebben aan structuur, overzicht en theoretische verankering in hun begeleiding.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>
                  Professionele achtergrond
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: TEXT }}>
                  {[
                    "Stiefgezinscoaches en relatietherapeuten",
                    "Maatschappelijk werkers in jeugdzorg en gezinshulp",
                    "Systeemtherapeuten en gezinstherapeuten",
                    "Wijkteamprofessionals en ambulant begeleiders",
                    "Jeugdhulpverleners en gezinscoaches"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: INK }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>
                  Voorkennis en werkhouding
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
                  Je hoeft geen specialist in stiefgezinnen te zijn, maar de methodiek vraagt wel om:
                </p>
                <ul className="space-y-2 text-sm" style={{ color: TEXT }}>
                  {[
                    "Basiskennis van systemisch denken of interesse om dit te leren",
                    "Ervaring met gezinsbegeleiding of relatiewerk",
                    "Bereidheid tot reflectie en professionele ontwikkeling",
                    "Aandacht voor context, posities en relatiedynamiek"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'rgba(14, 42, 71, 0.5)' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>
                  Passende context
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
                  Stiefkompas past bij professionals die:
                </p>
                <ul className="space-y-2 text-sm" style={{ color: TEXT }}>
                  {[
                    "Zelfstandig of in teamverband werken met gezinnen",
                    "Ruimte hebben voor diepgang en meerdere contactmomenten",
                    "Werken vanuit begeleiding, niet crisis-interventie",
                    "Behoefte hebben aan structuur zonder rigide protocollen"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'rgba(14, 42, 71, 0.5)' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>
                  Minder geschikt voor
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
                  De methodiek is minder geschikt wanneer:
                </p>
                <ul className="space-y-2 text-sm" style={{ color: TEXT }}>
                  {[
                    "Je uitsluitend korte, incidentele contacten hebt",
                    "Het gezin in acute crisis verkeert (eerst stabiliseren)",
                    "Er sprake is van ernstige psychiatrie of complexe trauma's",
                    "Je een directieve, protocol-gedreven aanpak zoekt"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'rgba(14, 42, 71, 0.3)' }}>×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Passende match?
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Als je werkt met samengestelde gezinnen en jezelf herkent in bovenstaande beschrijving, dan biedt 
              Stiefkompas waarschijnlijk waardevolle verdieping voor jouw praktijk. In de training leer je de 
              methodiek stap voor stap toepassen en krijg je alle tools en materialen om direct aan de slag te gaan.
            </p>
          </div>
        </section>

        {/* WAT JE IN DE TRAINING KRIJGT */}
        <section id="training" className="scroll-mt-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: INK }}>
              Wat je in de Stiefkompas training krijgt
            </h2>
            
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: TEXT }}>
              De methodiek op deze pagina geeft je inzicht in het Kompasmodel. De training brengt het tot leven 
              en maakt je bekwaam om zelfstandig met Stiefkompas te werken in je praktijk.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Alle tools & materialen",
                desc: "Rollenkaart, Communicatiekompas, Grenzenkompas, Stiefkompas Plan en meer – download, print en gebruik direct."
              },
              {
                title: "Casuïstiek & voorbeelden",
                desc: "Geanonimiseerde cases, rollenspellen en uitgewerkte scenario's om je te laten zien hoe het werkt."
              },
              {
                title: "Formats & checklists",
                desc: "Intake-format, evaluatieformulier, casusoverzicht en stappenplannen voor methodisch werken."
              },
              {
                title: "Voorbeeldscripts",
                desc: "Gespreksteksten en vraagstellingen die je kunt gebruiken tijdens intake, analyse en interventie."
              },
              {
                title: "Intervisie & supervisie",
                desc: "Begeleiding bij je eigen cases, feedback op je werk en leren van collega-professionals."
              },
              {
                title: "Certificering",
                desc: "Na afronding kun je certificeren als Stiefkompas-professional met aantoonbare kwalificatie."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-base font-semibold mb-2" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-3xl" style={{ borderColor: BORDER }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: INK }}>
              Resultaat
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT }}>
              Na de training kun je zelfstandig intake voeren, analyseren met het Kompasmodel, prioriteren, 
              een plan opstellen en gezinnen begeleiden met de Stiefkompas-methodiek. Je werkt evidence-informed, 
              systemisch en met vertrouwen in complexe gezinssituaties.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 lg:py-32 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(to bottom right, ${INK}, #1a3a5c, ${INK})` }}>
          <div className="relative space-y-10 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Klaar om met Stiefkompas te werken?
            </h2>

            <div className="space-y-6 text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl transition-colors hover:bg-white/10 border-2 border-white text-white"
              >
                Of neem eerst contact op
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full shadow-xl hover:opacity-80 transition-all duration-300 z-50 group"
          style={{ background: INK }}
          aria-label="Terug naar boven"
        >
          <svg 
            className="h-6 w-6 transform group-hover:-translate-y-1 transition-transform text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

function PijlerBlock({
  n,
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
  const INK = "#0E2A47";
  const TEXT = "rgba(14, 42, 71, 0.72)";
  const BORDER = "rgba(14, 42, 71, 0.14)";

  const introParagraphs = intro
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative">
      <div className="relative overflow-hidden rounded-2xl border bg-white p-8 lg:p-10 shadow-sm" style={{ borderColor: BORDER }}>
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full px-4 py-2" style={{ background: 'rgba(14, 42, 71, 0.08)' }}>
            <span className="text-2xl font-semibold" style={{ color: INK }}>{n}</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: INK }}>Pijler</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: INK }}>
            {title}
          </h2>

          <div className="text-lg leading-relaxed max-w-3xl space-y-4" style={{ color: TEXT }}>
            {introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 4 KAARTEN */}
          <div className="grid gap-6 lg:grid-cols-4 pt-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: INK }}>
                Signalen in de praktijk
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: TEXT }}>
                {signals.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span style={{ color: INK }}>•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Theoretische basis
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{theory}</p>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Werkzame elementen
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: TEXT }}>
                {elements.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span style={{ color: INK }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Gekoppelde instrumenten
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: TEXT }}>
                {instruments.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span style={{ color: INK }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OPTIONAL SECTIONS */}
          {definitions && (
            <div className="rounded-xl border bg-white p-6 mt-6 max-w-3xl" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                {definitions.title}
              </h3>
              <dl className="space-y-3">
                {definitions.items.map((item) => (
                  <div key={item.term}>
                    <dt className="text-sm font-semibold inline" style={{ color: INK }}>{item.term}:</dt>{" "}
                    <dd className="text-sm inline leading-relaxed" style={{ color: TEXT }}>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {extra && (
            <div className="rounded-xl border bg-white p-6 mt-6 max-w-3xl" style={{ borderColor: BORDER }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Belangrijk
              </p>
              <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{extra}</p>
            </div>
          )}

          {patterns && (
            <div className="rounded-xl border bg-white p-6 mt-6 max-w-3xl" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Typische communicatiepatronen in stiefgezinnen
              </h3>
              <div className="space-y-4">
                {patterns.map((pattern) => (
                  <div key={pattern.name}>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: INK }}>{pattern.name}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{pattern.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ritualCategories && (
            <div className="rounded-xl border bg-white p-6 mt-6 max-w-3xl" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
                Drie categorieën rituelen
              </h3>
              <div className="space-y-4">
                {ritualCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: INK }}>{category.name}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{category.description}</p>
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