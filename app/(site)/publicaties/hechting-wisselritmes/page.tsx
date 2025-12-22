import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hechting en stressregulatie bij wisselritmes – Stiefkompas",
  description:
    "Whitepaper over stresspieken bij wisselmomenten, hechtingsprocessen en praktische interventies voor rust en voorspelbaarheid binnen co-ouderschapsregelingen.",
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

export default function HechtingWisselritmesPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-28">
      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Whitepaper · Whitepapers
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0E2A47]">
          Hechting en stressregulatie bij wisselritmes
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Wisselmomenten in co-ouderschap zijn vaak de “spitsuren” van het samengestelde gezin.
          In deze whitepaper kijken we naar waarom overgangen stresspieken kunnen geven, hoe
          hechting en veiligheid hierin meespelen, en welke praktische interventies helpen om
          rust en voorspelbaarheid te herstellen — zonder dat je alles psychologisch hoeft te maken.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
            Leestijd ± 16–20 minuten
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Thema: hechting & veiligheid
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Thema: stressregulatie
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
            Wisselmomenten vragen het brein om te schakelen. Dat kan stress geven, zelfs als
            iedereen “het goed bedoelt”. Eerst reguleren, dan pas bespreken.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Signaal
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “Gedrag” rond overgangen is vaak een stresssignaal (alertheid, boosheid, terugtrekking)
            en niet simpelweg ongehoorzaamheid of onwil.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Wat helpt
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Voorspelbaarheid, rituelen, tempo omlaag, geen “grote gesprekken” op wisseldagen en
            een duidelijke taakverdeling tussen ouders.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inhoud</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <a className="text-sm text-[#0E2A47] hover:underline" href="#waarom-wissels-stress-geven">
            1. Waarom wisselmomenten stress kunnen geven
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#stress-signalen">
            2. Hoe stress zich laat zien (en vaak verkeerd wordt gelezen)
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#hechting-veiligheid">
            3. Hechting & veiligheid tijdens overgangen
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#overgangsrituelen">
            4. Overgangsrituelen: klein, herhaalbaar, effectief
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#wat-werkt-niet">
            5. Wat vaak niet werkt (en waarom)
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#interventies">
            6. Interventies: van “piek” naar “landing”
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#taakverdeling">
            7. Taakverdeling en rolhelderheid in co-ouderschap
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#koppeling-kompasmodel">
            8. Koppeling met het Kompasmodel
          </a>
        </div>
      </section>

      {/* Article body */}
      <section className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-5 prose-ul:mt-4 prose-ul:mb-6 prose-ol:mb-6 prose-strong:text-slate-900">
        <SectionHeading
          id="waarom-wissels-stress-geven"
          eyebrow="Hoofdstuk 1"
          title="Waarom wisselmomenten stress kunnen geven"
        />

        <p>
          Wisselmomenten zijn niet alleen praktische overdrachten (tas, jas, spullen), maar ook
          emotionele en lichamelijke schakelmomenten. Een kind gaat van het ene systeem naar het
          andere: andere regels, andere verwachtingen, andere routines en soms een andere sfeer.
        </p>

        <p>
          Dat schakelen kost energie. Ook wanneer beide huizen “goed” zijn. Het brein moet opnieuw
          inschatten: <strong>hoe werkt het hier?</strong> Wat mag wel, wat mag niet, wie is er,
          hoe is de stemming? Bij sommige kinderen levert dat een lichte spanning op, bij andere
          kinderen is het een duidelijke stresspiek.
        </p>

        <p>
          In samengestelde gezinnen wordt deze belasting vaak groter: er zijn niet twee volwassenen
          met één gezamenlijke set regels, maar meerdere volwassenen (ouders, stiefouders) met
          verschillende stijlen en verwachtingen. Dat maakt het voor een kind lastiger om te weten
          waar het aan toe is.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Belangrijk</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Stress bij wisselmomenten betekent niet dat het kind “niet wil” of “manipuleert”.
            Het betekent vaak dat het systeem (nog) te veel schakelkracht vraagt.
          </p>
        </div>

        <SectionHeading
          id="stress-signalen"
          eyebrow="Hoofdstuk 2"
          title="Hoe stress zich laat zien (en vaak verkeerd wordt gelezen)"
        />

        <p>
          Stress wordt vaak pas herkend als het “lastig” wordt: boosheid, weerstand, huilen,
          ruzie of terugtrekking. Maar stress kan ook stil zijn: hoofdpijn, buikpijn, drukte,
          perfectionisme, veel vragen, of juist afstandelijkheid.
        </p>

        <p>
          Het risico is dat volwassenen dit gedrag interpreteren als ongehoorzaamheid of gebrek aan
          respect. Daardoor gaat de reactie al snel richting corrigeren, overtuigen of straffen.
          En precies dat kan de stress verder verhogen.
        </p>

        <SubHeading title="Veelvoorkomende stress-signalen rond wissels" />
        <ul>
          <li>kort lontje, prikkelbaarheid of snel boos</li>
          <li>“testen” (grenzen opzoeken) direct na aankomst</li>
          <li>terugtrekken, stil worden of veel schermen</li>
          <li>lichamelijke klachten (buikpijn, hoofdpijn, moe)</li>
          <li>veel controle (“hoe laat”, “wat gaan we doen”, “waar ligt mijn…?”)</li>
          <li>plots intens claimen van een ouder (meer nabijheid vragen)</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Vuistregel
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Als gedrag vooral <strong>rond overgangen</strong> ontstaat, is het vaak stress-gestuurd.
            Dan helpt regulatie meestal meer dan correctie.
          </p>
        </div>

        <SectionHeading
          id="hechting-veiligheid"
          eyebrow="Hoofdstuk 3"
          title="Hechting & veiligheid tijdens overgangen"
        />

        <p>
          Hechting gaat niet alleen over liefde, maar over beschikbaarheid, voorspelbaarheid en
          veiligheid. Bij wisselmomenten wordt een kind in korte tijd geconfronteerd met:
          afscheid, opnieuw landen, opnieuw verbinden en opnieuw aanpassen.
        </p>

        <p>
          Voor sommige kinderen is de overgang vooral praktisch. Voor andere kinderen activeert
          het een dieper gevoel: “Ben ik welkom?”, “Word ik gezien?”, “Moet ik kiezen?”, “Is het
          veilig om te ontspannen?” Zeker in situaties met veel conflict tussen ouders kan een
          kind extra alert worden, omdat de overdracht beladen is.
        </p>

        <SubHeading title="Waarom ‘veiligheid’ praktisch moet worden" />
        <p>
          Veiligheid in samengestelde gezinnen is zelden alleen een gesprek. Het is vooral een
          ervaring. Kinderen voelen veiligheid in:
        </p>
        <ul>
          <li>een voorspelbare landing (“dit doen we altijd eerst”)</li>
          <li>een rustige toon en beperkt prikkelniveau</li>
          <li>een duidelijke, warme grens (“hier doen we het zo”)</li>
          <li>een ouder die stress herkent en vertraagt</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Mini-vignet
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Een kind komt terug van het andere huis, gooit de tas neer, reageert brutaal en zoekt
            direct conflict met de stiefouder. De neiging is “grenzen stellen”. De onderstroom kan
            zijn: het kind is overprikkeld, moet landen, en test onbewust: “Is het hier veilig?”
          </p>
        </div>

        <SectionHeading
          id="overgangsrituelen"
          eyebrow="Hoofdstuk 4"
          title="Overgangsrituelen: klein, herhaalbaar, effectief"
        />

        <p>
          Overgangsrituelen zijn korte, vaste handelingen die de overgang voorspelbaar maken.
          Ze zijn krachtig omdat ze het lichaam (zenuwstelsel) helpen schakelen: van alert naar
          ontspannen, van onderweg naar thuis.
        </p>

        <SubHeading title="Kenmerken van een goed overgangsritueel" />
        <ul>
          <li>kort (2–10 minuten)</li>
          <li>altijd hetzelfde (herhaalbaarheid = veiligheid)</li>
          <li>niet afhankelijk van “goed gedrag”</li>
          <li>rustig en prikkelarm</li>
          <li>gericht op landen, niet op opvoeden</li>
        </ul>

        <SubHeading title="Voorbeelden (kies er één)" />
        <ul>
          <li>even samen thee/water en 3 minuten “landen”</li>
          <li>tas op vaste plek, omkleden, korte check-in: “wat heb je nodig?”</li>
          <li>een vast muziekje in de auto bij aankomst</li>
          <li>eerste 15 minuten: geen vragen, geen correcties, alleen welkom</li>
          <li>een vaste “eerste taak” die voorspelbaar is (douchen, snack, kamer)</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-rose-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Tip voor ouders
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Plan opvoedcorrecties en “serieuze gesprekken” niet in het eerste uur na een wissel.
            Zet eerst in op landing. Daarna is er veel meer ruimte voor samenwerking.
          </p>
        </div>

        <SectionHeading
          id="wat-werkt-niet"
          eyebrow="Hoofdstuk 5"
          title="Wat vaak niet werkt (en waarom)"
        />

        <p>
          Veel goedbedoelde reacties werken averechts, omdat ze het stress-systeem verder
          activeren. Het kind zit nog in “schakelmodus” en kan daardoor minder reflecteren.
        </p>

        <SubHeading title="Wat vaak niet helpt" />
        <ul>
          <li>direct bespreken wat er “mis ging” in het andere huis</li>
          <li>lange gesprekken tijdens of vlak na de overdracht</li>
          <li>corrigeren op toon of houding terwijl stress nog hoog is</li>
          <li>vragen om excuses (“zeg sorry”) voordat het kind geland is</li>
          <li>discussies over regels tussen volwassenen waar het kind bij is</li>
        </ul>

        <SubHeading title="Waarom dit niet helpt" />
        <p>
          Omdat de boodschap (hoe redelijk ook) binnenkomt in een context van spanning. Het kind
          hoort dan vooral: “Ik ben niet oké” of “Ik moet me aanpassen om erbij te horen.”
          Dat vergroot de kans op verzet of afsluiting.
        </p>

        <SectionHeading
          id="interventies"
          eyebrow="Hoofdstuk 6"
          title="Interventies: van ‘piek’ naar ‘landing’"
        />

        <p>
          Het doel is niet om wisselmomenten “perfect” te maken, maar om de piek te verlagen en de
          landing voorspelbaar te maken. Hieronder staan interventies die in de praktijk vaak helpen.
        </p>

        <SubHeading title="De ‘landing-fase’ expliciet maken" />
        <p>
          Spreek als volwassenen af: <strong>de eerste 30–60 minuten</strong> na een wissel is landing.
          Dat betekent: lage prikkels, geen correcties (tenzij veiligheid), geen discussies over regels.
        </p>

        <SubHeading title="Stress eerst, gedrag later" />
        <p>
          Als je merkt dat een kind prikkelbaar of uitdagend is, reageer dan op de stress:
          “Je hoeft nu even niks. We zijn thuis. Pak eerst wat te drinken.” Daarna pas: “We praten
          straks even over de afspraak.”
        </p>

        <SubHeading title="Co-regulatie: jouw rust is besmettelijk" />
        <p>
          Kinderen reguleren mee op de volwassene. Een rustige, lage stem, langzamer bewegen en
          voorspelbaar handelen is vaak effectiever dan uitleg. Dit is geen zwakte, maar strategie.
        </p>

        <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Micro-interventie (30 sec)
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Zeg bij binnenkomst één zin die veiligheid geeft:{" "}
              <span className="font-semibold text-slate-900">
                “Fijn dat je er bent. Je mag eerst even landen.”
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Snelle oefening (5 min)
            </p>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li>1) Kies één landing-ritueel.</li>
              <li>2) Spreek af: eerste 45 min geen correcties.</li>
              <li>3) Noteer 1 stress-signaal dat jullie herkennen.</li>
              <li>4) Bedenk één zin die veiligheid geeft.</li>
            </ol>
          </div>
        </div>

        <SectionHeading
          id="taakverdeling"
          eyebrow="Hoofdstuk 7"
          title="Taakverdeling en rolhelderheid in co-ouderschap"
        />

        <p>
          Wisselmomenten gaan niet alleen over het kind, maar ook over de volwassen dynamiek.
          Onduidelijkheid over rollen (wie corrigeert, wie vangt op, wie bespreekt wat) vergroot
          stress. Zeker als een kind het gevoel krijgt dat volwassenen met elkaar strijden.
        </p>

        <SubHeading title="Praktische rolafspraken die vaak rust geven" />
        <ul>
          <li>De biologische ouder pakt in de landingfase de eerste lijn in contact en correctie.</li>
          <li>De stiefouder focust in de landingfase op sfeer, structuur en prikkelreductie.</li>
          <li>Regels worden besproken op neutrale momenten, niet tijdens wissels.</li>
          <li>“Andere huis”-commentaar wordt vermeden in bijzijn van het kind.</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Coachvraag
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “Welke 2–3 afspraken over rol en timing zouden jullie wisselmomenten morgen al 20% rustiger
            maken?”
          </p>
        </div>

        <SectionHeading
          id="koppeling-kompasmodel"
          eyebrow="Hoofdstuk 8"
          title="Koppeling met het Kompasmodel"
        />

        <p>
          In het Kompasmodel valt dit thema vooral onder <strong>Hechting & veiligheid</strong>, maar
          het raakt ook andere pijlers:
        </p>

        <ul>
          <li>
            <strong>Gezinsritme & rituelen:</strong> wissels worden draaglijker met vaste rituelen.
          </li>
          <li>
            <strong>Grenzen & structuur:</strong> duidelijke timing en rolafspraken verminderen strijd.
          </li>
          <li>
            <strong>Posities & loyaliteit:</strong> commentaar op “het andere huis” kan loyaliteitsstress
            verhogen.
          </li>
        </ul>

        <p>
          De kern is: hoe meer voorspelbaarheid en veiligheid je inbouwt rond de overgang, hoe minder
          escalatie je later hoeft te repareren. Wisselmomenten zijn daarmee een logisch startpunt
          voor verandering: klein, concreet en meetbaar.
        </p>
      </section>

      {/* Lees ook */}
      <section className="not-prose mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Lees ook
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
              Waarom gesprekken voorspelbaar ontsporen en hoe je het patroon onderbreekt zonder strijd.
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
            Van inzicht naar interventie
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            In de training leer je wisselmomenten analyseren met het Kompasmodel en vertalen naar een
            concreet plan: rituelen, rolafspraken, timing en interventies bij escalatie.
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