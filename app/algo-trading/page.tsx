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


export default function AlgoTradingPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold/20 mb-8">
              <div className="w-2 h-2 bg-neon-gold rounded-full animate-pulse"></div>
              <span className="text-sm text-neon-gold">Algorithmic Trading</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Custom <span className="gradient-text">Expert Advisors</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Turn your manual strategy into an automated trading system.
            </p>
          </div>
        </div>
      </section>

      {/* What We Help With Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              We Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-neon-gold">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Convert Trading Logic</h3>
              <p className="text-gray-400">Transform your manual strategy into clean, optimized code</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart3 w-6 h-6 text-neon-gold">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Backtest & Forward Test</h3>
              <p className="text-gray-400">Comprehensive testing to validate your strategy</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders w-6 h-6 text-neon-gold">
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
              <h3 className="text-xl font-semibold text-white mb-4">Fine-tune for Volatility</h3>
              <p className="text-gray-400">Optimize risk control and timing parameters</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-6 h-6 text-neon-gold">
                  <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L21 7"></path>
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Deploy on MT4/MT5</h3>
              <p className="text-gray-400">Deploy with ongoing support and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Systems Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Types of <span className="gradient-text">Systems</span> We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6 text-neon-gold">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Trend-followers</h3>
              <p className="text-gray-400 text-sm">Follow market trends with momentum indicators</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-neon-gold">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Breakout Bots</h3>
              <p className="text-gray-400 text-sm">Trade breakouts from key support/resistance levels</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-neon-gold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SMC/ICT Logic</h3>
              <p className="text-gray-400 text-sm">Smart Money Concepts and ICT methodologies</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-neon-gold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Session-based Scalpers</h3>
              <p className="text-gray-400 text-sm">High-frequency scalping during specific sessions</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-6 h-6 text-neon-gold">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multi-timeframe Filters</h3>
              <p className="text-gray-400 text-sm">Combine multiple timeframes for confirmation</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 text-neon-gold">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Strategies</h3>
              <p className="text-gray-400 text-sm">Bespoke systems tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategy Analysis</h3>
              <p className="text-gray-400">We analyze your manual strategy and trading logic</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Code Development</h3>
              <p className="text-gray-400">Convert your strategy into clean, optimized MQL4/5 code</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Testing & Optimization</h3>
              <p className="text-gray-400">Comprehensive backtesting and forward testing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neon-gold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Deployment & Support</h3>
              <p className="text-gray-400">Deploy on your MT4/MT5 with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your <span className="gradient-text">EA System</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Turn your manual strategy into an automated trading system
          </p>
          <button className="inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed button-primary text-white font-semibold px-8 py-4 text-lg">
            Start Here
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}