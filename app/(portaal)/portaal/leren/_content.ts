// app/(portaal)/portaal/leren/_content.ts

export type Assignment = {
  id: string;
  title: string;
  prompt: string;
  placeholder?: string;
};

export type LessonVideo = {
  provider: "youtube" | "vimeo" | "url";
  src: string; // youtube/vimeo: id, url: volledige url
  title?: string;
};

export type QuizQuestion =
  | {
      id: string;
      type: "mc";
      question: string;
      options: string[];
      correctIndex?: number;
      explanation?: string;
    }
  | {
      id: string;
      type: "open";
      question: string;
      placeholder?: string;
      guidance?: string;
    };

export type LessonQuiz = {
  title?: string;
  passingScore?: number;
  questions: QuizQuestion[];
};

/* -----------------------------
   Sections (8 vaste onderdelen)
------------------------------ */

export type LessonSectionKind =
  | "intro"
  | "doelen"
  | "kern"
  | "verdieping"
  | "praktijk"
  | "reflectie"
  | "opdrachten"
  | "lescheck";

export const SECTION_ORDER: LessonSectionKind[] = [
  "intro",
  "doelen",
  "kern",
  "verdieping",
  "praktijk",
  "reflectie",
  "opdrachten",
  "lescheck",
];

export const SECTION_TITLES: Record<LessonSectionKind, string> = {
  intro: "Introvideo",
  doelen: "Wat ga je leren",
  kern: "Kern",
  verdieping: "Verdieping",
  praktijk: "Praktijk & casuïstiek",
  reflectie: "Reflectie",
  opdrachten: "Opdrachten",
  lescheck: "Lescheck",
};

/* -----------------------------
   Content reference
------------------------------ */

export type LessonContentKey = string;
// voorbeeld: "module-1/les-1-intro" of "module-2/les-3-rollenkaart"

export type Lesson = {
  slug: string;
  title: string;

  /**
   * Voortaan géén volledige inhoud meer in _content.ts
   * Alleen een verwijzing naar een los contentbestand.
   */
  contentKey: LessonContentKey;

  /**
   * Optioneel: lesduur kan je houden, maar jij toont nu vooral %.
   * Laat staan voor later (handig voor planning).
   */
  minutes?: number;
};

export type Module = {
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

/* -----------------------------
   Helper: mkLesson (structuur-only)
------------------------------ */

const mkLesson = (input: {
  slug: string;
  title: string;
  contentKey: LessonContentKey;
  minutes?: number;
}): Lesson => ({
  slug: input.slug,
  title: input.title,
  contentKey: input.contentKey,
  minutes: input.minutes,
});

/* -----------------------------
   Modules + Lessons (structuur)
------------------------------ */

export const modules: Module[] = [
  {
    slug: "module-1-theorie",
    title: "Module 1 — Theorie & fundament",
    description:
      "De basis: wat is Stiefkompas, het Kompasmodel en de pijlers. Inclusief begrippenkader en professionele uitgangspunten.",
    lessons: [
      mkLesson({
        slug: "intro",
        title: "Introductie: wat is Stiefkompas?",
        contentKey: "module-1/les-1-introductie",
        minutes: 10,
      }),
      mkLesson({
        slug: "dynamiek-stiefgezinnen",
        title: "Dynamiek van stiefgezinnen: verlies, loyaliteit en tijd",
        contentKey: "module-1/les-2-dynamiek",
        minutes: 14,
      }),
      mkLesson({
        slug: "kompasmodel",
        title: "Het Kompasmodel: overzicht, taal en samenhang",
        contentKey: "module-1/les-3-kompasmodel",
        minutes: 12,
      }),
      mkLesson({
        slug: "rollen-posities",
        title: "Rollen, posities en verwachtingen",
        contentKey: "module-1/les-4-rollen-posities",
        minutes: 12,
      }),
      mkLesson({
        slug: "spanningsvelden-patronen",
        title: "Spanningsvelden en patronen in samengestelde gezinnen",
        contentKey: "module-1/les-5-spanningsvelden",
        minutes: 14,
      }),
      mkLesson({
        slug: "begeleidersrol",
        title: "Begeleidersrol: professionele houding en interventiekeuzes",
        contentKey: "module-1/les-6-begeleidersrol",
        minutes: 12,
      }),
      mkLesson({
        slug: "positionering-ethiek",
        title: "Positionering, ethiek en grenzen",
        contentKey: "module-1/les-7-ethiek-grenzen",
        minutes: 12,
      }),
    ],
  },

  {
    slug: "module-2-tools",
    title: "Module 2 — Tools & toepassing",
    description:
      "Hoe je de tools gebruikt in begeleiding: scan, rollenkaart, loyaliteitsdiagram, grenzenkompas, communicatiekompas, rituelen/structuur en het Stiefkompas Plan.",
    lessons: [
      mkLesson({
        slug: "werken-met-tools",
        title: "Werken met tools: proces, volgorde en veiligheid",
        contentKey: "module-2/les-1-proces-volgorde",
        minutes: 10,
      }),
      mkLesson({
        slug: "gezinskompas-scan",
        title: "Gezinskompas Scan: afnemen, duiden en terugkoppelen",
        contentKey: "module-2/les-2-gezinskompas-scan",
        minutes: 12,
      }),
      mkLesson({
        slug: "rollenkaart",
        title: "Rollenkaart: taal geven aan rollen en verwachtingen",
        contentKey: "module-2/les-3-rollenkaart",
        minutes: 10,
      }),
      mkLesson({
        slug: "loyaliteitsdiagram",
        title: "Loyaliteitsdiagram: zicht op loyaliteiten en knelpunten",
        contentKey: "module-2/les-4-loyaliteitsdiagram",
        minutes: 12,
      }),
      mkLesson({
        slug: "grenzenkompas",
        title: "Grenzenkompas: grenzen, regels en consequenties",
        contentKey: "module-2/les-5-grenzenkompas",
        minutes: 12,
      }),
      mkLesson({
        slug: "communicatiekompas",
        title: "Communicatiekompas: gesprekken sturen zonder escalatie",
        contentKey: "module-2/les-6-communicatiekompas",
        minutes: 12,
      }),
      mkLesson({
        slug: "structuur-rituelen",
        title: "Structuur & rituelen: weekstructuur en gezinsrituelen",
        contentKey: "module-2/les-7-structuur-rituelen",
        minutes: 10,
      }),
      mkLesson({
        slug: "stiefkompas-plan",
        title: "Stiefkompas Plan: routeboek, integratie en afronding",
        contentKey: "module-2/les-8-stiefkompas-plan",
        minutes: 12,
      }),
    ],
  },
];