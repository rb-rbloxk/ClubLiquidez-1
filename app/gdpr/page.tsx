'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  Shield, 
  User, 
  Database, 
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  Trash2
} from 'lucide-react'

const GDPRPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const lastUpdated = 'January 15, 2024'

  const dataSubjectRights = [
    {
      icon: Eye,
      title: 'Right of Access',
      description: 'You have the right to request access to your personal data and information about how we process it.',
      color: 'text-neon-gold'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You can request a copy of your personal data in a structured, machine-readable format.',
      color: 'text-neon-gold-champagne'
    },
    {
      icon: CheckCircle,
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.',
      color: 'text-neon-gold-dark'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      color: 'text-neon-amber'
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
                GDPR <span className="gradient-text">Compliance</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Your data protection rights under the General Data Protection Regulation (GDPR).
            </p>
            <div className="text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GDPR Content */}
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
              <h2 className="text-2xl font-bold text-white mb-6">GDPR Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The General Data Protection Regulation (GDPR) is a comprehensive data protection 
                  law that applies to organizations operating within the European Union (EU) and 
                  those that offer goods or services to EU residents.
                </p>
                <p>
                  ClubLiquidez is committed to GDPR compliance and protecting the privacy rights 
                  of our EU users. This page outlines your rights and our obligations under GDPR.
                </p>
                <p>
                  As a data controller, we are responsible for ensuring that your personal data 
                  is processed lawfully, fairly, and transparently.
                </p>
              </div>
            </div>

            {/* Data Subject Rights */}
            <div>
              <h2 className="text-3xl font-bold text-white text-center mb-8">Your Data Subject Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataSubjectRights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-800 rounded-2xl border border-gray-700 p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 bg-dark-700 rounded-lg`}>
                        <right.icon className={`w-6 h-6 ${right.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Rights */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Additional Rights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Restrict Processing</h4>
                      <p className="text-sm text-gray-400">Request limitation of data processing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Object</h4>
                      <p className="text-sm text-gray-400">Object to processing of your data</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Withdraw Consent</h4>
                      <p className="text-sm text-gray-400">Withdraw consent at any time</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Lodge Complaint</h4>
                      <p className="text-sm text-gray-400">Complain to supervisory authority</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Compensation</h4>
                      <p className="text-sm text-gray-400">Seek compensation for damages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Right to Representation</h4>
                      <p className="text-sm text-gray-400">Appoint a representative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Legal Basis for Processing</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We process your personal data based on the following legal grounds:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Contract Performance</h4>
                    <p className="text-sm text-gray-400">To provide our trading services</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Legal Obligation</h4>
                    <p className="text-sm text-gray-400">To comply with financial regulations</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Legitimate Interest</h4>
                    <p className="text-sm text-gray-400">To improve our services</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Consent</h4>
                    <p className="text-sm text-gray-400">For marketing communications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Transfers */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-neon-gold" />
                <h3 className="text-xl font-bold text-white">International Data Transfers</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your personal data may be transferred to and processed in countries outside the 
                  European Economic Area (EEA). We ensure that such transfers comply with GDPR 
                  requirements through:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Adequacy decisions by the European Commission</li>
                  <li>• Standard contractual clauses (SCCs)</li>
                  <li>• Binding corporate rules (BCRs)</li>
                  <li>• Other approved transfer mechanisms</li>
                </ul>
                <p>
                  We maintain a record of all international data transfers and can provide 
                  details upon request.
                </p>
              </div>
            </div>

            {/* Data Protection Officer */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Data Protection Officer</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance 
                  and handle data protection matters:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> dpo@clubliquidez.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 350 5th Avenue, New York, NY 10118</p>
                </div>
                <p>
                  You can contact our DPO directly with any questions about your data protection 
                  rights or our GDPR compliance.
                </p>
              </div>
            </div>

            {/* Exercising Your Rights */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Exercising Your Rights</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  To exercise your GDPR rights, you can:
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Submit a Request</h4>
                      <p className="text-sm text-gray-400">
                        Contact us at privacy@clubliquidez.com with your request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Provide Identification</h4>
                      <p className="text-sm text-gray-400">
                        We may need to verify your identity before processing requests
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-gold-champagne mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Response Timeline</h4>
                      <p className="text-sm text-gray-400">
                        We will respond to your request within 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  For GDPR-related inquiries, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@clubliquidez.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 350 5th Avenue, New York, NY 10118</p>
                </div>
                <p>
                  You also have the right to lodge a complaint with your local data protection 
                  authority if you believe we have not addressed your concerns adequately.
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

export default GDPRPage 