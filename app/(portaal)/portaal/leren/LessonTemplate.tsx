import React from "react";
import AssignmentBlock from "./AssignmentBlock";

type Assignment = {
  id: string;
  title: string;
  prompt: string;
  placeholder?: string;
};

type LessonVideo = {
  provider: "youtube" | "vimeo" | "url";
  src: string; // youtube/vimeo id of url
  title?: string;
};

type QuizQuestion =
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

type LessonQuiz = {
  title?: string;
  passingScore?: number;
  questions: QuizQuestion[];
};

type Props = {
  moduleSlug: string;
  lessonSlug: string;

  // lesson meta
  title?: string;
  introVideo?: LessonVideo;
  quiz?: LessonQuiz;

  // didactiek
  goals?: string[];
  keyPoints?: string[];
  reflection?: { question: string; prompt?: string };
  takeaway?: string[];

  // opdrachten
  assignments?: Assignment[];

  // vrije inhoud (markdown/MDX render je erboven)
  children: React.ReactNode;
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold tracking-tight text-slate-900">
      {children}
    </h2>
  );
}

function Card({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "soft";
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-5 shadow-sm space-y-3",
        tone === "soft"
          ? "border-slate-200 bg-slate-50"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <SectionTitle>{title}</SectionTitle>
      <div className="text-sm md:text-base text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function VideoBlock({ video }: { video?: LessonVideo }) {
  const src = (video?.src ?? "").trim();
  const provider = video?.provider ?? "url";

  const title = video?.title ?? "Introvideo";

  if (!src) {
    return (
      <Card title={title} tone="soft">
        <p className="text-slate-700">
          Introvideo volgt. (Placeholder – voeg later de video toe.)
        </p>
      </Card>
    );
  }

  let embedUrl = src;

  if (provider === "youtube") {
    embedUrl = `https://www.youtube-nocookie.com/embed/${src}`;
  } else if (provider === "vimeo") {
    embedUrl = `https://player.vimeo.com/video/${src}`;
  }

  return (
    <Card title={title}>
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Card>
  );
}

function QuizBlock({ quiz }: { quiz?: LessonQuiz }) {
  const questions = quiz?.questions ?? [];
  if (!questions.length) return null;

  return (
    <Card title={quiz?.title ?? "Lescheck"}>
      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="space-y-3">
            <p className="font-medium text-slate-900">
              {idx + 1}. {q.question}
            </p>

            {q.type === "mc" ? (
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={`${q.id}-${i}`}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      className="mt-1"
                      aria-label={`Keuze ${i + 1}`}
                    />
                    <span className="text-slate-700">{opt}</span>
                  </label>
                ))}
                <p className="text-xs text-slate-500">
                  (Placeholder) Antwoordcontrole/scoring kan later toegevoegd
                  worden.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-800 placeholder:text-slate-400"
                  placeholder={q.placeholder ?? "Schrijf je antwoord…"}
                />
                {q.guidance ? (
                  <p className="text-sm text-slate-600">{q.guidance}</p>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function LessonTemplate({
  moduleSlug,
  lessonSlug,
  title,
  introVideo,
  quiz,
  goals,
  keyPoints,
  reflection,
  takeaway,
  assignments,
  children,
}: Props) {
  return (
    <div className="space-y-8">
      {/* Optioneel: titel (als je dit niet al in de pagina erboven rendert) */}
      {title ? (
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
        </div>
      ) : null}

      {/* Introvideo (altijd, met placeholder als src leeg is) */}
      <VideoBlock video={introVideo} />

      {/* Vrije lesinhoud (markdown/MDX) */}
      <div className="prose prose-slate max-w-none">{children}</div>

      {/* Wat ga je leren */}
      {goals?.length ? (
        <Card title="Wat ga je leren">
          <ul className="list-disc pl-5 space-y-1">
            {goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {/* Kerninzichten */}
      {keyPoints?.length ? (
        <Card title="Kerninzichten">
          <ul className="list-disc pl-5 space-y-1">
            {keyPoints.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {/* Reflectie */}
      {reflection?.question ? (
        <Card title="Reflectievraag">
          <p className="font-medium text-slate-900">{reflection.question}</p>
          {reflection.prompt ? (
            <p className="text-slate-600 mt-2">{reflection.prompt}</p>
          ) : null}
        </Card>
      ) : null}

      {/* Neem dit mee */}
      {takeaway?.length ? (
        <Card title="Neem dit mee">
          <ul className="list-disc pl-5 space-y-1">
            {takeaway.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {/* Opdrachten */}
      {assignments?.length ? (
        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-900">
            Opdrachten
          </h2>

          <div className="space-y-6">
            {assignments.map((a) => (
              <AssignmentBlock
                key={a.id}
                moduleSlug={moduleSlug}
                lessonSlug={lessonSlug}
                assignment={a}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* Lescheck / toets */}
      <QuizBlock quiz={quiz} />
    </div>
  );
}