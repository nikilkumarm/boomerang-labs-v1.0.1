'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navLinks = ['Company', 'Strategy', 'Photography', 'Production', 'Pricing']

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-[1000] w-full h-[80px] lg:h-[100px] bg-white border-b border-black/5"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <div className="w-full max-w-[1440px] mx-auto h-full px-6 md:px-12 xl:px-24 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 h-full py-2">
            <Image
              src="/logo.webp"
              alt="Boomerang Labs"
              width={250}
              height={90}
              className="w-auto h-full max-h-[60px] lg:max-h-[75px] object-contain object-left"
              priority
            />
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[32px]">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[15px] font-medium text-[#08152E] hover:text-[#2E6BFF] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/918124887577?text=Hi%20Boomerang%20Labs!"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex items-center gap-1.5 text-[14px] font-semibold text-white bg-gradient-to-r from-[#FF3B30] to-[#FF2D55] hover:from-[#E6352B] hover:to-[#E6284C] px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <button
              className="lg:hidden p-2 text-[#08152E]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[2000] bg-white flex flex-col pt-6 px-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Image src="/logo.webp" alt="Boomerang Labs" width={140} height={50} className="w-auto h-[36px] object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#08152E]">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-[22px] font-bold text-[#08152E]">
                  {item}
                </Link>
              ))}
              <div className="h-[1px] w-full bg-black/10 my-4" />
              <a href="https://wa.me/918124887577" target="_blank" rel="noopener noreferrer" className="mx-auto flex items-center justify-center h-[50px] px-8 bg-gradient-to-r from-[#FF3B30] to-[#FF2D55] text-white rounded-full font-semibold text-[15px] shadow-sm">
                Get In Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
