'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code')
      const type = searchParams.get('type')
      const error = searchParams.get('error')

      if (error) {
        router.push(`/auth?error=${encodeURIComponent(error)}`)
        return
      }

      if (code) {
        const supabase = createClient()
        if (!supabase) {
          router.push('/auth?error=Supabase not configured')
          return
        }

        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

        if (exchangeError) {
          router.push(`/auth?error=${encodeURIComponent(exchangeError.message || 'Authentication failed')}`)
          return
        }

        // Check if this is an email verification
        if (type === 'signup' || type === 'email') {
          router.push('/auth?verified=true')
          return
        }
      }

      // Redirect to home after successful authentication
      router.push('/')
    }

    handleCallback()
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-neon-gold animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Completing authentication...</p>
      </div>
    </div>
  )
}


