import MediaHero from '@/components/MediaHero'
import Showcase from '@/components/Showcase'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-white">
      <MediaHero />
      <Showcase />
    </main>
  )
}
