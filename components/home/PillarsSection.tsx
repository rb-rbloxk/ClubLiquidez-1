'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  Users, 
  Bot, 
  GraduationCap, 
  Crown,
  ArrowRight,
  TrendingUp,
  Zap,
  BookOpen,
  Shield
} from 'lucide-react'

const PillarsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      icon: Users,
      title: 'Copy Trading',
      description: 'Automatically replicate trades from top-performing traders. Set your risk parameters and let proven strategies work for you.',
      features: ['Real-time trade copying', 'Risk management controls', 'Performance analytics', 'Top trader leaderboard'],
      href: '/copy-trading',
      color: 'neon-gold',
      gradient: 'from-neon-gold/20 to-neon-gold-champagne/20'
    },
    {
      icon: Bot,
      title: 'Algo Trading',
      description: 'Deploy sophisticated algorithmic strategies powered by AI and machine learning. Execute trades 24/7 with precision.',
      features: ['Custom algorithm builder', 'Backtesting suite', 'Live performance monitoring', 'Risk controls'],
      href: '/algo-trading',
      color: 'neon-gold-champagne',
      gradient: 'from-neon-gold-champagne/20 to-neon-amber/20'
    },
    {
      icon: GraduationCap,
      title: 'Master-Level Course',
      description: 'Comprehensive trading education from basics to advanced strategies. Learn from industry experts and trading veterans.',
      features: ['100+ video lessons', 'Live trading sessions', 'Community support', 'Certification program'],
      href: '/academy',
      color: 'neon-gold-dark',
      gradient: 'from-neon-gold-dark/20 to-neon-gold/20'
    },
    {
      icon: Crown,
      title: 'Annual Membership Club',
      description: 'Exclusive access to premium features, private community, monthly webinars, and priority support. The ultimate trading experience.',
      features: ['All platform features', 'Private community access', 'Monthly expert webinars', 'Priority support'],
      href: '/contact',
      color: 'neon-amber',
      gradient: 'from-neon-amber/20 to-neon-gold/20'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black via-dark-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-gold-champagne rounded-full blur-3xl" />
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
            <span className="text-sm text-neon-gold font-medium">Our Core Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What <span className="gradient-text">ClubLiquidez</span> Does
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Four powerful pillars designed to elevate your trading journey from beginner to master
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${pillar.gradient} bg-dark-800 rounded-2xl border border-gray-700 p-8 hover:border-neon-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-gold/20`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-xl border group-hover:scale-110 transition-transform ${
                    pillar.color === 'neon-gold' ? 'bg-neon-gold/20 border-neon-gold/30' :
                    pillar.color === 'neon-gold-champagne' ? 'bg-neon-gold-champagne/20 border-neon-gold-champagne/30' :
                    pillar.color === 'neon-gold-dark' ? 'bg-neon-gold-dark/20 border-neon-gold-dark/30' :
                    'bg-neon-amber/20 border-neon-amber/30'
                  }`}>
                    <pillar.icon className={`w-8 h-8 ${
                      pillar.color === 'neon-gold' ? 'text-neon-gold' :
                      pillar.color === 'neon-gold-champagne' ? 'text-neon-gold-champagne' :
                      pillar.color === 'neon-gold-dark' ? 'text-neon-gold-dark' :
                      'text-neon-amber'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        pillar.color === 'neon-gold' ? 'bg-neon-gold' :
                        pillar.color === 'neon-gold-champagne' ? 'bg-neon-gold-champagne' :
                        pillar.color === 'neon-gold-dark' ? 'bg-neon-gold-dark' :
                        'bg-neon-amber'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={pillar.href}>
                  <Button
                    variant="secondary"
                    size="md"
                    className={`w-full group ${
                      pillar.color === 'neon-gold' ? 'border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black' :
                      pillar.color === 'neon-gold-champagne' ? 'border-neon-gold-champagne text-neon-gold-champagne hover:bg-neon-gold-champagne hover:text-black' :
                      pillar.color === 'neon-gold-dark' ? 'border-neon-gold-dark text-neon-gold-dark hover:bg-neon-gold-dark hover:text-black' :
                      'border-neon-amber text-neon-amber hover:bg-neon-amber hover:text-black'
                    }`}
                  >
                    Explore {pillar.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection

