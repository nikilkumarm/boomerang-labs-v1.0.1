import React from 'react'
import { motion } from 'framer-motion'

interface StackedCardHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
}

export function StackedCardHero({ title, subtitle, image = "/images/company_hero.webp" }: StackedCardHeroProps) {
  return (
    <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full bg-white shadow-2xl shadow-black/5 border border-slate-200 flex flex-col group overflow-hidden"
      >
        {/* Image Section (Top 60%) */}
        <div className="relative w-full h-[60%] overflow-hidden bg-slate-200">
          <img
            src={image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Section (Bottom 40%) */}
        <div className="relative z-10 w-full h-[40%] px-8 py-6 md:py-8 flex flex-col justify-between bg-white">
          <div className="flex justify-between items-start gap-4">
            <span className="text-5xl font-serif italic text-slate-200 leading-none">01.</span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 text-right mt-1">
              {title || "Dynamic Interaction"}
            </h3>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-500 max-w-xs leading-relaxed ml-auto text-right">
            {subtitle || "High-fidelity visual systems designed for the modern web."}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
