"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export default function PurchaseButton() {
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handlePurchase() {
    if (isSaving) return;
    setIsSaving(true);

    try {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;

      if (!user) {
        router.push("/login");
        return;
      }

      const { error } = await supabase.from("user_certifications").upsert(
        {
          user_id: user.id,
          purchased_at: new Date().toISOString(),
          purchase_source: "manual_test",
        },
        { onConflict: "user_id" }
      );

      if (error) {
        console.error("Purchase upsert failed:", error);
        alert(`Aankoop opslaan mislukt: ${error.message}`);
        return;
      }

      router.push("/portaal/certificering");
      router.refresh();
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handlePurchase}
      disabled={isSaving}
      className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isSaving ? "Opslaan…" : "Nu aanschaffen →"}
    </button>
  );
}