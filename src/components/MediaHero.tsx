'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react'

export default function MediaHero() {
  return (
    <section
      className="relative w-full h-screen min-h-[800px] flex overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#fafcff] via-60% to-[#e8f1fc]"
      style={{
        fontFamily: 'var(--font-inter), sans-serif',
      }}
    >
      {/* Soft Delicate Ambient Glow on Right Side */}
      <div
        className="absolute top-0 right-0 w-[65vw] h-full pointer-events-none z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 85% 45%, #d0e7ff 0%, #eef6ff 50%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Subtle Micro-Dot Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#08152E 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px',
          maskImage: 'radial-gradient(ellipse at 60% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, black 50%, transparent 95%)'
        }}
      />

      {/* Absolute Full-Width Header */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between pt-10 md:pt-12 pl-10 md:pl-20 pr-10 md:pr-12 z-30 text-[#08152E] pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center shrink-0">
          <Image
            src="/images/boomerang-logo-dark-transparent.png"
            alt="Boomerang Labs"
            width={360}
            height={90}
            className="w-[170px] md:w-[195px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Nav Links & Cart */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/company" className="text-[13px] font-extrabold tracking-widest text-[#08152E] hover:text-[#2E6BFF] transition-colors uppercase">
            Company
          </Link>
          <Link href="/strategy" className="text-[13px] font-extrabold tracking-widest text-[#08152E] hover:text-[#2E6BFF] transition-colors uppercase">
            Strategy
          </Link>
          <Link href="/photography" className="text-[13px] font-extrabold tracking-widest text-[#08152E] hover:text-[#2E6BFF] transition-colors uppercase">
            Photography
          </Link>
          <Link href="/podcasts" className="text-[13px] font-extrabold tracking-widest text-[#08152E] hover:text-[#2E6BFF] transition-colors uppercase">
            Podcasts
          </Link>
          <Link href="/contact" className="text-[13px] font-extrabold tracking-widest text-[#08152E] hover:text-[#2E6BFF] transition-colors uppercase">
            Contact
          </Link>
          <Link href="/pricing" className="text-[#08152E] hover:bg-black/5 p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10 ml-2">
            <ShoppingCart size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Left Side */}
      <div className="w-[55%] h-full relative flex flex-col justify-center pt-16 md:pt-20 pb-24 md:pb-28 -translate-y-4 md:-translate-y-6 pl-10 md:pl-20 pr-10 z-10">

        {/* Center Massive Text */}
        <div className="flex items-center text-[#08152E]">
          {/* Massive Text */}
          <h1
            className="text-[50px] md:text-[70px] xl:text-[90px] font-bold tracking-tighter leading-[1.05] text-[#08152E]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 900 }}
          >
            Hand Us the{' '}
            <span
              style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1em' }}
              className="italic bg-gradient-to-r from-[#2E6BFF] to-[#00C6FF] text-transparent bg-clip-text"
            >
              Vision.
            </span>
            <br />
            Take the{' '}
            <span
              style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1em' }}
              className="italic bg-gradient-to-r from-[#2E6BFF] to-[#00C6FF] text-transparent bg-clip-text"
            >
              Credit.
            </span>
          </h1>
        </div>

        {/* Services Strip */}
        <div className="flex items-start mt-10 w-full border-t border-[#08152E]/15 pt-6 gap-0">

          {/* Service 1 */}
          <div className="flex-1 flex flex-row items-center gap-4 pr-8">
            {/* Modern Squircle Gallery Landscape Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#08152E" className="text-[#08152E] shrink-0">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 6.5C3 4.567 4.567 3 6.5 3h11C19.433 3 21 4.567 21 6.5v11c0 1.933-1.567 3.5-3.5 3.5h-11C4.567 21 3 19.433 3 17.5v-11zM7.5 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.12 7.828a1.2 1.2 0 0 0-1.697 0L5.2 18.55A1.5 1.5 0 0 0 6.5 19.5h4.152l3.473-3.472-2.505-2.2zM19.5 17.5V12.7l-6.8 6.8h4.8a1.5 1.5 0 0 0 1.5-1.5l.5-.5z" />
            </svg>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-[#08152E]">Photography</p>
              <p className="text-[12px] text-[#08152E]/60 leading-relaxed font-normal">Capturing brands. Creating impact.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px self-stretch bg-[#08152E]/15 shrink-0" />

          {/* Service 2 */}
          <div className="flex-1 flex flex-row items-center gap-4 px-8">
            {/* Modern Floating Podcast Microphone Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="text-[#08152E] shrink-0">
              <rect x="8" y="2" width="8" height="13" rx="4" fill="#08152E" />
              <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="#08152E" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="8" y="20.5" width="8" height="2" rx="1" fill="#08152E" />
            </svg>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-[#08152E]">Podcasts</p>
              <p className="text-[12px] text-[#08152E]/60 leading-relaxed font-normal">Conversations that connect.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px self-stretch bg-[#08152E]/15 shrink-0" />

          {/* Service 3 */}
          <div className="flex-1 flex flex-row items-center gap-4 pl-8">
            {/* Creative Ads Video Screen Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="text-[#08152E] shrink-0">
              {/* Screen with transparent play triangle cutout */}
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2.5h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4zm3.8 4.2a1 1 0 0 0-1.3.9v5.8a1 1 0 0 0 1.5.8l5-2.9a1 1 0 0 0 0-1.7l-5-2.9z" fill="#08152E" />
              {/* Floating Base Bar */}
              <rect x="6.5" y="20.5" width="11" height="2" rx="1" fill="#08152E" />
            </svg>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-[#08152E]">Creative Ads</p>
              <p className="text-[12px] text-[#08152E]/60 leading-relaxed font-normal">Campaigns that captivate and convert.</p>
            </div>
          </div>

        </div>

        {/* Bottom Left Content */}
        <div className="absolute bottom-24 md:bottom-28 left-10 md:left-20 z-20 pointer-events-auto text-[#08152E]">
          <Link href="/photography" className="flex items-center gap-3 text-[14px] md:text-[15px] font-extrabold tracking-[0.22em] text-[#08152E] hover:text-[#2E6BFF] transition-all duration-300 uppercase group">
            <span>View Project</span>
            <svg width="20" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform duration-300">
              <path d="M11 1L15 5M15 5L11 9M15 5H1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[45%] h-full relative flex justify-end z-10 pointer-events-none">

        {/* Main Content Area of Right Side */}
        <div className="flex-1 relative">
          {/* Studio Gimbal Sketch (gimbal-sketch-4) */}
          <div
            className="absolute right-[4vw] md:right-[6vw] bottom-[6vh] md:bottom-[8vh] w-[42vw] h-[75vh] min-w-[360px] min-h-[500px] max-w-[580px] max-h-[850px] z-20 pointer-events-none"
          >
            <div
              className="relative w-full h-full"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 75%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse at 50% 50%, black 75%, transparent 100%)'
              }}
            >
              <Image
                src="/images/gimbal-sketch-4.png"
                alt="Camera Gimbal Sketch"
                fill
                className="object-contain object-right-bottom opacity-85"
                quality={100}
                sizes="(max-width: 768px) 50vw, 42vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Vertical Bar (Arrow Only) */}
        <div className="w-[60px] h-full flex flex-col items-center justify-end pb-10 shrink-0 pointer-events-auto pr-8">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="bg-[#08152E] text-white hover:bg-[#2E6BFF] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <ArrowDown size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </section>
  )
}
