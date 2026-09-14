'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, Mic, Megaphone, ArrowUpRight } from 'lucide-react'

const ads = [
  {
    Icon: Camera,
    number: '01',
    title: 'Fashion & Commercial Photography',
    desc: 'Capturing brands. Creating lasting impact through high-fidelity visual production.',
    href: '/photography',
    color: 'from-[#2E6BFF]/10 to-[#06b6d4]/5',
    iconColor: 'text-[#2E6BFF]',
    borderColor: 'hover:border-[#2E6BFF]/30',
  },
  {
    Icon: Mic,
    number: '02',
    title: 'Podcasts',
    desc: 'Studio-quality podcast production. Conversations that connect and resonate.',
    href: '/podcasts',
    color: 'from-[#FF3B30]/10 to-[#FF2D55]/5',
    iconColor: 'text-[#FF3B30]',
    borderColor: 'hover:border-[#FF3B30]/30',
  },
  {
    Icon: Megaphone,
    number: '03',
    title: 'Creative Ads',
    desc: 'Campaigns built to captivate audiences and convert at scale.',
    href: '#',
    color: 'from-[#8B5CF6]/10 to-[#6D28D9]/5',
    iconColor: 'text-[#8B5CF6]',
    borderColor: 'hover:border-[#8B5CF6]/30',
  },
]

export default function ServiceAds() {
  return (
    <section className="relative w-full bg-transparent flex flex-col items-center z-30 pt-4 md:pt-8 pb-16 md:pb-24 -mt-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        className="w-full max-w-[1200px] px-6 md:px-12 xl:px-24"
      >
        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {ads.map((ad, idx) => {
            const Icon = ad.Icon
            return (
              <Link
                key={idx}
                href={ad.href}
                className={`group relative flex flex-col gap-4 p-6 lg:p-7 bg-white rounded-[20px] border border-gray-100 ${ad.borderColor} hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-br ${ad.color} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${ad.iconColor}`} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-300 tracking-[0.15em]">{ad.number}</span>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <h4
                    className="text-[#08152E] text-[15px] lg:text-[16px] font-bold leading-snug group-hover:text-[#2E6BFF] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {ad.title}
                  </h4>
                  <p
                    className="text-gray-500 text-[13px] lg:text-[14px] font-normal leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {ad.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-[12px] font-semibold text-gray-400 group-hover:text-[#2E6BFF] transition-colors duration-200">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" strokeWidth={2.5} />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Explore all CTA */}
        <div className="mt-8 flex justify-center w-full">
          <Link
            href="/pricing"
            className="group flex items-center gap-3 px-8 lg:px-10 py-3.5 lg:py-4 bg-[#08152E] text-white rounded-full font-bold text-[12px] lg:text-[13px] tracking-widest uppercase hover:bg-[#2E6BFF] transition-colors duration-300 shadow-lg hover:shadow-[#2E6BFF]/25"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            View Pricing & Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

