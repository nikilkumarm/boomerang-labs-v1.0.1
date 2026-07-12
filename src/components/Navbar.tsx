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
            {/* Mobile WhatsApp Icon */}
            <a
              href="https://wa.me/918124887577?text=Hi%20Boomerang%20Labs!"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-[#08152E]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
