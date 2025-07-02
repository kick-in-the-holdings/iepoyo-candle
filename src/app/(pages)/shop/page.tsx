'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'

export default function ShopPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cream-white via-pastel-coral to-pale-lavender py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="オンラインショップ"
              subtitle="準備中"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-12 bg-white/90 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-6xl mb-6">🛠️</div>
              <h3 className="text-2xl font-bold text-miyako-blue mb-4">オンラインショップ準備中</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                現在、オンラインでの商品販売に向けて準備を進めております。<br/>
                開始時期については改めてお知らせいたします。
              </p>
              <p className="text-sm text-gray-500">
                キャンドル作り体験は通常通り実施しております。<br/>
                体験のご予約は体験予約ページよりお申し込みください。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}