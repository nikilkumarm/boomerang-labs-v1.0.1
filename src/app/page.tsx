import BackgroundEffects from '@/components/BackgroundEffects'
import Hero from '@/components/Hero'
import ServiceAds from '@/components/ServiceAds'
import Showcase from '@/components/Showcase'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen bg-[#F8F9FB] overflow-x-hidden">

      {/* Subtle Background Effects */}
      <BackgroundEffects />

      {/* Hero: Badge → Headline → Service Text → CTA Buttons */}
      <Hero />

      {/* Photography & Podcast Ads */}
      <ServiceAds />

      {/* Stories/Showcase */}
      <Showcase />

    </main>
  )
}
