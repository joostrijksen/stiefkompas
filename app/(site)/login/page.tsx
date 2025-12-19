"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // ✅ netjes navigeren + server components laten her-renderen met nieuwe sessie
    router.replace("/portaal/dashboard");
    router.refresh();
  }

  return (
    <div className="space-y-8 max-w-xl">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Portaal
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Inloggen
        </h1>
        <p className="text-slate-700">
          Log in met je e-mailadres en wachtwoord.
        </p>
      </div>

      <form onSubmit={onLogin} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700">E-mail</label>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="naam@praktijk.nl"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Wachtwoord
          </label>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white disabled:opacity-50 transition"
        >
          {loading ? "Inloggen..." : "Inloggen"}
        </button>

        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : null}

        <p className="text-sm text-slate-600">
          Nog geen account?{" "}
          <Link className="underline" href="/account-aanmaken">
            Toegang aanvragen
          </Link>
        </p>
      </form>
    </div>
  );
}