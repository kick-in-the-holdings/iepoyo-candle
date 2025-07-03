'use client'

import { motion } from 'framer-motion'

import { IconInstagram } from '@/components/icons/icon-instagram'
import { IconLine } from '@/components/icons/icon-line'

const SnsFollowSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-soft-pink via-pale-lavender to-miyako-blue">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            📱 最新情報をSNSでチェック！
          </h2>
          <p className="text-lg text-white/90 mb-8">
            キャンドル作りのコツや新作情報、<br />
            お得なキャンペーンをいち早くお届け ✨
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <motion.a
              href="https://www.instagram.com/p/DLWm5PryCVh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconInstagram size={24} color="white" />
              <span className="font-medium">Instagram をフォロー</span>
            </motion.a>
            <motion.a
              href="https://lin.ee/PhCo4lv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconLine size={24} color="white" />
              <span className="font-medium">LINE で友だち追加</span>
            </motion.a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">フォロー特典</h3>
            <div className="grid gap-3 text-sm text-white/90">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">🎁</span>
                <span>限定キャンペーン情報</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">📚</span>
                <span>キャンドル作りのコツ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold-highlight">⭐</span>
                <span>新作デザインの先行公開</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { SnsFollowSection }