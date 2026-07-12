'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      
      {/* ===== CONCENTRIC CIRCLES ===== */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[180vw] h-[180vw] rounded-full opacity-[0.6]"
        style={{
          background: 'repeating-radial-gradient(circle at top center, transparent 0, transparent 59px, rgba(10,25,60,0.06) 60px, transparent 61px)',
          maskImage: 'radial-gradient(ellipse at top center, black 15%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top center, black 15%, transparent 70%)',
        }}
      />
      
      {/* Subtle radial glow top center */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(248,249,251,0)_70%)]" />

    </div>
  )
}
