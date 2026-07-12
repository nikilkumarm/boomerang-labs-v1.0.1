'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const [recordingTime, setRecordingTime] = React.useState(76500); // Start at 12:45:00

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 10);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalCentiseconds: number) => {
    const m = Math.floor(totalCentiseconds / 6000);
    const s = Math.floor((totalCentiseconds % 6000) / 100);
    const cs = totalCentiseconds % 100;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${cs.toString().padStart(2, '0')}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  }

  return (
    <section className="relative w-full flex flex-col items-center pt-16 md:pt-20 lg:pt-24 z-10 px-6 min-h-[60vh] overflow-x-hidden">

      {/* ===== LEFT COMPOSITION: CAMERA + GLASS PANELS ===== */}
      <div className="absolute left-0 top-[20%] xl:top-[25%] w-[280px] h-[280px] 2xl:w-[320px] 2xl:h-[320px] hidden xl:block z-10 pointer-events-none origin-left scale-[0.6] xl:scale-[0.8] 2xl:scale-100">
        {/* Far left large panel */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[5%] w-[220px] h-[300px] rounded-[32px] z-0"
          style={{
            transform: 'rotate(-18deg) skewY(-8deg)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 30px 60px rgba(46,107,255,0.05), inset 0 0 20px rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
          }}
        />
        {/* Inner lower blue panel directly behind camera */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[35%] left-[10%] w-[260px] h-[180px] rounded-[24px] z-10 flex flex-col items-end p-5"
          style={{
            transform: 'rotate(-5deg) skewY(5deg)',
            background: 'linear-gradient(135deg, rgba(46,107,255,0.1) 0%, rgba(46,107,255,0.01) 100%)',
            border: '1px solid rgba(46,107,255,0.3)',
            boxShadow: '0 20px 50px rgba(46,107,255,0.15), inset 0 0 30px rgba(46,107,255,0.1)',
            backdropFilter: 'blur(24px)',
          }}
        >
          {/* Recording Indicator */}
          <div className="flex items-center gap-2.5 drop-shadow-sm">
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] shadow-[0_0_8px_rgba(255,59,48,0.8)]"
            />
            <span className="text-[#08152E] font-mono text-[14px] tracking-widest font-bold">REC {formatTime(recordingTime)}</span>
          </div>
        </motion.div>

        {/* Floating Live Stream Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[55%] left-[75%] w-[32%] aspect-square z-30"
        >
          <div className="relative w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/live_stream_badge.webp"
              alt="Live Stream Badge"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        {/* Camera Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            x: { duration: 1, delay: 0.2, type: 'spring' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }
          }}
          className="absolute left-[-15%] top-[0%] w-[135%] h-[135%] z-20 drop-shadow-[0_20px_40px_rgba(46,107,255,0.3)] pointer-events-none"
        >
          <Image
            src="/images/custom_camera_nobg_2.webp"
            alt="Camera"
            fill
            className="object-contain"
            priority
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)'
            }}
          />
        </motion.div>
      </div>

      {/* ===== RIGHT COMPOSITION: MIC + GLASS PANELS ===== */}
      <div className="absolute right-0 top-[10%] xl:top-[15%] w-[280px] h-[380px] 2xl:w-[320px] 2xl:h-[420px] hidden xl:block z-10 pointer-events-none origin-right scale-[0.6] xl:scale-[0.8] 2xl:scale-100">
        {/* Large glowing waveform plane */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] right-[20%] w-[280px] h-[150px] rounded-[32px] flex items-center justify-center overflow-hidden z-0"
          style={{
            transform: 'rotate(18deg) skewY(-12deg)',
            background: 'linear-gradient(135deg, rgba(46,107,255,0.08) 0%, rgba(46,107,255,0.01) 100%)',
            border: '1px solid rgba(46,107,255,0.4)',
            boxShadow: '0 40px 80px rgba(46,107,255,0.2), inset 0 0 50px rgba(46,107,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Abstract Waveform Graphic */}
          <div className="w-[110%] h-[60%] flex items-center justify-center gap-1 opacity-80">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', '100%', '20%'] }}
                transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
                className="w-[3px] bg-[#4D7FFF] rounded-full shadow-[0_0_12px_rgba(77,127,255,1)]"
              />
            ))}
          </div>
        </motion.div>
        {/* Red Icon Floating */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[15%] right-[70%] z-10 flex items-center justify-center"
        >
          <div className="relative w-[90px] h-[90px] drop-shadow-md opacity-90">
            <Image
              src="/images/custom_red_icon_nobg.webp"
              alt="Recording Icon"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        {/* Mic Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 1, delay: 0.4 },
            x: { duration: 1, delay: 0.4, type: 'spring' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
          }}
          className="absolute right-[-15%] top-[-5%] w-[120%] h-[120%] z-20 drop-shadow-[0_20px_40px_rgba(46,107,255,0.3)] pointer-events-none"
        >
          <Image src="/images/custom_mic_nobg_2.webp" alt="Microphone" fill className="object-contain" priority style={{ transform: 'scaleX(-1)' }} />
        </motion.div>
      </div>


      {/* Main Headline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center flex flex-col items-center justify-center mt-16 lg:mt-24 xl:mt-32 mb-6 w-full max-w-[1000px] mx-auto relative z-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] 2xl:text-[76px] font-[800] leading-[1.05] text-[#08152E] tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-inter), -apple-system, sans-serif' }}
        >
          We Create. You Inspire.
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] 2xl:text-[76px] font-[800] leading-[1.05] text-[#08152E] tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-inter), -apple-system, sans-serif' }}
        >
          We Make It{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 py-1 px-2">
            BOOMERANG.
          </span>
        </motion.h1>
      </motion.div>





    </section>
  )
}
