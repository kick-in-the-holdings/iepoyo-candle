'use client'

import { motion } from 'framer-motion'

import { GradientButton } from '@/components/ui/gradient-button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-miyako-blue via-pale-lavender to-soft-pink">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-cream-white/20 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-pastel-coral/20 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインタイトル */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="block">宮古島で、"きゅん"とする想い出づくり💖</span>
            <span className="block bg-gradient-to-r from-gold-highlight to-mint-green bg-clip-text text-transparent">
            世界にひとつの「ゆめかわキャンドル」
            </span>
            <span className="block">を灯そう✨</span>
          </motion.h1>

          {/* サブタイトル */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            宮古島のキラキラの海をぎゅっと閉じ込めた、
            <br className="hidden sm:block" />
            宝物みたいなキャンドル、作ってみない？
            <br className="hidden sm:block" />
            初めてでも、不器用さんでも大丈夫！かわいく作れるヒミツ、教えちゃう😉
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <GradientButton size="lg" className="min-w-48">
              🕯️ さっそく体験してみる
            </GradientButton>
            <GradientButton variant="secondary" size="lg" className="min-w-48">
              🛒 どんな作品があるか見る
            </GradientButton>
          </motion.div>

          {/* 特徴ポイント */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">☀️</span>
              <span className="text-sm">雨でもOK!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">📸</span>
              <span className="text-sm">映え確実</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">💕</span>
              <span className="text-sm">カップルに人気</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">🎨</span>
              <span className="text-sm">手ぶらでOK</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* スクロール促進アニメーション */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export { HeroSection }