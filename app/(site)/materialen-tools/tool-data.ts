export type ToolSlug =
  | "gezinskompas-scan"
  | "rollenkaart"
  | "loyaliteitsdiagram"
  | "grenzenkompas"
  | "weekstructuurkaart"
  | "communicatiekompas"
  | "gezinsrituelenkaart"
  | "stiefkompas-plan";

export type ToolBaseContent = {
  slug: ToolSlug;
  title: string;
  seoDescription: string;
  intro: string;
  useCases: string[];
  howTo: string[];
  proTeaser: string;
};

export const TOOLS: Record<ToolSlug, ToolBaseContent> = {
  "gezinskompas-scan": {
    slug: "gezinskompas-scan",
    title: "Gezinskompas Scan",
    seoDescription:
      "Publieke uitleg van de Gezinskompas Scan. De volledige scan en interpretatiekaders zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "De Gezinskompas Scan brengt de dynamiek in het stiefgezin gestructureerd in beeld. In de basisvariant vind je uitleg over doel, toepassingsmomenten en de koppeling met het Kompasmodel.",
    useCases: [
      "Als startpunt van een traject (nulmeting en gezamenlijke taal).",
      "Als voorbereiding op het Stiefkompas Plan (focus aanbrengen).",
      "Als reflectiemoment bij evaluaties (wat is veranderd, wat blijft).",
    ],
    howTo: [
      "Introduceer het doel: inzicht creëren, niet oordelen.",
      "Gebruik de uitkomsten als gespreksstart, niet als conclusie.",
      "Koppel bevindingen aan pijlers en kies één eerste focuspunt.",
    ],
    proTeaser:
      "De pro-variant bevat de volledige vragenlijst, scoring per pijler, interpretatiekaders en doorvertaling naar werkvormen en het Stiefkompas Plan.",
  },

  rollenkaart: {
    slug: "rollenkaart",
    title: "Rollenkaart",
    seoDescription:
      "Publieke uitleg van de Rollenkaart. De volledige werkkaart en begeleidershandleiding zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "De Rollenkaart helpt om rollen in het samengestelde gezin te onderscheiden en bespreekbaar te maken. Het doel is helderheid creëren: wie is partner, wie is ouder, wie is stiefouder — en wat hoort bij welke rol?",
    useCases: [
      "Bij verwarring over opvoedverantwoordelijkheid en ‘wie gaat erover?’",
      "Als er spanningen zijn tussen partnerrol en ouderrol.",
      "Wanneer een stiefouder ‘te veel’ of juist ‘te weinig’ ruimte ervaart.",
    ],
    howTo: [
      "Start met het benoemen van de rollen, niet met het oplossen van het conflict.",
      "Laat elk gezinslid beschrijven wat hij/zij verwacht per rol.",
      "Formuleer één of twee concrete afspraken die rust geven.",
    ],
    proTeaser:
      "De pro-variant bevat de volledige kaart (print/werkblad), begeleidervragen, veelvoorkomende valkuilen en voorbeeldinterventies.",
  },

  loyaliteitsdiagram: {
    slug: "loyaliteitsdiagram",
    title: "Loyaliteitsdiagram",
    seoDescription:
      "Publieke uitleg van het Loyaliteitsdiagram. De volledige tool en begeleidersinstructie zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "Het Loyaliteitsdiagram maakt zichtbaar welke (vaak onzichtbare) loyaliteiten meespelen. In stiefgezinnen kunnen loyaliteiten tegelijk bestaan, botsen of ‘klem’ zetten — en dat vraagt om taal, erkenning en zorgvuldigheid.",
    useCases: [
      "Bij schuldgevoel, terugtrekgedrag of ‘kiezen’ tussen ouders.",
      "Als er snel defensiviteit ontstaat rond ex-partners of familie van herkomst.",
      "Wanneer kinderen ‘lastig’ gedrag vertonen rond overgangsmomenten.",
    ],
    howTo: [
      "Normaliseer loyaliteit: het is geen probleem, maar een gegeven.",
      "Breng lijnen/relaties in beeld zonder ‘waarom-vragen’ te forceren.",
      "Zoek erkenning vóór je naar afspraken of oplossingen gaat.",
    ],
    proTeaser:
      "De pro-variant bevat formats, begeleidervragen, klem-signalen, interventies en veilige formuleringen voor erkenning.",
  },

  grenzenkompas: {
    slug: "grenzenkompas",
    title: "Grenzenkompas",
    seoDescription:
      "Publieke uitleg van het Grenzenkompas. De volledige tool en werkkaart zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "Het Grenzenkompas helpt om verwachtingen, verantwoordelijkheden en grenzen concreet te maken. Het voorkomt dat ‘vage regels’ of impliciete aannames leiden tot irritatie en escalatie.",
    useCases: [
      "Bij discussies over opvoedregels, schermtijd, bedtijden en consequenties.",
      "Als een stiefouder begrenzing geeft maar daar geen mandaat voor voelt.",
      "Wanneer regels per huis verschillen en dat onrust geeft bij kinderen.",
    ],
    howTo: [
      "Maak onderscheid tussen: huisregels, opvoedregels en relationele grenzen.",
      "Werk van ‘wat willen we voorkomen’ naar ‘wat willen we wél’.",
      "Leg afspraken vast in korte, haalbare zinnen en evalueer na 2–3 weken.",
    ],
    proTeaser:
      "De pro-variant bevat het volledige werkblad, begeleidingsscript, voorbeeldafspraken en escalatiepreventie (wat te doen als het toch misgaat).",
  },

  weekstructuurkaart: {
    slug: "weekstructuurkaart",
    title: "Weekstructuurkaart",
    seoDescription:
      "Publieke uitleg van de Weekstructuurkaart. De volledige kaart en formats zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "De Weekstructuurkaart brengt ritme, wissels en overgangsmomenten in beeld. In stiefgezinnen zijn juist die overgangen vaak ‘stresspunten’ — voorspelbaarheid helpt dan enorm.",
    useCases: [
      "Bij wisselweken en spanningen rondom halen/brengen.",
      "Als er onrust is door verschillende routines per huis.",
      "Wanneer ‘lastig gedrag’ voorspelbaar samenvalt met overgangsmomenten.",
    ],
    howTo: [
      "Teken een realistische week (niet de ideale).",
      "Markeer overgangsmomenten en bepaal wat daar helpt (ritueel, check-in, rust).",
      "Maak één kleine structuurafspraak die iedereen kan volhouden.",
    ],
    proTeaser:
      "De pro-variant bevat printbare kaarten, invulformats, voorbeeldritmes en interventies voor overgangsstress.",
  },

  communicatiekompas: {
    slug: "communicatiekompas",
    title: "Communicatiekompas",
    seoDescription:
      "Publieke uitleg van het Communicatiekompas. De volledige analysetool en begeleidershandleiding zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "Het Communicatiekompas helpt patronen te herkennen: waar gaat het mis, wanneer escaleert het en wat houdt de cirkel in stand? Het doel is de ‘cyclus’ zichtbaar maken, zodat je samen een andere route kunt kiezen.",
    useCases: [
      "Bij terugkerende ruzies met steeds dezelfde uitkomst.",
      "Als gesprekken snel ‘kantelen’ naar verwijt, verdediging of terugtrekken.",
      "Wanneer kinderen het ‘symptoom’ lijken van een patroon tussen volwassenen.",
    ],
    howTo: [
      "Breng de cyclus neutraal in kaart (zonder schuldvraag).",
      "Benoem triggers, escalatiemomenten en herstelmomenten.",
      "Kies één interruptie: wat doen we anders bij het eerste signaal?",
    ],
    proTeaser:
      "De pro-variant bevat cirkelformats, gespreksvragen, micro-interventies en herstelstappen (reparatie na escalatie).",
  },

  gezinsrituelenkaart: {
    slug: "gezinsrituelenkaart",
    title: "Gezinsrituelenkaart",
    seoDescription:
      "Publieke uitleg van de Gezinsrituelenkaart. De volledige werkkaart en begeleidersvragen zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "De Gezinsrituelenkaart onderzoekt welke rituelen er al zijn en welke rituelen kunnen helpen bij verbinding en veiligheid. Het gaat niet om ‘nieuwe tradities afdwingen’, maar om passende rituelen die ieders geschiedenis respecteren.",
    useCases: [
      "Bij ‘het voelt niet als één gezin’ of afstand in het contact.",
      "Als feestdagen en verjaardagen gevoelig liggen.",
      "Wanneer overgangsmomenten vragen om een klein, herhaalbaar ritueel.",
    ],
    howTo: [
      "Inventariseer bestaande rituelen (per huis en per persoon).",
      "Kies één klein ritueel dat makkelijk herhaalbaar is.",
      "Evalueer: geeft dit meer rust/verbinding, of juist druk?",
    ],
    proTeaser:
      "De pro-variant bevat werkbladen, voorbeeldrituelen per fase, valkuilen en manieren om weerstand te normaliseren.",
  },

  "stiefkompas-plan": {
    slug: "stiefkompas-plan",
    title: "Stiefkompas Plan (routeboek)",
    seoDescription:
      "Publieke uitleg van het Stiefkompas Plan. Het volledige routeboek, formats en handleiding zijn beschikbaar voor gecertificeerde Stiefkompas-professionals.",
    intro:
      "Het Stiefkompas Plan is het routeboek waarin doelen, afspraken en evaluatiemomenten samenkomen. Het helpt om focus te houden en stap voor stap te werken, zonder de complexiteit van het stiefgezin te versimpelen.",
    useCases: [
      "Na de eerste verheldering: van inzicht naar concrete route.",
      "Bij meerdere onderwerpen tegelijk: prioriteren en faseren.",
      "Als ‘terugval’ dreigt: borging en herhaling van afspraken.",
    ],
    howTo: [
      "Formuleer doelen klein en observeerbaar (wat zien we anders?).",
      "Kies interventies per pijler, niet alles tegelijk.",
      "Plan evaluatiemomenten en maak bijsturen normaal.",
    ],
    proTeaser:
      "De pro-variant bevat het volledige routeboek (download/print), begeleidershandleiding en voorbeeldroutes per type gezinssituatie.",
  },
};

export const TOOL_SLUGS = Object.keys(TOOLS) as ToolSlug[];