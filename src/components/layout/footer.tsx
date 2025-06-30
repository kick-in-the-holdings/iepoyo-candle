'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'サービス',
      links: [
        { href: '/experience', label: 'キャンドル体験' },
        { href: '/shop', label: 'オンラインショップ' },
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
        { href: '#', label: 'Instagram' },
        { href: '#', label: 'Twitter' },
        { href: '#', label: 'Facebook' },
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
              宮古島キャンドル
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              宮古島の美しい海をイメージしたゆめかわいキャンドル作り体験で、
              特別な思い出を作りませんか。
            </p>
            <div className="text-sm text-gray-600">
              <p>📍 沖縄県宮古島市</p>
              <p>📞 0980-XX-XXXX</p>
              <p>📧 info@miyako-candle.com</p>
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
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-miyako-blue transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
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
              © {currentYear} 宮古島キャンドル. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-miyako-blue transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-miyako-blue transition-colors duration-200"
              >
                利用規約
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }