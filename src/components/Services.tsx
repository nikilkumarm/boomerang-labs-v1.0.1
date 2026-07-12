'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Mic, Clapperboard, PenTool } from 'lucide-react'

const services = [
  { icon: Camera, title: 'FASHION & COMMERCIAL PHOTOGRAPHY', desc: 'Capturing brands. Creating impact.' },
  { icon: Mic, title: 'PODCASTS', desc: 'Conversations that connect.' },
  { icon: Clapperboard, title: 'LONG/SHORT-TERM VIDEO EDITING', desc: 'Stories cut to perfection.' },
  { icon: PenTool, title: 'GRAPHIC DESIGNS', desc: 'Visuals that speak your brand.' },
]

export default function Services() {
  return (
    <section className="relative w-full bg-transparent flex flex-col items-center z-30 pt-4 md:pt-8 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-[1440px] px-6 md:px-12 xl:px-24"
      >
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16 xl:gap-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-2 max-w-[280px]"
              >
                <Icon className="w-[24px] h-[24px] text-[#041A4D] mb-1" strokeWidth={1.5} />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[#08152E] text-[11px] font-bold tracking-[0.1em] uppercase leading-snug">
                    {svc.title}
                  </h4>
                  <p className="text-gray-500 text-[12px] font-medium leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
