'use client'

import { motion } from 'framer-motion'

import { AnimatedCard } from '@/components/ui/animated-card'
import { GradientButton } from '@/components/ui/gradient-button'
import { SectionHeading } from '@/components/ui/section-heading'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'アニマルキャンドル',
      description: 'かわいい動物の形をしたキャンドルを作ります。うさぎ、ねこ、くまなど、お好きな動物を選んで、世界に一つだけのキャンドルに。',
      duration: '約90分',
      price: '¥3,500',
      features: ['初心者OK', '材料込み', 'お持ち帰り'],
      icon: '🐰',
      gradient: 'from-soft-pink to-pastel-coral',
    },
    {
      title: 'アロマワックス',
      description: '宮古島の天然素材を使用したアロマキャンドル。ティアレやプルメリアの香りで、南国の思い出を形に残しましょう。',
      duration: '約60分',
      price: '¥2,800',
      features: ['天然素材', '香り選択', '癒し効果'],
      icon: '🌺',
      gradient: 'from-pale-lavender to-mint-green',
    },
    {
      title: 'ジェルキャンドル',
      description: '透明なジェルキャンドルに、宮古島の砂や貝殻を閉じ込めて。まるで海の中のような幻想的なキャンドルが完成します。',
      duration: '約75分',
      price: '¥4,200',
      features: ['宮古島の素材', '透明感', '幻想的'],
      icon: '🌊',
      gradient: 'from-miyako-blue to-pale-lavender',
    },
  ]

  return (
    <section className="py-20 bg-cream-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="3つの体験コース"
          subtitle="あなたの好みや時間に合わせて、お好きなコースをお選びください"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <AnimatedCard
              key={experience.title}
              delay={index * 0.2}
              className="text-center relative overflow-hidden"
            >
              {/* 背景グラデーション */}
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-5`} />
              
              <div className="relative z-10">
                {/* アイコン */}
                <div className="text-6xl mb-4">{experience.icon}</div>
                
                {/* タイトル */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {experience.title}
                </h3>
                
                {/* 説明 */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                {/* 詳細情報 */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">所要時間</span>
                    <span className="font-semibold text-gray-900">{experience.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">料金</span>
                    <span className="font-bold text-miyako-blue text-xl">{experience.price}</span>
                  </div>
                </div>
                
                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {experience.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-pastel-coral/20 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* 予約ボタン */}
                <GradientButton className="w-full">
                  このコースを予約
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
            どのコースも手ぶらでOK！必要な材料はすべてご用意しています。
          </p>
          <GradientButton size="lg" variant="accent">
            全コース詳細を見る
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}

export { ExperienceSection }