import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ClubLiquidez - Unlock Liquidity. Trade Smarter.',
  description: 'Premium trading platform with cutting-edge tools, real-time market data, and advanced analytics. Join ClubLiquidez for the ultimate trading experience.',
  keywords: 'trading, cryptocurrency, stocks, forex, liquidity, ClubLiquidez, trading platform, market data, trading tools',
  authors: [{ name: 'ClubLiquidez Team' }],
  icons: {
    icon: '/LC.png',
    shortcut: '/LC.png',
    apple: '/LC.png',
  },
  openGraph: {
    title: 'ClubLiquidez - Unlock Liquidity. Trade Smarter.',
    description: 'Premium trading platform with cutting-edge tools and real-time market data.',
    url: 'https://clubliquidez.com',
    siteName: 'ClubLiquidez',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClubLiquidez Trading Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClubLiquidez - Unlock Liquidity. Trade Smarter.',
    description: 'Premium trading platform with cutting-edge tools and real-time market data.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-950 text-white antialiased`}>
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
} 