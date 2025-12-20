import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Laat de password-pagina altijd door
  if (pathname === "/site-password") {
    return NextResponse.next();
  }

  // ✅ Laat Next intern + assets met rust
  // (Belangrijk: ook /karin.png en andere bestanden in /public)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|eot)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 🔒 Check auth cookie
  const isAuthenticated = request.cookies.get("site-password-auth");
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/site-password";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Alleen pagina's matchen; niet /_next, niet /api, niet assets
  matcher: ["/((?!_next|api|favicon.ico|site-password).*)"],
};