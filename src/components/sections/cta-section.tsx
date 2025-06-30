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
            あなただけの特別な
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold-highlight to-mint-green bg-clip-text text-transparent">
              キャンドル体験
            </span>
            <br className="hidden sm:block" />
            をお楽しみください
          </h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            宮古島の美しい自然にインスパイアされた空間で、
            <br className="hidden sm:block" />
            世界に一つだけのキャンドルを作る特別な時間。
            <br className="hidden sm:block" />
            雨の日でも、晴れの日でも、いつでもお待ちしています。
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
              🎁 今なら特典付き！
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
              <div className="text-center">
                <div className="text-2xl mb-2">📦</div>
                <div className="text-sm">無料ギフト包装</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm">制作過程の写真プレゼント</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌺</div>
                <div className="text-sm">プルメリアのプチギフト</div>
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
              🕯️ 今すぐ体験を予約する
            </GradientButton>
            <GradientButton size="lg" variant="accent" className="min-w-64">
              📞 電話で相談する
            </GradientButton>
          </motion.div>

          {/* 連絡先情報 */}
          <motion.div
            className="mt-8 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="mb-2">📞 0980-XX-XXXX</p>
            <p className="mb-2">⏰ 営業時間：9:00〜18:00（定休日：火曜日）</p>
            <p className="text-sm">
              ※悪天候でアクティビティが中止になった際のご案内も承ります
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { CTASection }