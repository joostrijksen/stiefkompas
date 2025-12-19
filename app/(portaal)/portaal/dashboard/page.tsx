import Link from "next/link";
import { createClient } from "@/app/lib/supabase/server";
import { modules, SECTION_ORDER, SECTION_TITLES } from "../leren/_content";
import LogoutButton from "../components/LogoutButton";

function Card({
  title,
  description,
  meta,
  href,
  cta,
}: {
  title: string;
  description: string;
  meta?: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
        {meta ? <p className="text-sm text-slate-500">{meta}</p> : null}
      </div>

      <div className="mt-5">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
        >
          {cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

type ProgressRow = {
  module_slug: string;
  lesson_slug: string | null;
  section_id: string | null;
  status: "started" | "completed";
  last_accessed_at: string | null;
};

type CertificationRow = {
  purchased_at: string | null;
  exam_started_at: string | null;
  exam_passed_at: string | null;
  valid_until: string | null;
} | null;

type CertificationStatus = "locked" | "available" | "in_progress" | "certified";

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString();
  } catch {
    return dateStr;
  }
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const displayName =
    user?.user_metadata?.full_name ??
    user?.email?.split("@")[0] ??
    "welkom";

  const totalModules = modules.length;

  // Default values
  let completedModules = 0;
  let lastActivityText = `Start bij: ${modules[0]?.slug ?? "introductie"}`;
  let continueHref = `/portaal/leren`;

  // Certificering defaults
  let certification: CertificationRow = null;
  let certificationStatus: CertificationStatus = "locked";

  // ❗ Gebruik hier EXACT de slugs die bij jou “bestaan” in modules.map(m => m.slug)
  // (dezelfde als je in /portaal/certificering hebt gezet)
  const REQUIRED_MODULES = ["module-1-theorie", "module-2-tools"] as const;
  // ^^^ VERVANG door jouw echte 2 slugs als ze anders zijn.

  if (user) {
    // 1) Laatste activiteit
    const { data: lastRows } = await supabase
      .from("user_progress")
      .select("module_slug, lesson_slug, section_id, status, last_accessed_at")
      .eq("user_id", user.id)
      .order("last_accessed_at", { ascending: false })
      .limit(1);

    const last = (lastRows?.[0] as ProgressRow | undefined) ?? null;

    if (last?.module_slug && last?.lesson_slug && last?.section_id) {
      const mod = modules.find((m) => m.slug === last.module_slug);
      const les = mod?.lessons.find((l) => l.slug === last.lesson_slug);
      const sectionLabel =
        SECTION_TITLES[last.section_id as any] ?? last.section_id;

      lastActivityText = `${mod?.title ?? last.module_slug} • ${
        les?.title ?? last.lesson_slug
      } • ${sectionLabel}`;

      continueHref = `/portaal/leren/${last.module_slug}/${last.lesson_slug}/${last.section_id}`;
    }

    // 2) Completed rows
    const { data: completedRows } = await supabase
      .from("user_progress")
      .select("module_slug, lesson_slug, section_id")
      .eq("user_id", user.id)
      .eq("status", "completed");

    const rows = (completedRows ?? []) as Array<{
      module_slug: string;
      lesson_slug: string | null;
      section_id: string | null;
    }>;

    // Map: moduleSlug -> lessonSlug -> set(section_id)
    const completedMap = new Map<string, Map<string, Set<string>>>();

    for (const r of rows) {
      if (!r.module_slug || !r.lesson_slug || !r.section_id) continue;

      if (!completedMap.has(r.module_slug)) {
        completedMap.set(r.module_slug, new Map());
      }
      const lessonMap = completedMap.get(r.module_slug)!;

      if (!lessonMap.has(r.lesson_slug)) {
        lessonMap.set(r.lesson_slug, new Set());
      }
      lessonMap.get(r.lesson_slug)!.add(r.section_id);
    }

    const requiredSections = new Set<string>(SECTION_ORDER as any);

    function isLessonComplete(moduleSlug: string, lessonSlug: string) {
      const lessonMap = completedMap.get(moduleSlug);
      const set = lessonMap?.get(lessonSlug);
      if (!set) return false;
      for (const req of requiredSections) {
        if (!set.has(req)) return false;
      }
      return true;
    }

    function isModuleComplete(moduleSlug: string) {
      const mod = modules.find((m) => m.slug === moduleSlug);
      if (!mod) return false;
      return mod.lessons.every((l) => isLessonComplete(moduleSlug, l.slug));
    }

    // Modules afgerond (voor Leeromgeving-card)
    completedModules = modules.filter((m) =>
      m.lessons.every((l) => isLessonComplete(m.slug, l.slug))
    ).length;

    // 3) Certificering row ophalen
    const { data: certData } = await supabase
      .from("user_certifications")
      .select("purchased_at, exam_started_at, exam_passed_at, valid_until")
      .eq("user_id", user.id)
      .maybeSingle();

    certification = (certData as CertificationRow) ?? null;

    // 4) Eligible: module 1 + 2 volledig afgerond
    const eligible = REQUIRED_MODULES.every((slug) => isModuleComplete(slug));

    // 5) Status bepalen
    if (!eligible) {
      certificationStatus = "locked";
    } else if (!certification?.purchased_at) {
      certificationStatus = "available";
    } else if (!certification?.exam_passed_at) {
      certificationStatus = "in_progress";
    } else {
      certificationStatus = "certified";
    }
  }

  const certificationCardDescription =
    certificationStatus === "locked"
      ? "Rond eerst Module 1 en 2 af om toegang te krijgen tot de certificering."
      : certificationStatus === "available"
      ? "Je hebt Module 1 en 2 afgerond. Je kunt nu de certificering aanschaffen."
      : certificationStatus === "in_progress"
      ? "Je hebt de certificering aangeschaft. Voltooi de toets om gecertificeerd te worden."
      : "Je bent gecertificeerd volgens de Stiefkompas-methodiek.";

  const certificationCardMeta =
    certificationStatus === "certified" && certification?.valid_until
      ? `Geldig tot ${formatDate(certification.valid_until)}`
      : certificationStatus === "available"
      ? "Opleiding afgerond"
      : certificationStatus === "in_progress"
      ? "Toets nog te doen"
      : "Vergrendeld";

  const certificationCardHref =
    certificationStatus === "available"
      ? "/portaal/certificering/kopen"
      : certificationStatus === "in_progress" || certificationStatus === "certified"
      ? "/portaal/certificering"
      : "/portaal/leren";

  const certificationCardCta =
    certificationStatus === "available"
      ? "Certificering aanschaffen"
      : certificationStatus === "in_progress"
      ? "Ga naar certificering"
      : certificationStatus === "certified"
      ? "Bekijk certificering"
      : "Ga naar leeromgeving";

  const statusText =
    certificationStatus === "certified"
      ? "Gecertificeerd"
      : certificationStatus === "in_progress"
      ? "Certificering actief"
      : certificationStatus === "available"
      ? "Beschikbaar om aan te schaffen"
      : "Nog niet beschikbaar";

  const statusCtaHref =
    certificationStatus === "available"
      ? "/portaal/certificering/kopen"
      : certificationStatus === "in_progress" || certificationStatus === "certified"
      ? "/portaal/certificering"
      : "/portaal/leren";

  const statusCtaLabel =
    certificationStatus === "available"
      ? "Certificering aanschaffen"
      : certificationStatus === "in_progress"
      ? "Ga naar certificering"
      : certificationStatus === "certified"
      ? "Bekijk certificering"
      : "Ga naar leeromgeving";

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <p className="text-sm tracking-widest text-slate-500 uppercase">
            Portaal
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Welkom {displayName}
          </h1>
          <p className="max-w-2xl text-slate-600">
            Jouw centrale werkplek voor leren, certificering en professionele
            toepassing van de Stiefkompas-methodiek.
          </p>
        </div>

        <LogoutButton />
      </div>

      {/* Primary cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          title="Leeromgeving"
          description="Toegang tot alle modules, theorie en opdrachten binnen de Stiefkompas-opleiding."
          meta={`Voortgang: ${completedModules} van ${totalModules} modules afgerond`}
          href="/portaal/leren"
          cta="Ga naar leeromgeving"
        />
        <Card
          title="Pro tools"
          description="Methodische tools voor toepassing in begeleiding, volgens de Stiefkompas-richtlijnen."
          meta="Gezinskompas Scan · Rollenkaart (en meer)"
          href="/portaal/tools"
          cta="Open pro tools"
        />
        <Card
          title="Certificering"
          description={certificationCardDescription}
          meta={certificationCardMeta}
          href={certificationCardHref}
          cta={certificationCardCta}
        />
      </section>

      {/* Status */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Jouw status</h2>
            <p className="mt-1 text-slate-600">
              Overzicht van jouw niveau, status en laatste activiteit.
            </p>
          </div>

          <Link
            href="/portaal/profiel"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4"
          >
            Naar profiel <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Niveau</p>
            <p className="font-medium text-slate-900">Stiefkompas Practitioner</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Certificering</p>
            <p className="font-medium text-slate-900">{statusText}</p>

            <div className="mt-3">
              <Link
                href={statusCtaHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                {statusCtaLabel} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Laatste activiteit</p>
            <p className="font-medium text-slate-900">{lastActivityText}</p>

            <div className="mt-3">
              <Link
                href={continueHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                Verdergaan <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {!user ? (
          <p className="mt-4 text-sm text-slate-500">
            Log in om je voortgang en laatste activiteit op te slaan.
          </p>
        ) : null}
      </section>

      {/* Method / quality */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Toepassing & kwaliteit
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Gebruik Stiefkompas professioneel en consistent. Bekijk kaders,
          toelichting en (later) casusvoorbeelden voor toepassing in begeleiding.
        </p>

        <div className="mt-4">
          <Link
            href="/training-certificering"
            className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
          >
            Bekijk opleiding & certificering <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}