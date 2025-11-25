import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project') || supabaseAnonKey.includes('your-anon')) {
    // Return null instead of throwing to allow app to render without Supabase
    console.warn('Supabase not configured - auth features will be disabled')
    return null as ReturnType<typeof createBrowserClient> | null
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

