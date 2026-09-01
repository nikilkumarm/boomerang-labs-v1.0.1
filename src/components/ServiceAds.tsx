'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, Mic, Megaphone, ArrowRight } from 'lucide-react'

const ads = [
  {
    Icon: Camera,
    title: 'FASHION & COMMERCIAL PHOTOGRAPHY',
    desc: 'Capturing brands. Creating impact.',
    href: '/photography',
  },
  {
    Icon: Mic,
    title: 'PODCASTS',
    desc: 'Conversations that connect.',
    href: '/podcasts',
  },
  {
    Icon: Megaphone,
    title: 'CREATIVE ADS',
    desc: 'Campaigns that captivate and convert.',
    href: '#',
  },
]

export default function ServiceAds() {
  return (
    <section className="relative w-full bg-transparent flex flex-col items-center z-30 pt-4 md:pt-8 pb-16 md:pb-24 -mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="w-full max-w-[1200px] px-8 md:px-16 xl:px-32"
      >
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16 xl:gap-20">
          {ads.map((ad, idx) => {
            const Icon = ad.Icon
            return (
              <Link
                key={idx}
                href={ad.href}
                className="flex flex-col items-start gap-2 max-w-[280px] group"
              >
                <Icon className="w-[24px] h-[24px] text-[#041A4D] mb-1" strokeWidth={1.5} />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[#08152E] text-[11px] font-bold tracking-[0.1em] uppercase leading-snug group-hover:text-[#2E6BFF] transition-colors duration-200">
                    {ad.title}
                  </h4>
                  <p className="text-gray-500 text-[12px] font-medium leading-relaxed">
                    {ad.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Common Explore Button */}
        <div className="mt-12 flex justify-center w-full">
          <Link href="#" className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/25">
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
