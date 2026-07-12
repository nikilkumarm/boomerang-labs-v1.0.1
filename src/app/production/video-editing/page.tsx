'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import VideoEditingPricing from '@/components/VideoEditingPricing'

export default function EditorialVideoEditingPage() {
  return (
    <main className="min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white">

      {/* 1. EDITORIAL HERO */}
      <section className="w-full pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-slate-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
            Service — 02
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Long/short form</span> <br />video editing.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm lg:text-right pb-4"
        >
          <p className="text-slate-600 font-medium leading-relaxed">
            Stories cut to perfection. We architect pacing, structure, and emotional beats designed to capture and hold attention.
          </p>
        </motion.div>
      </section>

      {/* 2. THE CAPABILITIES (MAGAZINE LAYOUT) */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">

        {/* Hero Image */}
        <div className="w-full relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 group rounded-[2rem]">
          <Image
            src="/images/video_editing_hero.webp"
            alt="Video Editing Suite"
            fill
            className="object-cover"
          />
        </div>

        {/* Methodology & Capabilities */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 w-full relative">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block border-b border-slate-300 pb-4">
              The Methodology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight mb-8 leading-tight">
              Pacing. Structure. <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Emotion.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Editing is invisible art. We master the retention graph by cutting dead space, optimizing visual momentum, and letting the audience feel the emotion without ever seeing the cut.
            </p>
          </div>

          <div className="flex-1 w-full lg:mt-32">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block border-b border-slate-300 pb-4">
              Core Capabilities
            </span>
            <div className="flex flex-col gap-12">
              {[
                { title: 'Documentary Timelines', desc: 'Sustained narrative tension over extended durations. We structure hours of raw footage into compelling, cohesive stories.' },
                { title: 'Algorithmic Short-Form', desc: 'Engineered hooks and rapid-fire visual pacing tailored specifically for TikTok, Reels, and YouTube Shorts retention algorithms.' },
                { title: 'Broadcast Color Grading', desc: 'Advanced color space transformation, skin-tone preservation, and stylized cinematic looks graded in DaVinci Resolve.' },
                { title: 'Motion Graphics', desc: 'Integrated 2D/3D visual effects, lower thirds, and animated typography that elevate the production value seamlessly.' }
              ].map((cap, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* PRICING SECTION */}
      <VideoEditingPricing />

    </main>
  )
}
