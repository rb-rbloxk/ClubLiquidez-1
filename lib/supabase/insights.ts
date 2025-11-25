import { createClient } from '@/lib/supabase/client'

export interface Insight {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  author_id?: string
  category: 'Technical Analysis' | 'News' | 'Strategy' | 'Education'
  tags: string[]
  views: number
  featured: boolean
  read_time?: number
  published: boolean
  published_at?: string
  cover_image_url?: string
  seo_title?: string
  seo_description?: string
  created_at: string
  updated_at: string
}

export async function getInsights(filters?: {
  category?: string
  featured?: boolean
  published?: boolean
  limit?: number
}) {
  const supabase = createClient()
  if (!supabase) {
    return { data: [], error: null }
  }

  let query = supabase
    .from('insights')
    .select('*')
    .order('published_at', { ascending: false })

  if (filters?.published !== undefined) {
    query = query.eq('published', filters.published)
  } else {
    query = query.eq('published', true) // Default to published only
  }

  if (filters?.category && filters.category !== 'all') {
    query = query.eq('category', filters.category)
  }

  if (filters?.featured !== undefined) {
    query = query.eq('featured', filters.featured)
  }

  if (filters?.limit) {
    query = query.limit(filters.limit)
  }

  const { data, error } = await query

  return { data: data as Insight[] | null, error }
}

export async function getInsightById(id: string) {
  const supabase = createClient()
  if (!supabase) {
    return { data: null, error: null }
  }

  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('id', id)
    .eq('published', true)
    .single()

  return { data: data as Insight | null, error }
}

export async function incrementInsightViews(id: string) {
  const supabase = createClient()
  if (!supabase) {
    return { error: null }
  }

  const { error } = await supabase.rpc('increment_insight_views', {
    insight_id: id
  })

  return { error }
}

export async function createInsight(insight: Omit<Insight, 'id' | 'created_at' | 'updated_at' | 'views'>) {
  const supabase = createClient()
  if (!supabase) {
    return { data: null, error: { message: 'Supabase not configured' } }
  }

  const { data, error } = await supabase
    .from('insights')
    .insert({
      ...insight,
      published_at: insight.published ? new Date().toISOString() : null
    })
    .select()
    .single()

  return { data: data as Insight | null, error }
}

export async function updateInsight(id: string, updates: Partial<Insight>) {
  const supabase = createClient()
  if (!supabase) {
    return { data: null, error: { message: 'Supabase not configured' } }
  }

  const updateData: any = { ...updates }
  if (updates.published && !updates.published_at) {
    updateData.published_at = new Date().toISOString()
  }

  const { data, error } = await supabase
    .from('insights')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  return { data: data as Insight | null, error }
}

export async function deleteInsight(id: string) {
  const supabase = createClient()
  if (!supabase) {
    return { error: { message: 'Supabase not configured' } }
  }

  const { error } = await supabase
    .from('insights')
    .delete()
    .eq('id', id)

  return { error }
}

