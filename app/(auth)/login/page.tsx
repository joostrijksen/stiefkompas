// app/(site)/login/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// ✅ Pas dit import-pad aan als jouw client anders heet
import { createClient } from "@/app/lib/supabase/client";

export default function LoginPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const sp = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // optioneel: ?next=/portaal
  const nextUrl = sp.get("next") || "/portaal";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    const { error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (err) {
      setBusy(false);
      setError("Inloggen mislukt. Controleer je gegevens en probeer opnieuw.");
      return;
    }

    router.push(nextUrl);
    router.refresh();
  }

  return (
    <div className="min-h-[calc(100vh-0px)] w-full">
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600 via-sky-700 to-slate-900" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[520px] w-[520px] rounded-full bg-rose-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[520px] w-[520px] rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-14">
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/5 backdrop-blur">
              <div className="px-7 pt-8 pb-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10">
                    <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-slate-800">
                      SK
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Stiefkompas
                    </div>
                    <div className="text-xs text-slate-600">
                      Portaal • Inloggen
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-slate-900">
                  Inloggen
                </h1>
                <p className="mt-1 text-sm text-slate-600">
                  Log in met je e-mailadres en wachtwoord.
                </p>

                {error ? (
                  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {error}
                  </div>
                ) : null}

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-800">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-200/60"
                      placeholder="naam@voorbeeld.nl"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-800">
                      Wachtwoord
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-200/60"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className={[
                      "mt-2 w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white",
                      "shadow-sm transition",
                      "bg-gradient-to-r from-teal-600 via-sky-600 to-rose-600",
                      "hover:brightness-110 active:brightness-95",
                      "disabled:opacity-60 disabled:cursor-not-allowed",
                      "focus:outline-none focus:ring-4 focus:ring-white/30",
                    ].join(" ")}
                  >
                    {busy ? "Inloggen…" : "Inloggen"}
                  </button>

                  <div className="flex items-center justify-between pt-2 text-sm">
                    <Link
                      href="/account-aanmaken"
                      className="text-slate-700 underline underline-offset-4 hover:text-slate-900"
                    >
                      Nog geen account?
                    </Link>
                    <Link
                      href="/wachtwoord-vergeten"
                      className="text-slate-700 underline underline-offset-4 hover:text-slate-900"
                    >
                      Wachtwoord vergeten
                    </Link>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-slate-200/70 px-7 py-5 text-xs text-slate-600">
                <span>© {new Date().getFullYear()} Stiefkompas</span>
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:text-slate-900"
                >
                  Naar website
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-white/80">
              Tip: na inloggen ga je automatisch naar het portaal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}