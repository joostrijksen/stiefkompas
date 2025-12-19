import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check of er al een auth cookie is
  const isAuthenticated = request.cookies.get('site-password-auth')
  
  // Als de pagina de password pagina zelf is, laat door
  if (request.nextUrl.pathname === '/site-password') {
    return NextResponse.next()
  }
  
  // Als niet authenticated, redirect naar password pagina
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/site-password', request.url))
  }
  
  return NextResponse.next()
}

// Pas toe op alle pagina's behalve API routes en static files
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|site-password).*)',
  ],
}