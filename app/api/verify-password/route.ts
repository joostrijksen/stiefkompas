import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'karin'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    
    if (password === SITE_PASSWORD) {
      // cookies() is async in Next.js 15+
      const cookieStore = await cookies()
      
      cookieStore.set('site-password-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 dagen
        path: '/',
      })
      
      return NextResponse.json({ success: true })
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch (error) {
    console.error('Password verification error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}