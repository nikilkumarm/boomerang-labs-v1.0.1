import BackgroundEffects from '@/components/BackgroundEffects'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen bg-[#F8F9FB] overflow-x-hidden">
      
      {/* Subtle Background Effects */}
      <BackgroundEffects />

      {/* Hero: Badge → Headline → Service Text → CTA Buttons */}
      <Hero />

      {/* Services Blocks + Trust Text */}
      <Services />

      {/* Stories/Showcase */}
      <Showcase />

    </main>
  )
}
