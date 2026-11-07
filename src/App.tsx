import { useState } from 'react'
import { BackToTop } from '@/components/layout/BackToTop'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Audience } from '@/components/sections/Audience'
import { Benefits } from '@/components/sections/Benefits'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { DemoFlow } from '@/components/sections/DemoFlow'
import { DemoVideo } from '@/components/sections/DemoVideo'
import { FeatureExplorer } from '@/components/sections/FeatureExplorer'
import { Hero } from '@/components/sections/Hero'
import { Highlights } from '@/components/sections/Highlights'
import { Lightbox } from '@/components/ui/Lightbox'
import { featureById, tourFeatures } from '@/lib/tour'
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
        <Highlights onZoom={setZoomed} />
        <DemoVideo />
        <DemoFlow />
        <FeatureExplorer onZoom={setZoomed} />
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
