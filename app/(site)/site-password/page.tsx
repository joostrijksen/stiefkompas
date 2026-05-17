import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { submitSitePassword } from "./actions";

function safeNext(next?: string | null) {
  if (!next) return "/";
  if (!next.startsWith("/")) return "/";
  if (next.startsWith("//")) return "/";
  return next;
}

export default async function SitePasswordPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const next = safeNext(sp.next ?? "/");

  // Als cookie al bestaat: meteen door
  // @ts-ignore
  const hasCookie = cookies().get("site-password-auth")?.value === "1";
  if (hasCookie) redirect(next);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 via-teal-700 to-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-14">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/5 backdrop-blur">
            <div className="px-7 pt-8 pb-6">
              {/* Onmiskenbaar zodat je zeker weet dat je op deze route zit */}
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">
                SITE PASSWORD
              </div>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                Website afgeschermd
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Vul het wachtwoord in om de website te bekijken.
              </p>

              <form action={submitSitePassword as any} className="mt-6 space-y-4">
                <input type="hidden" name="next" value={next} />

                <div>
                  <label className="text-sm font-medium text-slate-800">
                    Wachtwoord
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-200/60"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className={[
                    "mt-2 w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white",
                    "shadow-sm transition",
                    "bg-gradient-to-r from-teal-700 via-teal-600 to-slate-800",
                    "hover:brightness-110 active:brightness-95",
                    "focus:outline-none focus:ring-4 focus:ring-white/30",
                  ].join(" ")}
                >
                  Doorgaan
                </button>
              </form>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-200/70 px-7 py-5 text-xs text-slate-600">
              <span>Stiefkompas</span>
              <Link href="/login" className="underline underline-offset-4 hover:text-slate-900">
                Naar login
              </Link>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/80">
            Tip: na het invullen wordt er een cookie gezet (7 dagen).
          </p>
        </div>
      </div>
    </div>
  );
}