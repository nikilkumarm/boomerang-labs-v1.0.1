'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhotographyPricing from '@/components/PhotographyPricing'

export default function UniformGalleryShowcase() {
  const { scrollYProgress } = useScroll()
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Look 01 uploaded studio portraits (9 WebP images)
  const look1Images = [
    '/images/look1/look1_1.webp',
    '/images/look1/look1_2.webp',
    '/images/look1/look1_3.webp',
    '/images/look1/look1_4.webp',
    '/images/look1/look1_5.webp',
    '/images/look1/look1_6.webp',
    '/images/look1/look1_7.webp',
    '/images/look1/look1_8.webp',
    '/images/look1/look1_9.webp',
  ]

  // Look 02 uploaded studio portraits (6 WebP images)
  const look2Images = [
    '/images/look2/look2_1.webp',
    '/images/look2/look2_2.webp',
    '/images/look2/look2_3.webp',
    '/images/look2/look2_4.webp',
    '/images/look2/look2_5.webp',
    '/images/look2/look2_6.webp',
  ]



  // Helper component for a portrait matching the screenshot aspect ratio
  const Portrait = ({ src, delay = 0 }: { src: string, delay?: number }) => (
    <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 rounded-lg shadow-sm group">
      <Image src={src} alt="Editorial Portrait" fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
    </div>
  )

  return (
    <main className="relative w-full min-h-screen text-[#0A0A0A] overflow-x-hidden selection:bg-black selection:text-white">

      {/* Cinematic Hero Title */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between pt-12 md:pt-16 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto gap-16 lg:gap-32 mb-16">

        {/* Left: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="z-10 w-full md:w-1/2 flex flex-col justify-center text-left"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-sans tracking-[0.4em] uppercase mb-8 block">
            The Masterclass Collection
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] whitespace-nowrap text-black font-sans tracking-tighter leading-[0.85] mb-8">
            An exploration of <br />
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">light</span> and <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">form.</span>
          </h1>
        </motion.div>

        {/* Right: Hero Portrait */}
        <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[350px] lg:max-w-[400px]">
            <div className="relative overflow-hidden aspect-[4/5] rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
              <Image src={'/images/camera_laptop_sketch.webp'} alt="Hero Portrait" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
                                COSTUME 01 (Look 01) 
         ========================================================================= */}
      <section className="w-full max-w-[1000px] mx-auto px-6 md:px-12 mt-24 border-t border-black/5 pt-24">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-xs font-sans tracking-widest uppercase mb-4 block">Look 01</span>
          <h2 className="text-3xl md:text-5xl font-serif italic">Black & Gold.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {look1Images.map((src, idx) => (
            <Portrait key={idx} src={src} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      {/* =========================================================================
                                COSTUME 02 (Look 02) 
         ========================================================================= */}
      <section className="w-full max-w-[1000px] mx-auto px-6 md:px-12 mt-32 border-t border-black/5 pt-24 mb-24">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-xs font-sans tracking-widest uppercase mb-4 block">Look 02</span>
          <h2 className="text-3xl md:text-5xl font-serif italic">Black & Red.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {look2Images.map((src, idx) => (
            <Portrait key={idx} src={src} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      <PhotographyPricing />
    </main>
  )
}
