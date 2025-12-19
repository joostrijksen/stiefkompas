// app/lib/lesson-content.ts

export type Assignment = {
  id: string;
  title: string;
  prompt: string;
  placeholder?: string;
};

export type LessonVideo = {
  provider: "youtube" | "vimeo" | "url";
  src: string;
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

export type LessonSection = {
  id: string;
  title: string;
  body: string;
};

export type LessonContent = {
  introVideo?: LessonVideo;
  goals?: string[];
  keyPoints?: string[];
  reflection?: {
    question: string;
    prompt: string;
  };
  assignments?: Assignment[];
  quiz?: LessonQuiz;
  sections: LessonSection[];
};

// 📖 Helper functie om les content dynamisch te laden
export async function getLessonContent(
  contentKey: string,
  _lessonTitle?: string
): Promise<LessonContent> {
  try {
    // contentKey is bijv. "module-1/les-1-introductie"
    const contentModule = await import(`@/content/${contentKey}`);
    return contentModule.default;
  } catch (error) {
    console.error(`Failed to load lesson content: ${contentKey}`, error);
    // Return een fallback met lege sections
    return {
      sections: [],
    };
  }
}
