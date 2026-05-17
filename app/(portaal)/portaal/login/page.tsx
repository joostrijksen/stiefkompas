"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/app/lib/supabase/client";

export default function PortaalLoginPage() {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Als je al ingelogd bent → direct naar portaal
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) router.replace("/portaal");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setBusy(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.replace("/portaal");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Cursisten login</h1>
        <p className="mt-1 text-sm text-slate-600">
          Log in om de leeromgeving te openen.
        </p>

        <form onSubmit={signIn} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input
              className="mt-1 w-full rounded-lg border p-3 text-sm"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Wachtwoord</label>
            <input
              className="mt-1 w-full rounded-lg border p-3 text-sm"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-black text-white py-3 text-sm font-medium disabled:opacity-50"
          >
            {busy ? "Inloggen…" : "Inloggen"}
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-500">
          Docent? Ga naar{" "}
          <a className="underline" href="/docent/login">
            /docent/login
          </a>
        </p>
      </div>
    </div>
  );
}