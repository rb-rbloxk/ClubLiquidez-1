'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { User, Mail, Calendar, Shield } from 'lucide-react'
import { format } from 'date-fns'

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-dark-950">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-2 border-neon-gold border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    )
  }

  if (!user) {
    router.push('/auth')
    return null
  }

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 rounded-2xl border border-gray-700 p-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-neon-gold rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-2xl">
                  {user.email?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {user.user_metadata?.full_name || 'User Profile'}
                </h1>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-neon-gold" />
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-300">{user.email}</p>
              </div>

              <div className="bg-dark-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5 text-neon-gold" />
                  <h3 className="text-lg font-semibold text-white">Member Since</h3>
                </div>
                <p className="text-gray-300">
                  {mounted && user.created_at 
                    ? format(new Date(user.created_at), 'MMM dd, yyyy')
                    : user.created_at 
                    ? 'Loading...' 
                    : 'N/A'}
                </p>
              </div>

              <div className="bg-dark-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-5 h-5 text-neon-gold" />
                  <h3 className="text-lg font-semibold text-white">Account Status</h3>
                </div>
                <p className="text-gray-300">
                  {user.email_confirmed_at ? 'Verified' : 'Pending Verification'}
                </p>
              </div>

              <div className="bg-dark-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-neon-gold" />
                  <h3 className="text-lg font-semibold text-white">User ID</h3>
                </div>
                <p className="text-gray-300 text-sm font-mono truncate">{user.id}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

