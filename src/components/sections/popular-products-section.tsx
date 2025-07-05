'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { AnimatedCard } from '@/components/ui/animated-card'
import { Badge } from '@/components/ui/badge'
import { GradientButton } from '@/components/ui/gradient-button'
import { SectionHeading } from '@/components/ui/section-heading'

const PopularProductsSection = () => {
  const products = [
    {
      id: 1,
      name: '貝殻の形がかわいいキャンドル🐚🫧',
      price: '¥3,000',
      originalPrice: null,
      image:
        'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/91ea90aa-d38b-4387-0f6e-a67914ae4700/square500',
      badge: 'ベストセラー',
      description:
        '南国・宮古島の思い出にはぴったりのデザインです。グラデーションで自分だけのアート作品を作りましょう♪',
      features: ['貝殻デザイン', 'グラデーション', 'アート作品'],
    },
    {
      id: 2,
      name: '手のひらサイズのまんまるキャンドル🌏️',
      price: '¥3,500',
      originalPrice: null,
      image:
        'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/dc2db58b-f5ee-40ef-be45-c27c01ad0f00/square500',
      badge: 'Instagram人気',
      description:
        '色のグラデーションが映えて、お部屋のインテリアにも◎海や空、惑星をイメージした作品づくりに人気です',
      features: ['グラデーション', 'インテリア', '海や空イメージ'],
    },
    {
      id: 3,
      name: '存在感抜群の大きな球体キャンドル🪐✨️',
      price: '¥5,000',
      originalPrice: null,
      image:
        'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/8285aedc-e87e-477f-b90e-e3896be3bd00/square500',
      badge: '限定品',
      description:
        'ゆっくりと時間をかけて、自分の世界観を表現できます。特別な体験をしたい方におすすめ🪄',
      features: ['大サイズ', '世界観表現', '特別な体験'],
    },
    {
      id: 4,
      name: 'ゆっくり色を重ねて、あなただけのとっておきが完成✨',
      price: '¥4,000',
      originalPrice: null,
      image:
        'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/309281a1-c74e-4922-49b5-c4fa71942600/square500',
      badge: '人気',
      description:
        '円柱キャンドルは、宮古島の空や海みたいに幻想的。リラックス時間のおともにぴったりです🕯️🔮',
      features: ['円柱デザイン', 'グラデーション', 'リラックス'],
    },
  ]

  return (
    <section className="from-pastel-coral/10 to-pale-lavender/10 bg-gradient-to-br py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="人気の作品たちをご紹介✨"
          subtitle="体験ではこんなに素敵なキャンドルが作れます！特に人気のデザインを集めてみました。"
          gradient
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <AnimatedCard
              key={product.id}
              delay={index * 0.1}
              className="group cursor-pointer"
            >
              {/* 商品画像エリア */}
              <div className="from-miyako-blue/20 to-soft-pink/20 relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square h-full w-full object-cover"
                />

                {/* バッジ */}
                <Badge className="bg-gold-highlight absolute top-2 left-2 text-gray-900">
                  {product.badge}
                </Badge>

                {/* ホバー効果 */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
              </div>

              {/* 商品情報 */}
              <div className="space-y-3">
                <h3 className="group-hover:text-miyako-blue line-clamp-2 font-bold text-gray-900 transition-colors duration-200">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600">{product.description}</p>

                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="bg-pale-lavender/30 rounded px-2 py-1 text-xs text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* 価格 */}
                <div className="flex items-center gap-2">
                  <span className="text-miyako-blue text-lg font-bold">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* セクション下部CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-6 text-gray-600">
            もちろん、体験でご自身で作ることも、完成品をご購入いただくことも可能です。
          </p>
          <Link href="/gallery">
            <GradientButton size="lg" variant="secondary">
              他のお客様の作品を見てみる
            </GradientButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { PopularProductsSection }
