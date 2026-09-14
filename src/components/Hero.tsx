'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const [recordingTime, setRecordingTime] = React.useState(76500)

  React.useEffect(() => {
    const timer = setInterval(() => setRecordingTime((p) => p + 1), 10)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (t: number) => {
    const m = Math.floor(t / 6000), s = Math.floor((t % 6000) / 100), cs = t % 100
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(cs).padStart(2, '0')}`
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  }

  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{ minHeight: '100vh', background: 'linear-gradient(155deg, #050C1C 0%, #0A1430 45%, #07101F 100%)' }}
    >
      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Glow orbs ── */}
      <div className="absolute top-[-10%] left-[15%] w-[700px] h-[700px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(46,107,255,0.13) 0%, transparent 65%)', filter: 'blur(90px)' }} />
      <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-[-5%] left-[0%] w-[500px] h-[500px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,59,48,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }} />

      {/* ── LEFT: Camera composition ── */}
      <div className="absolute -left-6 2xl:left-0 top-[22%] xl:top-[27%] w-[280px] h-[280px] hidden xl:block z-10 pointer-events-none origin-left scale-[0.65] 2xl:scale-[0.85]">
        {/* Glass recording panel */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[35%] left-[10%] w-[260px] h-[160px] rounded-[24px] z-10 flex flex-col items-end justify-end p-5"
          style={{
            transform: 'rotate(-5deg) skewY(5deg)',
            background: 'linear-gradient(135deg, rgba(46,107,255,0.15) 0%, rgba(46,107,255,0.02) 100%)',
            border: '1px solid rgba(46,107,255,0.35)',
            boxShadow: '0 20px 60px rgba(46,107,255,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-[#FF3B30]"
              style={{ boxShadow: '0 0 10px rgba(255,59,48,0.9)' }}
            />
            <span className="text-white/80 font-mono text-[13px] tracking-[0.18em] font-bold">REC {formatTime(recordingTime)}</span>
          </div>
        </motion.div>

        {/* Live badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[55%] left-[75%] w-[32%] aspect-square z-30"
        >
          <div className="relative w-full h-full" style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))' }}>
            <Image src="/images/live_stream_badge.webp" alt="Live" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Camera */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.2 }, x: { duration: 1, delay: 0.2, type: 'spring' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
          className="absolute left-[-15%] top-[0%] w-[135%] h-[135%] z-20 pointer-events-none"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(46,107,255,0.45))' }}
        >
          <Image src="/images/camera-animated.gif" alt="Camera" fill className="object-contain" priority unoptimized
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 92%)', maskImage: 'linear-gradient(to bottom, black 55%, transparent 92%)' }}
          />
        </motion.div>
      </div>

      {/* ── RIGHT: Mic composition ── */}
      <div className="absolute -right-6 2xl:right-0 top-[10%] xl:top-[15%] w-[280px] h-[380px] hidden xl:block z-10 pointer-events-none origin-right scale-[0.65] 2xl:scale-[0.85]">
        {/* Waveform glass panel */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] right-[20%] w-[280px] h-[140px] rounded-[32px] flex items-center justify-center overflow-hidden z-0"
          style={{
            transform: 'rotate(18deg) skewY(-12deg)',
            background: 'linear-gradient(135deg, rgba(46,107,255,0.12) 0%, rgba(46,107,255,0.01) 100%)',
            border: '1px solid rgba(46,107,255,0.45)',
            boxShadow: '0 40px 80px rgba(46,107,255,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="w-[110%] h-[55%] flex items-center justify-center gap-1">
            {[...Array(28)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: ['15%', '100%', '15%'] }}
                transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
                className="w-[3px] rounded-full"
                style={{ background: '#4D7FFF', boxShadow: '0 0 8px rgba(77,127,255,0.7)' }}
              />
            ))}
          </div>
        </motion.div>

        {/* Red icon */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[15%] right-[70%] z-10"
        >
          <div className="relative w-[80px] h-[80px]"><Image src="/images/custom_red_icon_nobg.webp" alt="Rec Icon" fill className="object-contain" /></div>
        </motion.div>

        {/* Mic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.4 }, x: { duration: 1, delay: 0.4, type: 'spring' }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
          className="absolute right-[-15%] top-[-5%] w-[120%] h-[120%] z-20 pointer-events-none"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(46,107,255,0.4))' }}
        >
          <Image src="/images/custom_mic_nobg_2.webp" alt="Mic" fill className="object-contain" priority style={{ transform: 'scaleX(-1)' }} />
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-6 pt-32 lg:pt-44 xl:pt-52 pb-28 max-w-[980px] mx-auto"
      >
        {/* Eyebrow badge */}
        <motion.div variants={item} className="mb-8">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-2"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#2E6BFF]"
              style={{ boxShadow: '0 0 8px rgba(46,107,255,1)' }}
            />
            <span className="text-[11px] font-semibold text-white/60 tracking-[0.16em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
              Premium Visual Production Studio
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-[38px] sm:text-[52px] md:text-[64px] lg:text-[78px] xl:text-[92px] font-[900] leading-[0.92] tracking-[-0.04em] text-white mb-7"
          style={{ fontFamily: 'var(--font-inter), -apple-system, sans-serif' }}
        >
          Your Vision,<br />
          <span
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(110deg, #4D8FFF 0%, #06b6d4 55%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Our Creation.
          </span>
          <br />
          We Make It{' '}
          <span
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(90deg, #FF5F52 0%, #FF8C42 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            BOOMERANG.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-[15px] md:text-[17px] text-white/45 font-light leading-relaxed max-w-[520px] mb-10"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Fashion lookbooks, commercial photography & podcast production — engineered for brands that demand excellence.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
          <Link
            href="https://wa.me/918124887577?text=Hi%20Boomerang%20Labs!"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-[13px] tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #FF4B3E, #FF2D55)', boxShadow: '0 8px 32px rgba(255,59,48,0.4)', fontFamily: 'var(--font-inter)' }}
          >
            Get In Touch
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
          <Link
            href="/photography"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[13px] text-white/75 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', fontFamily: 'var(--font-inter)' }}
          >
            View Our Work
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={item} className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {['/images/img-a.webp', '/images/img-b.webp', '/images/img-g.webp'].map((src, i) => (
              <div key={i} className="w-8 h-8 rounded-full overflow-hidden relative" style={{ border: '2px solid rgba(255,255,255,0.15)' }}>
                <Image src={src} alt="client" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FBBF24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-[12px] text-white/35 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
              Trusted by <span className="text-white/70 font-bold">50+ brands</span> across India
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into light section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #F8F9FB 100%)' }}
      />
    </section>
  )
}

