import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

export default async function ToolsPage() {
  const supabase = await createClient();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("status, role, full_name")
    .eq("id", userData.user.id)
    .single();

  // Als je nog niet geactiveerd bent: stuur naar pending
  if (!profile || profile.status !== "active") {
    redirect("/portaal/pending");
  }

  const isCertified = profile.role === "certified" || profile.role === "admin";

  const tools = [
    {
      title: "Gezinskompas Scan",
      slug: "gezinskompas-scan",
      description:
        "Diagnostische scan om dynamiek, posities, grenzen en communicatiepatronen in beeld te brengen.",
    },
    {
      title: "Rollenkaart",
      slug: "rollenkaart",
      description:
        "Visuele kaart om rollen te onderscheiden (ouder, stiefouder, partner) en verwarring te verminderen.",
    },
    {
      title: "Loyaliteitsdiagram",
      slug: "loyaliteitsdiagram",
      description:
        "Brengt zichtbare en onzichtbare loyaliteiten in kaart en maakt spanningen bespreekbaar.",
    },
    {
      title: "Grenzenkompas",
      slug: "grenzenkompas",
      description:
        "Tool om grenzen, verwachtingen en verantwoordelijkheden te verhelderen en te concretiseren.",
    },
    {
      title: "Weekstructuurkaart",
      slug: "weekstructuurkaart",
      description:
        "Maakt ritme, wissels, routines en stresspieken inzichtelijk voor meer voorspelbaarheid.",
    },
    {
      title: "Communicatiekompas",
      slug: "communicatiekompas",
      description:
        "Analyse van communicatiepatronen en escalatiecycli, met taal en interventie-ingangen.",
    },
    {
      title: "Gezinsrituelenkaart",
      slug: "gezinsrituelenkaart",
      description:
        "Onderzoekt bestaande en gewenste rituelen en helpt nieuwe verbindingen te versterken.",
    },
    {
      title: "Stiefkompas Plan (routeboek)",
      slug: "stiefkompas-plan",
      description:
        "Werkboek om doelen, afspraken, rollen en rituelen vast te leggen en op te volgen.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Pro tools
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Tools & downloads
        </h1>
        <p className="text-slate-700 max-w-3xl">
          Hier vind je de professionele toolbibliotheek van Stiefkompas.{" "}
          {isCertified ? (
            <span>
              Je hebt toegang tot de volledige Pro-versies, inclusief formats en
              downloads.
            </span>
          ) : (
            <span>
              Je account is actief, maar je hebt nog geen Pro-toegang. Na
              certificering krijg je toegang tot de volledige versies (formats,
              handleidingen, downloads).
            </span>
          )}
        </p>
      </section>

      {/* Lock banner voor niet-gecertificeerden */}
      {!isCertified && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Pro-toegang is vergrendeld
          </h2>
          <p className="mt-2 text-slate-700">
            Je kunt de toolpagina’s bekijken als overzicht, maar de Pro-inhoud
            (downloads, formats en interpretatiekaders) is alleen beschikbaar
            voor gecertificeerde Stiefkompas-professionals.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/training-certificering"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Meer over certificering
            </Link>
            <Link
              href="/portaal/leren"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Naar leeromgeving
            </Link>
          </div>
        </section>
      )}

      {/* Tools grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const href = `/portaal/tools/${tool.slug}`;
          const locked = !isCertified;

          return (
            <div
              key={tool.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {tool.title}
                </h3>

                <span
                  className={[
                    "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] border",
                    locked
                      ? "border-slate-200 bg-slate-50 text-slate-600"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700",
                  ].join(" ")}
                >
                  {locked ? "Pro (locked)" : "Pro"}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-700 leading-relaxed flex-1">
                {tool.description}
              </p>

              <div className="mt-5">
                {locked ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-600">
                      Beschikbaar na certificering
                    </span>
                    <Link
                      href="/training-certificering"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
                    >
                      Certificering bekijken
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
                  >
                    Open tool
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}