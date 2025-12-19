import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import { modules, SECTION_ORDER } from "../../leren/_content";

const REQUIRED_MODULES = ["module-1", "module-2"] as const;

type ProgressRow = {
  module_slug: string | null;
  lesson_slug: string | null;
  section_id: string | null;
};

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

function computeEligibility(completedMap: Map<string, Map<string, Set<string>>>) {
  const perModule = REQUIRED_MODULES.map((slug) => {
    const exists = Boolean(modules.find((m) => m.slug === slug));
    const complete = exists ? isModuleComplete(completedMap, slug) : false;
    return { slug, exists, complete };
  });

  const eligible = perModule.every((m) => m.exists && m.complete);
  return { eligible, perModule };
}

async function purchaseCertification(formData: FormData) {
  "use server";

  const force = formData.get("force") === "1";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // ✅ Gate ook in server action (behalve force)
  const { data: completedRows, error: progressError } = await supabase
    .from("user_progress")
    .select("module_slug, lesson_slug, section_id")
    .eq("user_id", user.id)
    .eq("status", "completed");

  if (progressError) {
    console.error("Failed to read user_progress:", progressError);
    redirect(`/portaal/certificering/kopen?error=progress_read_failed`);
  }

  const completedMap = buildCompletedMap((completedRows ?? []) as ProgressRow[]);
  const { eligible } = computeEligibility(completedMap);

  if (!force && !eligible) {
    redirect(`/portaal/certificering/kopen?error=not_eligible`);
  }

  const { error } = await supabase.from("user_certifications").upsert(
    {
      user_id: user.id,
      purchased_at: new Date().toISOString(),
      purchase_source: "manual_test",
      purchase_ref: null,
      valid_from: null,
      valid_until: null,
    },
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("purchaseCertification failed:", error);
    redirect(
      `/portaal/certificering/kopen?error=${encodeURIComponent(
        error.message ?? "upsert_failed"
      )}`
    );
  }

  redirect("/portaal/certificering");
}

export default async function CertificationPurchasePage({
  searchParams,
}: {
  searchParams?: Promise<{ debug?: string; force?: string; error?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const debug = sp.debug === "1";
  const force = sp.force === "1";
  const errorMsg = sp.error ? decodeURIComponent(sp.error) : null;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">Certificering</h1>
        <p className="text-slate-600">Log in om verder te gaan.</p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
        >
          Naar login <span aria-hidden>→</span>
        </Link>
      </div>
    );
  }

  // Progress ophalen
  const { data: completedRows, error: progressError } = await supabase
    .from("user_progress")
    .select("module_slug, lesson_slug, section_id")
    .eq("user_id", user.id)
    .eq("status", "completed");

  if (progressError) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">
          Certificering aanschaffen
        </h1>
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
  const { eligible: computedEligible, perModule } = computeEligibility(completedMap);

  const eligible = force ? true : computedEligible;

  // Check of al gekocht
  const { data: cert } = await supabase
    .from("user_certifications")
    .select("purchased_at")
    .eq("user_id", user.id)
    .maybeSingle();

  const alreadyPurchased = Boolean(cert?.purchased_at);

  const title =
    alreadyPurchased ? "Certificering aangeschaft" : "Certificering aanschaffen";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>

      {errorMsg ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {errorMsg === "not_eligible"
            ? "Je hebt Module 1 en 2 nog niet volledig afgerond."
            : errorMsg}
        </div>
      ) : null}

      {debug ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 space-y-2">
          <div className="font-semibold">Debug</div>
          <div>
            debug=1 • force= {force ? "1" : "0"}
          </div>
          <div>
            computedEligible: <b>{String(computedEligible)}</b> • eligible(now):{" "}
            <b>{String(eligible)}</b>
          </div>
          <div>
            alreadyPurchased: <b>{String(alreadyPurchased)}</b>
          </div>
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
          <div className="pt-1 text-xs text-slate-500">
            Tip: gebruik <code>?force=1</code> om aankoop te testen zonder alles af te ronden.
          </div>
        </div>
      ) : null}

      {!eligible ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <p className="text-slate-600">
            De certificering is pas beschikbaar als je <b>Module 1</b> en <b>Module 2</b>{" "}
            volledig hebt afgerond.
          </p>
          <Link
            href="/portaal/leren"
            className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
          >
            Ga naar leeromgeving <span aria-hidden>→</span>
          </Link>
        </div>
      ) : alreadyPurchased ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <p className="text-slate-600">
            Je hebt de certificering al aangeschaft. Je kunt nu verder naar de certificeringsomgeving.
          </p>
          <Link
            href="/portaal/certificering"
            className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
          >
            Ga naar certificering <span aria-hidden>→</span>
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <p className="text-slate-600">
            Je hebt <b>Module 1</b> en <b>Module 2</b> afgerond. Je kunt nu de certificering
            aanschaffen. (Testmodus: zet alleen <code>purchased_at</code>.)
          </p>

          <form action={purchaseCertification}>
            {/* server action krijgt force mee */}
            <input type="hidden" name="force" value={force ? "1" : "0"} />

            <button
              type="submit"
              className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Nu aanschaffen →
            </button>
          </form>

          <p className="text-xs text-slate-500">
            Later koppelen we dit aan Stripe/Mollie (webhook → purchased_at).
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/portaal/dashboard"
          className="inline-flex items-center gap-2 font-medium text-slate-900 underline underline-offset-4"
        >
          Terug naar dashboard <span aria-hidden>→</span>
        </Link>

        {!debug ? (
          <Link
            href="/portaal/certificering/kopen?debug=1"
            className="text-sm text-slate-600 underline underline-offset-4"
          >
            Debug tonen
          </Link>
        ) : (
          <Link
            href={`/portaal/certificering/kopen?debug=1&force=${force ? "0" : "1"}`}
            className="text-sm text-slate-600 underline underline-offset-4"
          >
            Force {force ? "uit" : "aan"}
          </Link>
        )}
      </div>
    </div>
  );
}