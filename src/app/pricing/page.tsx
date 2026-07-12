'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoEditingPricing from '@/components/VideoEditingPricing'
import PhotographyPricing from '@/components/PhotographyPricing'
import GraphicDesignPricing from '@/components/GraphicDesignPricing'
import PodcastPricing from '@/components/PodcastPricing'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ServiceTab = 'video' | 'photo' | 'graphic' | 'podcast'

export default function PricingPage() {
  const [activeService, setActiveService] = useState<ServiceTab>('video')

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pt-40 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
            Investment
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 whitespace-nowrap">
            Tailored <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Packages.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Invest in content that scales your authority. Select a service below to view our tailored packages.
          </p>
        </motion.div>
      </section>

      {/* 2. MASTER TABS */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col items-center">
        <div className="inline-flex bg-white p-1.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 overflow-x-auto max-w-full">
          {[
            { id: 'video', label: 'Video Editing' },
            { id: 'photo', label: 'Photography' },
            { id: 'graphic', label: 'Graphic Design' },
            { id: 'podcast', label: 'Podcasts' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveService(tab.id as ServiceTab)}
              className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                activeService === tab.id ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeService === tab.id && (
                <motion.div
                  layoutId="activeMasterTab"
                  className="absolute inset-0 bg-slate-900 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT RENDERING */}
      <section className="w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {activeService === 'video' && <VideoEditingPricing hideHeader hideCTA />}
            {activeService === 'photo' && <PhotographyPricing hideHeader hideCTA />}
            {activeService === 'graphic' && <GraphicDesignPricing hideHeader hideCTA />}
            {activeService === 'podcast' && <PodcastPricing hideHeader hideCTA />}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. UNIFIED CTA */}
      <section className="w-full max-w-[1400px] mx-auto pt-20 pb-10 border-t border-slate-200 mt-20 flex flex-col items-center text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-medium tracking-tighter leading-tight mb-8 max-w-none text-slate-900">
          Ready to <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text pr-2">Build Your Brand?</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-12">
          Let's create assets that actually move your business forward.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:border-blue-600 transition-colors group">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 -ml-2">Book a Discovery Call</span> <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-blue-600 transition-colors" />
        </Link>
      </section>

    </main>
  )
}
