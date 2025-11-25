'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Github,
  Twitter,
  Chrome
} from 'lucide-react'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const { signIn, signUp, signInWithProvider, resetPassword } = useAuth()
  const router = useRouter()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Handle URL parameters for email verification and errors
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const verified = params.get('verified')
    const error = params.get('error')
    
    if (verified === 'true') {
      toast.success('Email verified successfully! You can now sign in.')
      // Clean up URL
      router.replace('/auth')
    }
    
    if (error) {
      toast.error(decodeURIComponent(error))
      // Clean up URL
      router.replace('/auth')
    }
  }, [router])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    if (!/[A-Z]/.test(pwd)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/[a-z]/.test(pwd)) {
      return 'Password must contain at least one lowercase letter'
    }
    if (!/[0-9]/.test(pwd)) {
      return 'Password must contain at least one number'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (forgotPassword) {
        if (!validateEmail(resetEmail)) {
          toast.error('Please enter a valid email address')
          setIsSubmitting(false)
          return
        }
        const { error } = await resetPassword(resetEmail)
        if (error) {
          toast.error(error.message || 'Failed to send reset email')
        } else {
          toast.success('Password reset email sent! Check your inbox.')
          setForgotPassword(false)
          setResetEmail('')
        }
      } else if (isLogin) {
        if (!validateEmail(email)) {
          toast.error('Please enter a valid email address')
          setIsSubmitting(false)
          return
        }
        if (!password) {
          toast.error('Please enter your password')
          setIsSubmitting(false)
          return
        }
        const { error } = await signIn(email, password)
        if (error) {
          toast.error(error.message || 'Failed to sign in')
        } else {
          toast.success('Successfully signed in!')
          router.push('/')
        }
      } else {
        if (!fullName || fullName.trim().length < 2) {
          toast.error('Please enter your full name (at least 2 characters)')
          setIsSubmitting(false)
          return
        }
        if (!validateEmail(email)) {
          toast.error('Please enter a valid email address')
          setIsSubmitting(false)
          return
        }
        const passwordError = validatePassword(password)
        if (passwordError) {
          toast.error(passwordError)
          setIsSubmitting(false)
          return
        }
        const { error } = await signUp(email, password, fullName)
        if (error) {
          toast.error(error.message || 'Failed to create account')
        } else {
          toast.success('Account created! Please check your email to verify your account before signing in.')
          // Clear form
          setEmail('')
          setPassword('')
          setFullName('')
          setIsLogin(true)
        }
      }
    } catch (error: any) {
      toast.error(error.message || 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSocialSignIn = async (provider: 'google' | 'github' | 'twitter') => {
    try {
      await signInWithProvider(provider)
    } catch (error: any) {
      toast.error(`Failed to sign in with ${provider}`)
    }
  }

  // const socialProviders = [
  //   { name: 'Google', icon: Chrome, provider: 'google' as const, color: 'bg-red-600 hover:bg-red-700' },
  //   { name: 'GitHub', icon: Github, provider: 'github' as const, color: 'bg-gray-800 hover:bg-gray-900' },
  //   { name: 'Twitter', icon: Twitter, provider: 'twitter' as const, color: 'bg-blue-500 hover:bg-blue-600' }
  // ]

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
                Welcome to <span className="gradient-text">ClubLiquidez</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of traders worldwide and start your journey to financial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Auth Form */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 rounded-2xl border border-gray-700 p-8"
          >
            {!forgotPassword ? (
              <>
                {/* Toggle Buttons */}
                <div className="flex bg-dark-700 rounded-lg p-1 mb-8">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                      isLogin 
                        ? 'bg-neon-gold text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                      !isLogin 
                        ? 'bg-neon-gold text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Social Sign-in */}
                {/* <div className="space-y-4 mb-8">
                  <p className="text-center text-gray-400 text-sm">Continue with</p>
                  <div className="grid grid-cols-3 gap-3">
                    {socialProviders.map((provider) => (
                      <motion.button
                        key={provider.name}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSocialSignIn(provider.provider)}
                        className={`${provider.color} text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors`}
                        title={`Sign in with ${provider.name}`}
                      >
                        <provider.icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-dark-800 text-gray-400">or</span>
                    </div>
                  </div>
                </div> */}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {!isLogin && password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2 text-xs">
                          <div className={`flex-1 h-1 rounded ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-600'}`} />
                          <div className={`flex-1 h-1 rounded ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-600'}`} />
                          <div className={`flex-1 h-1 rounded ${/[a-z]/.test(password) ? 'bg-green-500' : 'bg-gray-600'}`} />
                          <div className={`flex-1 h-1 rounded ${/[0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-600'}`} />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Must be at least 8 characters with uppercase, lowercase, and number
                        </p>
                      </div>
                    )}
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-neon-gold bg-dark-700 border-gray-600 rounded focus:ring-neon-gold focus:ring-2"
                        />
                        <span className="ml-2 text-sm text-gray-400">Remember me</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setForgotPassword(true)}
                        className="text-sm text-neon-gold hover:text-neon-gold/80"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  {!isLogin && (
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-neon-gold bg-dark-700 border-gray-600 rounded focus:ring-neon-gold focus:ring-2 mt-1"
                      />
                      <label className="ml-2 text-sm text-gray-400">
                        I agree to the{' '}
                        <a href="/terms" className="text-neon-gold hover:text-neon-gold/80">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-neon-gold hover:text-neon-gold/80">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                {/* Switch Mode */}
                <div className="mt-8 text-center">
                  <p className="text-gray-400">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-neon-gold hover:text-neon-gold/80 font-medium"
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                  <p className="text-gray-400">Enter your email to receive a password reset link</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </Button>

                  <button
                    type="button"
                    onClick={() => {
                      setForgotPassword(false)
                      setResetEmail('')
                    }}
                    className="w-full text-center text-neon-gold hover:text-neon-gold/80 font-medium"
                  >
                    Back to Sign In
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AuthPage
