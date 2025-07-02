'use client'

import { motion } from 'framer-motion'

import { GradientButton } from '@/components/ui/gradient-button'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-miyako-blue to-soft-pink relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* メインメッセージ */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            さあ、あなただけの特別な
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold-highlight to-mint-green bg-clip-text text-transparent">
              キャンドル作り体験
            </span>
            <br className="hidden sm:block" />
            をはじめよう
          </h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            宮古島の美しい自然に包まれた空間で、
            <br className="hidden sm:block" />
            世界にひとつの宝物を作る、心ときめく時間。
            <br className="hidden sm:block" />
            最高の思い出作りを、私たちが全力でサポートします！
          </motion.p>

          {/* 特典情報 */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              🎁 ご予約特典
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
              <div className="text-center">
                <div className="text-2xl mb-2">🎁</div>
                <div className="text-sm">ギフトラッピング無料</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm">記念フォトサービス</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌺</div>
                <div className="text-sm">プチギフトプレゼント</div>
              </div>
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GradientButton size="lg" variant="secondary" className="min-w-64">
              <a href="https://www.jalan.net/kankou/spt_guide000000229021/?screenId=OUW3701&rootCd=3" target="_blank" rel="noopener noreferrer">
                🕯️ Webで予約する
              </a>
            </GradientButton>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export { CTASection }