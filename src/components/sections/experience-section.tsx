'use client'

import { motion } from 'framer-motion'

import { AnimatedCard } from '@/components/ui/animated-card'
import { GradientButton } from '@/components/ui/gradient-button'
import { SectionHeading } from '@/components/ui/section-heading'

const ExperienceSection = () => {
  const experienceInfo = {
    highlights: [
      '雨の日でも安心♪',
      '市街地から車で5分',
      '駐車場完備',
      '6歳～99歳まで参加OK'
    ],
    details: {
      duration: '1時間30分',
      ageRange: '6歳～99歳',
      location: '〒906-0008 沖縄県宮古島市平良荷川取206-3',
      features: [
        { label: 'キャンドル制作', value: '1個まで' },
        { label: '当日持ち帰り', value: 'あり' },
        { label: 'レクチャー', value: 'スタッフがサポート' },
        { label: '写真サービス', value: 'プラン料金込み' }
      ]
    }
  }

  return (
    <section className="py-20 bg-cream-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="心ときめく、自分だけのキャンドル作り体験💖"
          subtitle="宮古島の美しい思い出を、世界にひとつのキャンドルに込めてみませんか？初めての方でも安心して楽しめるよう、スタッフがしっかりサポートします✨"
          gradient
        />

        {/* おすすめポイント */}
        <AnimatedCard className="mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">おすすめポイント</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '雨の日も楽しめるインドア体験☔',
                '市街地から好アクセス🚗',
                '無料駐車場を完備',
                'お子様から大人まで大歓迎！'
              ].map((point, index) => (
                <div key={index} className="flex items-center justify-center p-3 bg-soft-pink/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 text-center">★ {point}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* 体験詳細 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 基本情報 */}
          <AnimatedCard>
            <h3 className="text-xl font-bold text-gray-900 mb-6">体験詳細</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">所要時間</span>
                <span className="font-semibold text-gray-900">{experienceInfo.details.duration}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">対象年齢</span>
                <span className="font-semibold text-gray-900">{experienceInfo.details.ageRange}</span>
              </div>
              <div className="py-2">
                <span className="text-gray-600 block mb-2">集合・体験場所</span>
                <span className="text-sm text-gray-900">{experienceInfo.details.location}</span>
              </div>
            </div>
          </AnimatedCard>

          {/* プランの特徴 */}
          <AnimatedCard delay={0.2}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">プランの特徴</h3>
            <div className="space-y-4">
              {experienceInfo.details.features.map((feature, index) => (
                <div key={index} className="flex justify-between items-start py-2 border-b border-gray-100">
                  <span className="text-gray-600">{feature.label}</span>
                  <span className="text-sm text-gray-900 text-right max-w-xs">{feature.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pastel-coral/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>写真撮影：</strong>作業中の撮影はスタッフにお声がけください<br/>
                <strong>追加制作：</strong>当日追加で制作も可能です（型により料金が異なります）
              </p>
            </div>
          </AnimatedCard>
        </div>

        {/* 予約CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            手ぶらでOK！スタッフがしっかりサポートするので、初めての方でも安心です。
          </p>
          <GradientButton size="lg" variant="accent">
            体験プランの詳細を見る
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}

export { ExperienceSection }