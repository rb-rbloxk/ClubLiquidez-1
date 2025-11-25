'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  Key,
  Server,
  Database,
  Zap,
  Award,
  Phone
} from 'lucide-react'

const SecurityPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const securityFeatures = [
    {
      icon: Lock,
      title: '256-bit AES Encryption',
      description: 'Bank-grade encryption for all data in transit and at rest',
      color: 'text-neon-gold'
    },
    {
      icon: Shield,
      title: 'Multi-Factor Authentication',
      description: '2FA, biometric, and hardware key support for account protection',
      color: 'text-neon-gold-champagne'
    },
    {
      icon: Server,
      title: 'Cold Storage',
      description: '95% of digital assets stored in offline cold storage',
      color: 'text-neon-gold-dark'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and fraud detection systems',
      color: 'text-neon-amber'
    }
  ]

  const certifications = [
    {
      name: '256-bit Encryption',
      description: 'Bank-grade encryption for all data in transit and at rest',
      status: 'Active',
      icon: Lock
    },
    {
      name: 'Multi-Factor Auth',
      description: '2FA, biometric, and hardware key support',
      status: 'Active',
      icon: Shield
    },
    {
      name: 'GDPR Compliant',
      description: 'Data protection and privacy compliance',
      status: 'Compliant',
      icon: Database
    },
    {
      name: 'Regular Audits',
      description: 'Ongoing security assessments and monitoring',
      status: 'Active',
      icon: Eye
    }
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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-neon-gold-champagne" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Security <span className="gradient-text">First</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your security is our top priority. We employ industry-leading security measures 
              to protect your assets and personal information.
            </p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-gold-champagne/20 border border-neon-gold-champagne/30 rounded-full">
              <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
              <span className="text-neon-gold-champagne font-medium">Bank-Grade Security</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-dark-700 rounded-lg">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Standards & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <cert.icon className="w-6 h-6 text-neon-gold" />
                      <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    </div>
                    <span className="px-3 py-1 bg-neon-gold-champagne/20 text-neon-gold-champagne rounded-full text-sm font-medium">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Measures</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Infrastructure Security</h3>
                <div className="space-y-4">
                  {[
                    'Secure data centers with redundant systems',
                    'DDoS protection and mitigation',
                    'Regular security audits and penetration testing',
                    'Intrusion detection and prevention systems',
                    'Firewall and network security controls',
                    'Physical security measures and access controls'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Application Security</h3>
                <div className="space-y-4">
                  {[
                    'Secure coding practices and code reviews',
                    'Regular vulnerability assessments',
                    'Input validation and sanitization',
                    'Session management and timeout controls',
                    'API security and rate limiting',
                    'Secure authentication and authorization'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Enable 2FA',
                  description: 'Use two-factor authentication for an extra layer of security',
                  icon: Key
                },
                {
                  title: 'Strong Passwords',
                  description: 'Use unique, complex passwords and a password manager',
                  icon: Lock
                },
                {
                  title: 'Regular Updates',
                  description: 'Keep your devices and software up to date',
                  icon: Zap
                }
              ].map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 text-center"
                >
                  <practice.icon className="w-12 h-12 text-neon-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                  <p className="text-gray-300">{practice.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Incident Response</h2>
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Security Team</h3>
                  <p className="text-gray-300 mb-4">
                    Our dedicated security team monitors our systems around the clock and 
                    responds immediately to any security incidents.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Real-time threat detection</li>
                    <li>• Automated incident response</li>
                    <li>• Security team escalation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Transparent Communication</h3>
                  <p className="text-gray-300 mb-4">
                    We believe in transparency and will communicate any security incidents 
                    to our users promptly and clearly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Immediate incident notification</li>
                    <li>• Regular status updates</li>
                    <li>• Post-incident reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Security */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Security Concerns?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              If you have security concerns or suspect suspicious activity, 
              please contact our security team immediately.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-neon-amber" />
                <span className="text-neon-amber font-semibold">security@clubliquidez.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-neon-gold" />
                <span className="text-neon-gold font-semibold">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SecurityPage 