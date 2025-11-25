'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Scale,
  Users,
  DollarSign
} from 'lucide-react'

const TermsOfServicePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const lastUpdated = 'January 15, 2024'

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using ClubLiquidez, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you must not use our platform',
        'We reserve the right to modify these terms at any time',
        'Continued use of our services after changes constitutes acceptance of updated terms'
      ]
    },
    {
      title: 'Account Registration and Verification',
      content: [
        'You must provide accurate and complete information when creating an account',
        'You are responsible for maintaining the security of your account credentials',
        'We may require identity verification and additional documentation',
        'You must be at least 18 years old to use our services',
        'You may not create multiple accounts or transfer your account to others'
      ]
    },
    {
      title: 'Trading and Investment Risks',
      content: [
        'Trading involves substantial risk of loss and is not suitable for all investors',
        'Past performance does not guarantee future results',
        'You should only trade with funds you can afford to lose',
        'We do not provide investment advice or recommendations',
        'You are responsible for your own trading decisions and strategies'
      ]
    },
    {
      title: 'Prohibited Activities',
      content: [
        'Market manipulation or insider trading',
        'Using automated trading systems without authorization',
        'Attempting to gain unauthorized access to our systems',
        'Violating applicable laws or regulations',
        'Engaging in fraudulent or deceptive practices',
        'Interfering with other users\' trading activities'
      ]
    },
    {
      title: 'Fees and Charges',
      content: [
        'We charge fees for trading, withdrawals, and certain services',
        'Fees are clearly disclosed before you complete any transaction',
        'We may change our fee structure with 30 days notice',
        'You are responsible for all taxes related to your trading activities',
        'We do not guarantee specific returns or profit levels'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on our platform is owned by ClubLiquidez or our licensors',
        'You may not copy, modify, or distribute our content without permission',
        'Our trademarks and logos are protected intellectual property',
        'You retain ownership of your trading data and personal information',
        'We may use anonymized data for research and improvement purposes'
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
              <FileText className="w-8 h-8 text-neon-gold" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Terms of <span className="gradient-text">Service</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Please read these terms carefully before using our trading platform. 
              These terms govern your use of ClubLiquidez services.
            </p>
            <div className="text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  These Terms of Service ("Terms") govern your use of ClubLiquidez's trading platform, 
                  website, and related services (collectively, the "Services"). By using our Services, 
                  you agree to these Terms and our Privacy Policy.
                </p>
                <p>
                  ClubLiquidez is operated by ClubLiquidez Inc., a company registered in the United States. 
                  Our platform provides access to various financial markets and trading instruments.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and ClubLiquidez. 
                  Please read them carefully and contact us if you have any questions.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
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

            {/* Risk Disclosure */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-neon-amber" />
                <h3 className="text-xl font-bold text-white">Risk Disclosure</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Trading financial instruments involves substantial risk and may result in the loss 
                  of your invested capital. You should carefully consider whether trading is appropriate 
                  for you in light of your financial condition, investment objectives, and risk tolerance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Market Risk</h4>
                    <p className="text-sm text-gray-400">Prices can move against your position</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Leverage Risk</h4>
                    <p className="text-sm text-gray-400">Amplified gains and losses</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Liquidity Risk</h4>
                    <p className="text-sm text-gray-400">Difficulty exiting positions</p>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Technology Risk</h4>
                    <p className="text-sm text-gray-400">System failures and delays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-neon-gold" />
                <h3 className="text-xl font-bold text-white">Limitation of Liability</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  To the maximum extent permitted by law, ClubLiquidez shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but 
                  not limited to loss of profits, data, or use.
                </p>
                <p>
                  Our total liability to you for any claims arising from these Terms or your use of 
                  our Services shall not exceed the amount of fees you have paid to us in the 12 
                  months preceding the claim.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of liability, so the 
                  above limitations may not apply to you.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-neon-gold-champagne" />
                <h3 className="text-xl font-bold text-white">Dispute Resolution</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Any disputes arising from these Terms or your use of our Services shall be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration 
                  Association.
                </p>
                <p>
                  Arbitration shall be conducted in New York, New York, and the decision of the 
                  arbitrator shall be final and binding.
                </p>
                <p>
                  You agree to waive any right to a jury trial or to participate in a class action 
                  lawsuit.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Termination</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may terminate or suspend your account and access to our Services at any time, 
                  with or without cause, with or without notice.
                </p>
                <p>
                  You may terminate your account at any time by contacting our support team. Upon 
                  termination, you will lose access to our Services and any remaining balance will 
                  be processed according to our withdrawal procedures.
                </p>
                <p>
                  The provisions of these Terms that by their nature should survive termination 
                  shall survive termination, including but not limited to intellectual property 
                  rights, disclaimers, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Governing Law</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of 
                  the State of New York, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any legal action or proceeding relating to these Terms shall be instituted in 
                  the state or federal courts located in New York County, New York.
                </p>
                <p>
                  You agree to submit to the personal jurisdiction of these courts and waive any 
                  objection to venue or forum non conveniens.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Severability</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that 
                  provision will be limited or eliminated to the minimum extent necessary so that 
                  these Terms will otherwise remain in full force and effect.
                </p>
                <p>
                  The failure of ClubLiquidez to enforce any right or provision of these Terms 
                  will not constitute a waiver of that right or provision.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@clubliquidez.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 350 5th Avenue, New York, NY 10118</p>
                </div>
                <p>
                  We will respond to your inquiry within 48 hours during business days.
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

export default TermsOfServicePage 