'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SitePasswordPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      
      if (response.ok) {
        router.push('/')
        router.refresh()
      } else {
        setError('Incorrect wachtwoord')
        setIsLoading(false)
      }
    } catch (err) {
      setError('Er ging iets mis')
      setIsLoading(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="h-8 w-full bg-gray-200 animate-pulse rounded mb-6"></div>
          <div className="h-10 w-full bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-10 w-full bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Site beschermd met wachtwoord
        </h1>
        <form onSubmit={handleSubmit} key="password-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Voer wachtwoord in"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            autoComplete="new-password"
            disabled={isLoading}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Bezig...' : 'Toegang verkrijgen'}
          </button>
        </form>
      </div>
    </div>
  )
}