'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div className="company-page-container">
      {/* Premium Split Layout Matching specification */}
      <section className="company-layout-grid">
        {/* Left Column: Text and Details */}
        <div className="company-text-col">
          <h1 className="company-main-title">
            Introducing<br />Our Studio
          </h1>

          <div className="company-description-block">
            <h2 className="company-lead-tagline">
              <strong>(Studio Legacy)</strong> Turning Vision into Capture, Capture into Valued Assets.
            </h2>

            <p className="company-paragraph">
              If several visual styles coalesce, the grammar of the resulting campaign is more bold and striking than that of individual lookbooks. The new brand language will be more distinct.
            </p>

            <p className="company-paragraph-secondary">
              Our commercial productions command presence globally. We shoot fashion model lookbooks, editorial campaigns, high-end e-commerce products, and corporate events to build lasting brand value.
            </p>
          </div>

          <div className="company-action-pills">
            <Link href="/proposal" className="pill-outline">Campaign Proposal</Link>
            <span className="pill-lime">2026</span>
          </div>
        </div>

        {/* Right Column: Device Mockup and Overlaid Metric Badge */}
        <div className="company-visual-col">
          <div className="device-mockup-container">
            {/* Device Screen holding Hero Orb */}
            <div className="device-frame">
              <Image
                src="/images/img-i.jpeg"
                alt="Studio Screen"
                fill
                className="device-screen-image"
                priority
              />
            </div>

            {/* Floating High-Contrast Badge */}
            <div className="floating-accent-badge">
              <span className="badge-stat">100+</span>
              <span className="badge-label">Satisfied Clients</span>
              <div className="badge-image-wrapper">
                <Image
                  src="/images/img-l.jpeg"
                  alt="Studio Asset"
                  fill
                  className="badge-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
