'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PodcastPricing from '@/components/PodcastPricing'

export default function EditorialPodcastsPage() {
  return (
    <main className="min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white">

      {/* 1. EDITORIAL HERO */}
      <section className="w-full pt-40 pb-20 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-slate-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
            Service — 01
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Podcasts</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm lg:text-right pb-4"
        >
          <p className="text-slate-600 font-medium leading-relaxed">
            Conversations that connect. We build pristine audio landscapes that capture the authenticity and intimacy of every dialogue.
          </p>
        </motion.div>
      </section>

      {/* 2. THE CAPABILITIES (MAGAZINE LAYOUT) */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">

        {/* Hero Image */}
        <div className="w-full relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-white border border-slate-200/80 shadow-md group rounded-[2rem]">
          <Image
            src="/images/podcasts_hero.webp"
            alt="Podcast Studio Setup"
            fill
            className="object-contain p-4 md:p-8"
            priority
          />
        </div>

        {/* Methodology & Capabilities */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 w-full relative">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block border-b border-slate-300 pb-4">
              The Methodology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight mb-8 leading-tight">
              Resonance <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">at Scale.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              A podcast is the most intimate medium in the modern digital landscape. We ensure that the barrier between the host and the listener is completely removed through pristine audio fidelity.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block border-b border-slate-300 pb-4">
              Core Capabilities
            </span>
            <div className="flex flex-col divide-y divide-slate-200">
              {[
                { 
                  num: '01',
                  title: 'Acoustic Studio Recording', 
                  tags: ['Shure SM7B Suite', 'Treated Isolation'],
                  desc: 'Purpose-built vocal isolation booths calibrated for pristine, warm broadcast captures with zero room-bleed or flutter echo.' 
                },
                { 
                  num: '02',
                  title: 'Multi-Cam 4K Video Podcasting', 
                  tags: ['Sony Cinema ISOs', 'Multi-Angle Sync'],
                  desc: 'Multi-angle cinematic capture with synced timecode, dedicated host/guest closeups, and wide room framing optimized for YouTube and vertical cutdowns.' 
                },
                { 
                  num: '03',
                  title: 'Platform Mastering & Distribution', 
                  tags: ['-14 LUFS Standard', 'Metadata & Chapters'],
                  desc: 'Loudness mastering to exact Spotify and Apple Podcasts specifications, complete with custom timestamps, chapter markers, and artwork integration.' 
                }
              ].map((cap, idx) => (
                <div key={idx} className="py-7 first:pt-0 last:pb-0 flex flex-col gap-3 group transition-all duration-300">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-2xl md:text-3xl font-serif italic text-slate-300 group-hover:text-blue-600 transition-colors duration-300">
                        {cap.num}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed pl-10 md:pl-12">
                    {cap.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pl-10 md:pl-12 mt-1">
                    {cap.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-mono uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 3. PRICING */}
      <PodcastPricing />

    </main>
  )
}
