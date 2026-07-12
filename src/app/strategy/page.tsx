'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function EditorialStrategyPage() {
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
            Strategic Methodology
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            Compounded <br />
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Visual</span> Value.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm lg:text-right pb-4"
        >
          <p className="text-slate-600 font-medium leading-relaxed">
            A rigid production workflow designed to eliminate variance. We execute camera science, precision lighting, and high-fidelity frameworks to return maximum ROI.
          </p>
        </motion.div>
      </section>

      {/* 2. THE THREE PILLARS (MAGAZINE LAYOUT) */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">

        {/* Phase 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group">
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <div className="block relative aspect-[4/3] overflow-hidden bg-slate-200">
              <Image
                src="/images/img-d.webp"
                alt="Pre-Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <span className="text-4xl md:text-6xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-6">01</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Pre-Production <br />& Casting.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-md">
              Eliminate variables before the camera even turns on. We scout, cast, and storyboard with obsessive detail to ensure flawless execution.
            </p>
            <ul className="flex flex-col gap-3 border-t border-slate-300 pt-8">
              {['Creative Concept Storyboarding', 'Professional Model Casting', 'Location & Studio Scouting'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phase 2 (Offset) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group">
          <div className="flex-1 w-full lg:text-right flex flex-col items-start lg:items-end">
            <span className="text-4xl md:text-6xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-6">02</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">High-End <br />Studio Capture.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-md lg:ml-auto">
              Strict adherence to camera science. We configure advanced studio parameters and coordinate massive lighting arrays.
            </p>
            <ul className="flex flex-col gap-3 border-t border-slate-300 pt-8 lg:items-end">
              {['Custom Set Art Direction', 'Advanced Lighting Configurations', 'Multi-Angle Camera Capture'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                  {item}
                  <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="block relative aspect-square overflow-hidden bg-slate-200 lg:mt-32">
              <Image
                src="/images/img-g.webp"
                alt="Studio Capture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group">
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <div className="block relative aspect-[4/3] overflow-hidden bg-slate-200">
              <Image
                src="/images/img-f.webp"
                alt="Post-Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <span className="text-4xl md:text-6xl font-serif italic bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 block mb-6">03</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Master <br />Post-Production.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-md">
              The final 10% that separates good from elite. Meticulous color matching, editorial retouching, and premium asset packaging.
            </p>
            <ul className="flex flex-col gap-3 border-t border-slate-300 pt-8">
              {['Editorial Skin & Product Retouching', 'Bespoke Color Grading Presets', 'Instant Client Gallery Delivery'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* 3. CTA */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 border-t border-slate-300 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-medium tracking-tighter leading-tight mb-8 max-w-3xl">
          The <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Boomerang</span> Effect.
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-12">
          You send us your strategic campaign requirements, and our camera execution returns finished premium visual libraries.
        </p>
        <Link href="/photography" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-colors">
          Verify the Results <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  )
}
