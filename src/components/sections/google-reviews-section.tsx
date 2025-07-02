'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'

interface GoogleReview {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  avatar: string
}

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews: GoogleReview[] = [
    {
      id: 1,
      name: "田中 美咲",
      rating: 5,
      date: "2024年3月",
      comment: "雨の日でも楽しめる素敵な体験でした！スタッフの方がとても親切で、初心者でも美しいキャンドルが作れました。宮古島旅行の良い思い出になりました。",
      avatar: "👩"
    },
    {
      id: 2,
      name: "佐藤 健太",
      rating: 5,
      date: "2024年2月",
      comment: "彼女と一緒に参加しました。ペアでキャンドルを作る体験は特別で、今でも部屋に飾っています。また宮古島に来た時は必ず立ち寄りたいです。",
      avatar: "👨"
    },
    {
      id: 3,
      name: "山田 花子",
      rating: 4,
      date: "2024年1月",
      comment: "友達と3人で体験しました。それぞれ違うデザインのキャンドルができて、とても楽しかったです。インスタ映えする写真もたくさん撮れました！",
      avatar: "👱‍♀️"
    },
    {
      id: 4,
      name: "鈴木 太郎",
      rating: 5,
      date: "2024年3月",
      comment: "一人旅で参加しましたが、他の参加者の方とも仲良くなれて楽しい時間を過ごせました。宮古島の素材を使ったキャンドルは特別感があります。",
      avatar: "🧑"
    },
    {
      id: 5,
      name: "高橋 麻衣",
      rating: 5,
      date: "2024年2月",
      comment: "台風で外に出られない日でしたが、室内で楽しめる体験があって本当に助かりました。完成したキャンドルは今でも大切に使っています。",
      avatar: "👩‍🦱"
    }
  ]

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [reviews.length])

  const nextSlide = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-cream-white to-pastel-coral">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="お客様からの嬉しいお声"
          subtitle="Google Mapsでいただいた実際のレビューをご紹介"
          gradient
        />

        <div className="max-w-4xl mx-auto relative">
          {/* レビューカード */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg mx-2">
                    {/* 評価 */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xl">
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {review.rating}.0
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">📅</span>
                        {review.date}
                      </div>
                    </div>

                    {/* コメント */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      "{review.comment}"
                    </p>

                    {/* ユーザー情報 */}
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {review.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Google レビュー
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-miyako-blue rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-miyako-blue rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            →
          </button>

          {/* インジケーター */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-miyako-blue scale-125' 
                    : 'bg-miyako-blue/30 hover:bg-miyako-blue/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps リンク */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">
            他のレビューもぜひご覧ください
          </p>
          <a
            href="https://g.co/kgs/P4fcQcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-miyako-blue text-white rounded-lg hover:bg-miyako-blue/90 transition-colors duration-200 font-medium"
          >
            <span>🗺️</span>
            Google Mapsでレビューを見る
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export { GoogleReviewsSection }