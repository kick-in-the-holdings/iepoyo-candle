import { MainLayout } from '@/components/layout/main-layout'
import { CTASection } from '@/components/sections/cta-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { HeroSection } from '@/components/sections/hero-section'
import { PopularProductsSection } from '@/components/sections/popular-products-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
      <PopularProductsSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  )
}
