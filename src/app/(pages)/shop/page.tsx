'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

const popularProducts = [
  {
    id: 1,
    name: '宮古ブルーキャンドル',
    price: '¥2,800',
    description: '宮古島の美しい海をイメージしたグラデーションキャンドル',
    image: '/images/candle-blue.jpg'
  },
  {
    id: 2,
    name: 'サンセットキャンドル',
    price: '¥3,200',
    description: '夕日に染まる宮古島の空をモチーフにしたキャンドル',
    image: '/images/candle-sunset.jpg'
  },
  {
    id: 3,
    name: 'トロピカルアロマキャンドル',
    price: '¥3,500',
    description: 'フランジパニとココナッツの香りで南国気分',
    image: '/images/candle-tropical.jpg'
  }
]

export default function ShopPage() {
  const handleStoresRedirect = () => {
    window.open('https://stores.jp/', '_blank')
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white via-pastel-coral to-pale-lavender py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="オンラインショップ"
              subtitle="宮古島の思い出を香りと共にお持ち帰り"
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {popularProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-miyako-blue/20 to-soft-pink/20 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-miyako-blue to-soft-pink rounded-full shadow-lg"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-miyako-blue mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-miyako-blue">{product.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-soft-pink to-pale-lavender hover:scale-105 transform transition-all duration-300 text-white rounded-full"
                      >
                        詳細を見る
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6 text-center">ご購入の流れ</h3>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-miyako-blue to-soft-pink rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                  <h4 className="font-bold text-miyako-blue mb-2">商品選択</h4>
                  <p className="text-sm text-gray-600">お気に入りのキャンドルを選択</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-pink to-pale-lavender rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                  <h4 className="font-bold text-miyako-blue mb-2">カート追加</h4>
                  <p className="text-sm text-gray-600">STORESサイトでカートに追加</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pale-lavender to-mint-green rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                  <h4 className="font-bold text-miyako-blue mb-2">決済</h4>
                  <p className="text-sm text-gray-600">クレジットカード等で決済</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mint-green to-miyako-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                  <h4 className="font-bold text-miyako-blue mb-2">配送</h4>
                  <p className="text-sm text-gray-600">全国どこでもお届け</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button 
                onClick={handleStoresRedirect}
                className="bg-gradient-to-r from-miyako-blue to-pale-lavender hover:scale-105 transform transition-all duration-300 text-white px-12 py-4 text-lg rounded-full shadow-lg"
              >
                STORESで購入する
              </Button>
              <p className="mt-4 text-gray-600 text-sm">
                ※商品の購入はSTORESのサイトで行います
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}