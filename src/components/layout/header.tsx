'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { GradientButton } from '@/components/ui/gradient-button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/experience', label: '体験予約' },
    { href: '/shop', label: 'ショップ' },
    { href: '/gallery', label: 'ギャラリー' },
    { href: '/access', label: 'アクセス' },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-cream-white/95 backdrop-blur-sm border-b border-soft-pink/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-miyako-blue to-soft-pink bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              宮古島キャンドル
            </motion.div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-miyako-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA ボタン */}
          <div className="hidden md:block">
            <GradientButton size="sm">
              今すぐ予約
            </GradientButton>
          </div>

          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* モバイルメニュー */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-miyako-blue hover:bg-pastel-coral/20 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <GradientButton size="sm" className="w-full">
                今すぐ予約
              </GradientButton>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}

export { Header }