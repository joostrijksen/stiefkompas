import { NextResponse } from "next/server";

export const runtime = "nodejs";

type PlanKey = "module1" | "module2" | "cert" | "bundle";

const ALLOWED: Record<PlanKey, true> = {
  module1: true,
  module2: true,
  cert: true,
  bundle: true,
};

function getOrigin(req: Request) {
  // Vercel / proxies
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  const host =
    req.headers.get("x-forwarded-host") ??
    req.headers.get("host");

  if (host) return `${proto}://${host}`;

  // Absolute last resort (lokaal)
  return "http://localhost:3002";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { productKey?: unknown }
      | null;

    const productKey = body?.productKey;

    if (typeof productKey !== "string") {
      return NextResponse.json({ error: "Missing productKey" }, { status: 400 });
    }
    if (!(productKey in ALLOWED)) {
      return NextResponse.json({ error: "Invalid productKey" }, { status: 400 });
    }

    const origin = getOrigin(req);

    // Demo redirect (later vervangen door Stripe/Mollie URL)
    const url = new URL("/checkout/demo", origin);
    url.searchParams.set("product", productKey);

    return NextResponse.json({ url: url.toString() }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Checkout kon niet worden gestart." },
      { status: 500 }
    );
  }
}