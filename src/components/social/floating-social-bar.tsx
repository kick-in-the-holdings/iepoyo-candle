'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconInstagram } from '../icons/icon-instagram'
import { IconLine } from '../icons/icon-line'

interface SocialLink {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>
  url: string
  color: string
  gradient?: string
  message: string
}

const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: IconInstagram,
    url: 'https://www.instagram.com/p/DLWm5PryCVh/',
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
    message: 'フォローで最新情報をチェック！'
  },
  {
    id: 'line',
    name: 'LINE',
    icon: IconLine,
    url: 'https://lin.ee/PhCo4lv',
    color: 'bg-green-500',
    message: '友だち追加で10%OFFクーポン！'
  }
]

export function FloatingSocialBar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      {/* デスクトップ版 - 右側固定 */}
      <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-40 space-y-4">
        {socialLinks.map((social) => (
          <motion.div
            key={social.id}
            className="relative"
            onMouseEnter={() => setHoveredId(social.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* ツールチップ */}
            <AnimatePresence>
              {hoveredId === social.id && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-bold">{social.name}</p>
                    <p className="text-xs opacity-90">{social.message}</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 
                      border-t-[6px] border-t-transparent
                      border-b-[6px] border-b-transparent
                      border-l-[6px] border-l-gray-900">
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* パルスアニメーション */}
            <div className={`absolute inset-0 rounded-full ${social.color} animate-pulse opacity-30 pointer-events-none`} />
            
            {/* ソーシャルボタン */}
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block w-14 h-14 rounded-full ${social.color} shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 z-10`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={28} color="white" />
            </motion.a>
          </motion.div>
        ))}

      </div>

      {/* モバイル版 - 右端固定 */}
      <div className="md:hidden fixed right-4 bottom-32 z-40 space-y-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.id}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* パルスアニメーション */}
            <div className={`absolute inset-0 rounded-full ${social.color} animate-pulse opacity-30 pointer-events-none`} />
            
            {/* ソーシャルボタン */}
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block w-12 h-12 rounded-full ${social.color} shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 z-10`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={24} color="white" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </>
  )
}