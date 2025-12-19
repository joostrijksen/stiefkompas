"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4"
    >
      Uitloggen
    </button>
  );
}