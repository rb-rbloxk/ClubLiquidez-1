'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Star,
  ThumbsUp,
  Share2,
  Bookmark,
  User,
  Clock,
  Eye
} from 'lucide-react'

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { id: 'all', name: 'All Discussions', count: 1250 },
    { id: 'trading', name: 'Trading Strategies', count: 450 },
    { id: 'analysis', name: 'Market Analysis', count: 320 },
    { id: 'education', name: 'Education', count: 280 },
    { id: 'general', name: 'General Discussion', count: 200 }
  ]

  const discussions = [
    {
      id: '1',
      title: 'Best risk management strategies for crypto trading',
      author: 'Sarah Chen',
      avatar: 'SC',
      category: 'trading',
      replies: 24,
      views: 156,
      likes: 18,
      time: '2 hours ago',
      featured: true
    },
    {
      id: '2',
      title: 'Technical analysis: Bitcoin support levels',
      author: 'Mike Rodriguez',
      avatar: 'MR',
      category: 'analysis',
      replies: 12,
      views: 89,
      likes: 15,
      time: '4 hours ago',
      featured: false
    },
    {
      id: '3',
      title: 'How to read candlestick patterns effectively',
      author: 'Emma Wilson',
      avatar: 'EW',
      category: 'education',
      replies: 8,
      views: 67,
      likes: 12,
      time: '6 hours ago',
      featured: true
    },
    {
      id: '4',
      title: 'Platform update: New charting features',
      author: 'David Park',
      avatar: 'DP',
      category: 'general',
      replies: 15,
      views: 234,
      likes: 32,
      time: '1 day ago',
      featured: false
    }
  ]

  const topContributors = [
    { name: 'Sarah Chen', posts: 156, reputation: 2450, avatar: 'SC' },
    { name: 'Mike Rodriguez', posts: 134, reputation: 2100, avatar: 'MR' },
    { name: 'Emma Wilson', posts: 98, reputation: 1800, avatar: 'EW' },
    { name: 'David Park', posts: 87, reputation: 1650, avatar: 'DP' }
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
              <Users className="w-8 h-8 text-neon-gold" />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Trading <span className="gradient-text">Community</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with fellow traders, share strategies, and learn from the community. 
              Join thousands of traders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Discussion
              </Button>
              <Button variant="secondary" size="lg">
                Browse Forums
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Active Members', value: '15,420', icon: Users },
                { label: 'Discussions', value: '2,450', icon: MessageSquare },
                { label: 'Replies', value: '12,890', icon: TrendingUp },
                { label: 'Knowledge Base', value: '850+', icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
                  >
                    <stat.icon className="w-8 h-8 text-neon-gold" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories and Discussions */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{discussion.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-bold text-white">{discussion.title}</h3>
                          {discussion.featured && <Star className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.time}</span>
                          <span>•</span>
                          <span className="capitalize">{discussion.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{discussion.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Top Contributors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topContributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 text-center hover:border-neon-gold/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{contributor.avatar}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contributor.name}</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>{contributor.posts} posts</div>
                    <div>{contributor.reputation} reputation</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Community Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Be Respectful',
                  description: 'Treat all members with respect and courtesy. No harassment or discrimination.'
                },
                {
                  title: 'Share Knowledge',
                  description: 'Contribute valuable insights and help others learn. Quality over quantity.'
                },
                {
                  title: 'Follow Rules',
                  description: 'Adhere to platform rules and trading regulations. No illegal activities.'
                }
              ].map((guideline, index) => (
                <motion.div
                  key={guideline.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{guideline.title}</h3>
                  <p className="text-gray-300">{guideline.description}</p>
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

export default CommunityPage 