"use server";

import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { startExamAction, markPassedAction } from "./actions";

/**
 * Optie B (DB-driven):
 * - Module 1 compleet: beslissende submission(s) "reviewed_pass" voor module-1
 * - Module 2 compleet: beslissende submission(s) "reviewed_pass" voor module-2
 *
 * In v1.1 maken we dit expres simpel en stabiel.
 * Later kun je dit uitbreiden naar:
 * - enrollment/cohort gating
 * - specifieke assignment types (core_case / cert_exam)
 * - max attempts etc.
 */

type CertificationRow = {
  purchased_at: string | null;
  purchase_source: string | null;
  exam_started_at: string | null;
  exam_passed_at: string | null;
  score: number | null;
  valid_from: string | null;
  valid_until: string | null;
} | null;

function formatDateTime(iso: string | null | undefined) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleString("nl-NL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString("nl-NL");
  } catch {
    return dateStr;
  }
}

async function checkModulePassed({
  supabase,
  userId,
  moduleSlug,
}: {
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>;
  userId: string;
  moduleSlug: "module-1" | "module-2";
}) {
  /**
   * We bepalen “module passed” via submissions die:
   * - gekoppeld zijn aan assignments die bij de module horen
   * - én status = reviewed_pass
   * - én assignment.is_decisive = true (als je die kolom hebt)
   *
   * Als je (nog) geen is_decisive hebt: haal die filter weg.
   */

  const { data, error } = await supabase
    .from("submissions")
    .select(
      `
      id,
      status,
      submitted_at,
      assignments (
        id,
        module_id,
        is_decisive,
        modules ( slug )
      )
    `
    )
    .eq("user_id", userId)
    .eq("status", "reviewed_pass")
    .eq("assignments.is_decisive", true)
    .eq("assignments.modules.slug", moduleSlug)
    .limit(1);

  if (error) throw new Error(error.message);

  const passed = Boolean(data && data.length > 0);
  return passed;
}

export default async function CertificationPage({
  searchParams,
}: {
  searchParams?: Promise<{ debug?: string; force?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const debug = sp.debug === "1";
  const force = sp.force === "1";

  const supabase = await createSupabaseServerClient();
  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user ?? null;

  if (!user) redirect("/login");

  // 1) eligibility bepalen (Optie B): module-1 + module-2 passed
  let module1Passed = false;
  let module2Passed = false;

  try {
    module1Passed = await checkModulePassed({ supabase, userId: user.id, moduleSlug: "module-1" });
    module2Passed = await checkModulePassed({ supabase, userId: user.id, moduleSlug: "module-2" });
  } catch (e: any) {
    // Als je join structuur nog niet klopt, wil je een duidelijke fout in de UI.
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">Certificering</h1>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Eligibility check faalde: {String(e?.message ?? e)}
          <div className="mt-2 text-xs text-red-700">
            Tip: als je (nog) geen <code>assignments.is_decisive</code> of module-join hebt, haal
            de filters in <code>checkModulePassed()</code> tijdelijk weg.
          </div>
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

  const eligible = force || (module1Passed && module2Passed);

  // 2) certificering ophalen
  const { data: certData, error: certErr } = await supabase
    .from("user_certifications")
    .select("purchased_at, purchase_source, exam_started_at, exam_passed_at, score, valid_from, valid_until")
    .eq("user_id", user.id)
    .maybeSingle();

  if (certErr) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">Certificering</h1>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Kon certificering niet ophalen: {certErr.message}
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

  const certification = (certData as CertificationRow) ?? null;

  const purchased = Boolean(certification?.purchased_at);
  const passed = Boolean(certification?.exam_passed_at);

  // 3) status bepalen
  const status: "locked" | "available" | "in_progress" | "certified" =
    !eligible ? "locked" : !purchased ? "available" : !passed ? "in_progress" : "certified";

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
          Rond Module 1 & 2 af, schaf de certificering aan en voltooi de toets om gecertificeerd te
          worden volgens de Stiefkompas-methodiek.
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
            <p className="font-medium text-slate-900">Module 1 + 2 afgerond</p>
            <p className="mt-1 text-sm text-slate-600">
              {eligible ? "✅ Voldoet" : "❌ Nog niet"}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Module 1: {module1Passed ? "✅" : "❌"} • Module 2: {module2Passed ? "✅" : "❌"}
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
              <span className="text-sm text-slate-600">Volgende stap: start de toets.</span>
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
                <b className="text-slate-900">{formatDate(certification?.valid_until) ?? "—"}</b>
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
            <div>
              status: <b>{status}</b>
            </div>
            <div>
              eligible: <b>{String(eligible)}</b>
            </div>
            {force && <div className="text-orange-600">⚡ force mode active</div>}
            <div>
              module1Passed: <b>{String(module1Passed)}</b>
            </div>
            <div>
              module2Passed: <b>{String(module2Passed)}</b>
            </div>
            <div>
              purchased: <b>{String(purchased)}</b>
            </div>
            <div>
              passed: <b>{String(passed)}</b>
            </div>
            <div className="text-xs text-slate-500">
              Tip: voeg <code>?debug=1</code> toe om dit te zien.
            </div>
          </div>
        ) : null}
      </section>

      {/* Uitleg */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">Hoe werkt certificering?</h3>
        <p className="text-slate-600">
          Je rondt eerst Module 1 en 2 af. Daarna schaf je de certificering aan. In de
          certificeringsomgeving maak je de toets. Na behalen wordt je certificering zichtbaar en
          (later) downloadbaar als certificaat.
        </p>
      </section>
    </div>
  );
}