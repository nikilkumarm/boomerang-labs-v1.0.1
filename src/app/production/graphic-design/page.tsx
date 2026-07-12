'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GraphicDesignPricing from '@/components/GraphicDesignPricing'

export default function EditorialGraphicDesignPage() {
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
            Service — 03
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Graphic</span> Designs
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm lg:text-right pb-4"
        >
          <p className="text-slate-600 font-medium leading-relaxed">
            Visuals that speak your brand. We forge identity and graphic designs that immediately position you at the absolute top of your market.
          </p>
        </motion.div>
      </section>

      {/* 2. THE CAPABILITIES (MAGAZINE LAYOUT) */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">

        {/* Hero Image */}
        <div className="w-full relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 group rounded-[2rem]">
          <Image
            src="/images/graphic_design_hero.webp"
            alt="Graphic Design Studio"
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
              Visual <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Authority.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Design is not decoration. It is the uncompromising visual architecture of your brand. Every typography scale, grid alignment, and color palette is rooted in a strategic objective.
            </p>
          </div>

          <div className="flex-1 w-full lg:mt-32">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block border-b border-slate-300 pb-4">
              Core Capabilities
            </span>
            <div className="flex flex-col gap-12">
              {[
                { title: 'Brand Identity', desc: 'Logos, logotypes, and complete brand rulebooks that establish immediate visual dominance and market trust.' },
                { title: 'UI & Digital Experience', desc: 'High-converting, frictionless digital interfaces designed precisely for how modern users actually interact with screens.' },
                { title: 'Print & Packaging', desc: 'Tangible physical touchpoints that demand to be held. Premium material selection, die-cuts, and typographic layouts.' },
                { title: 'Motion Design', desc: 'Fluid 2D and 3D motion assets that break through static noise and capture attention in crowded digital feeds.' }
              ].map((cap, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
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

      {/* 3. PRICING */}
      <GraphicDesignPricing />

    </main>
  )
}
