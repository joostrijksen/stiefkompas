export type SearchItem = {
  title: string;
  href: string;
  section: string;      // bijv. "Over Stiefkompas", "Voor coaches", "Tools"
  type?: string;        // bijv. "Pagina", "Tool", "FAQ", "Publicatie"
  description?: string; // korte snippet
  keywords?: string[];  // extra zoekwoorden
};

export const SEARCH_INDEX: SearchItem[] = [
  // ===== Pagina’s =====
  {
    title: "Introductie",
    href: "/",
    section: "Over Stiefkompas",
    type: "Pagina",
    description: "Introductie van Stiefkompas: taal, structuur en richting voor samengestelde gezinnen.",
    keywords: ["stiefgezin", "kompasmodel", "methodiek"],
  },
  {
    title: "Methode",
    href: "/methode",
    section: "Over Stiefkompas",
    type: "Pagina",
    keywords: ["kompasmodel", "vijf pijlers", "aanpak"],
  },
  {
    title: "Wetenschappelijke basis",
    href: "/wetenschappelijke-basis",
    section: "Over Stiefkompas",
    type: "Pagina",
    keywords: ["evidence-informed", "hechting", "systeemtheorie", "loyaliteit"],
  },
  { title: "Publicaties", href: "/publicaties", section: "Over Stiefkompas", type: "Pagina" },
  { title: "FAQ", href: "/faq", section: "Over Stiefkompas", type: "Pagina", keywords: ["veelgestelde vragen"] },

  {
    title: "Voor coaches",
    href: "/voor-coaches",
    section: "Voor coaches",
    type: "Pagina",
    keywords: ["coachpraktijk", "begeleiding", "stiefcoaching"],
  },
  {
    title: "Training & certificering",
    href: "/training-certificering",
    section: "Voor coaches",
    type: "Pagina",
    keywords: ["online opleiding", "certificering", "modules"],
  },
  {
    title: "Materialen & tools",
    href: "/materialen-tools",
    section: "Voor coaches",
    type: "Pagina",
    keywords: ["tooling", "downloads", "werkkaarten"],
  },
  { title: "Ontwikkelaar", href: "/ontwikkelaar", section: "Voor coaches", type: "Pagina" },
  { title: "Contact", href: "/contact", section: "Algemeen", type: "Pagina" },

  // ===== Tools (jouw slugs) =====
  {
    title: "Gezinskompas Scan",
    href: "/materialen-tools/gezinskompas-scan",
    section: "Tools",
    type: "Tool",
    description: "Diagnostische scan om dynamiek, posities, grenzen en communicatie te verhelderen.",
    keywords: ["scan", "diagnostiek", "analyse"],
  },
  {
    title: "Rollenkaart",
    href: "/materialen-tools/rollenkaart",
    section: "Tools",
    type: "Tool",
    keywords: ["rollen", "ouderrol", "stiefouderrol", "partnerrol"],
  },
  {
    title: "Loyaliteitsdiagram",
    href: "/materialen-tools/loyaliteitsdiagram",
    section: "Tools",
    type: "Tool",
    keywords: ["loyaliteit", "klem", "positie", "verbondenheid"],
  },
  {
    title: "Grenzenkompas",
    href: "/materialen-tools/grenzenkompas",
    section: "Tools",
    type: "Tool",
    keywords: ["grenzen", "verwachtingen", "verantwoordelijkheid"],
  },
  {
    title: "Weekstructuurkaart",
    href: "/materialen-tools/weekstructuurkaart",
    section: "Tools",
    type: "Tool",
    keywords: ["wisselweek", "ritme", "overgangen", "planning"],
  },
  {
    title: "Communicatiekompas",
    href: "/materialen-tools/communicatiekompas",
    section: "Tools",
    type: "Tool",
    keywords: ["communicatie", "escalatie", "patronen", "cirkel"],
  },
  {
    title: "Gezinsrituelenkaart",
    href: "/materialen-tools/gezinsrituelenkaart",
    section: "Tools",
    type: "Tool",
    keywords: ["rituelen", "verbinding", "gezinscultuur"],
  },
  {
    title: "Stiefkompas Plan (routeboek)",
    href: "/materialen-tools/stiefkompas-plan",
    section: "Tools",
    type: "Tool",
    keywords: ["plan", "doelen", "afspraken", "routeboek"],
  },

  // ===== FAQ (optioneel: voeg je belangrijkste vragen toe) =====
  {
    title: "Is Stiefkompas evidence-based?",
    href: "/faq",
    section: "FAQ",
    type: "FAQ",
    keywords: ["evidence-based", "evidence-informed", "wetenschappelijk"],
  },
  {
    title: "Kan Stiefkompas worden gebruikt zonder training?",
    href: "/faq",
    section: "FAQ",
    type: "FAQ",
    keywords: ["certificering", "tools", "kwaliteit"],
  },
];