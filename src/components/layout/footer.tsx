'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconInstagram } from '../icons/icon-instagram'
import { IconLine } from '../icons/icon-line'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'サービス',
      links: [
        { href: '/experience', label: 'キャンドル体験' },
        // { href: '/shop', label: 'オンラインショップ' },
        { href: '/gallery', label: 'ギャラリー' },
      ],
    },
    {
      title: '店舗情報',
      links: [
        { href: '/access', label: 'アクセス' },
        { href: '/access#contact', label: 'お問い合わせ' },
        { href: '/access#hours', label: '営業時間' },
      ],
    },
    {
      title: 'SNS',
      links: [
        { href: 'https://www.instagram.com/p/DLWm5PryCVh/', label: 'Instagram' },
        { href: 'https://lin.ee/PhCo4lv', label: 'LINE' },
        // { href: 'https://www.jalan.net/kankou/spt_guide000000229021/', label: 'じゃらん予約' },
        // { href: 'https://stores.jp/', label: 'STORES' },
      ],
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-pale-lavender to-pastel-coral text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴとブランド情報 */}
          <motion.div
            className="col-span-1 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-miyako-blue to-soft-pink bg-clip-text text-transparent mb-4">
              iepoyo candle
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              宮古島の美しい海をイメージしたゆめかわいキャンドル作り体験で、
              特別な思い出を作りませんか。
            </p>
            <div className="text-sm text-gray-600">
              <p>📍 〒906-0008<br/>沖縄県宮古島市平良荷川取206-3</p>
            </div>
          </motion.div>

          {/* フッターリンク */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-miyako-blue transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-miyako-blue transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-sm text-gray-600 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              © {currentYear} iepoyo candle. All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-sm text-gray-500">
                #宮古島キャンドル #miyakocandle
              </span>
              
              {/* SNSアイコン */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/p/DLWm5PryCVh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full hover:scale-110 transition-transform duration-300"
                  title="Instagram"
                >
                  <IconInstagram size={16} color="white" />
                </a>
                <a
                  href="https://lin.ee/PhCo4lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full hover:scale-110 transition-transform duration-300"
                  title="LINE"
                >
                  <IconLine size={16} color="white" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }