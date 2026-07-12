'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const softwares = [
  { id: 'ps', name: 'Photoshop', desc: 'Design. Retouch. Create.', color: '#31A8FF', bg: '#001E36', label: 'Ps', tilt: -6, delay: 0 },
  { id: 'lrc', name: 'Lightroom Classic', desc: 'Edit. Enhance. Perfect.', color: '#7CFCFF', bg: '#001E36', label: 'LrC', tilt: -3, delay: 0.08 },
  { id: 'ae', name: 'After Effects', desc: 'Animate. Elevate. Inspire.', color: '#D2A8FF', bg: '#1C0036', label: 'Ae', tilt: 0, delay: 0.16 },
  { id: 'pr', name: 'Premiere Pro', desc: 'Edit. Craft. Deliver.', color: '#E978FF', bg: '#1C0036', label: 'Pr', tilt: 3, delay: 0.24 },
  { id: 'davinci', name: 'DaVinci Resolve', desc: 'Color. Grade. Perfection.', color: '#FF6464', bg: '#0A0A0A', label: '', tilt: 6, delay: 0.32 },
]

export default function SoftwareShowcase() {
  return (
    <section className="relative w-full flex flex-col items-center z-20 mt-[-60px] md:mt-[-100px] lg:mt-[-150px]">

      {/* ===== GIANT GLOWING HORIZON ===== */}
      <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[550px] flex items-end justify-center overflow-hidden">

        {/* Navy curved horizon base */}
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[160vw] h-[100%] bg-[#041A4D] rounded-[50%] shadow-[0_-30px_120px_50px_rgba(13,63,255,0.8)]" />

        {/* Electric blue thick edge glow */}
        <div className="absolute bottom-[-48%] left-1/2 -translate-x-1/2 w-[155vw] h-[98%] rounded-[50%] border-t-[3px] border-[#2E6BFF] shadow-[0_-20px_80px_30px_rgba(46,107,255,0.6)]" />

        {/* Bright white inner edge for neon effect */}
        <div className="absolute bottom-[-48%] left-1/2 -translate-x-1/2 w-[155vw] h-[98%] rounded-[50%] border-t-[1px] border-white/70 shadow-[0_-5px_20px_5px_rgba(255,255,255,0.4)]" />

        {/* Bright center glow radiating up */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(46,107,255,0.4)_0%,transparent_70%)] rounded-[50%]" />

        {/* Subtle grid on the horizon */}
        <div
          className="absolute bottom-0 w-full h-[300px] opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at bottom, black 20%, transparent 80%)',
          }}
        />

        {/* Subtle light streaks */}
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05], x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] left-[20%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#4D7FFF] to-transparent rotate-[-15deg]"
        />
        <motion.div
          animate={{ opacity: [0.03, 0.12, 0.03], x: [15, -15, 15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[35%] right-[25%] w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#2E6BFF] to-transparent rotate-[10deg]"
        />

        {/* ===== SOFTWARE CARDS ===== */}
        <div className="relative z-30 w-full max-w-[900px] px-2 sm:px-4 flex justify-center pb-12 sm:pb-16 md:pb-24">
          <div className="flex items-end justify-center gap-2 sm:gap-6 md:gap-10 lg:gap-14">
            {softwares.map((sw) => (
              <motion.div
                key={sw.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + sw.delay, ease: 'easeOut' }}
              >
                {/* Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + sw.delay * 3, repeat: Infinity, ease: 'easeInOut', delay: sw.delay * 2 }}
                  className="relative w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-[14px] sm:rounded-[18px] md:rounded-[24px] flex items-center justify-center cursor-pointer mb-3 sm:mb-5 md:mb-6 group"
                  style={{
                    backgroundColor: sw.bg,
                    transform: `rotate(${sw.tilt}deg)`,
                    boxShadow: '0 8px 32px rgba(13,63,255,0.5), inset 0 1px 12px rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  {/* Inner glass reflection */}
                  <div className="absolute inset-0 rounded-[14px] sm:rounded-[18px] md:rounded-[24px] bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

                  {/* Icon */}
                  {sw.id === 'davinci' ? (
                    <div className="relative w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px] lg:w-[50px] lg:h-[50px] rounded-full overflow-hidden" style={{ background: 'conic-gradient(#FF4500, #FFD700, #32CD32, #1E90FF, #8A2BE2, #FF4500)' }}>
                      <div className="absolute inset-[4px] sm:inset-[6px] md:inset-[8px] bg-[#0A0A0A] rounded-full" />
                    </div>
                  ) : (
                    <span
                      className="font-bold text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] tracking-tighter"
                      style={{
                        color: sw.color,
                        fontFamily: 'SF Pro Display, -apple-system, sans-serif',
                        filter: `drop-shadow(0 0 10px ${sw.color}40)`
                      }}
                    >
                      {sw.label}
                    </span>
                  )}

                  {/* Bottom shadow under card */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-[6px] bg-black/30 blur-[8px] rounded-full" />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + sw.delay }}
                  className="text-center"
                >
                  <h3 className="text-white text-[10px] sm:text-[13px] md:text-[15px] font-semibold mb-0.5 drop-shadow-sm">{sw.name}</h3>
                  <p className="text-white/60 text-[8px] sm:text-[10px] md:text-[12px] font-medium leading-tight hidden sm:block">{sw.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
