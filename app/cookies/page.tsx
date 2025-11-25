'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  Cookie, 
  Settings, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Database
} from 'lucide-react'

const CookiePolicyPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const lastUpdated = 'January 15, 2024'

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'Required for basic platform functionality',
      examples: ['Authentication', 'Security', 'Session management'],
      duration: 'Session or 1 year',
      necessary: true
    },
    {
      name: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our platform',
      examples: ['Analytics', 'Error tracking', 'Performance monitoring'],
      duration: '2 years',
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: ['Language settings', 'Theme preferences', 'Trading preferences'],
      duration: '1 year',
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'Used for advertising and marketing purposes',
      examples: ['Ad targeting', 'Social media integration', 'Marketing analytics'],
      duration: '2 years',
      necessary: false
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
              <Cookie className="w-8 h-8 text-neon-gold" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Cookie <span className="gradient-text">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Learn how we use cookies and similar technologies to enhance your trading experience.
            </p>
            <div className="text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files that are stored on your device when you visit our 
                  website. They help us provide you with a better experience by remembering your 
                  preferences, analyzing how you use our platform, and personalizing content.
                </p>
                <p>
                  We use cookies and similar technologies to enhance security, improve performance, 
                  and provide personalized features. By using our platform, you consent to our use 
                  of cookies as described in this policy.
                </p>
              </div>
            </div>

            {/* Cookie Types */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Types of Cookies We Use</h2>
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                      <p className="text-gray-400">{type.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      type.necessary 
                        ? 'bg-neon-gold-champagne/20 text-neon-gold-champagne' 
                        : 'bg-neon-gold/20 text-neon-gold'
                    }`}>
                      {type.necessary ? 'Necessary' : 'Optional'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-neon-gold-champagne" />
                            <span className="text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Duration:</h4>
                      <p className="text-gray-300 text-sm">{type.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-neon-amber" />
                <h3 className="text-xl font-bold text-white">Third-Party Cookies</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may use third-party services that place cookies on your device. These services 
                  help us provide better functionality and analyze platform usage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Analytics Services</h4>
                    <p className="text-sm text-gray-400">Google Analytics, Mixpanel</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Payment Processors</h4>
                    <p className="text-sm text-gray-400">Stripe, PayPal</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Security Services</h4>
                    <p className="text-sm text-gray-400">Cloudflare, reCAPTCHA</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Social Media</h4>
                    <p className="text-sm text-gray-400">Twitter, LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-6 h-6 text-neon-gold" />
                <h3 className="text-xl font-bold text-white">Managing Your Cookie Preferences</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Browser Settings</h4>
                      <p className="text-sm text-gray-400">
                        Most browsers allow you to control cookies through their settings. 
                        You can block all cookies or only third-party cookies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Cookie Consent</h4>
                      <p className="text-sm text-gray-400">
                        When you first visit our platform, you can choose which types of 
                        cookies to accept or reject.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Account Settings</h4>
                      <p className="text-sm text-gray-400">
                        You can manage your cookie preferences through your account settings 
                        at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-neon-gold-champagne" />
                <h3 className="text-xl font-bold text-white">Impact of Disabling Cookies</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  While you can disable cookies, doing so may affect your experience on our platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-400">
                      Disabling these may prevent basic platform functionality
                    </p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Performance Cookies</h4>
                    <p className="text-sm text-gray-400">
                      May reduce our ability to optimize platform performance
                    </p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Functional Cookies</h4>
                    <p className="text-sm text-gray-400">
                      Your preferences may not be remembered
                    </p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-400">
                      May affect personalized content and ads
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Updates to This Policy</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by posting the updated policy on our 
                  website and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our platform after any changes constitutes acceptance of 
                  the updated Cookie Policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@clubliquidez.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 350 5th Avenue, New York, NY 10118</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CookiePolicyPage 