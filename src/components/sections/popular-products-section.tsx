'use client'

import { motion } from 'framer-motion'

import { AnimatedCard } from '@/components/ui/animated-card'
import { Badge } from '@/components/ui/badge'
import { GradientButton } from '@/components/ui/gradient-button'
import { SectionHeading } from '@/components/ui/section-heading'

const PopularProductsSection = () => {
  const products = [
    {
      id: 1,
      name: '宮古ブルー アロマキャンドル',
      price: '¥2,980',
      originalPrice: '¥3,580',
      image: '/images/candle-blue.jpg',
      badge: 'ベストセラー',
      description: '宮古島の美しい海をイメージした人気No.1のアロマキャンドル',
      features: ['プルメリアの香り', '約20時間燃焼', 'ギフト包装可'],
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: 'ゆめかわ ユニコーンキャンドル',
      price: '¥3,480',
      originalPrice: null,
      image: '/images/candle-unicorn.jpg',
      badge: 'Instagram人気',
      description: 'SNSで大人気！パステルカラーのユニコーン型キャンドル',
      features: ['LED内蔵', 'バニラの香り', 'インスタ映え'],
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: 'トロピカル ジェルキャンドル',
      price: '¥4,200',
      originalPrice: null,
      image: '/images/candle-gel.jpg',
      badge: '限定品',
      description: '宮古島の砂と貝殻を閉じ込めた透明感あふれるジェルキャンドル',
      features: ['宮古島の砂使用', '約30時間燃焼', '数量限定'],
      rating: 4.7,
      reviews: 45,
    },
    {
      id: 4,
      name: 'カップル ペアキャンドル',
      price: '¥5,980',
      originalPrice: '¥7,200',
      image: '/images/candle-pair.jpg',
      badge: 'カップル人気',
      description: 'ハート型とスター型のペアキャンドル。記念日やデートに最適',
      features: ['2個セット', 'カスタム刻印可', 'ギフトボックス付'],
      rating: 4.9,
      reviews: 156,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pastel-coral/10 to-pale-lavender/10">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="人気商品"
          subtitle="実際に体験で作られた商品の中から、特に人気の高いデザインを厳選しました"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <AnimatedCard
              key={product.id}
              delay={index * 0.1}
              className="group cursor-pointer"
            >
              {/* 商品画像エリア */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-miyako-blue/20 to-soft-pink/20 aspect-square flex items-center justify-center">
                {/* 仮の画像プレースホルダー */}
                <div className="text-6xl">{index === 0 ? '🕯️' : index === 1 ? '🦄' : index === 2 ? '🌊' : '💕'}</div>
                
                {/* バッジ */}
                <Badge className="absolute top-2 left-2 bg-gold-highlight text-gray-900">
                  {product.badge}
                </Badge>
                
                {/* ホバー効果 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* 商品情報 */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 group-hover:text-miyako-blue transition-colors duration-200 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                
                {/* 評価 */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {'★'.repeat(Math.floor(product.rating))}
                    <span className="text-gold-highlight">{'★'.repeat(1)}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.rating} ({product.reviews}件)
                  </span>
                </div>
                
                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-pale-lavender/30 text-gray-600 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* 価格 */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-miyako-blue">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* 購入ボタン */}
                <GradientButton size="sm" className="w-full">
                  詳細を見る
                </GradientButton>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* セクション下部CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            すべての商品は体験で実際に作ることができます。完成品の購入も可能です。
          </p>
          <GradientButton size="lg" variant="secondary">
            オンラインショップを見る
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}

export { PopularProductsSection }