"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@/app/lib/supabase/client";

export default function AccountAanmakenPage() {
  const supabase = createClient();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDone(null);
    setError(null);

    const form = new FormData(e.currentTarget);
    const full_name = String(form.get("full_name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim().toLowerCase();
    const password = String(form.get("password") ?? "");
    const profession = String(form.get("profession") ?? "").trim();
    const motivation = String(form.get("motivation") ?? "").trim();

    if (!full_name || !email || !password) {
      setLoading(false);
      setError("Naam, e-mail en wachtwoord zijn verplicht.");
      return;
    }

    // 1) Maak auth account
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name },
      },
    });

    if (signUpError) {
      setLoading(false);
      setError(signUpError.message);
      return;
    }

    // 2) Sla aanvraag op (server API)
    const res = await fetch("/api/access-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name, email, profession, motivation }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setLoading(false);
      setError(data?.error ?? "Aanvraag kon niet worden opgeslagen.");
      return;
    }

    // 3) Maak/zet profile pending
    if (signUpData.user) {
      await supabase.from("profiles").upsert(
        {
          id: signUpData.user.id,
          email,
          full_name,
          status: "pending",
          role: "student",
        },
        { onConflict: "id" }
      );
    }

    setLoading(false);
    setDone(
      "Account aangemaakt en aanvraag ontvangen. Je kunt alvast inloggen, maar toegang wordt pas actief na goedkeuring."
    );

    formRef.current?.reset();
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Portaal
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Account aanmaken
        </h1>
        <p className="text-slate-700">
          Maak een account aan en vraag toegang aan voor de leeromgeving. Na activatie
          door Stiefkompas krijg je volledige toegang.
        </p>
      </div>

      <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700">Naam</label>
          <input
            name="full_name"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="Voor- en achternaam"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">E-mail</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="naam@praktijk.nl"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">Wachtwoord</label>
          <input
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="Kies een sterk wachtwoord"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Beroep / praktijk (optioneel)
          </label>
          <input
            name="profession"
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="Coach, therapeut, jeugdzorg, etc."
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Motivatie (optioneel)
          </label>
          <textarea
            name="motivation"
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
            placeholder="Waarom wil je toegang?"
          />
        </div>

        <button
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white disabled:opacity-50 transition"
        >
          {loading ? "Aanmaken..." : "Account aanmaken"}
        </button>

        {done && <p className="text-sm text-emerald-700">{done}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}

        <p className="text-sm text-slate-600">
          Heb je al een account?{" "}
          <Link className="underline" href="/login">
            Inloggen
          </Link>
        </p>
      </form>
    </div>
  );
}