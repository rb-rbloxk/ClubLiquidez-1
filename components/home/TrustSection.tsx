'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Award, 
  Lock, 
  CheckCircle2,
  Users,
  TrendingUp
} from 'lucide-react'

const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const trustFactors = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with industry-leading protection standards',
      color: 'neon-gold'
    },
    {
      icon: Lock,
      title: '256-bit Encryption',
      description: 'Bank-level security protecting your data and transactions',
      color: 'neon-gold-champagne'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by leading financial institutions and trading communities',
      color: 'neon-gold-dark'
    },
    {
      icon: CheckCircle2,
      title: 'Regulated & Compliant',
      description: 'Full compliance with international financial regulations',
      color: 'neon-amber'
    },
    {
      icon: Users,
      title: '50,000+ Members',
      description: 'Join a thriving community of successful traders worldwide',
      color: 'neon-gold'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '12+ years of consistent performance and reliable results',
      color: 'neon-gold-champagne'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-gold-champagne rounded-full blur-3xl" />
      </div>

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
            <Shield className="w-4 h-4 text-neon-gold" />
            <span className="text-sm text-neon-gold font-medium">Why Trust Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Why <span className="gradient-text">Trust ClubLiquidez</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Built on a foundation of security, transparency, and proven results. 
            Your success is our commitment.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-dark-800 rounded-2xl border border-gray-700 p-8 hover:border-neon-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-gold/10">
                <div className={`p-4 rounded-xl border w-fit mb-6 group-hover:scale-110 transition-transform ${
                factor.color === 'neon-gold' ? 'bg-neon-gold/20 border-neon-gold/30' :
                factor.color === 'neon-gold-champagne' ? 'bg-neon-gold-champagne/20 border-neon-gold-champagne/30' :
                factor.color === 'neon-gold-dark' ? 'bg-neon-gold-dark/20 border-neon-gold-dark/30' :
                'bg-neon-amber/20 border-neon-amber/30'
              }`}>
                  <factor.icon className={`w-8 h-8 ${
                    factor.color === 'neon-gold' ? 'text-neon-gold' :
                    factor.color === 'neon-gold-champagne' ? 'text-neon-gold-champagne' :
                    factor.color === 'neon-gold-dark' ? 'text-neon-gold-dark' :
                    'text-neon-amber'
                  }`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                <p className="text-gray-300 leading-relaxed">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60"
        >
          {['Binance', 'Coinbase', 'Kraken', 'Interactive Brokers', 'TD Ameritrade'].map((partner) => (
            <div key={partner} className="text-gray-400 font-medium text-sm">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection

