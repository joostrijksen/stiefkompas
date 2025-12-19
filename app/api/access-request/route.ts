import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const full_name = String(body.full_name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const profession = String(body.profession ?? "").trim();
    const motivation = String(body.motivation ?? "").trim();

    if (!full_name || !email) {
      return NextResponse.json({ error: "Naam en e-mail zijn verplicht." }, { status: 400 });
    }

    // Let op: dit gebruikt anon key; insert mag door RLS policy.
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from("access_requests").insert([
      { full_name, email, profession, motivation },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Onbekende fout." }, { status: 500 });
  }
}