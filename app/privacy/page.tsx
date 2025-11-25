'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

const PrivacyPolicyPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const lastUpdated = 'January 15, 2024'

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email address, phone number)',
        'Financial information (bank account details, trading history)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (trading patterns, platform interactions)',
        'Communication records (support tickets, chat logs)'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our trading services',
        'To process transactions and manage your account',
        'To comply with legal and regulatory requirements',
        'To improve our platform and user experience',
        'To communicate with you about our services',
        'To detect and prevent fraud and security threats'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'We may share information with regulatory authorities as required by law',
        'We may share information with service providers who assist in our operations',
        'We may share information in connection with business transfers or mergers',
        'We may share information to protect our rights and safety'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We use industry-standard encryption to protect your data',
        'We implement strict access controls and authentication measures',
        'We regularly conduct security audits and assessments',
        'We follow industry best practices for security and compliance',
        'We use secure data centers with redundant systems'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate information',
        'Right to delete your personal information',
        'Right to restrict processing of your data',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain your information for as long as necessary to provide our services',
        'We retain information to comply with legal and regulatory requirements',
        'We retain information to resolve disputes and enforce agreements',
        'We securely delete information when no longer needed',
        'We maintain records for tax and accounting purposes as required by law'
      ]
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
              <Shield className="w-8 h-8 text-neon-gold" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Your privacy is our priority. Learn how we protect and handle your personal information.
            </p>
            <div className="text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
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
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  ClubLiquidez ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our trading platform and services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in 
                  accordance with this policy. We will not use or share your information with 
                  anyone except as described in this Privacy Policy.
                </p>
                <p>
                  This policy applies to all users of our platform, including traders, investors, 
                  and visitors to our website.
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl border border-gray-700 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Cookies Section */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-neon-gold" />
                <h3 className="text-xl font-bold text-white">Cookies and Tracking</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our platform. 
                  These technologies help us:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Remember your preferences and settings</li>
                  <li>• Analyze how you use our platform</li>
                  <li>• Provide personalized content and features</li>
                  <li>• Improve our services and security</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. However, 
                  disabling certain cookies may affect the functionality of our platform.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-neon-amber" />
                <h3 className="text-xl font-bold text-white">Third-Party Services</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our platform may integrate with third-party services for:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Payment processing and banking services</li>
                  <li>• Market data providers and exchanges</li>
                  <li>• Customer support and communication tools</li>
                  <li>• Analytics and performance monitoring</li>
                </ul>
                <p>
                  These third-party services have their own privacy policies, and we encourage 
                  you to review them. We are not responsible for the privacy practices of 
                  third-party services.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-neon-gold" />
                <h3 className="text-xl font-bold text-white">International Data Transfers</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your information may be transferred to and processed in countries other than 
                  your own. We ensure that such transfers comply with applicable data protection 
                  laws and implement appropriate safeguards to protect your information.
                </p>
                <p>
                  For users in the European Union, we rely on adequacy decisions, standard 
                  contractual clauses, and other approved mechanisms for international transfers.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-neon-gold-champagne" />
                <h3 className="text-xl font-bold text-white">Children's Privacy</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our services are not intended for individuals under the age of 18. We do not 
                  knowingly collect personal information from children under 18. If you are a 
                  parent or guardian and believe your child has provided us with personal 
                  information, please contact us immediately.
                </p>
                <p>
                  If we become aware that we have collected personal information from a child 
                  under 18, we will take steps to delete such information promptly.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Changes to This Policy</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date.
                </p>
                <p>
                  We will also notify you via email or through our platform for significant 
                  changes that affect how we use your personal information.
                </p>
                <p>
                  Your continued use of our services after any changes to this Privacy Policy 
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@clubliquidez.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 350 5th Avenue, New York, NY 10118</p>
                </div>
                <p>
                  For users in the European Union, you also have the right to lodge a complaint 
                  with your local data protection authority.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPolicyPage 