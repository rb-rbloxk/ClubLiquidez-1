'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter,
  Star,
  Eye,
  BarChart3
} from 'lucide-react'

interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
  category: 'crypto' | 'stock' | 'forex'
}

const MarketsPage = () => {
  const [markets, setMarkets] = useState<MarketData[]>([])
  const [filteredMarkets, setFilteredMarkets] = useState<MarketData[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'crypto' | 'stock' | 'forex'>('all')
  const [sortBy, setSortBy] = useState<'price' | 'change' | 'volume' | 'marketCap'>('volume')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockData: MarketData[] = [
      { symbol: 'BTC', name: 'Bitcoin', price: 43250.00, change: 1050.00, changePercent: 2.45, volume: 28500000000, marketCap: 850000000000, category: 'crypto' },
      { symbol: 'ETH', name: 'Ethereum', price: 2650.00, change: -45.00, changePercent: -1.67, volume: 18500000000, marketCap: 320000000000, category: 'crypto' },
      { symbol: 'AAPL', name: 'Apple Inc.', price: 175.50, change: 2.30, changePercent: 1.33, volume: 4500000000, marketCap: 2750000000000, category: 'stock' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.80, change: -1.20, changePercent: -0.83, volume: 3200000000, marketCap: 1800000000000, category: 'stock' },
      { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0850, change: 0.0020, changePercent: 0.18, volume: 85000000000, marketCap: 0, category: 'forex' },
      { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2650, change: -0.0050, changePercent: -0.39, volume: 65000000000, marketCap: 0, category: 'forex' },
      { symbol: 'SOL', name: 'Solana', price: 98.50, change: 5.20, changePercent: 5.57, volume: 8500000000, marketCap: 45000000000, category: 'crypto' },
      { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.00, change: 8.50, changePercent: 3.59, volume: 8500000000, marketCap: 780000000000, category: 'stock' },
    ]
    setMarkets(mockData)
    setFilteredMarkets(mockData)
  }, [])

  // Filter and sort markets
  useEffect(() => {
    let filtered = markets.filter(market => {
      const matchesSearch = market.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           market.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || market.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort markets
    filtered.sort((a, b) => {
      let aValue = a[sortBy]
      let bValue = b[sortBy]
      
      if (sortOrder === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    setFilteredMarkets(filtered)
  }, [markets, searchTerm, selectedCategory, sortBy, sortOrder])

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  const categories = [
    { id: 'all', name: 'All Markets' },
    { id: 'crypto', name: 'Cryptocurrencies' },
    { id: 'stock', name: 'Stocks' },
    { id: 'forex', name: 'Forex' },
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
              Global <span className="gradient-text">Markets</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time market data across cryptocurrencies, stocks, and forex. 
              Track prices, analyze trends, and make informed trading decisions.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search markets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id as any)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Markets Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-gold"
              >
                <option value="volume">Volume</option>
                <option value="price">Price</option>
                <option value="change">Change</option>
                <option value="marketCap">Market Cap</option>
              </select>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </div>
            <div className="text-gray-400">
              {filteredMarkets.length} markets found
            </div>
          </div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMarkets.map((market, index) => (
              <motion.div
                key={market.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-white">{market.symbol}</h3>
                      <Star className="w-4 h-4 text-gray-500 hover:text-yellow-400 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-400">{market.name}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-500 hover:text-neon-gold cursor-pointer transition-colors" />
                    <BarChart3 className="w-4 h-4 text-gray-500 hover:text-neon-gold cursor-pointer transition-colors" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Price</span>
                    <span className="text-white font-semibold">
                      {market.category === 'forex' ? market.price.toFixed(4) : `$${market.price.toLocaleString()}`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">24h Change</span>
                    <div className="flex items-center space-x-1">
                      {market.changePercent >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-neon-gold-champagne" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-neon-amber" />
                      )}
                      <span className={`font-semibold ${
                        market.changePercent >= 0 ? 'text-neon-gold-champagne' : 'text-neon-amber'
                      }`}>
                        {market.changePercent >= 0 ? '+' : ''}{market.changePercent.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Volume</span>
                    <span className="text-white font-semibold">{formatNumber(market.volume)}</span>
                  </div>

                  {market.marketCap > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Cap</span>
                      <span className="text-white font-semibold">{formatNumber(market.marketCap)}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <Button variant="outline" size="sm" className="w-full">
                    Trade Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMarkets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">No markets found matching your criteria</div>
              <Button
                variant="primary"
                size="md"
                className="mt-4"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default MarketsPage 