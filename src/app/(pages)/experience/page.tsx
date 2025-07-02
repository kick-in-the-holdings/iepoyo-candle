'use client'

import Image from 'next/image'

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

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {/* マーブルキャンドル */}
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square mb-4 relative">
                  <Image 
                    src="https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/309281a1-c74e-4922-49b5-c4fa71942600/square500"
                    alt="マーブルキャンドル"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-miyako-blue mb-2">マーブルキャンドル</h3>
                <p className="text-gray-600 text-sm mb-3">美しいマーブル模様のキャンドル</p>
                <div className="text-2xl font-bold text-miyako-blue">¥2,500</div>
              </Card>

              {/* 貝殻キャンドル */}
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square mb-4 relative">
                  <Image 
                    src="https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/23aea446-aa19-4e5a-96e7-25c40e991300/square500"
                    alt="貝殻キャンドル"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-miyako-blue mb-2">貝殻キャンドル</h3>
                <p className="text-gray-600 text-sm mb-3">宮古島の貝殻を使ったキャンドル</p>
                <div className="text-2xl font-bold text-miyako-blue">¥3,000</div>
              </Card>

              {/* 球体キャンドル */}
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square mb-4 relative">
                  <Image 
                    src="https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/ae9e5e34-1a81-4b5d-0c4c-2c55c8a87000/square500"
                    alt="球体キャンドル"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-miyako-blue mb-2">球体キャンドル</h3>
                <p className="text-gray-600 text-sm mb-3">ころんと可愛い球体のキャンドル</p>
                <div className="text-2xl font-bold text-miyako-blue">¥3,500</div>
              </Card>

              {/* 球体キャンドル(big) */}
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square mb-4 relative">
                  <Image 
                    src="https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c7c04e12-24ea-4c22-457d-5f5e7fb01b00/square500"
                    alt="球体キャンドル(big)"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-miyako-blue mb-2">球体キャンドル(big)</h3>
                <p className="text-gray-600 text-sm mb-3">大きめサイズの球体キャンドル</p>
                <div className="text-2xl font-bold text-miyako-blue">¥5,000</div>
              </Card>
            </div>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6 text-center">オプション</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-pink to-pale-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🌸</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">✨️</h4>
                  <p className="text-sm text-gray-600 mb-2">キラキラ輝くラメや金箔でデコレーション</p>
                  <div className="text-lg font-bold text-miyako-blue">+¥500</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mint-green to-miyako-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🌺</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">エッセンシャルオイル</h4>
                  <p className="text-sm text-gray-600 mb-2">お好みの香りをプラス</p>
                  <div className="text-lg font-bold text-miyako-blue">+¥500</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6">体験詳細</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
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
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">作品はその日にお持ち帰りいただけます</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">雨の日でも安心の屋内アクティビティ</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-soft-pink rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">初心者の方でも安心してお楽しみいただけます</p>
                  </div>
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