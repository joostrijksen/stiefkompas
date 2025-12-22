import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Communicatiepatronen in samengestelde gezinnen – Stiefkompas",
  description:
    "Een uitgebreide, praktisch toepasbare analyse van communicatiepatronen in samengestelde gezinnen: hoe patronen ontstaan, waarom ze hardnekkig zijn en hoe je ze doorbreekt.",
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

export default function CommunicatiepatronenPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-28">
      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Casusbespreking · Verdiepend artikel
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0E2A47]">
          Communicatiepatronen in samengestelde gezinnen
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Veel samengestelde gezinnen praten veel, maar komen toch steeds in dezelfde ruzies
          terecht. In dit artikel onderzoeken we waarom “beter communiceren” vaak niet voldoende
          is, welke patronen het meest voorkomen, en hoe je het gesprek weer veilig en werkbaar
          krijgt — zonder schuld, zonder strijd, met duidelijke stappen.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
            Leestijd ± 15–18 minuten
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Thema: communicatie & patronen
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Koppeling: Kompasmodel
          </span>
        </div>
      </header>

      {/* Quick summary */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Kernidee
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            In samengestelde gezinnen is communicatie vaak geen “inhoudelijk probleem”, maar een{" "}
            <span className="font-semibold text-slate-900">vast patroon</span>: reacties die elkaar
            voorspelbaar oproepen.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Waarom hardnekkig
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Patronen reguleren spanning. Ze lijken het probleem te vergroten, maar geven ook
            voorspelbaarheid, beschermen posities en vermijden pijnlijke thema’s (verlies,
            loyaliteit, angst).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Doorbraak
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            De doorbraak zit niet in nóg beter praten, maar in{" "}
            <span className="font-semibold text-slate-900">het patroon herkennen</span>, vertragen,
            en het gesprek weer veilig maken: eerst reguleren, dan pas inhoud.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inhoud</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <a className="text-sm text-[#0E2A47] hover:underline" href="#wat-is-een-patroon">
            1. Wat is een communicatiepatroon?
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#waarom-beladen">
            2. Waarom communicatie in stiefgezinnen extra beladen is
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#klassieke-patronen">
            3. Klassieke patronen die vaak voorkomen
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#functie-van-patronen">
            4. De functie van patronen: wat “lossen” ze op?
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#van-inhoud-naar-proces">
            5. Van inhoud naar proces: de Stiefkompas-ingang
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#micro-interventies">
            6. Micro-interventies die direct verschil maken
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#wat-helpt-niet">
            7. Wat helpt wél — en wat helpt juist niet
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#koppeling-kompasmodel">
            8. Koppeling met het Kompasmodel
          </a>
        </div>
      </section>

      {/* Article body */}
      <section className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-5 prose-ul:mt-4 prose-ul:mb-6 prose-ol:mb-6 prose-strong:text-slate-900">
        <SectionHeading
          id="wat-is-een-patroon"
          eyebrow="Hoofdstuk 1"
          title="Wat is een communicatiepatroon?"
        />

        <p>
          In veel gezinnen wordt communicatie gezien als iets dat je “beter” kunt doen: betere
          woorden, beter luisteren, betere afspraken. Soms helpt dat. Maar in samengestelde
          gezinnen blijkt vaak iets anders aan de hand: er is geen los gesprek dat misgaat, er
          is een <strong>herhalend script</strong>.
        </p>

        <p>
          Een communicatiepatroon is een terugkerende interactievorm waarin reacties elkaar
          bijna automatisch opvolgen. Het gaat niet om één zin of één persoon, maar om het
          totale proces: <strong>actie → reactie → tegenreactie</strong>. Als je het patroon
          kent, kun je vaak voorspellen hoe het gesprek eindigt, nog voordat het begonnen is.
        </p>

        <p>
          Dat is ook waarom sommige gezinnen zeggen: “We wisten al dat dit weer zou gebeuren.”
          Het patroon is voorspelbaar — en precies die voorspelbaarheid maakt het hardnekkig.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">In één zin</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Een communicatiepatroon is geen “misverstand”, maar een voorspelbare volgorde van
            reacties die zichzelf in stand houdt.
          </p>
        </div>

        <SectionHeading
          id="waarom-beladen"
          eyebrow="Hoofdstuk 2"
          title="Waarom communicatie in samengestelde gezinnen extra beladen is"
        />

        <p>
          In samengestelde gezinnen gaat communicatie bijna nooit alleen over de inhoud. Er spelen
          vaak drie onderliggende ladingen mee. Als je die niet meeneemt, ga je automatisch harder
          “op inhoud” — en dat maakt het patroon meestal sterker.
        </p>

        <SubHeading title="Loyaliteit" />
        <p>
          Een opmerking over gedrag kan door een kind (of ouder) worden gehoord als: “Jij hoort er
          minder bij” of “Jij moet kiezen.” Daardoor kan een simpel zinnetje een loyaliteitsalarm
          activeren. Het gesprek gaat dan niet meer over gedrag, maar over erbij horen.
        </p>

        <SubHeading title="Positie en legitimiteit" />
        <p>
          De stiefouder voelt vaak verantwoordelijkheid voor rust en regels, maar heeft niet
          automatisch dezelfde legitimiteit als een biologische ouder. Communicatie over grenzen
          raakt dan snel aan de vraag: “Wie mag dit zeggen?” Als die vraag onduidelijk is, wordt elk
          gesprek over regels een gesprek over positie.
        </p>

        <SubHeading title="Hechting en stress" />
        <p>
          Vooral rond wisselmomenten, conflicten met ex-partners, of periodes met veel druk kan
          stress hoog zijn. Hoog stressniveau betekent: minder reflectie, meer impuls, sneller
          misinterpretatie. Een gesprek dat “rationeel” bedoeld is, komt dan binnen als dreiging.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Herkenbaar?</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• “We hebben het er zó vaak over gehad, maar het verandert niet.”</li>
            <li>• “Het begint klein en eindigt altijd in ruzie.”</li>
            <li>• “Niemand voelt zich gehoord.”</li>
            <li>• “Afspraken werken één week en daarna is het weer terug bij af.”</li>
          </ul>
        </div>

        <SectionHeading
          id="klassieke-patronen"
          eyebrow="Hoofdstuk 3"
          title="Klassieke patronen die vaak voorkomen"
        />

        <p>
          Hieronder staan vier patronen die in samengestelde gezinnen veel voorkomen. Ze zijn niet
          “goed” of “fout”; ze zijn <strong>functioneel</strong> (ze doen iets), maar vaak tegen een
          hoge prijs.
        </p>

        <SubHeading title="Aanklagen ↔ verdedigen" />
        <p>
          Eén iemand benoemt wat er misgaat (“Jij doet nooit…”, “Het is altijd…”). De ander verdedigt
          (“Dat klopt niet”, “Je overdrijft”, “Maar jij dan…”). Daarna volgt escalatie of
          terugtrekking. Het gesprek gaat niet meer over het probleem, maar over gelijk krijgen.
        </p>

        <SubHeading title="Achtervolgen ↔ terugtrekken" />
        <p>
          De één zoekt contact, duidelijkheid en snel oplossen. De ander voelt druk en trekt zich
          terug (“Laat maar”, “Ik ga naar boven”). De achtervolger voelt zich verlaten en gaat harder
          duwen. De terugtrekker voelt zich overspoeld en sluit af.
        </p>

        <SubHeading title="Controleren ↔ saboteren" />
        <p>
          Als spanning hoog is, gaat iemand sturen: regels aanscherpen, toezicht houden, discussies
          winnen. De ander reageert met weerstand, ondermijnen, “vergeten”, of expres het
          tegenovergestelde doen. Beide partijen proberen grip te houden, maar creëren meer strijd.
        </p>

        <SubHeading title="Minimaliseren ↔ escaleren" />
        <p>
          De één maakt het klein (“Zo erg is het niet”, “Laat het los”). De ander voelt zich niet
          serieus genomen en wordt heftiger om gehoord te worden. De ene partij ziet “overdrijving”,
          de andere partij ziet “onverschilligheid”.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-rose-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mini-vignet</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            De stiefouder zegt: “Hij luistert nooit naar mij.” De ouder reageert: “Hij heeft het al
            zo moeilijk, doe niet zo streng.” De stiefouder voelt zich alleen staan en wordt feller.
            Het kind merkt spanning, gaat uitdagend doen en het gesprek eindigt in: “Zie je wel!”
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Onderstroom:</span> positie & steun. Niet:
            “luisteren”.
          </p>
        </div>

        <SectionHeading
          id="functie-van-patronen"
          eyebrow="Hoofdstuk 4"
          title="De functie van patronen: wat “lossen” ze op?"
        />

        <p>
          Patronen blijven bestaan omdat ze iets <strong>regelen</strong>. Vaak onbewust. Ze brengen
          voorspelbaarheid, beschermen tegen pijn, organiseren positie en reguleren stress.
        </p>

        <ul>
          <li>Ze brengen voorspelbaarheid (“dit is hoe het altijd gaat”).</li>
          <li>Ze beschermen tegen pijn (“als we ruzie maken, hoeven we niet te praten over verlies”).</li>
          <li>Ze organiseren positie (“wie heeft het voor het zeggen?”, “wie wordt gehoord?”).</li>
          <li>Ze reguleren stress (ontladen via conflict, of dempen via terugtrekken).</li>
        </ul>

        <p>
          Daardoor werkt “nog beter communiceren” soms averechts. Als je alleen de woorden verandert
          maar het patroon intact laat, vindt het patroon een andere route om terug te keren. Het
          gezin ervaart dan: “We doen echt ons best, maar het helpt niet.”
        </p>

        <SectionHeading
          id="van-inhoud-naar-proces"
          eyebrow="Hoofdstuk 5"
          title="Van inhoud naar proces: de Stiefkompas-ingang"
        />

        <p>
          Binnen Stiefkompas begin je niet met “Wie heeft gelijk?” of “Welke regel is goed?” Je begint
          met: <strong>Wat gebeurt er hier steeds opnieuw?</strong>
        </p>

        <SubHeading title="Het patroon een naam geven" />
        <p>
          Een simpele maar krachtige stap is het patroon een neutrale naam geven. Bijvoorbeeld: “de
          Tornado”, “de Rechtbank”, “de Stilte-muur”, “de Controle-lus”. Dat maakt het bespreekbaar
          zonder iemand te beschuldigen.
        </p>

        <SubHeading title="Het moment vóór de escalatie vinden" />
        <p>
          Bijna elk patroon heeft een <strong>voorfase</strong>: een blik, een toon, een zucht, een
          gevoel van onrecht, een herinnering aan eerdere situaties. Als je die voorfase herkent, kun
          je ingrijpen vóórdat het gesprek onveilig wordt.
        </p>

        <SubHeading title="Eerst reguleren, dan bespreken" />
        <p>
          In een hoog-stressmoment is reflectie beperkt. Je kunt dan geen “goed gesprek” voeren.
          Daarom: eerst vertragen, veiligheid herstellen, en pas daarna de inhoud.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Praktische coachvraag
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “Als dit gesprek een bekend script is: wat is dan jullie vaste rolverdeling? Wie begint?
            Wie verdedigt? Wie haakt af? Wie escaleert? En wat levert dat ieder op?”
          </p>
        </div>

        <SectionHeading
          id="micro-interventies"
          eyebrow="Hoofdstuk 6"
          title="Micro-interventies die direct verschil maken"
        />

        <p>
          Hieronder staan micro-interventies (klein en concreet) die je direct kunt inzetten. Ze
          werken omdat ze het patroon <strong>onderbreken</strong> in plaats van de inhoud “winnen”.
        </p>

        <SubHeading title="De pauzeknop-afspraak" />
        <p>
          Spreek een neutraal woord af dat betekent: “We zitten in het patroon.” Bijvoorbeeld “pauze”,
          “kompas”, of “tweede poging”. Wie het zegt, krijgt geen discussie; het is een gezamenlijke
          afspraak.
        </p>

        <SubHeading title="Eén zin per beurt" />
        <p>
          Patronen groeien door tempo. Eén zin per beurt haalt snelheid eruit. Het dwingt tot eenvoud
          en voorkomt dat oude dossiers worden opengetrokken.
        </p>

        <SubHeading title="Herformuleren zonder inhoud te veranderen" />
        <p>
          Niet: “Hij luistert nooit.” <br />
          Wel: “Ik merk dat ik me buitengesloten voel bij afspraken.” <br />
          Niet om “soft” te doen, maar om het gesprek te verplaatsen van aanval naar ervaring.
        </p>

        <SubHeading title="Het gesprek parkeren (met terugkommoment)" />
        <p>
          Parkeren is geen vermijden, zolang er een terugkommoment is. Bijvoorbeeld: “We stoppen nu en
          pakken dit morgen om 20:30 op, 20 minuten.” Zo voorkom je eindeloze, slopende discussies.
        </p>

        <SubHeading title="De rol van de biologische ouder expliciet maken" />
        <p>
          In veel samengestelde gezinnen helpt het als de biologische ouder de eerste lijn in
          correcties pakt, zeker in de beginfase. Dat ondersteunt positie en voorkomt dat de stiefouder
          onbedoeld de “boeman” wordt.
        </p>

        <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mini-vignet</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Een gesprek begint met een kleine irritatie aan tafel. Binnen twee minuten gaat het over
              “altijd” en “nooit”, daarna over opvoedstijlen, daarna over de ex-partner. Iedereen is
              emotioneel leeg.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">Interventie:</span> parkeer het onderwerp met tijdslot
              en spreek af dat “ex” geen gespreksthema is tijdens conflicten.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Snelle oefening (5 min)
            </p>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li>1) Benoem het patroon (naam).</li>
              <li>2) Ieder zegt: “Mijn rol is vaak…”</li>
              <li>3) Ieder zegt: “Wat ik eigenlijk nodig heb is…”</li>
              <li>4) Kies één micro-afspraak voor deze week.</li>
            </ol>
          </div>
        </div>

        <SectionHeading
          id="wat-helpt-niet"
          eyebrow="Hoofdstuk 7"
          title="Wat helpt wél — en wat helpt juist niet"
        />

        <SubHeading title="Wat vaak niet helpt (of zelfs verergert)" />
        <ul>
          <li>Het gesprek voeren op piekstress (wisselmomenten, moe, laat op de avond).</li>
          <li>Discussies winnen met argumenten; patronen reageren niet op logica.</li>
          <li>“Eén grote gezinsvergadering” zonder veiligheid of structuur.</li>
          <li>Stiefouder en kind in directe machtsstrijd zonder rugdekking/positie.</li>
          <li>Het verleden erbij halen (“vorige maand deed je ook…”).</li>
        </ul>

        <SubHeading title="Wat wél helpt" />
        <ul>
          <li>Patroon herkennen en benoemen zonder beschuldiging.</li>
          <li>Tempo omlaag: pauze, één zin per beurt, tijdsloten.</li>
          <li>Positie herstellen: wie zet de lijn uit, wie ondersteunt?</li>
          <li>Reguleren vóór bespreken: eerst rust, dan inhoud.</li>
          <li>Kleine afspraken die haalbaar zijn in 7 dagen.</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Checklist voor thuis
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We herkennen ons “script” vroeg.
            </label>
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We hebben een pauzewoord.
            </label>
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We praten niet op piekstress.
            </label>
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We parkeren met terugkommoment.
            </label>
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We houden het bij één onderwerp.
            </label>
            <label className="flex gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5" /> We eindigen met één kleine afspraak.
            </label>
          </div>
        </div>

        <SectionHeading
          id="koppeling-kompasmodel"
          eyebrow="Hoofdstuk 8"
          title="Koppeling met het Kompasmodel"
        />

        <p>
          Communicatie is zelden een op zichzelf staande pijler. Binnen Stiefkompas koppel je
          communicatie altijd aan de andere pijlers, zodat je niet blijft hangen in “tips”. Drie
          koppelingen zijn vaak doorslaggevend.
        </p>

        <SubHeading title="Posities & loyaliteit" />
        <p>
          Wanneer posities onduidelijk zijn, wordt communicatie een strijd om invloed. Het gesprek gaat
          dan niet over de regel, maar over: “Wie mag dit bepalen?” Loyaliteit maakt die strijd extra
          gevoelig, vooral voor kinderen.
        </p>

        <SubHeading title="Hechting & veiligheid" />
        <p>
          Als stress hoog is, wordt de communicatie scherper en sneller. Veiligheid is dan niet alleen
          emotioneel, maar ook praktisch: timing, voorspelbaarheid, ritme.
        </p>

        <SubHeading title="Grenzen & structuur" />
        <p>
          Vage grenzen en wisselende regels maken gesprekken eindeloos. Structuur (wie doet wat, wanneer
          bespreken we wat) verkleint de kans op escalatie.
        </p>

        <p>
          Zo wordt communicatie geen los probleem, maar een venster op het hele systeem. En dat is
          precies waarom het Kompasmodel in samengestelde gezinnen zoveel rust kan geven: het brengt
          overzicht, taal en volgorde.
        </p>
      </section>

      {/* Lees ook */}
      <section className="not-prose mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Lees ook
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            href="/publicaties/hechting-wisselritmes"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Whitepaper
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              Hechting en stressregulatie bij wisselritmes
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Over stresspieken bij overgangen en wat helpt om veiligheid en rust te herstellen.
            </p>
          </Link>

          <Link
            href="/publicaties/loyaliteit-positie"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Theoretisch artikel
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              Loyaliteit en positie in stiefsystemen
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Over verticale/horizontale loyaliteit en waarom positieherstel cruciaal is.
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
            Werken met patronen vraagt om structuur en oefening
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            In de training leer je patronen analyseren met het Kompasmodel, passende micro-interventies
            kiezen en dit vertalen naar concrete gezinsafspraken. Je ontvangt daarnaast verdiepende
            documenten en casusmateriaal.
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