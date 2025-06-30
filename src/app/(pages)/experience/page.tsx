'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

export default function ExperiencePage() {
  const handleBooking = () => {
    window.open('https://www.jalan.net/kankou/spt_guide000000229021/?screenId=OUW3701&rootCd=3', '_blank')
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white to-pastel-coral py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="キャンドル作り体験"
              subtitle="宮古島の美しい海をイメージしたオリジナルキャンドルを作りませんか？"
            />
          </div>

          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6">体験内容</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                  <p className="text-gray-700">宮古島の海をイメージした美しいカラーキャンドル作り</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                  <p className="text-gray-700">アロマオイルでお好みの香りをプラス</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                  <p className="text-gray-700">作品はその日にお持ち帰りいただけます</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                  <p className="text-gray-700">雨の日でも安心の屋内アクティビティ</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6">料金・詳細</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">料金</span>
                  <span className="text-xl font-bold text-miyako-blue">¥3,500〜</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">所要時間</span>
                  <span className="font-semibold">約90分</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">定員</span>
                  <span className="font-semibold">1〜8名</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">対象年齢</span>
                  <span className="font-semibold">6歳以上</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleBooking}
              className="bg-gradient-to-r from-miyako-blue to-pale-lavender hover:scale-105 transform transition-all duration-300 text-white px-12 py-4 text-lg rounded-full shadow-lg"
            >
              じゃらんで予約する
            </Button>
            <p className="mt-4 text-gray-600 text-sm">
              ※予約はじゃらんのサイトで承っております
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}