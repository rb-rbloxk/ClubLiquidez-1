'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: TrendingUp,
      value: 5000000000,
      suffix: '+',
      label: 'Daily Trading Volume',
      color: 'text-neon-gold'
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Traders',
      color: 'text-neon-gold-champagne'
    },
    {
      icon: DollarSign,
      value: 1000000000,
      prefix: '$',
      suffix: '+',
      label: 'Assets Under Management',
      color: 'text-neon-gold-dark'
    },
    {
      icon: Zap,
      value: 10,
      suffix: 'ms',
      label: 'Average Execution Time',
      color: 'text-neon-amber'
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text">Traders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful traders who trust ClubLiquidez for their trading needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  )}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Market Coverage</h3>
              <div className="w-8 h-8 bg-neon-gold/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-neon-gold" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Cryptocurrencies</span>
                <span className="text-white font-semibold">200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Stocks</span>
                <span className="text-white font-semibold">10,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Forex Pairs</span>
                <span className="text-white font-semibold">50+</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Security</h3>
              <div className="w-8 h-8 bg-neon-gold-champagne/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-neon-gold-champagne" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Uptime</span>
                <span className="text-white font-semibold">99.99%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Encryption</span>
                <span className="text-white font-semibold">256-bit</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Compliance</span>
                <span className="text-white font-semibold">GDPR</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Performance</h3>
              <div className="w-8 h-8 bg-neon-gold-deep/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-neon-gold-deep" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Latency</span>
                <span className="text-white font-semibold">&lt;10ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Throughput</span>
                <span className="text-white font-semibold">1M+ TPS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Reliability</span>
                <span className="text-white font-semibold">99.9%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 