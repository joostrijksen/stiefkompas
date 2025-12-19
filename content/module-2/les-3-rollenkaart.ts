import type { LessonContent } from "@/app/lib/lesson-content";

const content: LessonContent = {
  introVideo: {
    provider: "url",
    src: "",
    title: "Introvideo",
  },

  goals: [
    "Leerdoel 1 (nog in te vullen)",
    "Leerdoel 2 (nog in te vullen)",
    "Leerdoel 3 (nog in te vullen)",
  ],

  keyPoints: [
    "Kernpunt 1 (nog in te vullen)",
    "Kernpunt 2 (nog in te vullen)",
    "Kernpunt 3 (nog in te vullen)",
  ],

  reflection: {
    question: "Reflectievraag (nog in te vullen)",
    prompt: "Schrijfopdracht prompt (nog in te vullen)",
  },

  assignments: [
    {
      id: "opdracht-1",
      title: "Opdracht titel (nog in te vullen)",
      prompt: "Opdracht beschrijving (nog in te vullen)",
      placeholder: "Schrijf hier je antwoord…",
    },
  ],

  quiz: {
    title: "Lescheck",
    questions: [
      {
        id: "q1",
        type: "mc",
        question: "Vraag 1 (nog in te vullen)",
        options: [
          "Optie A",
          "Optie B",
          "Optie C",
          "Optie D",
        ],
        correctIndex: 0,
        explanation: "Uitleg (nog in te vullen)",
      },
    ],
  },

  sections: [
    {
      id: "intro",
      title: "Introvideo",
      body: "Introductie tekst (nog in te vullen)",
    },
    {
      id: "doelen",
      title: "Wat ga je leren",
      body: "Doelen beschrijving (nog in te vullen)",
    },
    {
      id: "kern",
      title: "Kern",
      body: "Kerninhoud (nog in te vullen)",
    },
    {
      id: "verdieping",
      title: "Verdieping",
      body: "Verdiepende tekst (nog in te vullen)",
    },
    {
      id: "praktijk",
      title: "Praktijk & casuïstiek",
      body: "Praktijkvoorbeeld (nog in te vullen)",
    },
    {
      id: "reflectie",
      title: "Reflectie",
      body: "Reflectie-instructie (nog in te vullen)",
    },
    {
      id: "opdrachten",
      title: "Opdrachten",
      body: "Opdrachten instructie (nog in te vullen)",
    },
    {
      id: "lescheck",
      title: "Lescheck",
      body: "Quiz instructie (nog in te vullen)",
    },
  ],
};

export default content;
