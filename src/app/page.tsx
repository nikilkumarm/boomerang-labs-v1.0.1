'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes panDoodles {
          0% { background-position: 0 0; }
          100% { background-position: 500px 500px; }
        }
        .animate-pan-doodles {
          animation: panDoodles 40s linear infinite;
        }
        .comic-texture-text {
          background-image: 
            radial-gradient(circle, rgba(0,0,0,0.15) 30%, transparent 30%), 
            radial-gradient(circle, rgba(0,0,0,0.15) 30%, transparent 30%),
            linear-gradient(to right, #1d4ed8, #3b82f6, #22d3ee);
          background-size: 8px 8px, 8px 8px, 100% 100%;
          background-position: 0 0, 4px 4px, 0 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}} />

      {/* Animated Doodles Background (Fixed to viewport) */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-50 pointer-events-none opacity-[0.06] animate-pan-doodles mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/creative-doodles.png')",
          backgroundSize: "450px 450px",
          backgroundRepeat: "repeat"
        }}
      />

      {/* Hero Text Section */}
      <section className="relative pt-10 sm:pt-16 pb-6 sm:pb-12 w-full overflow-x-hidden">
        <div className="text-center px-4">
          <h1 className="font-[family-name:var(--font-outfit)] font-black leading-none tracking-tighter uppercase comic-texture-text pb-2 px-2 sm:px-4 whitespace-nowrap" style={{ fontSize: 'clamp(2.2rem, 8vw, 9.5rem)', display: 'table', margin: '0 auto' }}>BOOMERANG LABS</h1>
          <p className="mt-3 mb-8 sm:mb-16 text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-medium tracking-normal text-gray-500 uppercase px-4">FASHION & COMMERCIAL PHOTOGRAPHY &bull; PODCASTS &bull; LONG/SHORT-TERM VIDEO EDITING &bull; GRAPHIC DESIGNS</p>
        </div>
      </section>

      {/* Massive Image Section */}
      <section className="relative pb-12 sm:pb-24 max-w-[1400px] mx-auto px-3 sm:px-6">
        <div 
          className="relative rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden bg-gray-900 aspect-[2/1] sm:aspect-[2.5/1] lg:aspect-[5/1] xl:aspect-[6/1] group cursor-pointer shadow-xl opacity-50"
          style={{
            width: 'calc(100vw - 1.5rem)',
            marginLeft: 'calc(-50vw + 50% + 0.75rem)',
            maxWidth: 'none'
          }}
        >
          <div className="absolute inset-0 mix-blend-screen"
            style={{
              backgroundImage: "url('/images/creative-doodles.png')",
              backgroundSize: "350px 350px",
              backgroundRepeat: "repeat",
              opacity: 0.25,
              filter: "invert(1)"
            }}
          />
          {/* Centered text overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-lg sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-medium tracking-tight text-white text-center px-4 sm:px-8 leading-tight whitespace-nowrap">
              Creative Agency exclusive for <span className="font-black text-white">Creators!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hub Stacked Fan Layout */}
      <section className="hub-fan-section">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Explore The Studio</span>
          <h2 className="section-heading">High-performance commercial visual production.</h2>
        </div>

        <div className="fan-container">
          {/* Background Shape */}
          <div className="fan-bg-shape"></div>

          {/* Cards */}
          <div className="fan-cards">
            <div className="fan-card card-left">
              <Image src="/images/img-b.webp" alt="Production Method" fill className="fan-img" />
            </div>
            <div className="fan-card card-right">
              <Image src="/images/img-c.webp" alt="Portfolio Showcase" fill className="fan-img" />
            </div>
            <div className="fan-card card-center">
              <Image src="/images/img-a.webp" alt="Our Studio" fill className="fan-img" />
            </div>
          </div>

          {/* Frosted Glass Overlay */}
          <div className="fan-glass-panel">
            <div className="fan-glass-content">
              <div className="fan-list">
                <div className="fan-item">
                  <span className="fan-item-title">Our Studio</span>
                  <span className="fan-item-desc">Studio legacy and camera direction</span>
                </div>
                <div className="fan-item">
                  <span className="fan-item-title">Production Method</span>
                  <span className="fan-item-desc">Pre-production and set operations</span>
                </div>
                <div className="fan-item">
                  <span className="fan-item-title">Portfolio Showcase</span>
                  <span className="fan-item-desc">Editorial lookbooks and catalogs</span>
                </div>
              </div>
              <Link href="/company" className="fan-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Typography */}
        <h2 className="fan-main-title">STUDIO VISUALS</h2>
        <div className="fan-pill">2026</div>
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
