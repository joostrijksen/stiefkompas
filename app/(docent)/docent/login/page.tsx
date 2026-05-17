"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/app/lib/supabase/client";

export default function DocentLoginPage() {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkStaffAndRedirect(userId: string) {
    const { data: profile, error: pErr } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", userId)
      .single();

    if (pErr) throw new Error(pErr.message);

    const role = profile?.role;
    const isStaff = role === "admin" || role === "reviewer";

    if (!isStaff) {
      // optioneel: meteen uitloggen zodat je geen “docent sessie” houdt
      await supabase.auth.signOut();
      throw new Error("Je account heeft geen docentrechten (admin/reviewer).");
    }

    router.replace("/docent");
  }

  // Als je al ingelogd bent → check role → naar /docent of error
  useEffect(() => {
    (async () => {
      try {
        const { data, error: uErr } = await supabase.auth.getUser();
        if (uErr) throw new Error(uErr.message);
        if (!data?.user) return;

        await checkStaffAndRedirect(data.user.id);
      } catch (e: any) {
        setError(e?.message ?? "Onbekende fout.");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);

    try {
      const { data, error: signInErr } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInErr) throw new Error(signInErr.message);

      const user = data?.user;
      if (!user) throw new Error("Inloggen mislukt (geen user).");

      await checkStaffAndRedirect(user.id);
    } catch (e: any) {
      setError(e?.message ?? "Onbekende fout.");
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Docent login</h1>
        <p className="mt-1 text-sm text-slate-600">
          Alleen voor Karin &amp; beheerders/reviewers.
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
          Cursist? Ga naar{" "}
          <a className="underline" href="/portaal/login">
            /portaal/login
          </a>
        </p>
      </div>
    </div>
  );
}