"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@/app/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
    setBusy(false);
  }

  return (
    <button
      onClick={logout}
      disabled={busy}
      className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50 disabled:opacity-50"
    >
      {busy ? "Uitloggen…" : "Uitloggen"}
    </button>
  );
}