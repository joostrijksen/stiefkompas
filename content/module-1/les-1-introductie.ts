import type { LessonContent } from "@/lib/lesson-content";

const content: LessonContent = {
  introVideo: {
    provider: "url",
    src: "", // later invullen (of youtube/vimeo id)
    title: "Introvideo – wat is Stiefkompas?",
  },

  goals: [
    "Uitleggen wat Stiefkompas is en wat het niet is.",
    "Benoemen waarom stiefgezinnen specifieke begeleiding vragen.",
    "Herkennen dat thema’s (gedrag, grenzen, loyaliteit, rollen) vaak door elkaar lopen.",
  ],

  keyPoints: [
    "Stiefgezinnen zijn gelaagd: liefde + verlies + loyaliteit + nieuwe rollen.",
    "Zonder structuur wordt er aan symptomen gewerkt in plaats van aan onderliggende dynamiek.",
    "Stiefkompas geeft taal en richting, zodat je interventies beter landen.",
  ],

  reflection: {
    question:
      "Waar zie jij in jouw praktijk het vaakst dat thema’s door elkaar lopen in samengestelde gezinnen?",
    prompt:
      "Noteer één situatie: wat speelde aan de oppervlakte, en wat lag eronder (bijv. loyaliteit, verlies, positie)?",
  },

  assignments: [
    {
      id: "positionering",
      title: "Opdracht: jouw startpunt",
      prompt:
        "Beschrijf in 8–12 zinnen wat jij lastig vindt in stiefgezinnen, en wat je hoopt dat Stiefkompas je gaat opleveren in je begeleiding.",
      placeholder: "Schrijf hier je antwoord…",
    },
  ],

  quiz: {
    title: "Lescheck",
    questions: [
      {
        id: "q1",
        type: "mc",
        question: "Waarom loopt begeleiding in stiefgezinnen vaak vast?",
        options: [
          "Te weinig opvoedkennis",
          "Gebrek aan motivatie",
          "Thema’s lopen door elkaar heen",
          "Er zijn te weinig regels",
        ],
        correctIndex: 2,
        explanation:
          "Vaak wordt gedrag besproken terwijl de kern loyaliteit, verlies of positie is.",
      },
      {
        id: "q2",
        type: "mc",
        question: "Wat typeert Stiefkompas het meest?",
        options: [
          "Een vast stappenplan",
          "Een set losse tools",
          "Een methodiek met structuur en taal",
          "Een opvoedprogramma",
        ],
        correctIndex: 2,
      },
      {
        id: "q3",
        type: "open",
        question:
          "Wat hoop jij dat Stiefkompas je concreet gaat brengen in jouw begeleiding?",
        placeholder: "Schrijf 5–10 zinnen.",
        guidance: "Maak het concreet: situatie → wat wil je anders → wat levert dat op.",
      },
    ],
  },

  sections: [
    {
      id: "intro",
      title: "Introvideo",
      body: `Gebruik de video hierboven als start. In deze les leggen we het fundament: waarom Stiefkompas bestaat en wat het toevoegt.`,
    },
    {
      id: "doelen",
      title: "Wat ga je leren",
      body: `In deze les ontdek je waar Stiefkompas voor staat en waarom structuur en taal cruciaal zijn in samengestelde gezinnen.`,
    },
    {
      id: "kern",
      title: "Kern",
      body: `Samengestelde gezinnen zijn geen “gewoon gezin met extra mensen”.  
Er is vaak **verlies** (wat was), **loyaliteit** (naar wie hoort wat), en **rolverwarring** (wie mag wat zeggen).  
Zonder gedeelde taal ontstaat snel ruis: er wordt over gedrag gepraat, terwijl het eigenlijk over veiligheid of positie gaat.`,
    },
    {
      id: "verdieping",
      title: "Verdieping",
      body: `Stiefkompas is geen quick fix en geen oordeel over “goed” of “fout”.  
Het is een **methodiek**: een manier van kijken en werken die structuur aanbrengt, zodat je interventies beter aansluiten op de echte laag.`,
    },
    {
      id: "praktijk",
      title: "Praktijk & casuïstiek",
      body: `Voorbeeld: een stiefouder wil strenger zijn, een ouder voelt zich schuldig, een kind test grenzen.  
Als je te snel op regels of gedrag gaat zitten, mis je de onderlaag.  
Stiefkompas helpt eerst ordenen: **wat speelt er echt**? en **waar begin je**?`,
    },
    {
      id: "reflectie",
      title: "Reflectie",
      body: `Neem 3 minuten. Schrijf één situatie op waarin gesprekken steeds terugkeerden of vastliepen.  
Welke laag werd niet benoemd?`,
    },
    {
      id: "opdrachten",
      title: "Opdrachten",
      body: `Maak de opdracht hieronder. Dit is jouw nulmeting: waar sta je nu, en wat wil je ontwikkelen?`,
    },
    {
      id: "lescheck",
      title: "Lescheck",
      body: `Beantwoord de vragen hieronder. Het doel is niet “slagen”, maar checken of de kern helder is.`,
    },
  ],
};

export default content;