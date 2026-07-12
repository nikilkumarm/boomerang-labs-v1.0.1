'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Showcase() {
  const leftCards = [
    { src: '/images/img-g.webp', width: 110, height: 200, y: -30, delay: 0.5 },
    { src: '/images/img-d.webp', width: 140, height: 250, y: 15, delay: 0.4 },
    { src: '/images/img-a.webp', width: 170, height: 300, y: -15, delay: 0.3 },
  ]
  
  const rightCards = [
    { src: '/images/img-b.webp', width: 170, height: 300, y: 20, delay: 0.3 },
    { src: '/images/img-f.webp', width: 140, height: 250, y: -20, delay: 0.4 },
    { src: '/images/img-h.webp', width: 110, height: 200, y: 15, delay: 0.5 },
  ]

  return (
    <section className="relative w-full bg-transparent flex flex-col items-center z-30 py-24 md:py-32 overflow-hidden">
      {/* Title / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight text-[#08152E] mb-4">
          Visuals that tell a story.
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
          Explore a curated selection of our work. From dynamic digital campaigns to stunning high-fidelity photography.
        </p>
      </motion.div>

      <div className="w-full flex justify-center items-center h-[600px] overflow-hidden">
        {/* Container for the 3D staggered look */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8 min-w-max">
          
          {/* Left Cards */}
          {leftCards.map((card, idx) => (
            <motion.div
              key={`left-${idx}`}
              initial={{ opacity: 0, x: -60, y: card.y }}
              whileInView={{ opacity: 1, x: 0, y: card.y }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: card.delay, ease: 'easeOut' }}
              className="relative shrink-0 rounded-[20px] overflow-hidden"
              style={{
                width: card.width,
                height: card.height,
              }}
            >
              <Image src={card.src} alt="Showcase" fill className="object-cover" />
            </motion.div>
          ))}

          {/* Center Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative shrink-0 w-[240px] md:w-[260px] h-[480px] md:h-[540px] bg-[#08152E] rounded-[48px] border-[8px] border-[#08152E] overflow-hidden flex flex-col z-20 mx-4 md:mx-6"
          >
            {/* Phone Top Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-[#08152E] rounded-b-[18px] z-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[4px] bg-white/20 rounded-full" />
            </div>
            
            <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden">
               <Image src="/images/img-i.webp" alt="App Content" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right Cards */}
          {rightCards.map((card, idx) => (
            <motion.div
              key={`right-${idx}`}
              initial={{ opacity: 0, x: 60, y: card.y }}
              whileInView={{ opacity: 1, x: 0, y: card.y }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: card.delay, ease: 'easeOut' }}
              className="relative shrink-0 rounded-[20px] overflow-hidden"
              style={{
                width: card.width,
                height: card.height,
              }}
            >
              <Image src={card.src} alt="Showcase" fill className="object-cover" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
