import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loyaliteit en positie in stiefsystemen – Stiefkompas",
  description:
    "Theoretisch artikel (theorie): verticale en horizontale loyaliteit, klemposities, legitimiteit en impliciete gezinsverwachtingen in stiefsystemen.",
};

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div id={id} className="not-prose scroll-mt-28">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 shadow-sm">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C4B9A]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
          {title}
        </h2>
      </div>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <div className="not-prose mt-10">
      <h3 className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[#2C4B9A]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2C4B9A]" />
        {title}
      </h3>
    </div>
  );
}

function KeyTerm({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[12px] font-semibold text-slate-700">
      {children}
    </span>
  );
}

export default function LoyaliteitPositiePage() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-28">
      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Theoretisch artikel · Theorie
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0E2A47]">
          Loyaliteit en positie in stiefsystemen
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          In stiefgezinnen gaat spanning zelden alleen over regels of gedrag. Vaak raakt het
          aan diepere krachten: loyaliteit, erbij horen, en de vraag wie welke positie mag
          innemen. In dit artikel verkennen we verticale en horizontale loyaliteit, klemposities
          en impliciete gezinsverwachtingen — en wat dit betekent voor ouders, stiefouders,
          kinderen en professionals.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
            Leestijd ± 16–20 minuten
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Thema: posities & loyaliteit
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Systemische lens
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <KeyTerm>verticale loyaliteit</KeyTerm>
          <KeyTerm>horizontale loyaliteit</KeyTerm>
          <KeyTerm>klempositie</KeyTerm>
          <KeyTerm>legitimiteit</KeyTerm>
          <KeyTerm>impliciete verwachtingen</KeyTerm>
        </div>
      </header>

      {/* Quick summary */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Kernidee
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Loyaliteit is geen “keuze” van kinderen, maar een systeemkracht: verbondenheid die
            bescherming vraagt. Positie gaat over legitimiteit: wie mag wat zeggen en doen.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Waar het vaak misgaat
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Als volwassenen loyaliteit interpreteren als afwijzing of manipulatie, ontstaat strijd.
            De echte vraag is meestal: “Mag ik van iedereen houden zonder schuld?”
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Richting
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Rust ontstaat wanneer posities helder zijn, verwachtingen expliciet worden gemaakt en
            kinderen uit de klem worden gehaald: loyaliteit mag bestaan zonder bewijsdrang.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inhoud</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <a className="text-sm text-[#0E2A47] hover:underline" href="#begrippenkader">
            1. Begrippenkader: loyaliteit en positie
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#verticale-loyaliteit">
            2. Verticale loyaliteit: kind–ouder band
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#horizontale-loyaliteit">
            3. Horizontale loyaliteit: partnerrelatie & nieuwe gezinseenheid
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#klemposities">
            4. Klemposities: wanneer kiezen onmogelijk wordt
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#impliciete-verwachtingen">
            5. Impliciete gezinsverwachtingen en ‘onzichtbare regels’
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#legitimiteit">
            6. Legitimiteit en positie van de stiefouder
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#praktische-vertaling">
            7. Praktische vertaling: taal en interventies
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#koppeling-kompasmodel">
            8. Koppeling met het Kompasmodel
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-5 prose-ul:mt-4 prose-ul:mb-6 prose-ol:mb-6 prose-strong:text-slate-900">
        <SectionHeading
          id="begrippenkader"
          eyebrow="Hoofdstuk 1"
          title="Begrippenkader: loyaliteit en positie"
        />

        <p>
          In stiefsystemen is loyaliteit vaak het onzichtbare thema onder zichtbare conflicten.
          Het gaat zelden alleen over wat er gebeurt (regels, gedrag, planning), maar over wat het
          betekent: erbij horen, erkend worden en veilig verbonden kunnen blijven.
        </p>

        <p>
          <strong>Loyaliteit</strong> verwijst naar de (vaak onbewuste) band van verbondenheid,
          trouw en zorg tussen mensen. In gezinscontext gaat loyaliteit niet over “wie heeft gelijk”,
          maar over “wie hoort bij wie” en “wie draagt wie”.
        </p>

        <p>
          <strong>Positie</strong> verwijst naar de plek die iemand (mag) innemen in het systeem:
          wie heeft zeggenschap, wie heeft nabijheid, wie draagt verantwoordelijkheid, en wie heeft
          legitimiteit om grenzen te stellen.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Kernzin
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Loyaliteit gaat over verbondenheid; positie gaat over legitimiteit. In stiefgezinnen
            raken die twee elkaar voortdurend.
          </p>
        </div>

        <SectionHeading
          id="verticale-loyaliteit"
          eyebrow="Hoofdstuk 2"
          title="Verticale loyaliteit: de kind–ouder band"
        />

        <p>
          Verticale loyaliteit verwijst naar de asymmetrische relatie tussen kind en ouder. Het kind
          is afhankelijk, zoekt veiligheid en verbondenheid en ontwikkelt een diepgewortelde trouw
          aan beide ouders. Die loyaliteit is meestal geen bewuste keuze, maar een basislaag.
        </p>

        <SubHeading title="Waarom verticale loyaliteit zo krachtig is" />
        <p>
          Kinderen kunnen boos zijn, afwijzend doen of zich terugtrekken, maar loyaliteit blijft
          bestaan. In stiefcontext kan die loyaliteit sneller geactiveerd worden door situaties die
          voelen als vergelijking of competitie tussen ouders/huizen.
        </p>

        <SubHeading title="Wat er mis kan gaan in interpretatie" />
        <p>
          Volwassenen kunnen gedrag zien als “kiezen”, “manipuleren” of “je laten opzetten”.
          Systemisch gezien is het vaker een poging om verbondenheid te beschermen:{" "}
          <strong>“Als ik laat zien dat ik loyaal ben aan mijn ouder, hoef ik me minder schuldig te voelen.”</strong>
        </p>

        <SectionHeading
          id="horizontale-loyaliteit"
          eyebrow="Hoofdstuk 3"
          title="Horizontale loyaliteit: partnerrelatie en nieuwe gezinseenheid"
        />

        <p>
          Horizontale loyaliteit verwijst naar de (meer gelijkwaardige) band tussen partners.
          In het stiefgezin ontstaat een nieuwe partnerrelatie met verwachtingen: samen een huis,
          samen opvoeden, samen keuzes maken.
        </p>

        <p>
          Hier ontstaat vaak spanning: de partnerrelatie wil stabiliteit en een gezamenlijke lijn,
          terwijl de verticale loyaliteit van het kind ruimte vraagt voor beide ouders en beide huizen.
          Wanneer volwassenen horizontale loyaliteit (partner-alliantie) verwarren met “alles samen
          doen”, kan dat kinderen onder druk zetten.
        </p>

        <SubHeading title="Partneralliantie is nodig, maar timing is cruciaal" />
        <p>
          Een stevige partneralliantie geeft rust: volwassenen dragen samen en spreken elkaar
          onderling. Maar als die alliantie te snel naar buiten wordt gezet (“wij bepalen hier alles
          samen”), kan het kind dit ervaren als: “jullie tegen mij” — en dan reageert het systeem.
        </p>

        <SectionHeading
          id="klemposities"
          eyebrow="Hoofdstuk 4"
          title="Klemposities: wanneer kiezen onmogelijk wordt"
        />

        <p>
          Een klempositie ontstaat wanneer een kind het gevoel krijgt dat het móét kiezen tussen
          belangrijke mensen. Vaak gebeurt dit niet door expliciete druk (“kies”), maar door
          impliciete signalen: zuchten, opmerkingen, spanning, of een sfeer van competitie.
        </p>

        <SubHeading title="Hoe klemposities eruit kunnen zien" />
        <ul>
          <li>het kind houdt informatie achter om niemand te kwetsen</li>
          <li>het kind wordt ‘boodschapper’ tussen ouders (triangulatie)</li>
          <li>het kind gaat overcompenseren (extra braaf) of juist escaleren (druk ontladen)</li>
          <li>het kind toont weerstand richting stiefouder om loyaliteit te bewijzen</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-rose-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Mini-vignet
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Een kind komt terug van het andere huis en vertelt weinig. De stiefouder ervaart afstand
            (“ik hoor er niet bij”), de ouder vraagt door, het kind sluit af en wordt prikkelbaar.
            Onderstroom: het kind wil niemand teleurstellen en kiest voor “stilte” als bescherming.
          </p>
        </div>

        <SectionHeading
          id="impliciete-verwachtingen"
          eyebrow="Hoofdstuk 5"
          title="Impliciete gezinsverwachtingen en ‘onzichtbare regels’"
        />

        <p>
          Veel problemen ontstaan niet door uitgesproken regels, maar door verwachtingen die nooit
          expliciet zijn gemaakt. In stiefgezinnen botsen vaak twee “normaal”-werelden op elkaar:
          wat in huis A vanzelfsprekend is, kan in huis B vreemd of zelfs bedreigend voelen.
        </p>

        <SubHeading title="Voorbeelden van impliciete verwachtingen" />
        <ul>
          <li>“Als je hier woont, gedraag je je alsof dit je thuis is.”</li>
          <li>“De stiefouder moet zich gedragen als ouder (maar zonder ouderrechten).”</li>
          <li>“Kinderen moeten dankbaar zijn voor de nieuwe situatie.”</li>
          <li>“We praten niet over het andere huis.”</li>
          <li>“Het moet snel ‘normaal’ worden.”</li>
        </ul>

        <p>
          Wanneer deze verwachtingen niet benoemd worden, gaan mensen elkaar beoordelen op basis van
          hun eigen referentiekader. Dat leidt tot misinterpretaties: “hij respecteert mij niet”,
          “zij is te streng”, “hij is te laks” — terwijl het onderliggende probleem een botsing van
          onzichtbare regels is.
        </p>

        <SectionHeading
          id="legitimiteit"
          eyebrow="Hoofdstuk 6"
          title="Legitimiteit en positie van de stiefouder"
        />

        <p>
          De positie van de stiefouder is in veel stiefsystemen kwetsbaar. Er is wel verantwoordelijkheid
          (samenleven, sfeer, structuur), maar minder vanzelfsprekende legitimiteit. Dat is geen
          waardeoordeel, maar een realiteit van systeemlogica: legitimiteit groeit met tijd, ervaring en
          steun vanuit de biologische ouder.
        </p>

        <SubHeading title="Tempo in positie" />
        <p>
          Een werkbaar principe is: <strong>tempo in positie</strong>. In de beginfase is het vaak
          effectiever dat de biologische ouder de eerste lijn in correctie pakt, terwijl de stiefouder
          vooral ondersteunt, structureert en relatie bouwt.
        </p>

        <SubHeading title="Steun maakt positie mogelijk" />
        <p>
          Als de biologische ouder de stiefouder publiekelijk ondermijnt (“doe niet zo”, “laat maar”),
          zakt de legitimiteit weg en komt het systeem in strijd. Als de ouder steun uitspreekt (“ik sta
          achter deze afspraak”), wordt de positie van de stiefouder minder bedreigend voor het kind.
        </p>

        <SectionHeading
          id="praktische-vertaling"
          eyebrow="Hoofdstuk 7"
          title="Praktische vertaling: taal en interventies"
        />

        <p>
          Loyaliteit en positie worden hanteerbaar als ze bespreekbaar worden zonder beschuldiging.
          Drie ingangen helpen vaak direct: (1) loyaliteit normaliseren, (2) verwachtingen expliciet
          maken, en (3) rolafspraken maken die het kind uit de klem halen.
        </p>

        <SubHeading title="Taal die loyaliteit beschermt" />
        <ul>
          <li>“Je hoeft niet te kiezen. Het is oké om van iedereen te houden.”</li>
          <li>“Je mag het fijn hebben bij mama én bij papa.”</li>
          <li>“Als het hier anders is, betekent dat niet dat één huis beter is.”</li>
        </ul>

        <SubHeading title="Taal die positie herstelt (zonder machtsstrijd)" />
        <ul>
          <li>“In dit huis is dit de afspraak. Ik (ouder) draag die afspraak.”</li>
          <li>“We bespreken opvoedregels tussen volwassenen, niet met jou ertussen.”</li>
          <li>“We gaan dit in kleine stappen doen, het hoeft niet meteen ‘als één gezin’ te voelen.”</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Coachvraag (veilig en scherp)
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “Welke impliciete verwachting leeft hier, en wie betaalt daar de prijs voor?”
          </p>
        </div>

        <SectionHeading
          id="koppeling-kompasmodel"
          eyebrow="Hoofdstuk 8"
          title="Koppeling met het Kompasmodel"
        />

        <p>
          Dit thema raakt de kern van Stiefkompas: <strong>Posities & loyaliteit</strong>. Maar het
          staat nooit los. In het Kompasmodel zie je vaak deze koppelingen:
        </p>

        <ul>
          <li>
            <strong>Communicatie & patronen:</strong> loyaliteit stuurt onderstromen in gesprekken.
          </li>
          <li>
            <strong>Grenzen & structuur:</strong> rolhelderheid voorkomt strijd over legitimiteit.
          </li>
          <li>
            <strong>Hechting & veiligheid:</strong> klemposities verhogen stress en onveiligheid.
          </li>
          <li>
            <strong>Gezinsritme & rituelen:</strong> vaste routines verminderen “bewijsdrang” en spanning.
          </li>
        </ul>

        <p>
          De rode draad: als je loyaliteit beschermt en positie zorgvuldig opbouwt, daalt de strijd
          vaak vanzelf. Niet omdat problemen verdwijnen, maar omdat het systeem minder hoeft te vechten
          om basisveiligheid en erkenning.
        </p>
      </section>

      {/* Lees ook */}
      <section className="not-prose mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Lees ook
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            href="/publicaties/systemisch-perspectief"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Onderzoeksartikel
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              De dynamiek van samengestelde gezinnen in systemisch perspectief
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Een theoretische verkenning van subsystemen, grenzen en feedbacklussen in stiefgezinnen.
            </p>
          </Link>

          <Link
            href="/publicaties/communicatiepatronen"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Casusbespreking
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              Communicatiepatronen in samengestelde gezinnen
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Waarom gesprekken voorspelbaar ontsporen en hoe je patronen onderbreekt zonder strijd.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 pt-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Verdieping voor professionals
          </p>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Loyaliteit en positie praktisch hanteerbaar maken
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            In de training leer je werken met klemposities, legitimiteit en rolhelderheid binnen het
            Kompasmodel, en vertaal je dit naar concrete gezinsafspraken die de spanning verlagen.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-[#0E2A47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
            >
              Lees meer over de training
            </Link>

            <Link
              href="/publicaties"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Terug naar publicaties
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}