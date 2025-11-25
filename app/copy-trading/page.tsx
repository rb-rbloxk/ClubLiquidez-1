'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  Calendar,
  User,
  Tag,
  ArrowRight,
  Eye,
  Clock,
  Star
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: 'Technical Analysis' | 'News' | 'Strategy' | 'Education'
  tags: string[]
  views: number
  featured: boolean
}


const CopyTradingPage = () => {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
    
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold-champagne/20 mb-8">
              <div className="w-2 h-2 bg-neon-gold-champagne rounded-full animate-pulse"></div>
              <span className="text-sm text-neon-gold-champagne">Copy Trading</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              What is <span className="gradient-text">Copy Trading</span>?
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Copy trading allows you to mirror the trades of experienced, rule-based traders in real time — without managing every setup yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why <span className="gradient-text">Copy Trading</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold-champagne/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-neon-gold-champagne">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.44 2.5 2.5 0 0 1-.54-2.5 2.5 2.5 0 0 1 1.5-3.5"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.44 2.5 2.5 0 0 0 .54-2.5 2.5 2.5 0 0 0-1.5-3.5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Emotional Execution</h3>
              <p className="text-gray-400 text-sm">Remove human emotions from your trading decisions</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold-champagne/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart3 w-6 h-6 text-neon-gold-champagne">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Transparent Performance</h3>
              <p className="text-gray-400 text-sm">Full access to historical performance data</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold-champagne/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders w-6 h-6 text-neon-gold-champagne">
                  <path d="M4 21v-7"></path>
                  <path d="M4 10V3"></path>
                  <path d="M12 21v-9"></path>
                  <path d="M12 8V3"></path>
                  <path d="M20 21v-5"></path>
                  <path d="M20 10V3"></path>
                  <path d="M1 14h6"></path>
                  <path d="M9 8h6"></path>
                  <path d="M17 16h6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Set Your Risk</h3>
              <p className="text-gray-400 text-sm">Control your lot size and risk preferences</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold-champagne/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-6 h-6 text-neon-gold-champagne">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ideal for Busy Professionals</h3>
              <p className="text-gray-400 text-sm">Perfect for those with limited trading time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              How to <span className="gradient-text">Start</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold-champagne">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Choose Your Strategy</h3>
              <p className="text-gray-400">Select from our private vault of proven strategies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold-champagne">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Connect Your Account</h3>
              <p className="text-gray-400">Link your trading account securely</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold-champagne">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Set Risk Preferences</h3>
              <p className="text-gray-400">Configure your risk and lot size settings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold-champagne">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Let It Trade</h3>
              <p className="text-gray-400">The strategy trades on your behalf</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Start Copy Trading</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Want access to our private strategy vault?
          </p>
          <button className="inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed button-primary text-white font-semibold px-8 py-4 text-lg">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
} 

export default CopyTradingPage 