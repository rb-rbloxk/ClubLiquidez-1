'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video,
  MessageSquare,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Play,
  FileText,
  Settings
} from 'lucide-react'

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create an account',
          content: 'Step-by-step guide to creating your ClubLiquidez account',
          video: true,
          readTime: '5 min'
        },
        {
          title: 'Account verification process',
          content: 'Complete guide to verifying your identity and account',
          video: false,
          readTime: '8 min'
        },
        {
          title: 'Making your first deposit',
          content: 'Learn how to fund your account and start trading',
          video: true,
          readTime: '6 min'
        }
      ]
    },
    {
      id: 'trading',
      title: 'Trading',
      icon: Settings,
      articles: [
        {
          title: 'How to place your first trade',
          content: 'Complete tutorial on placing trades on our platform',
          video: true,
          readTime: '10 min'
        },
        {
          title: 'Understanding order types',
          content: 'Learn about market orders, limit orders, and stop orders',
          video: false,
          readTime: '12 min'
        },
        {
          title: 'Risk management basics',
          content: 'Essential risk management strategies for traders',
          video: true,
          readTime: '15 min'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account Management',
      icon: Settings,
      articles: [
        {
          title: 'Updating your profile',
          content: 'How to change your personal information and preferences',
          video: false,
          readTime: '3 min'
        },
        {
          title: 'Security settings',
          content: 'Configure two-factor authentication and security features',
          video: true,
          readTime: '7 min'
        },
        {
          title: 'Withdrawal process',
          content: 'How to withdraw funds from your account',
          video: false,
          readTime: '5 min'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Settings,
      articles: [
        {
          title: 'Platform compatibility',
          content: 'System requirements and supported browsers',
          video: false,
          readTime: '4 min'
        },
        {
          title: 'Troubleshooting common issues',
          content: 'Solutions for frequently encountered problems',
          video: true,
          readTime: '8 min'
        },
        {
          title: 'Mobile app guide',
          content: 'How to use our mobile trading application',
          video: true,
          readTime: '6 min'
        }
      ]
    }
  ]

  const quickActions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak with a trading specialist',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      action: 'Watch Videos'
    }
  ]

  const popularArticles = [
    'How to reset your password',
    'Understanding trading fees',
    'Setting up price alerts',
    'Using the mobile app',
    'Account security best practices',
    'Trading strategy basics'
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
              <HelpCircle className="w-8 h-8 text-neon-gold" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Help <span className="gradient-text">Center</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get the support you need.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get Help Quickly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-dark-700 rounded-lg group-hover:bg-neon-gold/20 transition-colors">
                      <action.icon className="w-6 h-6 text-neon-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{action.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{action.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {action.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Help Categories</h2>
            <div className="space-y-6">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-dark-700 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <category.icon className="w-6 h-6 text-neon-gold" />
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6 space-y-4">
                        {category.articles.map((article, articleIndex) => (
                          <div key={articleIndex} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              {article.video ? (
                                <Play className="w-4 h-4 text-neon-gold" />
                              ) : (
                                <FileText className="w-4 h-4 text-neon-gold-champagne" />
                              )}
                              <div>
                                <h4 className="text-white font-semibold">{article.title}</h4>
                                <p className="text-sm text-gray-400">{article.content}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{article.readTime}</span>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="w-5 h-5 text-neon-gold" />
                    <h3 className="text-white font-semibold group-hover:text-neon-gold transition-colors">
                      {article}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Quick guide to help you get started with this feature.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HelpCenterPage 