'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { targetNumber: 50, suffix: '+', label: 'Brands & Clients' },
  { targetNumber: 200, suffix: '+', label: 'Projects Done' },
  { targetNumber: 3, suffix: '+', label: 'Years of Excellence' },
]

function LiveStatItem({ targetNumber, suffix, label }: { targetNumber: number; suffix: string; label: string }) {
  const [count, setCount] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)
  const animRef = React.useRef<number | null>(null)
  const itemRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: false, amount: 0.3 })

  const runCounter = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const startTime = performance.now()
    const duration = 800 // ms

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.round(eased * targetNumber)
      setCount(currentVal)

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        setCount(targetNumber)
      }
    }

    animRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    if (isInView) {
      runCounter()
    }
  }, [isInView, targetNumber])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onMouseEnter={() => {
        setIsHovered(true)
        runCounter()
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center cursor-pointer group transition-all duration-300 transform hover:-translate-y-1.5 px-4 md:px-6 py-3 rounded-2xl hover:bg-blue-50/50 select-none"
    >
      <span
        className={`text-[42px] md:text-[58px] font-bold tracking-tighter leading-none transition-all duration-300 ${
          isHovered
            ? 'bg-gradient-to-r from-[#2E6BFF] via-[#00C6FF] to-[#2E6BFF] text-transparent bg-clip-text scale-105'
            : 'text-[#08152E]'
        }`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {count}{suffix}
      </span>
      <span
        className={`text-[11px] font-bold tracking-[0.2em] mt-3 uppercase text-center transition-colors duration-300 ${
          isHovered ? 'text-[#2E6BFF]' : 'text-gray-500'
        }`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Showcase() {
  const leftCards = [
    { src: '/images/img-g.webp', width: 110, height: 200, y: -30, delay: 0.5 },
    { src: '/images/camera_laptop.webp', width: 140, height: 250, y: 15, delay: 0.4 },
    { src: '/images/portfolio_hero.webp', width: 170, height: 300, y: -15, delay: 0.3 },
  ]

  const rightCards = [
    { src: '/images/img-b.webp', width: 170, height: 300, y: 20, delay: 0.3 },
    { src: '/images/img-f.webp', width: 140, height: 250, y: -20, delay: 0.4 },
    { src: '/images/img-h.webp', width: 110, height: 200, y: 15, delay: 0.5 },
  ]

  return (
    <section className="relative w-full bg-transparent flex flex-col items-center z-30 py-24 md:py-40 overflow-hidden">

      {/* Title / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6 flex flex-col items-center"
      >

        <h2
          className="text-[28px] md:text-[40px] lg:text-[46px] font-bold tracking-tight mb-4 leading-[1.1] bg-gradient-to-r from-[#08152E] to-[#2E6BFF] text-transparent bg-clip-text"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Visuals that tell a story.
        </h2>
        <p
          className="text-gray-500 text-[14px] md:text-[15px] font-normal max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Explore a curated selection of our work — from dynamic digital campaigns to stunning high-fidelity photography.
        </p>
      </motion.div>

      {/* Stats bar with Live Counters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-24 w-full max-w-[800px] mx-auto"
      >
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <LiveStatItem
              targetNumber={s.targetNumber}
              suffix={s.suffix}
              label={s.label}
            />
            {i < stats.length - 1 && <div className="hidden md:block w-px h-16 bg-gray-200" />}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Image Collage */}
      <div className="w-full flex justify-center items-center h-[600px] overflow-hidden">
        <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8 min-w-max">

          {/* Left Cards */}
          {leftCards.map((card, idx) => (
            <motion.div
              key={`left-${idx}`}
              initial={{ opacity: 0, x: -60, y: card.y }}
              whileInView={{ opacity: 1, x: 0, y: card.y }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: card.delay, ease: 'easeOut' }}
              className="relative shrink-0 rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_48px_rgba(46,107,255,0.14)] transition-shadow duration-300"
              style={{ width: card.width, height: card.height }}
            >
              <Image src={card.src} alt="Showcase" fill className="object-cover hover:scale-105 transition-transform duration-500" />
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
              <Image src="/images/temple_portrait.webp" alt="App Content" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" priority />
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
              className="relative shrink-0 rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_48px_rgba(46,107,255,0.14)] transition-shadow duration-300"
              style={{ width: card.width, height: card.height }}
            >
              <Image src={card.src} alt="Showcase" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

