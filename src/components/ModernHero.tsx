'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ModernHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#fdfdfd] flex flex-col items-center justify-start pt-20 pb-24 overflow-hidden" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>

      {/* Container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col z-10">

        {/* Top Section: Text & Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-20 gap-12">

          {/* Left Text */}
          <div className="flex flex-col items-start text-left w-full lg:w-1/2">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#ebff5e] text-[#4d5c13] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm tracking-wide uppercase"
            >
              The right climate for your business
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold text-[#08152E] mb-6 max-w-[600px] tracking-tighter"
              style={{ fontFamily: 'var(--font-archivo), sans-serif' }}
            >
              Hand Us The <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="italic font-medium tracking-normal pr-1 bg-gradient-to-r from-[#2E6BFF] to-[#00C6FF] text-transparent bg-clip-text">Vision.</span><br />
              Take The <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="italic font-medium tracking-normal pr-1 bg-gradient-to-r from-[#2E6BFF] to-[#00C6FF] text-transparent bg-clip-text">Credit.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#868992] text-[16px] md:text-[18px] max-w-[450px] leading-relaxed font-light"
            >
              Comprehensive supply of air conditioning and ventilation systems
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]"
          >
            <img
              src="/images/gimbal-sketch-2.png"
              alt="Gimbal Sketch"
              className="absolute inset-0 w-full h-full object-contain object-right opacity-90"
            />
          </motion.div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">

          {/* Card 1: Household */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col h-[280px] md:h-[320px] rounded-[32px] p-8 md:p-10 relative overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100/50"
          >
            {/* Subtle light gradient background */}
            <div className="absolute -bottom-[50%] -right-[20%] w-[150%] h-[150%] rounded-full bg-gradient-to-tr from-gray-100/50 to-transparent blur-3xl z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[#3c3e44] text-[22px] md:text-[26px] font-medium mb-4">Household</h3>
              <p className="text-[#7d818a] text-[14px] md:text-[15px] leading-relaxed max-w-[200px]">
                Wholesale of household appliances
              </p>
            </div>
          </motion.div>

          {/* Card 2: System (Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col h-[280px] md:h-[320px] rounded-[32px] p-8 md:p-10 relative overflow-hidden bg-[#ebff5e]"
          >
            {/* Dynamic yellow gradient shapes */}
            <div className="absolute -bottom-[10%] -left-[20%] w-[200px] h-[200px] rounded-full bg-[#d6f034] blur-[40px] z-0 opacity-80 mix-blend-multiply" />
            <div className="absolute top-[10%] -right-[30%] w-[250px] h-[250px] rounded-full bg-white/30 blur-[50px] z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[#2b3306] text-[22px] md:text-[26px] font-medium mb-4">System</h3>
              <p className="text-[#516110] text-[14px] md:text-[15px] leading-relaxed max-w-[200px] font-medium">
                Production and Engineering Direction
              </p>
            </div>
          </motion.div>

          {/* Card 3: Climate Technology (Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col h-[280px] md:h-[320px] rounded-[32px] p-8 md:p-10 relative overflow-hidden bg-[#2d3036] shadow-xl"
          >
            {/* Dark gradient shapes */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[200px] h-[200px] rounded-full bg-[#3d414a] blur-[30px] z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-white text-[22px] md:text-[26px] font-medium mb-4">Climate<br />technology</h3>
              <p className="text-[#9ca3af] text-[14px] md:text-[15px] leading-relaxed max-w-[200px]">
                Wholesale sales of climate technology
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
