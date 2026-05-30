'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h2 className="hero-subtitle">
            Where Lighting, <strong>Composition,<br />and Art Direction</strong> Create<br />Unmatched Visual Value
          </h2>
          <div className="stats">
            <div className="stat-box">
              <span className="stat-number">₹1.5Cr</span>
              <span className="stat-label">Campaign Target</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">99%</span>
              <span className="stat-label">Booking Expansion</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="title-top">Boomerang</span>
            <span className="title-bottom">Studios.</span>
          </h1>
        </div>
      </section>

      {/* Split Proposal Card Teaser */}
      <section className="proposal-card-split">
        {/* Left Column: Text Content */}
        <div className="proposal-split-content">
          <div className="proposal-split-top">
            <span className="proposal-badge">Active Proposal</span>
            <span className="proposal-asterisk">*</span>
          </div>

          <div className="proposal-split-middle">
            <h3 className="proposal-split-title">Strategic Growth<br />Proposal 2026</h3>
            <p className="proposal-split-desc">Explore our high-fidelity lookbooks, high-volume e-commerce systems, and live event productions.</p>
          </div>

          <div className="proposal-split-bottom">
            <Link href="/proposal" className="view-details-btn">
              <span>Read Full Proposal</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Bright, High-fidelity Image */}
        <div className="proposal-split-image-col">
          <div className="proposal-image-wrapper">
            <Image
              src="/images/img-a.jpg"
              alt="Strategic Production"
              fill
              className="proposal-image"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hub Directory Grid */}
      <section className="section hub-section">
        <div className="section-header">
          <span className="section-tag">Explore The Studio</span>
          <h2 className="section-heading">High-performance commercial visual production.</h2>
        </div>

        <div className="hub-grid">
          <Link href="/company" className="hub-card">
            <span className="hub-num">01</span>
            <div className="hub-info">
              <h3 className="hub-title">Our Studio</h3>
              <p className="hub-desc">Learn about our studio legacy, camera direction, and lighting credentials.</p>
            </div>
            <span className="hub-arrow">→</span>
          </Link>

          <Link href="/strategy" className="hub-card">
            <span className="hub-num">02</span>
            <div className="hub-info">
              <h3 className="hub-title">Production Method</h3>
              <p className="hub-desc">Explore our deep pre-production castings, set operations, and color retouching.</p>
            </div>
            <span className="hub-arrow">→</span>
          </Link>

          <Link href="/portfolio" className="hub-card">
            <span className="hub-num">03</span>
            <div className="hub-info">
              <h3 className="hub-title">Portfolio Showcase</h3>
              <p className="hub-desc">View our editorial lookbooks, e-commerce products, and corporate event catalogs.</p>
            </div>
            <span className="hub-arrow">→</span>
          </Link>

          <Link href="/blog" className="hub-card">
            <span className="hub-num">04</span>
            <div className="hub-info">
              <h3 className="hub-title">Insights</h3>
              <p className="hub-desc">Read our perspective on fashion aesthetics, product lighting science, and event dynamics.</p>
            </div>
            <span className="hub-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Quick Contact Footer Teaser */}
      <section className="quick-cta">
        <div className="cta-box">
          <h2 className="cta-heading">Ready to book a commercial shoot?</h2>
          <Link href="/contact" className="cta-btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
