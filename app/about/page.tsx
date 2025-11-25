'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Users, 
  Shield, 
  Award, 
  TrendingUp, 
  Globe,
  Zap,
  Lock,
  CheckCircle,
  Star,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  linkedin: string
  twitter: string
  github: string
}

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alexandra Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Coinbase. 15+ years in fintech and blockchain.',
      avatar: '/avatars/alexandra.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer with expertise in high-frequency trading systems.',
      avatar: '/avatars/marcus.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      id: '3',
      name: 'Sarah Kim',
      role: 'Head of Product',
      bio: 'Product leader with experience at Robinhood and Stripe.',
      avatar: '/avatars/sarah.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      id: '4',
      name: 'David Park',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with 20+ years protecting financial systems.',
      avatar: '/avatars/david.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      id: '5',
      name: 'Emma Wilson',
      role: 'Head of Trading',
      bio: 'Former institutional trader with deep market expertise.',
      avatar: '/avatars/emma.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      id: '6',
      name: 'Michael Thompson',
      role: 'Head of Compliance',
      bio: 'Regulatory expert ensuring platform compliance worldwide.',
      avatar: '/avatars/michael.jpg',
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  ]

  const achievements = [
    { icon: Users, value: '50,000+', label: 'Active Traders' },
    { icon: TrendingUp, value: '$5B+', label: 'Daily Volume' },
    { icon: Globe, value: '150+', label: 'Countries Served' },
    { icon: Zap, value: '<10ms', label: 'Execution Speed' }
  ]

  const securityFeatures = [
    'Bank-Grade Security',
    '256-bit AES Encryption',
    'Multi-factor Authentication',
    'Cold Storage for Assets',
    'Real-time Fraud Detection',
    'Insurance Coverage'
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-black to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">ClubLiquidez</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing trading with cutting-edge technology and unwavering commitment to security, 
              transparency, and user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Founded in 2022 by a team of fintech veterans and blockchain pioneers, 
                  ClubLiquidez was born from a simple vision: to democratize access to 
                  professional-grade trading tools and market data.
                </p>
                <p>
                  After witnessing the limitations of existing trading platforms—slow execution, 
                  poor user experience, and lack of transparency—our founders set out to build 
                  something different. Something that would put traders first.
                </p>
                <p>
                  Today, ClubLiquidez serves over 50,000 traders across 150+ countries, 
                  processing billions in daily trading volume while maintaining the highest 
                  standards of security and compliance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-neon-gold" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  To provide institutional-grade trading infrastructure to individual traders, 
                  enabling them to compete on equal footing with the world's largest financial institutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-dark-700 rounded-lg">
                    <div className="text-2xl font-bold text-neon-gold">2022</div>
                    <div className="text-sm text-gray-400">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-dark-700 rounded-lg">
                    <div className="text-2xl font-bold text-neon-gold-champagne">2023</div>
                    <div className="text-sm text-gray-400">Launched</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
                  >
                    <achievement.icon className="w-8 h-8 text-neon-gold" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-neon-gold font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 text-center">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-neon-gold transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-neon-gold transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.github}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-neon-gold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-neon-gold-champagne" />
                <h2 className="text-4xl font-bold text-white">Security & Compliance</h2>
              </div>
              <p className="text-gray-300 mb-8">
                Your security is our top priority. We employ industry-leading security measures 
                and maintain compliance with global financial regulations to protect your assets 
                and personal information.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security Standards</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-6 h-6 text-neon-gold" />
                    <div>
                      <div className="text-white font-semibold">256-bit Encryption</div>
                      <div className="text-sm text-gray-400">Bank-Grade Security</div>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-neon-gold-champagne" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-neon-gold" />
                    <div>
                      <div className="text-white font-semibold">Multi-Factor Auth</div>
                      <div className="text-sm text-gray-400">2FA & Biometric</div>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-neon-gold-champagne" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-neon-gold" />
                    <div>
                      <div className="text-white font-semibold">GDPR Compliant</div>
                      <div className="text-sm text-gray-400">Data Protection</div>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-neon-gold-champagne" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'We never compromise on security. Your assets and data are protected with the highest standards.'
                },
                {
                  icon: TrendingUp,
                  title: 'Innovation',
                  description: 'We continuously push the boundaries of what\'s possible in trading technology.'
                },
                {
                  icon: Users,
                  title: 'User-Centric',
                  description: 'Every decision we make is driven by what\'s best for our traders.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
                  >
                    <value.icon className="w-8 h-8 text-neon-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage 