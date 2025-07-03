'use client'

import { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { MainLayout } from '@/components/layout/main-layout'
import { SectionHeading } from '@/components/ui/section-heading'

// 画像データの型定義
interface GalleryPhoto {
  src: string
  width: number
  height: number
  title: string
  category: string
  season: string
}

// ギャラリー画像データ
const photos: GalleryPhoto[] = [
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/8f6bf529-94d7-41a1-8430-c3d849c4b100/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品①',
    category: '女性',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/e428628a-8680-4d95-f79a-cc1feb42cf00/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品②',
    category: '女性',
    season: '夏'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/dc2db58b-f5ee-40ef-be45-c27c01ad0f00/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品③',
    category: '女性',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/8285aedc-e87e-477f-b90e-e3896be3bd00/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品④',
    category: '女性',
    season: '春'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/1e7ffd51-f36b-4a5b-72b8-18a0abc7b000/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品⑤',
    category: 'カップル',
    season: '夏'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/91ea90aa-d38b-4387-0f6e-a67914ae4700/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品⑥',
    category: '女性',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/82718755-69e4-45fd-27b7-036404836300/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品⑦',
    category: 'カップル',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/23aea446-aa19-4e5a-96e7-25c40e991300/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品⑧',
    category: 'グループ',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/3563bd5d-f560-46c0-21e3-7c7a71896500/w=300,h=400',
    width: 300,
    height: 400,
    title: 'お客様作品⑨',
    category: '女性',
    season: '夏'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/309281a1-c74e-4922-49b5-c4fa71942600/w=300,h=400',
    width: 300,
    height: 400,
    title: 'マーブルキャンドル',
    category: 'スタッフ作品',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/ae9e5e34-1a81-4b5d-0c4c-2c55c8a87000/w=300,h=400',
    width: 300,
    height: 400,
    title: '球体キャンドル',
    category: 'スタッフ作品',
    season: '通年'
  },
  {
    src: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c7c04e12-24ea-4c22-457d-5f5e7fb01b00/w=300,h=400',
    width: 300,
    height: 400,
    title: '球体キャンドル(big)',
    category: 'スタッフ作品',
    season: '通年'
  }
]


export default function GalleryPage() {
  const [index, setIndex] = useState(-1)

  // Lightboxを開く
  const handleClick = useCallback((event: any, obj: any) => {
    setIndex(obj.index)
  }, [])

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white to-pastel-coral py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="ギャラリー"
              subtitle="お客様の素敵な作品をご紹介"
              gradient
            />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* フォトギャラリー */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="cursor-pointer relative group"
                    onClick={() => handleClick(null, { index })}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                    />
                    {/* ホバー時の情報表示 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-soft-pink/90 via-pale-lavender/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                      <div className="p-3 w-full">
                        <h3 className="text-white font-bold text-sm sm:text-base mb-1">{photo.title}</h3>
                        <div className="flex gap-1 sm:gap-2 flex-wrap">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                            {photo.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
              styles={{
                container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
                thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
              }}
              carousel={{
                finite: true,
                preload: 2
              }}
              render={{
                slide: ({ slide }: any) => (
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                    </div>
                  </div>
                )
              }}
            />

            {/* 制作プロセス紹介 */}
            <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-center text-miyako-blue mb-8">
                🕯️ キャンドル制作プロセス
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* ステップ1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-pink to-pale-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">デザイン選択</h4>
                  <p className="text-sm text-gray-600">
                    お好みの色やデザインを選んで<br/>
                    オリジナルキャンドルを計画
                  </p>
                </div>

                {/* ステップ2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-miyako-blue to-mint-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">ワックス溶解</h4>
                  <p className="text-sm text-gray-600">
                    良質なワックスを適温で溶かし<br/>
                    お好みの色を混ぜ合わせます
                  </p>
                </div>

                {/* ステップ3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pastel-coral to-gold-highlight rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">成形・装飾</h4>
                  <p className="text-sm text-gray-600">
                    型に流し込み、貝殻や花びらで<br/>
                    宮古島らしい装飾を施します
                  </p>
                </div>

                {/* ステップ4 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pale-lavender to-soft-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-bold text-miyako-blue mb-2">完成・お持ち帰り</h4>
                  <p className="text-sm text-gray-600">
                    冷却後、世界に一つだけの<br/>
                    オリジナルキャンドルが完成！
                  </p>
                </div>
              </div>

              {/* 制作情報 */}
              <div className="mt-8 bg-gradient-to-r from-cream-white to-pastel-coral rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-2">⏰</div>
                    <h5 className="font-bold text-miyako-blue mb-1">所要時間</h5>
                    <p className="text-sm text-gray-600">約60〜90分</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🌟</div>
                    <h5 className="font-bold text-miyako-blue mb-1">難易度</h5>
                    <p className="text-sm text-gray-600">初心者も安心</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🎨</div>
                    <h5 className="font-bold text-miyako-blue mb-1">材料</h5>
                    <p className="text-sm text-gray-600">ワックス・芯・装飾材料</p>
                  </div>
                </div>
              </div>

              {/* 体験予約への誘導 */}
              <div className="mt-8 text-center">
                <p className="text-miyako-blue mb-4 font-medium">
                  あなたも素敵なキャンドルを作ってみませんか？
                </p>
                <a
                  href="https://lin.ee/PhCo4lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-soft-pink to-pale-lavender text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  体験予約はこちら ✨
                </a>
              </div>
            </div>

            {/* Instagram誘導 */}
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