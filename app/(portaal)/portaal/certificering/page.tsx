"use server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import { modules, SECTION_ORDER } from "../leren/_content";
import { startExamAction, markPassedAction, purchaseCertification } from './actions'

const REQUIRED_MODULES = ["module-1-theorie", "module-2-tools"] as const;

type ProgressRow = {
  module_slug: string | null;
  lesson_slug: string | null;
  section_id: string | null;
};

type CertificationRow = {
  purchased_at: string | null;
  purchase_source: string | null;
  exam_started_at: string | null;
  exam_passed_at: string | null;
  score: number | null;
  valid_from: string | null;
  valid_until: string | null;
} | null;

function buildCompletedMap(rows: ProgressRow[]) {
  const completedMap = new Map<string, Map<string, Set<string>>>();

  for (const r of rows) {
    if (!r.module_slug || !r.lesson_slug || !r.section_id) continue;

    if (!completedMap.has(r.module_slug)) completedMap.set(r.module_slug, new Map());
    const lessonMap = completedMap.get(r.module_slug)!;

    if (!lessonMap.has(r.lesson_slug)) lessonMap.set(r.lesson_slug, new Set());
    lessonMap.get(r.lesson_slug)!.add(r.section_id);
  }

  return completedMap;
}

function requiredSectionsSet() {
  return new Set<string>(SECTION_ORDER as any);
}

function isLessonComplete(
  completedMap: Map<string, Map<string, Set<string>>>,
  moduleSlug: string,
  lessonSlug: string
) {
  const set = completedMap.get(moduleSlug)?.get(lessonSlug);
  if (!set) return false;

  for (const req of requiredSectionsSet()) {
    if (!set.has(req)) return false;
  }
  return true;
}

function isModuleComplete(
  completedMap: Map<string, Map<string, Set<string>>>,
  moduleSlug: string
) {
  const mod = modules.find((m) => m.slug === moduleSlug);
  if (!mod) return false;
  return mod.lessons.every((l) => isLessonComplete(completedMap, moduleSlug, l.slug));
}

function formatDateTime(iso: string | null | undefined) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString();
  } catch {
    return dateStr;
  }
}

export default async function CertificationPage({
  searchParams,
}: {
  searchParams?: Promise<{ debug?: string; force?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const debug = sp.debug === "1";
  const force = sp.force === "1";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // 1) eligibility bepalen (module 1 + 2 complete)
  const { data: completedRows, error: progressError } = await supabase
    .from("user_progress")
    .select("module_slug, lesson_slug, section_id")
    .eq("user_id", user.id)
    .eq("status", "completed");

  if (progressError) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">Certificering</h1>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Kon voortgang niet ophalen: {progressError.message}
        </div>
        <Link
          href="/portaal/dashboard"
          className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
        >
          Terug naar dashboard <span aria-hidden>→</span>
        </Link>
      </div>
    );
  }

  const completedMap = buildCompletedMap((completedRows ?? []) as ProgressRow[]);

  const perModule = REQUIRED_MODULES.map((slug) => {
    const exists = Boolean(modules.find((m) => m.slug === slug));
    const complete = exists ? isModuleComplete(completedMap, slug) : false;
    return { slug, exists, complete };
  });

  const eligible = force || perModule.every((m) => m.exists && m.complete);

  // 2) certificering ophalen
  const { data: certData } = await supabase
    .from("user_certifications")
    .select(
      "purchased_at, purchase_source, exam_started_at, exam_passed_at, score, valid_from, valid_until"
    )
    .eq("user_id", user.id)
    .maybeSingle();

  const certification = (certData as CertificationRow) ?? null;

  const purchased = Boolean(certification?.purchased_at);
  const passed = Boolean(certification?.exam_passed_at);

  // 3) status bepalen
  const status =
    !eligible
      ? "locked"
      : !purchased
      ? "available"
      : !passed
      ? "in_progress"
      : "certified";

  const statusLabel =
    status === "locked"
      ? "Nog niet beschikbaar"
      : status === "available"
      ? "Beschikbaar om aan te schaffen"
      : status === "in_progress"
      ? "Certificering actief"
      : "Gecertificeerd";

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
      {/* Header */}
      <header className="space-y-2">
        <p className="text-sm tracking-widest text-slate-500 uppercase">Portaal</p>
        <h1 className="text-4xl font-semibold text-slate-900">Certificering</h1>
        <p className="max-w-2xl text-slate-600">
          Rond Module 1 & 2 af, schaf de certificering aan en voltooi de toets om
          gecertificeerd te worden volgens de Stiefkompas-methodiek.
        </p>
      </header>

      {/* Status card */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">Jouw certificeringsstatus</h2>
            <p className="text-slate-600">{statusLabel}</p>
          </div>

          <Link
            href="/portaal/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4"
          >
            Terug naar dashboard <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Voorwaarde</p>
            <p className="font-medium text-slate-900">
              Module 1 + 2 afgerond
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {eligible ? "✅ Voldoet" : "❌ Nog niet"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Aankoop</p>
            <p className="font-medium text-slate-900">
              {purchased ? "✅ Aangeschaft" : "Nog niet aangeschaft"}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {purchased ? formatDateTime(certification?.purchased_at) : "—"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Toets</p>
            <p className="font-medium text-slate-900">
              {passed ? "✅ Behaald" : purchased ? "Nog niet behaald" : "—"}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {passed ? formatDateTime(certification?.exam_passed_at) : "—"}
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          {status === "locked" ? (
            <Link
              href="/portaal/leren"
              className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Ga naar leeromgeving →
            </Link>
          ) : status === "available" ? (
            <Link
              href="/portaal/certificering/kopen"
              className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Certificering aanschaffen →
            </Link>
          ) : status === "in_progress" ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-slate-600">
                Volgende stap: start de toets.
              </span>
              <form action={startExamAction}>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
                >
                  Start toets (test) →
                </button>
              </form>
              <form action={markPassedAction}>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
                >
                  Markeer als behaald (test)
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-slate-600">
                Geldig tot:{" "}
                <b className="text-slate-900">
                  {formatDate(certification?.valid_until) ?? "—"}
                </b>
              </span>
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
                disabled
              >
                Download certificaat (coming soon)
              </button>
            </div>
          )}
        </div>

        {/* Debug */}
        {debug ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 space-y-2">
            <div className="font-semibold">Debug</div>
            <div>status: <b>{status}</b></div>
            <div>eligible: <b>{String(eligible)}</b></div>
            {force && <div className="text-orange-600">⚡ force mode active</div>}
            <div>purchased: <b>{String(purchased)}</b></div>
            <div>passed: <b>{String(passed)}</b></div>
            <div className="pt-1">
              Modules:
              <ul className="list-disc pl-5">
                {perModule.map((m) => (
                  <li key={m.slug}>
                    {m.slug}:{" "}
                    {m.exists ? (m.complete ? "complete ✅" : "not complete ❌") : "not found ❌"}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xs text-slate-500">
              Tip: voeg <code>?debug=1</code> toe om dit te zien.
            </div>
          </div>
        ) : null}
      </section>

      {/* Next steps / uitleg */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">Hoe werkt certificering?</h3>
        <p className="text-slate-600">
          Je rondt eerst Module 1 en 2 volledig af. Daarna schaf je de certificering aan.
          In de certificeringsomgeving maak je de toets. Na behalen wordt je certificering
          zichtbaar en (later) downloadbaar als certificaat.
        </p>
      </section>
    </div>
  );
}