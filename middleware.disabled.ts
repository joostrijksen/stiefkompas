import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Alles voor site-password zelf altijd toestaan
  if (pathname === "/site-password") {
    const res = NextResponse.next();
    res.headers.set("x-site-gate", "bypass-site-password");
    return res;
  }

  // Next intern + assets met rust laten
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|eot)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const authed = request.cookies.get("site-password-auth")?.value === "1";
  if (!authed) {
    const url = request.nextUrl.clone();
    url.pathname = "/site-password";
    url.searchParams.set("next", pathname + (search || ""));
    const res = NextResponse.redirect(url);
    res.headers.set("x-site-gate", "redirect-to-site-password");
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("x-site-gate", "allow");
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};