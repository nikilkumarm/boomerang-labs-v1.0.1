'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export default function StrategyPage() {
  return (
    <>
      <section className="section subpage-hero strategy-hero">
        <div className="subpage-hero-left">
          <Breadcrumb currentPage="Strategy" />
          <h1 className="subpage-title">A production workflow built to return compounded visual value.</h1>
          <p className="subpage-lead">Camera science, precision lighting, and high-fidelity studio framework.</p>
        </div>
        <div className="subpage-hero-right">
          <div className="subpage-hero-image-wrapper">
            <Image
              src="/images/img-d.webp"
              alt="Camera Production"
              fill
              className="subpage-hero-image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section strategy-pillars">
        <div className="section-header">
          <span className="section-tag">The Stepper</span>
          <h2 className="section-heading">The Three Pillars of Photography Production</h2>
        </div>

        <div className="strategy-grid">
          <div className="strategy-card">
            <span className="card-num">01</span>
            <h3 className="card-heading-sm">Pre-Production & Casting</h3>
            <p className="strategy-desc-p">We commence by planning visual directions, scouting unique locations, casting models, and curating wardrobes.</p>
            <ul className="card-sublist">
              <li>Creative Concept Storyboarding</li>
              <li>Professional Model Casting</li>
              <li>Location & Studio Scouting</li>
            </ul>
          </div>

          <div className="strategy-card">
            <span className="card-num">02</span>
            <h3 className="card-heading-sm">High-End Studio Production</h3>
            <p className="strategy-desc-p">We configure advanced studio set parameters, coordinate professional lighting arrays, and execute precise captures.</p>
            <ul className="card-sublist">
              <li>Custom Set Art Direction</li>
              <li>Advanced Lighting Configurations</li>
              <li>Multi-Angle Camera Capture</li>
            </ul>
          </div>

          <div className="strategy-card">
            <span className="card-num">03</span>
            <h3 className="card-heading-sm">Master Post-Production</h3>
            <p className="strategy-desc-p">We complete retouching, execute meticulous color matching, edit motion reels, and package premium assets.</p>
            <ul className="card-sublist">
              <li>Editorial Skin & Product Retouching</li>
              <li>Bespoke Color Grading Presets</li>
              <li>Instant Client Gallery Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section strategy-process-timeline">
        <div className="editorial-grid">
          <div className="editorial-left">
            <h2 className="editorial-lead">
              Our studio production acts like a <strong>boomerang.</strong> You send us your strategic campaign requirements, and our camera execution returns finished premium visual libraries.
            </h2>
          </div>
          <div className="editorial-right">
            <div className="editorial-logo-wrap">
              <Image
                src="/images/bl-approvel-logo-2.webp"
                alt="Boomerang Labs Visual Rights Badge"
                width={320}
                height={200}
                className="editorial-logo-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="quick-cta">
        <div className="cta-box">
          <h2 className="cta-heading">Ready to see our selected visual campaigns?</h2>
          <Link href="/portfolio" className="cta-btn">
            Explore Portfolio
          </Link>
        </div>
      </section>
    </>
  )
}
