'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Zap,
  BarChart3,
  Lock,
  CheckCircle2
} from 'lucide-react'

const StrategyHighlightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Target,
      title: 'Precision Timing',
      description: 'Our algorithms identify optimal entry and exit points with millisecond precision, maximizing profit potential while minimizing risk exposure.',
      stat: '99.7%',
      statLabel: 'Accuracy Rate'
    },
    {
      icon: TrendingUp,
      title: 'Proven Performance',
      description: 'Backed by 12+ years of historical data and real-world trading results. Our strategies have consistently outperformed market averages.',
      stat: '2.4x',
      statLabel: 'Avg Returns'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Multi-layered risk controls including stop-loss automation, position sizing algorithms, and real-time exposure monitoring.',
      stat: '87%',
      statLabel: 'Win Rate'
    },
    {
      icon: Zap,
      title: 'Lightning Execution',
      description: 'Ultra-low latency execution engine ensures you never miss an opportunity. Trades execute in under 10ms from signal to market.',
      stat: '<10ms',
      statLabel: 'Execution Time'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time performance tracking, comprehensive backtesting suite, and detailed analytics to optimize your trading strategy.',
      stat: '24/7',
      statLabel: 'Monitoring'
    },
    {
      icon: Lock,
      title: 'Secure & Compliant',
      description: 'Bank-level security, enterprise-grade infrastructure, and full regulatory compliance. Your funds and data are always protected.',
      stat: '100%',
      statLabel: 'Secure'
    }
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.08),transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold/30 mb-6"
          >
            <CheckCircle2 className="w-4 h-4 text-neon-gold" />
            <span className="text-sm text-neon-gold font-medium">Strategy Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Highlights of Our <span className="gradient-text">Strategy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Built on years of research, testing, and real-world application. Every feature is designed 
            to give you a competitive edge in the markets.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-dark-800 rounded-2xl border border-gray-700 p-8 hover:border-neon-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-gold/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-neon-gold/20 rounded-xl border border-neon-gold/30 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-8 h-8 text-neon-gold" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-neon-gold mb-1">{highlight.stat}</div>
                    <div className="text-sm text-gray-400">{highlight.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '12+' },
            { label: 'Active Members', value: '50K+' },
            { label: 'Trades Executed', value: '10M+' },
            { label: 'Success Rate', value: '87%' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              className="text-center p-6 bg-dark-800 rounded-xl border border-gray-700"
            >
              <div className="text-3xl font-bold text-neon-gold mb-2">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StrategyHighlightsSection

