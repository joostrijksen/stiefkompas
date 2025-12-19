import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

export default async function RollenkaartToolPage() {
  const supabase = await createClient();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("status, role")
    .eq("id", userData.user.id)
    .single();

  if (!profile || profile.status !== "active") redirect("/portaal/pending");

  const isCertified = profile.role === "certified" || profile.role === "admin";
  if (!isCertified) redirect("/portaal/tools"); // terug naar overzicht (locked)

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Pro tool
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Rollenkaart
        </h1>
        <p className="text-slate-700">
          Hier komt straks de Pro-inhoud: downloads, handleiding, werkvormen,
          voorbeeldvragen en toepassing per pijler.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-700">
          ✅ Toegang OK (gecertificeerd). Voeg hier later je downloads/knoppen toe.
        </p>
      </div>
    </div>
  );
}