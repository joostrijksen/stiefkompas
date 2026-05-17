import { notFound } from "next/navigation";
import Mdx from "@/components/mdx/Mdx";
import Breadcrumbs from "@/components/learning/Breadcrumbs";
import StudyTree from "@/components/learning/StudyTree";
import ProgressSidebar from "@/components/learning/ProgressSidebar";
import LessonNav from "@/components/learning/LessonNav";
import ReflectionBox from "@/components/learning/ReflectionBox";
import MobileDrawer from "@/components/learning/MobileDrawer";

import { getLearningTreeForModule, getBlockWithPrevNext } from "../../../_content";

export const dynamic = "force-dynamic";

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    moduleSlug: string;
    chapterSlug: string;
    blockSlug: string;
  }>;
}) {
  const { moduleSlug, chapterSlug, blockSlug } = await params;

  if (!moduleSlug || !chapterSlug || !blockSlug) return notFound();

  const tree = await getLearningTreeForModule(moduleSlug);
  const data = await getBlockWithPrevNext(moduleSlug, chapterSlug, blockSlug);

  if (!tree || !data) return notFound();

  const activeHref = `/portaal/leren/${moduleSlug}/${chapterSlug}/${blockSlug}`;

  return (
    <main className="space-y-4">
      {/* Topbar (blijft boven de scroll-regio) */}
      <div className="flex items-start justify-between gap-3">
        <Breadcrumbs
          items={[
            { label: "Leeromgeving", href: "/portaal/leren" },
            { label: data.moduleTitle, href: `/portaal/leren/${moduleSlug}` },
            {
              label: data.chapterTitle,
              href: `/portaal/leren/${moduleSlug}/${chapterSlug}`,
            },
            { label: data.blockTitle },
          ]}
        />

        <div className="shrink-0">
          <MobileDrawer title="Studiehulp">
            <ProgressSidebar moduleTitle={data.moduleTitle} moduleSlug={moduleSlug} />
          </MobileDrawer>
        </div>
      </div>

      {/* ✅ Scroll-regio: 2 kolommen die ieder zélf kunnen scrollen */}
      <div className="lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 h-[calc(100vh-64px-24px-24px)] overflow-hidden min-h-0">
        {/* LEFT (eigen scroll) */}
        <aside className="hidden lg:block min-h-0 overflow-y-auto pr-1">
          <div className="sticky top-0">
            <StudyTree tree={tree} activeHref={activeHref} />
          </div>
        </aside>

        {/* RIGHT (eigen scroll) */}
        <section className="min-w-0 min-h-0 overflow-y-auto pr-1">
          {/* mobiel: inhoud in drawer */}
          <div className="flex gap-2 lg:hidden mb-3">
            <MobileDrawer title="Inhoud">
              <StudyTree tree={tree} activeHref={activeHref} />
            </MobileDrawer>
          </div>

          <article className="bg-white border border-slate-200 rounded-2xl p-6">
            <header className="space-y-2">
              <p className="text-xs text-slate-500">{data.chapterTitle}</p>
              <h1 className="text-2xl font-semibold text-slate-900">
                {data.blockTitle}
              </h1>
            </header>

            <div className="mt-6 space-y-6 text-slate-700 leading-7 max-w-4xl">
              <Mdx source={data.contentMdx} />

              <ReflectionBox
                lessonId={`${moduleSlug}:${chapterSlug}:${blockSlug}`}
                prompt="Wat neem je uit deze les mee naar je eigen praktijk? Beschrijf 1 concreet voorbeeld."
                minChars={80}
                meta={{
                  moduleSlug,
                  moduleTitle: data.moduleTitle,
                  chapterSlug,
                  chapterTitle: data.chapterTitle,
                  blockSlug,
                  blockNumber: data.blockNumber?.toString() ?? null,
                  blockTitle: data.blockTitle,
                }}
              />
            </div>

            <div className="mt-8">
              <LessonNav prev={data.prev} next={data.next} />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}