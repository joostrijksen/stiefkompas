export type GlossaryMention = {
  moduleSlug: string;
  chapterSlug: string;
  blockSlug: string;
  label: string; // bijv. "1.1 Welkom bij Stiefkompas"
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  short: string; // 1 zin
  body: string; // korte uitleg (plain text is ok)
  mentions: GlossaryMention[];
  tags?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "positie",
    term: "Positie",
    short: "De plek (rol + verantwoordelijkheid) die iemand inneemt in het gezinssysteem.",
    body:
      "Met ‘positie’ bedoelen we niet iemands intentie, maar de functionele plek in het systeem: wie draagt verantwoordelijkheid, wie heeft gezag, wie ondersteunt. In stiefgezinnen raakt positie snel diffuus (bijv. stiefouder op ouderstoel, ouder uit positie), en dat geeft stress en verzet. Stiefkompas helpt om posities zichtbaar te maken en te herpositioneren.",
    mentions: [
      {
        moduleSlug: "module-1",
        chapterSlug: "hoofdstuk-1-introductie-en-positionering",
        blockSlug: "1-1-welkom-bij-stiefkompas",
        label: "1.1 Welkom bij Stiefkompas",
      },
    ],
    tags: ["systemisch", "ordening"],
  },
  {
    slug: "loyaliteit",
    term: "Loyaliteit",
    short: "De (vaak onzichtbare) verbondenheid en trouw die kinderen en volwassenen voelen.",
    body:
      "Loyaliteit is zelden een keuze; het is een binding. In stiefsystemen kunnen loyaliteiten meervoudig zijn en botsen (bijv. kind voelt druk om het nieuwe gezin te ‘steunen’ terwijl het ook trouw wil blijven aan de andere ouder). Loyaliteitsstress uit zich vaak in gedrag, terugtrekking of escalatie.",
    mentions: [
      {
        moduleSlug: "module-1",
        chapterSlug: "hoofdstuk-1-introductie-en-positionering",
        blockSlug: "1-1-welkom-bij-stiefkompas",
        label: "1.1 Welkom bij Stiefkompas",
      },
    ],
    tags: ["binding", "klempositie"],
  },
  {
    slug: "ordening",
    term: "Ordening",
    short: "Heldere volgorde: volwassenen dragen verantwoordelijkheid, kinderen hoeven dat niet.",
    body:
      "Ordening gaat over heldere ‘stoelverdeling’: wie hoort waar te zitten qua verantwoordelijkheid. In stiefgezinnen kan ordening schuiven door scheiding, nieuwe partner, co-ouderschap en stress. Als ordening ontbreekt, gaan kinderen vaak gedrag laten zien dat in feite ‘structuur vraagt’.",
    mentions: [
      {
        moduleSlug: "module-1",
        chapterSlug: "hoofdstuk-1-introductie-en-positionering",
        blockSlug: "1-1-welkom-bij-stiefkompas",
        label: "1.1 Welkom bij Stiefkompas",
      },
    ],
    tags: ["structuur", "veiligheid"],
  },
];