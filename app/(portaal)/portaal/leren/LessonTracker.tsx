"use client";

import { useEffect } from "react";

type ProgressState = Record<
  string,
  { completedLessonSlugs: string[]; lastLessonSlug?: string }
>;

export default function LessonTracker({
  moduleSlug,
  lessonSlug,
}: {
  moduleSlug: string;
  lessonSlug: string;
}) {
  useEffect(() => {
    try {
      const key = "stiefkompas_leren_progress";
      const raw = localStorage.getItem(key);
      const data: ProgressState = raw ? JSON.parse(raw) : {};

      const current = data[moduleSlug] ?? { completedLessonSlugs: [] };
      const set = new Set(current.completedLessonSlugs);
      set.add(lessonSlug);

      data[moduleSlug] = {
        completedLessonSlugs: Array.from(set),
        lastLessonSlug: lessonSlug,
      };

      localStorage.setItem(key, JSON.stringify(data));
    } catch {}
  }, [moduleSlug, lessonSlug]);

  return null;
}