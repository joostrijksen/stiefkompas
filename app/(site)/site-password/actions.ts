"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function safeNext(next?: string | null) {
  // Alleen interne paden toestaan
  if (!next) return "/";
  if (!next.startsWith("/")) return "/";
  // voorkom open redirect via // of /http
  if (next.startsWith("//")) return "/";
  return next;
}

export async function submitSitePassword(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = safeNext(String(formData.get("next") ?? "/"));

  const expected = process.env.SITE_PASSWORD ?? "";
  if (!expected) {
    return { ok: false, error: "SITE_PASSWORD ontbreekt in je .env.local" };
  }

  if (password !== expected) {
    return { ok: false, error: "Onjuist wachtwoord." };
  }

  // Cookie zetten (dev: geen secure)
  // @ts-ignore
  cookies().set("site-password-auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dagen
  });

  redirect(next);
}