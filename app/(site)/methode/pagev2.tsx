import type { Metadata } from "next";
import Link from "next/link";
import { KompasModel } from "../../components/kompas-model";

export const metadata: Metadata = {
  title: "Stiefkompas – De Methodiek",
  description:
    "De volledige uitleg van de Stiefkompas-methodiek: waarom samengestelde gezinnen andere begeleiding vragen, hoe het Kompasmodel werkt en wat dit betekent voor jouw praktijk.",
};

export default function MethodePage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-[#2C4B9A]/22 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        {/* Intro */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              De methodiek
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Begeleiding van samengestelde gezinnen vraagt om een andere bril
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
              Stiefkompas is geen verzameling tools of interventies. Het is een methodiek
              die je helpt om systematisch te kijken naar wat er speelt in een samengesteld
              gezin — en vanuit dat inzicht gericht te begeleiden.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        
        {/* DE UITDAGING */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
              De uitdaging: samengestelde gezinnen vragen om een specifieke bril
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Veel professionals ervaren dat samengestelde gezinnen anders werken dan eerste
              gezinnen. Wat in reguliere gezinsbegeleiding vanzelfsprekend is, vraagt hier
              om nuance en aanvullend inzicht.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ChallengeCard
              title="Andere context"
              examples={[
                "Meerdere huishoudens met eigen regels en rituelen",
                "Wisselweken die overgangen en stress veroorzaken",
                "Verliesverwerking die nog loopt terwijl er nieuw wordt opgebouwd",
                "Loyaliteitsconflicten die subtiel maar krachtig zijn",
              ]}
            />

            <ChallengeCard
              title="Aannames die nuance vragen"
              examples={[
                "\"Als iedereen zich uitspreekt, komt er ruimte\" kan kinderen in loyaliteitsconflict brengen",
                "\"Betrokkenheid betekent meeverantwoordelijkheid\" past niet altijd bij de stiefouderrol",
                "\"Gelijkwaardigheid is wenselijk\" maar posities zijn fundamenteel verschillend",
              ]}
            />

            <ChallengeCard
              title="Behoefte aan structuur"
              examples={[
                "Een helder kader om complexe dynamiek te duiden",
                "Taal om het onzichtbare bespreekbaar te maken",
                "Samenhang tussen tools en interventies",
                "Houvast bij vragen waar geen standaardantwoord op is",
              ]}
            />

            <ChallengeCard
              title="Impliciete uitgangspunten"
              examples={[
                "We werken allemaal vanuit aannames - vaak onbewust",
                "Deze aannames sturen welke vragen we stellen",
                "En wie we aanspreken op wat",
                "Bewustzijn hiervan helpt professioneler handelen",
              ]}
            />
          </div>

          <div className="rounded-3xl border border-teal-200/50 bg-gradient-to-br from-teal-50/50 to-white p-8">
            <p className="text-base md:text-lg font-semibold text-slate-900 mb-3">
              Herkenbaar?
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              Je zet je volledige expertise in en wilt het gezin echt helpen. Toch merk je
              dat interventies anders landen dan verwacht. Patronen blijven terugkeren.
              Je vraagt je af: "Wat mist dit gezin nog? Welk aanvullend inzicht zou helpen?"
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Dat gevoel van "er is iets extra's nodig" herkennen veel professionals die met
              samengestelde gezinnen werken. Stiefkompas biedt dat aanvullende kader.
            </p>
          </div>
        </section>

        {/* WAT STIEFKOMPAS TOEVOEGT */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
              Wat Stiefkompas toevoegt aan je bestaande expertise
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Stiefkompas bouwt voort op wat je al kunt en weet. Het biedt aanvullend wat
              vaak ontbreekt: een helder kader specifiek voor samengestelde gezinnen, met
              expliciete uitgangspunten en systematische structuur.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <SolutionCard
              number="1"
              title="Expliciete uitgangspunten"
              description="Geen neutraliteit, maar bewuste keuzes. Stiefkompas maakt expliciet waar het voor staat en waarom bepaalde interventies wel of niet passen."
              color="teal"
            />

            <SolutionCard
              number="2"
              title="Het Kompasmodel als kader"
              description="Vijf pijlers die samen de complexiteit van samengestelde gezinnen dekken. Dit model biedt taal, structuur en overzicht."
              color="blue"
            />

            <SolutionCard
              number="3"
              title="Methodische route"
              description="Van duiden naar planvorming naar interventies. Niet ad hoc handelen, maar systematisch werken aan wat het gezin nodig heeft."
              color="rose"
            />
          </div>

          <div className="rounded-3xl border border-teal-200/50 bg-gradient-to-br from-teal-50/50 to-white p-8">
            <p className="text-base md:text-lg font-semibold text-slate-900 mb-3">
              Wat dit concreet oplevert
            </p>
            <ul className="grid gap-3 text-base text-slate-700">
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">✓</span>
                <span>Je kunt je professionele keuzes helder verantwoorden</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">✓</span>
                <span>Gezinnen krijgen inzicht in onderliggende dynamiek</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">✓</span>
                <span>Interventies sluiten aan bij de fase waarin het gezin zit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">✓</span>
                <span>Je werkt systematisch in plaats van ad hoc te reageren</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">✓</span>
                <span>Je hebt taal voor wat je observeert en waarom je bepaalde stappen zet</span>
              </li>
            </ul>
          </div>
        </section>

        {/* HET KOMPASMODEL */}
        <section className="space-y-10 border-t border-slate-200 pt-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
                Het Kompasmodel: vijf pijlers
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Het hart van Stiefkompas is het Kompasmodel. Dit model bestaat uit vijf
                pijlers die samen de dynamiek binnen een samengesteld gezin volledig dekken.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                De pijlers overlappen soms, maar bieden samen een compleet beeld. Ze helpen
                om te herkennen wat er speelt, waar spanning ontstaat en wat er nodig is.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 to-rose-50 rounded-3xl rotate-2" />
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-md border border-stone-200">
                <div className="w-full max-w-md mx-auto">
                  <KompasModel />
                </div>
              </div>
            </div>
          </div>

          {/* De 5 pijlers uitgebreid */}
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              De pijlers in detail
            </h3>

            {/* Pijler 1 */}
            <PijlerDetail
              number="1"
              title="Positie & Loyaliteit"
              color="teal"
              description="Deze pijler gaat over waar mensen staan in het gezinssysteem en naar wie ze loyaal zijn."
              keyQuestions={[
                "Welke posities zijn er in dit gezin?",
                "Naar wie is het kind loyaal?",
                "Welke verwachtingen zijn er over de stiefouderrol?",
                "Waar botsen loyaliteiten met elkaar?",
              ]}
              waaromBelangrijk="Kinderen kunnen niet kiezen tussen ouders. Een stiefouder heeft geen geschiedenis met het kind. Loyaliteitsconflicten zijn vaak de kern van spanning in samengestelde gezinnen."
              voorbeeld="Een kind voelt zich verplicht om negatief over de stiefouder te praten bij de andere biologische ouder, ook al is de relatie goed. Dit is een loyaliteitsconflict."
            />

            {/* Pijler 2 */}
            <PijlerDetail
              number="2"
              title="Hechting & Veiligheid"
              color="blue"
              description="Deze pijler richt zich op emotionele veiligheid, hechtingsrelaties en het tempo waarin nieuwe verbindingen ontstaan."
              keyQuestions={[
                "Voelt het kind zich veilig in beide huishoudens?",
                "Hoe gaat het gezin om met overgangen (wisselweken)?",
                "Welke hechtingsfiguren zijn er?",
                "Wat vraagt het kind aan voorspelbaarheid?",
              ]}
              waaromBelangrijk="Hechting bouw je langzaam op. Druk om te hechten aan een stiefouder werkt contraproductief. Veiligheid ontstaat door voorspelbaarheid en ruimte."
              voorbeeld="Een kind dat elke week wisselt tussen twee huizen heeft stress bij overgangen. Dit is geen weerstand, maar een hechtingsreactie die tijd en begeleiding vraagt."
            />

            {/* Pijler 3 */}
            <PijlerDetail
              number="3"
              title="Grenzen & Structuur"
              color="rose"
              description="Deze pijler kijkt naar wie waarover beslist, welke regels gelden en hoe opvoedverantwoordelijkheid is verdeeld."
              keyQuestions={[
                "Wie heeft welke bevoegdheden?",
                "Welke regels gelden in welk huishouden?",
                "Hoe worden grenzen afgestemd tussen co-ouders?",
                "Wat is de rol van de stiefouder in opvoeden?",
              ]}
              waaromBelangrijk="Onduidelijke grenzen leiden tot machtsstrijd, verwarring en frustratie. Heldere structuur geeft rust en voorkomt escalatie."
              voorbeeld="Een stiefouder wil grenzen stellen aan de stiefkinderen, maar voelt zich niet bevoegd. De biologische ouder verwacht juist dat de stiefouder zich meer bemoeit. Dit vraagt om expliciete afspraken."
            />

            {/* Pijler 4 */}
            <PijlerDetail
              number="4"
              title="Communicatie & Patronen"
              color="teal"
              description="Deze pijler onderzoekt hoe gezinsleden met elkaar praten, welke patronen zich herhalen en waar escalatie ontstaat."
              keyQuestions={[
                "Welke communicatiepatronen keren terug?",
                "Waar escaleert het gesprek?",
                "Welke aannames liggen onder gedrag?",
                "Hoe beïnvloeden mensen elkaar?",
              ]}
              waaromBelangrijk="Communicatie in samengestelde gezinnen is geladen door geschiedenis, pijn en wantrouwen. Circulaire patronen versterken elkaar en leiden tot herhaling."
              voorbeeld="Elke keer als de stiefouder iets zegt over opvoeding, trekt het kind zich terug. De biologische ouder springt in de verdediging. De stiefouder voelt zich buitengesloten en stopt met praten. Dit patroon herhaalt zich wekelijks."
            />

            {/* Pijler 5 */}
            <PijlerDetail
              number="5"
              title="Ritme & Rituelen"
              color="blue"
              description="Deze pijler richt zich op voorspelbaarheid, gezinsrituelen en de manier waarop het gezin structuur geeft aan de week."
              keyQuestions={[
                "Welke rituelen waren er in het eerste gezin?",
                "Welke nieuwe rituelen ontstaan?",
                "Hoe wordt voorspelbaarheid gecreëerd?",
                "Wat geeft verbinding zonder het oude uit te wissen?",
              ]}
              waaromBelangrijk="Rituelen geven houvast en verbinding. In samengestelde gezinnen zijn oude rituelen verdwenen. Nieuwe rituelen kunnen ontstaan zonder het verleden te negeren."
              voorbeeld="Het gezin creëert een nieuw 'vrijdagavond-pizzaritueel' in het nieuwe huis. Dit geeft verbinding zonder de oude 'zondagochtend-pannenkoeken' bij de andere ouder te vervangen."
            />
          </div>
        </section>

        {/* DE METHODISCHE ROUTE */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
              De methodische route: van duiden naar plan
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Stiefkompas volgt een systematische route van intake tot begeleiding. Elke stap
              bouwt voort op de vorige en sluit aan bij het Kompasmodel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RouteCard
              step="1"
              title="Intake & Verkenning"
              description="Wat is de hulpvraag? Welke gezinsstructuur is er? Wie zijn betrokken? Eerste duiding via het Kompasmodel."
              tools={["Gezinskompas Scan", "Genogram"]}
            />

            <RouteCard
              step="2"
              title="Analyse & Duiding"
              description="Wat speelt er per pijler? Waar ontstaat spanning? Welke patronen zijn zichtbaar? Welke loyaliteiten spelen een rol?"
              tools={["Loyaliteitsdiagram", "Communicatiekompas", "Rollenkaart"]}
            />

            <RouteCard
              step="3"
              title="Planvorming"
              description="Wat is het doel? Welke stappen zijn haalbaar? Welke afspraken maken we? Wie doet wat?"
              tools={["Stiefkompas Plan", "Grenzenkompas"]}
            />

            <RouteCard
              step="4"
              title="Begeleiding & Interventies"
              description="Uitvoeren van het plan. Aanpassen waar nodig. Evalueren van voortgang. Afsluiten of nieuwe cyclus."
              tools={["Weekstructuurkaart", "Gezinsrituelenkaart"]}
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Belangrijk om te weten
            </h3>
            <ul className="space-y-3 text-base text-slate-700">
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">•</span>
                <span>De route is iteratief — je kunt altijd terug naar analyse als nieuwe inzichten ontstaan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">•</span>
                <span>Tools worden pas ingezet als ze functioneel zijn, niet omdat het "moet"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">•</span>
                <span>Tempo wordt bepaald door het gezin, niet door de professional</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 shrink-0">•</span>
                <span>Soms is niet-handelen professioneler dan handelen</span>
              </li>
            </ul>
          </div>
        </section>

        {/* VOORBEELDCASUS */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
            Voorbeeld: hoe werkt dit in de praktijk?
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Casus: Lisa, Tom, Mara en de kinderen</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>Situatie:</strong> Lisa (biologische moeder) en Tom (stiefvader) zoeken hulp.
                Lisa's dochter Emma (11) en zoon Luc (8) wonen 50/50 bij Lisa en bij hun vader Mark.
                Tom woont sinds 2 jaar bij Lisa. Er is veel spanning: Emma is gesloten, Luc "luistert
                niet" volgens Tom, en Lisa voelt zich tussen Tom en de kinderen geklemd.
              </p>
            </div>

            <div className="space-y-4">
              <CasusStep
                title="Stap 1: Intake & Verkenning"
                content="Via de Gezinskompas Scan wordt duidelijk dat de spanning zich vooral concentreert rondom Pijler 1 (Positie & Loyaliteit) en Pijler 3 (Grenzen & Structuur). Emma voelt zich loyaal aan haar vader en niet vrij om Tom een plek te geven. Tom voelt zich buitengesloten en wil gezag, maar heeft geen heldere rol."
              />

              <CasusStep
                title="Stap 2: Analyse & Duiding"
                content="Met de Rollenkaart en het Loyaliteitsdiagram wordt zichtbaar dat Lisa verwacht dat Tom zich als 'mede-opvoeder' gedraagt, maar Emma ziet hem als 'vriend van mama'. Tom probeert grenzen te stellen, maar heeft daar formeel geen bevoegdheid voor. Dit leidt tot verzet van Emma en frustratie bij Tom. Lisa zit in een klempositionering: loyaal aan beide."
              />

              <CasusStep
                title="Stap 3: Planvorming"
                content="Het Stiefkompas Plan helpt om doelen te formuleren: (1) Tom krijgt eerst een vriendschappelijke rol zonder opvoedverantwoordelijkheid, (2) Lisa en Mark stemmen gezamenlijk regels af, (3) Tom ondersteunt Lisa, maar corrigeert niet zelf. Het Grenzenkompas maakt expliciet wie waarover beslist."
              />

              <CasusStep
                title="Stap 4: Begeleiding"
                content="In vervolgtraject oefenen Lisa en Tom met de nieuwe rolverdeling. Emma krijgt ruimte om Tom op haar tempo een plek te geven. De spanning neemt af omdat verwachtingen helder zijn en niemand klem zit. Na 6 maanden kan er voorzichtig worden gekeken naar uitbreiding van Tom's rol, als Emma daar aan toe is."
              />
            </div>

            <div className="rounded-2xl border border-teal-200/50 bg-teal-50/30 p-6">
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Wat maakt dit Stiefkompas-begeleiding?
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-teal-700 shrink-0">✓</span>
                  <span>Expliciete aandacht voor loyaliteitsconflict Emma</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-700 shrink-0">✓</span>
                  <span>Onderscheid tussen stiefouder- en ouderrol</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-700 shrink-0">✓</span>
                  <span>Herkennen klempositionering Lisa</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-700 shrink-0">✓</span>
                  <span>Tempo volgt hechtingsproces Emma-Tom</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-700 shrink-0">✓</span>
                  <span>Gebruik van specifieke Stiefkompas-tools</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WAT DIT VRAAGT VAN JOUW ALS COACH */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
              Wat dit vraagt van jou als professional
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Werken met Stiefkompas vraagt een andere houding dan eclectisch interventies
              toepassen. Het vraagt reflectie, geduld en bereidheid om eerst te duiden voordat
              je handelt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Je eigen uitgangspunten onderzoeken</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Wat vind jij vanzelfsprekend? Welke aannames gebruik je vaak? Stiefkompas
                vraagt dat je je eigen overtuigingen durft te bevragen en expliciet maakt
                vanuit welk kader je werkt.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Geduld met complexiteit</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Samengestelde gezinnen hebben tijd nodig. Druk om snel resultaat te boeken
                werkt contraproductief. Soms is niet-handelen professioneler dan handelen.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Methodisch werken</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Niet ad hoc reageren, maar systematisch analyseren en plannen. Tools worden
                ingezet wanneer ze functioneel zijn, niet omdat het "hoort".
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Reflectieve houding</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Waarom doe ik dit? Voor wie is dit helpend? In welke fase zit dit gezin?
                Stiefkompas vraagt dat je bewust keuzes maakt en deze kunt verantwoorden.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 pt-12">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 p-10 sm:p-14 text-white shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-teal-500/15 blur-2xl" />
            <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-rose-500/15 blur-2xl" />

            <div className="relative space-y-6 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Klaar om met Stiefkompas te werken?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                De methodiek leer je via de online training. Je krijgt toegang tot de
                volledige leeromgeving, alle tools en verdiepende modules. Na certificering
                kun je Stiefkompas professioneel inzetten in je praktijk.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/training-certificering"
                  className="inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white hover:bg-teal-700 transition shadow-lg"
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
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper components

function ChallengeCard({ title, examples }: { title: string; examples: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-900 mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-700">
        {examples.map((ex, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-teal-600 shrink-0">→</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({
  number,
  title,
  description,
  color,
}: {
  number: string;
  title: string;
  description: string;
  color: "teal" | "blue" | "rose";
}) {
  const colorClasses = {
    teal: {
      border: "border-teal-200/50",
      bg: "bg-gradient-to-br from-teal-50/50 to-white",
      number: "text-teal-700",
    },
    blue: {
      border: "border-blue-200/50",
      bg: "bg-gradient-to-br from-blue-50/50 to-white",
      number: "text-blue-700",
    },
    rose: {
      border: "border-rose-200/50",
      bg: "bg-gradient-to-br from-rose-50/50 to-white",
      number: "text-rose-700",
    },
  };

  const classes = colorClasses[color];

  return (
    <div className={`rounded-3xl border ${classes.border} ${classes.bg} p-6 space-y-3`}>
      <div className="flex items-center gap-3">
        <span className={`text-3xl font-bold ${classes.number}`}>{number}</span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
    </div>
  );
}

function PijlerDetail({
  number,
  title,
  color,
  description,
  keyQuestions,
  waaromBelangrijk,
  voorbeeld,
}: {
  number: string;
  title: string;
  color: "teal" | "blue" | "rose";
  description: string;
  keyQuestions: string[];
  waaromBelangrijk: string;
  voorbeeld: string;
}) {
  const colorClasses = {
    teal: {
      border: "border-teal-200/50",
      bg: "bg-gradient-to-br from-teal-50/30 to-white",
      accent: "text-teal-700",
      dot: "bg-teal-100",
    },
    blue: {
      border: "border-blue-200/50",
      bg: "bg-gradient-to-br from-blue-50/30 to-white",
      accent: "text-blue-700",
      dot: "bg-blue-100",
    },
    rose: {
      border: "border-rose-200/50",
      bg: "bg-gradient-to-br from-rose-50/30 to-white",
      accent: "text-rose-700",
      dot: "bg-rose-100",
    },
  };

  const classes = colorClasses[color];

  return (
    <div className={`rounded-3xl border ${classes.border} ${classes.bg} p-8 space-y-6`}>
      <div className="flex items-center gap-4">
        <span className={`text-4xl font-bold ${classes.accent}`}>{number}</span>
        <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
      </div>

      <p className="text-base text-slate-700 leading-relaxed">{description}</p>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-slate-900">Kernvragen bij deze pijler:</p>
        <ul className="space-y-2 text-sm text-slate-700">
          {keyQuestions.map((q, i) => (
            <li key={i} className="flex gap-2">
              <span className={`${classes.accent} shrink-0`}>•</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-900">Waarom belangrijk?</p>
        <p className="text-sm text-slate-700 leading-relaxed">{waaromBelangrijk}</p>
      </div>

      <div className={`rounded-2xl border ${classes.border} bg-white/60 p-4 space-y-2`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">Voorbeeld</p>
        <p className="text-sm text-slate-700 leading-relaxed italic">{voorbeeld}</p>
      </div>
    </div>
  );
}

function RouteCard({
  step,
  title,
  description,
  tools,
}: {
  step: string;
  title: string;
  description: string;
  tools: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-lg">
          {step}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">{description}</p>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Gebruikte tools
        </p>
        <ul className="space-y-1 text-xs text-slate-600">
          {tools.map((tool, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-teal-600">→</span>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CasusStep({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-700 leading-relaxed pl-4 border-l-2 border-teal-200">
        {content}
      </p>
    </div>
  );
}