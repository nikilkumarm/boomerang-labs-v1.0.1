'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileMenuBtn() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button — styled to match header icon-btn */}
      <button className="mobile-menu-btn icon-btn" aria-label="Open Menu" onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      </button>

      <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-menu-brand" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.webp"
              alt="Boomerang Labs"
              width={180}
              height={60}
              className="mobile-menu-logo"
              priority
            />
          </Link>
          <button className="mobile-menu-close" onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-links">
          <Link href="/company" onClick={() => setIsOpen(false)}>Company</Link>
          <Link href="/strategy" onClick={() => setIsOpen(false)}>Strategy</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-menu-contact">Get In Touch</Link>
        </nav>
      </div>
    </>
  )
}
