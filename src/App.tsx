import { useState } from 'react'
import { BackToTop } from '@/components/layout/BackToTop'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Audience } from '@/components/sections/Audience'
import { Benefits } from '@/components/sections/Benefits'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { FeatureAreas } from '@/components/sections/FeatureAreas'
import { FeatureShowcase } from '@/components/sections/FeatureShowcase'
import { Hero } from '@/components/sections/Hero'
import { Lightbox } from '@/components/ui/Lightbox'
import { chapters } from '@/content/chapters'
import { chapterFeatures, featureById, tourFeatures } from '@/lib/tour'
import type { Feature } from '@/types/content'

const heroMain = featureById('home')
const heroSide = featureById('feed')

export default function App() {
  const [zoomed, setZoomed] = useState<Feature | null>(null)

  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero main={heroMain} side={heroSide} onZoom={setZoomed} />
        <FeatureAreas />
        {chapters.map((chapter, index) => (
          <FeatureShowcase
            key={chapter.id}
            chapter={chapter}
            features={chapterFeatures[chapter.id]}
            index={index}
            onZoom={setZoomed}
          />
        ))}
        <Audience />
        <Benefits />
        <ContactBanner />
      </main>
      <SiteFooter />
      <BackToTop />
      <Lightbox features={tourFeatures} current={zoomed} onChange={setZoomed} />
    </div>
  )
}
