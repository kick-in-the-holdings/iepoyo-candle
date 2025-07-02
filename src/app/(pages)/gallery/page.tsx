'use client'

import Image from 'next/image'
import { MainLayout } from '@/components/layout/main-layout'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { Badge } from '@/components/ui/badge'

const galleryItems = [
  {
    id: 1,
    title: 'お客様作品①',
    category: '女性',
    season: '通年',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/8f6bf529-94d7-41a1-8430-c3d849c4b100/square500'
  },
  {
    id: 2,
    title: 'お客様作品②',
    category: '女性',
    season: '夏',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/e428628a-8680-4d95-f79a-cc1feb42cf00/square500'
  },
  {
    id: 3,
    title: 'お客様作品③',
    category: '女性',
    season: '通年',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/dc2db58b-f5ee-40ef-be45-c27c01ad0f00/square500'
  },
  {
    id: 4,
    title: 'お客様作品④',
    category: '女性',
    season: '春',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/8285aedc-e87e-477f-b90e-e3896be3bd00/square500'
  },
  {
    id: 5,
    title: 'お客様作品⑤',
    category: 'カップル',
    season: '夏',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/1e7ffd51-f36b-4a5b-72b8-18a0abc7b000/square500'
  },
  {
    id: 6,
    title: 'お客様作品⑥',
    category: '女性',
    season: '通年',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/91ea90aa-d38b-4387-0f6e-a67914ae4700/square500'
  },
  {
    id: 7,
    title: 'お客様作品⑦',
    category: 'カップル',
    season: '通年',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/82718755-69e4-45fd-27b7-036404836300/square500'
  },
  {
    id: 8,
    title: 'お客様作品⑧',
    category: 'グループ',
    season: '通年',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/23aea446-aa19-4e5a-96e7-25c40e991300/square500'
  },
  {
    id: 9,
    title: 'お客様作品⑨',
    category: '女性',
    season: '夏',
    image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/3563bd5d-f560-46c0-21e3-7c7a71896500/square500'
  }
]

const categories = ['全て', 'カップル', '女性', 'グループ']
const seasons = ['全て', '春', '夏', '通年']

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-cream-white py-16">
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
                  <div className="aspect-square relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
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