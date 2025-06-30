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
            <span className="block">宮古島で</span>
            <span className="block bg-gradient-to-r from-gold-highlight to-mint-green bg-clip-text text-transparent">
              ゆめかわ
            </span>
            <span className="block">キャンドル体験</span>
          </motion.h1>

          {/* サブタイトル */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            美しい宮古ブルーにインスパイアされた、
            <br className="hidden sm:block" />
            あなただけの特別なキャンドルを作りませんか？
            <br className="hidden sm:block" />
            雨の日でも楽しめる、インスタ映え間違いなしの体験です✨
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <GradientButton size="lg" className="min-w-48">
              🕯️ 体験を予約する
            </GradientButton>
            <GradientButton variant="secondary" size="lg" className="min-w-48">
              🛒 商品を見る
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
              <span className="text-sm">雨天OK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">📸</span>
              <span className="text-sm">インスタ映え</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">💕</span>
              <span className="text-sm">カップル人気</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-highlight">🎨</span>
              <span className="text-sm">手ぶらOK</span>
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