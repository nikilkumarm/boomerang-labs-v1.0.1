'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProposalPage() {
  return (
    <>
      <section className="section subpage-hero">
        <span className="section-tag">Commercial Photography Campaign Proposal</span>
        <h1 className="subpage-title">Strategic Growth Proposal 2026</h1>
        <p className="subpage-lead">A comprehensive roadmap scaling visual production, studio set operations, e-commerce product catalogs, and corporate event systems to reach high-value targets.</p>
      </section>

      <section className="section metrics-section">
        <div className="metrics-summary-grid">
          <div className="metric-highlight-card">
            <span className="metric-tag">Projected Target</span>
            <h2 className="metric-value">₹1.5 Cr</h2>
            <p className="metric-desc">Strategic revenue target based on premium fashion campaigns, model lookbooks, and global commercial catalog shoots.</p>
          </div>
          <div className="metric-highlight-card">
            <span className="metric-tag">Growth Metric</span>
            <h2 className="metric-value">99%</h2>
            <p className="metric-desc">Projected YoY booking expansion targeting high-end brand events, lookbooks, and high-volume e-commerce product shoots.</p>
          </div>
          <div className="metric-highlight-card">
            <span className="metric-tag">Asset Scope</span>
            <h2 className="metric-value">10K+</h2>
            <p className="metric-desc">High-fidelity retouched assets, master studio selects, digital event catalogs, and motion reels included.</p>
          </div>
        </div>
      </section>

      <section className="section proposal-editorial">
        <div className="editorial-grid">
          <div className="editorial-left">
            <h2 className="editorial-lead">
              Commercial photography is a core driver of modern consumer connections. To realize full market growth, we synchronize model lookbooks, product details, and event experiences into a cohesive visual catalog.
            </h2>
          </div>
          <div className="editorial-right">
            <p>
              In 2026, premium brands require razor-sharp, emotionally resonant, and technically flawless imagery to capture attention across saturated digital and print channels. This proposal outlines the key strategic steps to scale our studio assets across editorial, product, and live conference productions.
            </p>
            <p>
              By unifying all high-volume product catalogs, cinematic model lookbooks, and live event motion reels under a single, highly coordinated studio pipeline, we unlock absolute consistency and double brand engagement metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="section proposal-phases">
        <div className="section-header">
          <span className="section-tag">Implementation Roadmap</span>
          <h2 className="section-heading">Detailed Growth Phases</h2>
        </div>

        <div className="phases-list">
          <div className="phase-row">
            <div className="phase-number">Phase 01</div>
            <div className="phase-info">
              <h3 className="phase-title">Creative Direction & Model/Location Scouting</h3>
              <p>Thorough alignment on art direction, visual mood boards, wardrobe selections, model casting, and premium location scouting for commercial & fashion shoots.</p>
            </div>
            <div className="phase-timeline">1 - 3 Days</div>
          </div>

          <div className="phase-row">
            <div className="phase-number">Phase 02</div>
            <div className="phase-info">
              <h3 className="phase-title">High-End Production & Studio/Location Shoots</h3>
              <p>Executing premium model lookbooks, editorial fashion campaigns, high-volume e-commerce product shoots, and corporate conference/event coverage.</p>
            </div>
            <div className="phase-timeline">4 - 7 Days</div>
          </div>

          <div className="phase-row">
            <div className="phase-number">Phase 03</div>
            <div className="phase-info">
              <h3 className="phase-title">Post-Production, Master Retouching & Asset Delivery</h3>
              <p>Color grading, editorial skin retouching, product isolation, meta-tagging, and deploying high-performance digital client delivery galleries.</p>
            </div>
            <div className="phase-timeline">8 - 12 Days</div>
          </div>
        </div>
      </section>

      <section className="quick-cta">
        <div className="cta-box">
          <h2 className="cta-heading">Ready to see our selected studio works?</h2>
          <Link href="/portfolio" className="cta-btn">
            Explore Portfolio
          </Link>
        </div>
      </section>
    </>
  )
}
