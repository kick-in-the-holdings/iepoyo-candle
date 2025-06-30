'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { Badge } from '@/components/ui/badge'

const galleryItems = [
  {
    id: 1,
    title: 'ハート型ピンクキャンドル',
    category: 'カップル',
    season: '通年',
    color: 'bg-gradient-to-br from-soft-pink to-pale-lavender'
  },
  {
    id: 2,
    title: '宮古ブルーグラデーション',
    category: '女性',
    season: '夏',
    color: 'bg-gradient-to-br from-miyako-blue to-mint-green'
  },
  {
    id: 3,
    title: 'サンセットオレンジ',
    category: '女性',
    season: '夏',
    color: 'bg-gradient-to-br from-pastel-coral to-gold-highlight'
  },
  {
    id: 4,
    title: 'ラベンダーキューブ',
    category: '女性',
    season: '春',
    color: 'bg-gradient-to-br from-pale-lavender to-soft-pink'
  },
  {
    id: 5,
    title: 'トロピカルミックス',
    category: 'グループ',
    season: '夏',
    color: 'bg-gradient-to-br from-mint-green to-miyako-blue'
  },
  {
    id: 6,
    title: 'パステルレインボー',
    category: '女性',
    season: '通年',
    color: 'bg-gradient-to-br from-soft-pink via-pale-lavender to-mint-green'
  },
  {
    id: 7,
    title: 'ペアキャンドル',
    category: 'カップル',
    season: '通年',
    color: 'bg-gradient-to-br from-miyako-blue to-soft-pink'
  },
  {
    id: 8,
    title: 'ウェディングホワイト',
    category: 'カップル',
    season: '通年',
    color: 'bg-gradient-to-br from-cream-white to-pale-lavender'
  },
  {
    id: 9,
    title: 'オーシャンブルー',
    category: '女性',
    season: '夏',
    color: 'bg-gradient-to-br from-miyako-blue to-pastel-coral'
  }
]

const categories = ['全て', 'カップル', '女性', 'グループ']
const seasons = ['全て', '春', '夏', '通年']

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white via-pastel-coral to-pale-lavender py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="ギャラリー"
              subtitle="お客様の素敵な作品をご紹介"
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant="outline" 
                    className="bg-white/80 backdrop-blur-sm border-soft-pink hover:bg-soft-pink hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {seasons.map((season) => (
                  <Badge 
                    key={season}
                    variant="outline" 
                    className="bg-white/80 backdrop-blur-sm border-miyako-blue hover:bg-miyako-blue hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {season}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className={`h-48 ${item.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full border-2 border-white/50 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-miyako-blue mb-2">{item.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <Badge 
                        variant="secondary" 
                        className="bg-soft-pink/20 text-soft-pink border-soft-pink/30 text-xs"
                      >
                        {item.category}
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="bg-miyako-blue/20 text-miyako-blue border-miyako-blue/30 text-xs"
                      >
                        {item.season}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6 text-center">季節限定デザイン</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-soft-pink to-pale-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">春</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">桜ピンクシリーズ</h4>
                  <p className="text-sm text-gray-600">淡いピンクとラベンダーの春らしいグラデーション</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-miyako-blue to-mint-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">夏</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">宮古ブルーシリーズ</h4>
                  <p className="text-sm text-gray-600">透明感のある青と緑で宮古島の海を表現</p>
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                📸 お客様の作品をInstagramで紹介中！<br/>
                #宮古島キャンドル #miyakocandle でタグ付けしてくださいね
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}