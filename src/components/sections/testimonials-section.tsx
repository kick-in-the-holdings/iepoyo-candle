'use client'

import { motion } from 'framer-motion'

import { AnimatedCard } from '@/components/ui/animated-card'
import { SectionHeading } from '@/components/ui/section-heading'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'あやか',
      age: '22歳',
      location: '東京都',
      rating: 5,
      comment: '雨で予定が変更になったけど、キャンドル体験で最高の思い出ができました！インスタにあげたら友達からたくさん「いいね」もらえて嬉しい✨',
      experience: 'ユニコーンキャンドル',
      date: '2024年3月',
      avatar: '👩',
    },
    {
      id: 2,
      name: 'たかし & みゆき',
      age: 'カップル',
      location: '大阪府',
      rating: 5,
      comment: '彼女との宮古島旅行で体験しました。一緒に作る時間がとても楽しくて、完成したキャンドルは今でも大切に使っています。記念日におすすめ！',
      experience: 'ペアキャンドル',
      date: '2024年2月',
      avatar: '💑',
    },
    {
      id: 3,
      name: 'まりな',
      age: '28歳',
      location: '沖縄県',
      rating: 5,
      comment: '友達と一緒に参加。先生がとても優しくて、不器用な私でも可愛いキャンドルが作れました。宮古島の素材を使えるのも特別感があって良かった！',
      experience: 'ジェルキャンドル',
      date: '2024年1月',
      avatar: '👱‍♀️',
    },
    {
      id: 4,
      name: 'ゆうき',
      age: '19歳',
      location: '神奈川県',
      rating: 4,
      comment: '初めてのキャンドル作りでしたが、思ったより簡単で楽しかったです。アロマの香りも選べるし、宮古島の思い出として最高のお土産になりました。',
      experience: 'アロマキャンドル',
      date: '2024年3月',
      avatar: '🧑',
    },
    {
      id: 5,
      name: 'さくら',
      age: '25歳',
      location: '福岡県',
      rating: 5,
      comment: '一人旅で参加しました。他の参加者の方とも仲良くなれて、とても楽しい時間を過ごせました。完成したキャンドルを見るたび宮古島を思い出します💕',
      experience: 'アニマルキャンドル',
      date: '2024年2月',
      avatar: '👩‍🦱',
    },
    {
      id: 6,
      name: 'けんた & あい',
      age: 'カップル',
      location: '愛知県',
      rating: 5,
      comment: '台風で観光ができなくなったときに体験しました。室内で楽しめて本当に助かった！二人で作ったキャンドルは今も部屋に飾っています。',
      experience: 'アロマキャンドル',
      date: '2024年1月',
      avatar: '👫',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="お客様の声"
          subtitle="実際に体験された皆様からの嬉しいお声をご紹介します"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.id}
              delay={index * 0.1}
              className="relative"
            >
              {/* 引用符装飾 */}
              <div className="absolute top-4 right-4 text-4xl text-pale-lavender/30">
                &ldquo;
              </div>
              
              {/* 評価 */}
              <div className="flex items-center mb-4">
                <div className="flex text-gold-highlight">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.rating}.0
                </span>
              </div>
              
              {/* コメント */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.comment}
              </p>
              
              {/* 体験コース */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-miyako-blue/10 text-miyako-blue text-sm rounded-full">
                  {testimonial.experience}
                </span>
              </div>
              
              {/* お客様情報 */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.age} · {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {testimonial.date}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Instagram誘導 */}
        <motion.div
          className="text-center mt-12 p-8 bg-gradient-to-r from-soft-pink/20 to-pastel-coral/20 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-4xl mb-4">📸</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            あなたの作品もシェアしませんか？
          </h3>
          <p className="text-gray-600 mb-6">
            ハッシュタグ <span className="font-semibold text-miyako-blue">#宮古島キャンドル</span> をつけて投稿すると、
            <br className="hidden sm:block" />
            こちらのサイトでご紹介させていただく場合があります✨
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full">
              #宮古島キャンドル
            </span>
            <span className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full">
              #ゆめかわキャンドル
            </span>
            <span className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full">
              #宮古島体験
            </span>
            <span className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full">
              #インスタ映え
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { TestimonialsSection }