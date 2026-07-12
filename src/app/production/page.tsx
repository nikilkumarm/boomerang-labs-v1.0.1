'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function EditorialBlogPage() {
  return (
    <main className="min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white">

      {/* 1. EDITORIAL HERO */}
      <section className="w-full pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12 border-b border-slate-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
            Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            Creative <br />
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Production.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-xs text-right hidden md:block pb-4"
        >
          <p className="text-slate-700 font-medium leading-relaxed">
            An exploration of brand identity, podcasts, and long/short form video editing. We craft graphic designs for the modern digital era.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-start">

          {/* Feature 1: Podcasts */}
          <div className="flex flex-col group md:mt-0">
            <Link href="/production/podcasts" className="block relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 mb-8 rounded-[2rem]">
              <Image
                src="/images/podcasts_hero.webp"
                alt="Podcasts"
                fill
                className="object-cover"
              />
            </Link>
            <span className="text-3xl lg:text-5xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-4">01</span>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 py-1 px-2">Podcasts</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-sm">
              Conversations that connect. We build immersive audio and visual environments that capture the authenticity of every dialogue.
            </p>
            <Link href="/production/podcasts" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:border-blue-600 transition-colors w-fit mt-auto group">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 -ml-2">Explore Podcasts</span> <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-blue-600 transition-colors" />
            </Link>
          </div>

          {/* Feature 2: Video Editing */}
          <div className="flex flex-col group md:mt-0">
            <Link href="/production/video-editing" className="block relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 mb-8 rounded-[2rem]">
              <Image
                src="/images/video_editing_hero.webp"
                alt="Video Editing"
                fill
                className="object-cover"
              />
            </Link>
            <span className="text-3xl lg:text-5xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-4">02</span>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 py-1 px-2">Long/short form <br />video editing.</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-sm">
              Stories cut to perfection. We architect pacing, structure, and emotional beats designed to capture and hold attention.
            </p>
            <Link href="/production/video-editing" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:border-blue-600 transition-colors w-fit mt-auto group">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 -ml-2">Explore Video Editing</span> <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-blue-600 transition-colors" />
            </Link>
          </div>

          {/* Feature 3: Graphic Design */}
          <div className="flex flex-col group md:mt-0">
            <Link href="/production/graphic-design" className="block relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 mb-8 rounded-[2rem]">
              <Image
                src="/images/graphic_design_hero.webp"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </Link>
            <span className="text-3xl lg:text-5xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-4">03</span>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 py-1 px-2">Graphic Designs</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-sm">
              Visuals that speak your brand. We forge identity and graphic designs that immediately position you at the absolute top of your market.
            </p>
            <Link href="/production/graphic-design" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:border-blue-600 transition-colors w-fit mt-auto group">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 -ml-2">Explore Graphic Design</span> <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-blue-600 transition-colors" />
            </Link>
          </div>

        </div>

      </section>
    </main>
  )
}
