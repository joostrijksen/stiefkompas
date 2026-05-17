import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { COURSE_MODULES } from "../leren/_content";
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
    return new Date(dateStr).toLocaleDateString("nl-NL");
  } catch {
    return dateStr;
  }
}

function formatDateTime(dateStr: string | null | undefined) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleString("nl-NL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user ?? null;

  const displayName =
    user?.user_metadata?.full_name ??
    user?.email?.split("@")[0] ??
    "welkom";

  const totalModules = COURSE_MODULES.length;

  // Defaults
  let lastActivityText = `Start bij: ${COURSE_MODULES[0]?.title ?? "leeromgeving"}`;
  let continueHref = `/portaal/leren`;
  let completedModules = 0;

  // Certificering defaults
  let certification: CertificationRow = null;
  let certificationStatus: CertificationStatus = "locked";

  if (user) {
    /**
     * 1) Laatste activiteit (Optie B):
     * - progress: laatste completed/visited block
     * - submissions: laatste submit
     * We nemen gewoon de meest recente timestamp van beiden.
     */
    const [progressRes, submissionRes] = await Promise.all([
      supabase
        .from("progress")
        .select("block_id, completed_at")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false })
        .limit(1),
      supabase
        .from("submissions")
        .select("assignment_id, status, submitted_at, created_at")
        .eq("user_id", user.id)
        .order("submitted_at", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(1),
    ]);

    const lastProgress = progressRes.data?.[0] ?? null;
    const lastSubmission = submissionRes.data?.[0] ?? null;

    // Kies "meest recente" activiteit
    const progressTs = lastProgress?.completed_at ? new Date(lastProgress.completed_at).getTime() : 0;
    const submitTs = lastSubmission?.submitted_at
      ? new Date(lastSubmission.submitted_at).getTime()
      : lastSubmission?.created_at
      ? new Date(lastSubmission.created_at).getTime()
      : 0;

    if (submitTs >= progressTs && submitTs > 0) {
      lastActivityText =
        lastSubmission?.submitted_at
          ? `Opdracht ingediend • ${formatDateTime(lastSubmission.submitted_at)}`
          : `Opdracht geopend • ${formatDateTime(lastSubmission?.created_at ?? null)}`;
      continueHref = "/portaal/leren"; // later kan je hier naartoe linken als je assignment->module mapping hebt
    } else if (progressTs > 0 && lastProgress) {
      lastActivityText = `Lesonderdeel voltooid • ${formatDateTime(lastProgress.completed_at)}`;
      continueHref = "/portaal/leren";
    }

    /**
     * 2) Module completion (v1.1 simpel):
     * Hier nog geen "echte" module-complete logica (dat is: alle blocks in module).
     * Voor nu: tel modules als "gestart" zodra er progress bestaat binnen die module.
     * (Later vervang je dit door echte completion rules.)
     */
    const { data: anyProgress } = await supabase
      .from("progress")
      .select("block_id, completed_at")
      .eq("user_id", user.id)
      .limit(1);

    completedModules = anyProgress?.length ? 0 : 0; // bewust 0 in v1.1 (geen onjuiste claims)

    /**
     * 3) Certificering row ophalen
     */
    const { data: certData } = await supabase
      .from("user_certifications")
      .select("purchased_at, exam_started_at, exam_passed_at, valid_until")
      .eq("user_id", user.id)
      .maybeSingle();

    certification = (certData as CertificationRow) ?? null;

    /**
     * 4) Eligible bepalen (v1.1 placeholder)
     * Later: check "module-1 core_case pass" + "module-2 core_case pass" etc.
     * Voor nu: zodra je cohort/enrollment rules af hebt, vervang je dit.
     */
    const eligible = false;

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
          meta={`Modules: ${totalModules} beschikbaar`}
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