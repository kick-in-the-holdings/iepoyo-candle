'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { Badge } from '@/components/ui/badge'

export default function AccessPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white via-pastel-coral to-pale-lavender py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="アクセス"
              subtitle="IEPOYO CANDLE工房へのご案内"
            />
          </div>

          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6">店舗情報</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-miyako-blue mb-1">住所</h4>
                    <p className="text-gray-700">〒906-0008<br/>沖縄県宮古島市平良荷川取206-3</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-miyako-blue mb-1">お問い合わせ</h4>
                    <p className="text-gray-700">事前予約制<br/>じゃらんまたはSTORESより</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-miyako-blue mb-1">営業時間</h4>
                    <p className="text-gray-700">10:00 - 18:00<br/>（最終受付 16:30）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-miyako-blue mb-1">定休日</h4>
                    <p className="text-gray-700">不定休<br/>（事前予約制）</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-miyako-blue mb-6">アクセス方法</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-miyako-blue mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-miyako-blue to-soft-pink rounded-full flex items-center justify-center text-white text-sm">🚗</span>
                    お車でお越しの場合
                  </h4>
                  <p className="text-gray-700 text-sm">
                    宮古空港から約15分<br/>
                    平良市街地から約10分<br/>
                    無料駐車場完備（5台）
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-miyako-blue mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-soft-pink to-pale-lavender rounded-full flex items-center justify-center text-white text-sm">🚌</span>
                    バスでお越しの場合
                  </h4>
                  <p className="text-gray-700 text-sm">
                    路線バス「下里」バス停下車徒歩3分<br/>
                    ※本数が少ないためお車でのお越しをおすすめします
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-miyako-blue mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-pale-lavender to-mint-green rounded-full flex items-center justify-center text-white text-sm">🚐</span>
                    送迎サービス
                  </h4>
                  <p className="text-gray-700 text-sm">
                    平良市街地のホテルから無料送迎あり<br/>
                    ※要事前予約（前日まで）
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-miyako-blue mb-6 text-center">地図</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.123456789!2d125.281234!3d24.805678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzIwLjQiTiAxMjXCsDE2JzUyLjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IEPOYO CANDLE の場所"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://g.co/kgs/8TfxMXd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-miyako-blue text-white rounded-lg hover:bg-miyako-blue/90 transition-colors duration-200"
              >
                <span>🗺️</span>
                Googleマップで開く
              </a>
            </div>
          </Card>

          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-bold text-miyako-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🌧️</span>
                雨天時のご案内
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• 屋内での体験のため雨でも安心してお楽しみいただけます</p>
                <p>• 台風などの悪天候時は事前にご連絡いたします</p>
                <p>• 雨の日こそ室内アクティビティをお楽しみください</p>
              </div>
              <Badge className="mt-4 bg-miyako-blue/20 text-miyako-blue border-miyako-blue/30">
                雨の日歓迎
              </Badge>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-bold text-miyako-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🏝️</span>
                周辺観光スポット
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• 砂山ビーチ（車で20分）</p>
                <p>• 前浜ビーチ（車で25分）</p>
                <p>• 宮古島海中公園（車で30分）</p>
                <p>• 平良市街地（車で10分）</p>
              </div>
              <Badge className="mt-4 bg-soft-pink/20 text-soft-pink border-soft-pink/30">
                観光と合わせて
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}