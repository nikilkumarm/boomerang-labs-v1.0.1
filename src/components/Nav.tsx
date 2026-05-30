'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const menuItems = [
  { label: 'Services', num: '01', href: '#services' },
  { label: 'Works', num: '02', href: '#works' },
  { label: 'About', num: '03', href: '#about' },
  { label: 'Process', num: '04', href: '#process' },
  { label: 'Contact', num: '05', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      // Detect dark sections (showcase)
      const showcase = document.querySelector('.showcase')
      if (showcase) {
        const rect = showcase.getBoundingClientRect()
        setIsDark(rect.top <= 0 && rect.bottom > 72)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isDark && !scrolled ? 'dark' : ''}`}
           role="navigation" aria-label="Main navigation">
        <div className="nav-logo" aria-label="Boomerang Labs">
          Boomerang Labs
          <span>Creative Agency</span>
        </div>

        <div className="nav-center">
          <button
            className="nav-grid-icon"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            id="menu-toggle-btn"
          >
            <span /><span /><span /><span />
          </button>
        </div>

        <div className="nav-right">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          id="menu-close-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <nav className="menu-nav">
          {menuItems.map((item) => (
            <div key={item.href} className="menu-nav-item">
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                <span className="menu-nav-item-num">{item.num}</span>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
