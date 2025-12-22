import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Stiefkompas – Inschrijven & tarieven",
  description:
    "Kies jouw leerroute: Module 1, Module 2, toets + certificering of de complete route. Toegang wordt geactiveerd in het portaal na betaling.",
};

type PlanKey = "module1" | "module2" | "cert" | "bundle";

type Plan = {
  key: PlanKey;
  badge: string;
  title: string;

  // Optie 2: toon beide
  priceIncl: string; // incl. btw
  priceExcl: string; // excl. btw

  note?: string;
  extraTopLine?: string;
  highlights: string[];
  tone: "teal" | "blue" | "pink";
  primaryCta: string;
  secondaryCta: { href: string; label: string };
  footnote: string;
  extraFootnote?: string;
};

const PLANS: Plan[] = [
  {
    key: "module1",
    badge: "Start",
    title: "Module 1 — Basis van de methodiek",
    priceIncl: "€ 495",
    priceExcl: "€ 409,09",
    note: "Online, in je eigen tempo",
    extraTopLine: "Geen voorkennis vereist",
    highlights: [
      "Visie & uitgangspunten Stiefkompas",
      "Het Kompasmodel + vijf pijlers",
      "Casusgericht leren & reflectie",
      "Toegang tot leeromgeving (Module 1)",
    ],
    tone: "teal",
    primaryCta: "Koop module 1",
    secondaryCta: { href: "/opleiding/module-1", label: "Meer info (inhoud & opbouw)" },
    footnote: "Na betaling wordt je toegang tot Module 1 automatisch geactiveerd in het portaal.",
  },
  {
    key: "module2",
    badge: "Verdieping",
    title: "Module 2 — Toepassing in de praktijk",
    priceIncl: "€ 495", // aangepast
    priceExcl: "€ 409,09", // 495 / 1,21
    note: "Voor professionals die willen toepassen",
    highlights: [
      "Methodisch handelen: analyse → plan → interventie",
      "Tools inzetten als ondersteuning (niet als doel)",
      "Casuïstiek & praktijkopdrachten",
      "Toegang tot leeromgeving (Module 2)",
    ],
    tone: "blue",
    primaryCta: "Koop module 2",
    secondaryCta: { href: "/opleiding/module-2", label: "Meer info (inhoud & opbouw)" },
    footnote: "Na betaling wordt je toegang tot Module 2 automatisch geactiveerd in het portaal.",
  },
  {
    key: "cert",
    badge: "Certificering",
    title: "Toets + 1× herkansing + certificering",
    priceIncl: "€ 195",
    priceExcl: "€ 161,16", // 195 / 1,21
    note: "Na afronding van Modules 1 & 2",
    highlights: [
      "Toetsing op begrip & toepassing",
      "1× herkansing inbegrepen",
      "Beoordeling volgens Stiefkompas-richtlijnen",
      "Certificaat + registratie als Stiefkompas-professional",
    ],
    tone: "pink",
    primaryCta: "Start certificering",
    secondaryCta: { href: "/opleiding/certificering", label: "Meer info over certificering" },
    footnote: "Na betaling wordt je certificering automatisch geactiveerd in het portaal.",
    extraFootnote:
      "Certificering is 1 jaar geldig. Verlenging kost € 85/jaar en vraag je aan via het portaal (alleen voor gecertificeerden).",
  },
  {
    key: "bundle",
    badge: "Meest gekozen",
    title: "Complete route — Module 1 + 2 + Toets & certificering",
    priceIncl: "€ 995",
    priceExcl: "€ 822,31", // 995 / 1,21
    note: "Alles in één keer geregeld",
    highlights: [
      "Module 1 + Module 2 (volledige leerroute)",
      "Toets + 1× herkansing inbegrepen",
      "Certificering na afronding",
      "Toegang tot portaal volgens voorwaarden",
    ],
    tone: "teal",
    primaryCta: "Koop complete route",
    secondaryCta: { href: "/training-certificering", label: "Bekijk opleidingsoverzicht" },
    footnote: "Na betaling wordt je leerroute automatisch geactiveerd in het portaal.",
  },
];

function toneClasses(tone: Plan["tone"]) {
  if (tone === "teal") {
    return {
      ring: "border-[#17B3B0]/20",
      pill: "bg-[#17B3B0]/10 text-[#0E2A47]",
      accent: "text-[#17B3B0]",
      button: "bg-[#0E2A47] text-white hover:opacity-90",
      infoBtn: "border-[#17B3B0]/30 bg-[#17B3B0]/10 text-[#0E2A47] hover:bg-[#17B3B0]/15",
    };
  }
  if (tone === "blue") {
    return {
      ring: "border-[#2C4B9A]/20",
      pill: "bg-[#2C4B9A]/10 text-[#0E2A47]",
      accent: "text-[#2C4B9A]",
      button: "bg-[#0E2A47] text-white hover:opacity-90",
      infoBtn: "border-[#2C4B9A]/30 bg-[#2C4B9A]/10 text-[#0E2A47] hover:bg-[#2C4B9A]/15",
    };
  }
  return {
    ring: "border-[#F02B8A]/20",
    pill: "bg-[#F02B8A]/10 text-[#0E2A47]",
    accent: "text-[#F02B8A]",
    button: "bg-[#0E2A47] text-white hover:opacity-90",
    infoBtn: "border-[#F02B8A]/25 bg-[#F02B8A]/10 text-[#0E2A47] hover:bg-[#F02B8A]/15",
  };
}

/**
 * Server Action: start checkout en redirect naar betaalpagina (Stripe/Mollie)
 * Robuust: bouw origin uit request headers (werkt op localhost én Vercel)
 */
async function startCheckout(formData: FormData) {
  "use server";

  const productKey = formData.get("productKey");
  if (typeof productKey !== "string") throw new Error("Missing productKey");

  const h = await headers();

  const forwardedProto = h.get("x-forwarded-proto");
  const forwardedHost = h.get("x-forwarded-host");
  const host = forwardedHost ?? h.get("host");

  const proto =
    forwardedProto ?? (process.env.NODE_ENV === "development" ? "http" : "https");

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    (host ? `${proto}://${host}` : "http://localhost:3002");

  const res = await fetch(`${origin}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productKey }),
    cache: "no-store",
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Checkout kon niet worden gestart (${res.status}). ${txt}`);
  }

  const data = (await res.json()) as { url: string };
  redirect(data.url);
}

export default function InschrijvenPage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/22 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
          <div className="absolute left-[30%] top-[-10%] h-[260px] w-[260px] rounded-full bg-[#F02B8A]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Inschrijven & tarieven
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Kies jouw leerroute — wij activeren je toegang in het portaal
            </h1>

            <div className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
              <p>
                Je kunt los starten (Module 1), verdiepen (Module 2) en daarna certificeren — of
                direct alles in één keer regelen met de complete route.
              </p>
              <p>
                Na betaling wordt je toegang automatisch vrijgeschakeld in het portaal. Inloggen
                kan altijd via de knop rechtsboven; alleen betaalde onderdelen worden geactiveerd.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/training-certificering"
                className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-white/70 transition"
              >
                Eerst meer lezen
              </Link>

              <a
                href="#tarieven"
                className="inline-flex rounded-full border border-[#0E2A47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
              >
                Bekijk tarieven
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TARIEVEN */}
      <div id="tarieven" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
            Tarieven
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Kies wat bij je past: los starten, verdiepen, certificeren of alles in één keer.
          </p>
          <p className="text-xs text-slate-500">
            Alle bedragen worden getoond <span className="font-semibold">incl. btw</span>, met daaronder
            het bedrag <span className="font-semibold">excl. btw</span>.
          </p>
        </div>

        <section className="grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const t = toneClasses(plan.tone);
            const featured = plan.key === "bundle";

            return (
              <div
                key={plan.key}
                className={[
                  "rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition",
                  t.ring,
                  featured ? "lg:col-span-3" : "",
                ].join(" ")}
              >
                <div className="flex h-full flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={[
                        "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                        t.pill,
                      ].join(" ")}
                    >
                      {plan.badge}
                    </span>

                    {/* Optie 2: incl + excl */}
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${t.accent}`}>
                        {plan.priceIncl} <span className="text-slate-600 font-medium">incl. btw</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {plan.priceExcl} excl. btw
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight text-[#0E2A47]">
                    {plan.title}
                  </h3>

                  <div className="mt-2 min-h-[52px] space-y-2">
                    {plan.note ? (
                      <p className="text-sm text-slate-600 leading-relaxed">{plan.note}</p>
                    ) : (
                      <span className="block" aria-hidden />
                    )}

                    {plan.extraTopLine ? (
                      <p className="text-sm text-slate-700 leading-relaxed">{plan.extraTopLine}</p>
                    ) : (
                      <span className="block" aria-hidden />
                    )}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {plan.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className={t.accent}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-col gap-3">
                      <form action={startCheckout} className="w-full">
                        <input type="hidden" name="productKey" value={plan.key} />
                        <button
                          type="submit"
                          className={[
                            "inline-flex w-full justify-center rounded-full px-5 py-3",
                            "text-xs font-semibold uppercase tracking-[0.2em] transition",
                            t.button,
                          ].join(" ")}
                        >
                          {plan.primaryCta}
                        </button>
                      </form>

                      <Link
                        href={plan.secondaryCta.href}
                        className={[
                          "inline-flex w-full justify-center rounded-full border px-5 py-3",
                          "text-xs font-semibold uppercase tracking-[0.2em] transition",
                          t.infoBtn,
                        ].join(" ")}
                      >
                        {plan.secondaryCta.label}
                      </Link>
                    </div>

                    <div className="mt-3 min-h-[44px]">
                      <p className="text-xs text-slate-500 leading-relaxed">{plan.footnote}</p>
                    </div>

                    {plan.extraFootnote && (
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                        {plan.extraFootnote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 pt-10 max-w-3xl space-y-4">
          <h3 className="text-xl font-semibold tracking-tight text-[#0E2A47]">
            Veelgestelde vragen over inschrijven
          </h3>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <span className="font-semibold">Krijg ik direct toegang?</span> Ja — na betaling
              wordt je toegang automatisch geactiveerd in het portaal.
            </p>
            <p>
              <span className="font-semibold">Kan ik later upgraden?</span> Ja — je kunt losse
              onderdelen kopen of later overstappen naar de complete route.
            </p>
            <p>
              <span className="font-semibold">Hoe werkt verlengen?</span> Certificering is 1 jaar
              geldig. Verlenging (€ 85/jaar) vraag je aan vanuit het portaal wanneer je al
              gecertificeerd bent.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}