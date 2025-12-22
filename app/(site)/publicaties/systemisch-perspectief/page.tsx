import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "De dynamiek van samengestelde gezinnen in systemisch perspectief – Stiefkompas",
  description:
    "Onderzoeksartikel (theorie): een theoretische verkenning van systeemdynamiek binnen stiefgezinnen en de implicaties voor hulpverlening en coaching.",
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

export default function SystemischPerspectiefPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-28">
      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Onderzoeksartikel · Theorie
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0E2A47]">
          De dynamiek van samengestelde gezinnen in systemisch perspectief
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Samengestelde gezinnen functioneren niet als “een kerngezin met extra personen”, maar als
          een systeem met meerdere subsystemen, overlappende loyaliteiten en verschillende
          geschiedenis-lijnen. In dit onderzoeksartikel verkennen we systemische principes die
          helpen om terugkerende spanningen te begrijpen — en vertalen we deze naar implicaties voor
          hulpverlening en coaching.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
            Leestijd ± 18–22 minuten
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Focus: systeemdynamiek
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Implicaties: hulpverlening
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <KeyTerm>subsystemen</KeyTerm>
          <KeyTerm>grenzen</KeyTerm>
          <KeyTerm>loyaliteit</KeyTerm>
          <KeyTerm>positie</KeyTerm>
          <KeyTerm>ritme</KeyTerm>
        </div>
      </header>

      {/* Abstract + takeaway */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Abstract</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Dit artikel beschrijft samengestelde gezinnen als meersystemen: er zijn parallelle
            gezinsgeschiedenissen, meerdere opvoedculturen en verschuivende posities. Door
            systemische lens (grenzen, subsystemen, feedbacklussen en betekenisgeving) worden
            veelvoorkomende spanningen begrijpelijker en minder moraliserend. Tot slot vertalen we
            deze inzichten naar werkzame principes voor professionals: van “probleem oplossen” naar
            “systeem stabiliseren”.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Belangrijkste conclusie
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Veel conflict in stiefgezinnen is geen teken van “slechte intenties”, maar van
            <span className="font-semibold text-slate-900"> onduidelijke grenzen en posities</span>
            binnen een complex systeem. Eerst stabiliseren, dan verdiepen.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inhoud</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <a className="text-sm text-[#0E2A47] hover:underline" href="#inleiding">
            1. Inleiding: het stiefgezin als meersysteem
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#kernbegrippen">
            2. Kernbegrippen: grenzen, subsystemen en feedback
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#subsystemen">
            3. Subsystemen en coalities in stiefgezinnen
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#grenzen">
            4. Grenzen: diffuus, rigide of functioneel
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#loyaliteit-positie">
            5. Loyaliteit en positie als systeemkrachten
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#feedbacklussen">
            6. Terugkerende patronen als feedbacklussen
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#implicaties">
            7. Implicaties voor hulpverlening en coaching
          </a>
          <a className="text-sm text-[#0E2A47] hover:underline" href="#koppeling-kompasmodel">
            8. Koppeling met het Kompasmodel
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-5 prose-ul:mt-4 prose-ul:mb-6 prose-ol:mb-6 prose-strong:text-slate-900">
        <SectionHeading id="inleiding" eyebrow="Hoofdstuk 1" title="Inleiding: het stiefgezin als meersysteem" />

        <p>
          Systemisch kijken betekent: niet alleen focussen op individueel gedrag, maar op het geheel
          van relaties, posities, regels (expliciet en impliciet) en betekenissen. In samengestelde
          gezinnen is deze lens extra waardevol, omdat de gezinsstructuur per definitie meervoudig is:
          er zijn meerdere huizen, meerdere loyaliteiten en vaak meerdere opvoedculturen.
        </p>

        <p>
          Waar het kerngezin vaak één gedeelde geschiedenis heeft, ontstaat in het stiefgezin een
          samensmelting van geschiedenis-lijnen. Gezinsleden delen niet dezelfde herinneringen,
          “normale” routines en vanzelfsprekendheden. Daardoor kunnen relatief kleine gebeurtenissen
          (een afspraak, een opmerking, een regel) groot voelen: ze raken het vraagstuk van erbij horen
          en positie.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Werkdefinitie
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            We spreken hier over “samengestelde gezinnen” als gezinnen waarin (tenminste) één ouder een
            kind heeft uit een eerdere relatie en er (mogelijk) een nieuwe partner en/of nieuwe kinderen
            bijkomen, met of zonder co-ouderschap.
          </p>
        </div>

        <SectionHeading id="kernbegrippen" eyebrow="Hoofdstuk 2" title="Kernbegrippen: grenzen, subsystemen en feedback" />

        <p>
          In systemische theorie worden gezinnen vaak begrepen als systemen met subsystemen en grenzen.
          Een systeem streeft naar stabiliteit (homeostase). Wanneer omstandigheden veranderen — zoals
          na scheiding, herpartnering en nieuwe gezinsleden — ontstaan nieuwe patronen om stabiliteit te
          herstellen.
        </p>

        <SubHeading title="Subsystemen" />
        <p>
          Subsystemen zijn deelgroepen met eigen functies, rollen en interacties. Denk aan: ouder-kind,
          partnerrelatie, broers/zussen, co-ouder-subsyteem tussen ex-partners, en stiefouder-kind.
          In stiefgezinnen bestaan deze subsystemen naast elkaar, maar niet altijd in harmonie.
        </p>

        <SubHeading title="Grenzen" />
        <p>
          Grenzen reguleren nabijheid en afstand: wie hoort waar bij, wie beslist waarover, en welke
          informatie gaat waarheen. Grenzen kunnen te diffuus zijn (“alles loopt door elkaar”) of te
          rigide (“we sluiten af en praten nergens over”). Functionele grenzen zijn helder én flexibel.
        </p>

        <SubHeading title="Feedbacklussen" />
        <p>
          Gedrag in systemen is zelden lineair: A veroorzaakt B. Vaker is het circulair: A roept B op,
          B roept A op, en zo ontstaat een patroon. Dit verklaart waarom “het gesprek voeren” soms niet
          helpt: het patroon blijft hetzelfde, alleen de inhoud wisselt.
        </p>

        <SectionHeading id="subsystemen" eyebrow="Hoofdstuk 3" title="Subsystemen en coalities in stiefgezinnen" />

        <p>
          Een stiefgezin kent vaak meerdere ‘centra’. De partnerrelatie (nieuwe couple) moet zich
          vormen, terwijl het ouder-kind subsysteem al bestaat. Tegelijk is er meestal een extern
          subsysteem: het co-ouderschap met de ex-partner(s), inclusief afspraken, emoties en
          geschiedenis.
        </p>

        <SubHeading title="Coalities en triangulatie" />
        <p>
          Wanneer spanning oploopt, zoekt een systeem vaak een ‘derde punt’ om spanning te verdelen.
          Dat kan onbewust leiden tot coalities: ouder + kind tegenover stiefouder, stiefouder + ouder
          tegenover kind, of kind tegenover de ex-partner. Triangulatie is niet “slecht gedrag”, maar
          een stressrespons van het systeem: het probeert draaglijkheid te creëren.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-rose-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Praktische observatie
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Als de partnerrelatie zwak staat, komt de druk vaak in het opvoedveld terecht. Dan wordt
            “gedrag van kinderen” de plek waar spanningen tussen volwassenen zichtbaar worden.
          </p>
        </div>

        <SectionHeading id="grenzen" eyebrow="Hoofdstuk 4" title="Grenzen: diffuus, rigide of functioneel" />

        <p>
          Grenzen zijn in stiefgezinnen extra complex, omdat de grens niet samenvalt met één huis of
          één relatie. Een kind heeft recht op verbondenheid met beide ouders, maar moet ook landen in
          een nieuw huishouden. Daarin kan een spanning ontstaan: betrokkenheid versus autonomie.
        </p>

        <SubHeading title="Diffuus: ‘alles loopt door elkaar’" />
        <p>
          Diffuse grenzen herken je aan onduidelijkheid: wie bepaalt de regels, wie corrigeert, wie
          vertelt wat aan wie? In diffuse systemen ontstaan vaak conflicten over “kleine dingen”, omdat
          die kleine dingen feitelijk grensmarkeringen zijn.
        </p>

        <SubHeading title="Rigide: ‘we praten nergens over’" />
        <p>
          Rigide grenzen beschermen tegen conflict, maar beperken ook afstemming. In rigide systemen
          blijven misverstanden langer bestaan en wordt gedrag sneller geïnterpreteerd als onwil in
          plaats van spanning.
        </p>

        <SubHeading title="Functioneel: helder en flexibel" />
        <p>
          Functionele grenzen betekenen: helderheid over rollen en beslissingen, met ruimte voor nuance.
          Bijvoorbeeld: de biologische ouder voert de eerste lijn in correctie (zeker in beginfase),
          terwijl de stiefouder mee-structureert en mee-draagt — zonder in een machtsstrijd te belanden.
        </p>

        <SectionHeading
          id="loyaliteit-positie"
          eyebrow="Hoofdstuk 5"
          title="Loyaliteit en positie als systeemkrachten"
        />

        <p>
          Loyaliteit en positie zijn centrale krachten in stiefgezinnen. Veel interacties zijn te
          begrijpen als pogingen om positie te beschermen (wie hoort waar) en loyaliteit te bewaken
          (wie mag je liefhebben zonder schuld).
        </p>

        <SubHeading title="Loyaliteit als spanning, niet als keuze" />
        <p>
          Kinderen worden soms gezien als “kiezen” voor een ouder of tegen een stiefouder. Systemisch
          gezien gaat het vaker om spanning: het kind probeert verbondenheid met beide ouders te
          behouden. Als volwassenen dat interpreteren als afwijzing, ontstaat escalatie.
        </p>

        <SubHeading title="Positie: legitimiteit en tempo" />
        <p>
          Legitimiteit van de stiefouder groeit meestal met tijd en ervaring. Als een stiefouder te
          snel een ouderpositie inneemt (zeker als de partnerrelatie nog fragiel is), kan het systeem
          reageren met weerstand. Een werkprincipe is daarom: <strong>tempo in positie</strong>.
        </p>

        <SectionHeading
          id="feedbacklussen"
          eyebrow="Hoofdstuk 6"
          title="Terugkerende patronen als feedbacklussen"
        />

        <p>
          Veelvoorkomende patronen in stiefgezinnen zijn circulair. Bijvoorbeeld: een stiefouder
          structureert (om rust te brengen), een kind test (om positie/veiligheid te checken), de ouder
          twijfelt (loyaliteit), de stiefouder voelt zich alleen (positie), wordt strenger (controle),
          en het kind wordt feller (verzet). Het patroon is dan stabiel, maar ongewenst.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Systeemvraag
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “Als dit patroon zichzelf in stand houdt: wat is de verborgen functie? Welke spanning
            voorkomt het patroon dat we moeten voelen of bespreken?”
          </p>
        </div>

        <SectionHeading
          id="implicaties"
          eyebrow="Hoofdstuk 7"
          title="Implicaties voor hulpverlening en coaching"
        />

        <p>
          Systemisch werken in stiefgezinnen vraagt om een andere volgorde dan “probleem → oplossing”.
          Vaak is de eerste stap: stabiliseren van structuur, rollen, timing en communicatie. Pas dan
          wordt emotionele verdieping draaglijk.
        </p>

        <SubHeading title="Werkprincipe 1: normaliseren zonder bagatelliseren" />
        <p>
          Veel stiefgezinnen voelen schaamte: “Waarom lukt dit ons niet?” Systemisch normaliseren
          helpt: deze complexiteit is inherent. Dat haalt druk weg en voorkomt moraliserende labels.
        </p>

        <SubHeading title="Werkprincipe 2: focus op grenzen en positie vóór inhoud" />
        <p>
          Conflicten over regels zijn vaak conflicten over legitimiteit. Als je direct op de regel gaat
          zitten, mis je de onderstroom. Vragen naar rol, positie en steun zijn vaak effectiever.
        </p>

        <SubHeading title="Werkprincipe 3: werk met ritme en overgangen" />
        <p>
          Overgangen (wissels, school, bedtijd) zijn stresspunten. Als het ritme beter staat, dalen
          escalaties. Dat is praktisch, meetbaar en geeft snel winst.
        </p>

        <SubHeading title="Werkprincipe 4: kleine interventies, groot effect" />
        <p>
          In systemen werken kleine veranderingen vaak als hefboom. Eén duidelijke rolafspraak, één
          overgangsritueel, of één communicatieafspraak kan het hele patroon beïnvloeden.
        </p>

        <SectionHeading id="koppeling-kompasmodel" eyebrow="Hoofdstuk 8" title="Koppeling met het Kompasmodel" />

        <p>
          Het Kompasmodel sluit aan bij systemisch denken door het stiefgezin te benaderen via meerdere
          pijlers tegelijk. In dit artikel raken we vooral:
        </p>

        <ul>
          <li>
            <strong>Posities & loyaliteit:</strong> legitimiteit, klemposities, verbondenheid.
          </li>
          <li>
            <strong>Hechting & veiligheid:</strong> stress, landing, voorspelbaarheid.
          </li>
          <li>
            <strong>Grenzen & structuur:</strong> rolafspraken, grenzen tussen subsystemen.
          </li>
          <li>
            <strong>Communicatie & patronen:</strong> feedbacklussen en escalaties.
          </li>
          <li>
            <strong>Gezinsritme & rituelen:</strong> ritme als stabiliserende kracht.
          </li>
        </ul>

        <p>
          De praktische vertaalslag is: niet één “perfecte afspraak” zoeken, maar een set van
          samenhangende kleine stabilisaties die het systeem rustiger maken. Vanuit die rust kan
          verbinding groeien.
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
              Waarom gesprekken voorspelbaar ontsporen en hoe je patronen onderbreekt.
            </p>
          </Link>

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
              Over stresspieken bij overgangen en hoe ritme en rituelen veiligheid vergroten.
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
            Van theorie naar een werkbaar plan
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            In de training leer je systemische dynamieken vertalen naar concrete interventies met het
            Kompasmodel: rolhelderheid, grenzen, ritme en communicatie-afspraken die het gezin
            stabiliseren.
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