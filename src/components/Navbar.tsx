'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navLinks = ['Company', 'Strategy', 'Photography', 'Podcasts', 'Contact']

  if (pathname === '/') return null

  return (
    <>
      <div className="h-[80px] lg:h-[100px] w-full" aria-hidden="true" />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 lg:top-10 left-0 lg:left-1/2 lg:-translate-x-1/2 z-[1000] w-full lg:w-[calc(100%-4rem)] lg:max-w-[960px] h-[72px] bg-white/60 backdrop-blur-2xl border-b lg:border lg:border-white/50 lg:rounded-full lg:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <div className="w-full h-full px-6 md:px-8 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 h-full py-2">
            <Image
              src="/logo.webp"
              alt="Boomerang Labs"
              width={240}
              height={80}
              className="w-[68px] lg:w-[76px] h-auto object-contain object-left"
              priority
            />
          </Link>


          {/* Center Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[28px]">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[11px] tracking-widest font-bold uppercase text-black/50 hover:text-black transition-colors duration-300"
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
              className="group hidden sm:flex items-center text-white bg-[#1DAF5A] hover:bg-gradient-to-r hover:from-[#2E6BFF] hover:to-[#00C6FF] active:scale-[0.97] rounded-full transition-all duration-300 shadow-[0_0_0_4px_rgba(37,211,102,0.2),0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_0_0_4px_rgba(46,107,255,0.2),0_4px_16px_rgba(46,107,255,0.4)] overflow-hidden"
            >
              {/* WhatsApp Icon Section */}
              <span className="flex items-center justify-center w-9 h-9 m-1 rounded-full bg-white/20 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </span>
              {/* Label */}
              <span className="pl-2 pr-4 text-[11px] font-bold uppercase tracking-widest">Get In Touch</span>
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
              <a href="https://wa.me/918124887577" target="_blank" rel="noopener noreferrer" className="mx-auto flex items-center justify-center h-[50px] px-8 border border-black/10 hover:border-transparent hover:bg-gradient-to-r hover:from-[#2E6BFF] hover:to-[#00C6FF] hover:text-white active:scale-95 text-black rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300">
                Get In Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
