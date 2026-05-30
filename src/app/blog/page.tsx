'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showManifesto, setShowManifesto] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const articles = [
    {
      id: 1,
      title: 'The Science of Studio Lighting in Commercial Product Shoots',
      category: 'lighting',
      categoryLabel: 'Studio Lighting',
      date: 'May 2026',
      readTime: '6 min read',
      desc: 'Why premium e-commerce catalogs succeed on advanced softbox arrays, highlight control, shadow casting, and color calibration frameworks.'
    },
    {
      id: 2,
      title: 'Directing Motion: Framing and Easing in Fashion Lookbook Reels',
      category: 'motion',
      categoryLabel: 'Fashion Motion',
      date: 'April 2026',
      readTime: '8 min read',
      desc: 'How smooth gimbal movements, cinematic lens adjustments, and model pacing elevate digital streetwear campaigns across social channels.'
    },
    {
      id: 3,
      title: 'Candid Mastery: Capturing Corporate energy in Large Conferences',
      category: 'event',
      categoryLabel: 'Event Dynamics',
      date: 'March 2026',
      readTime: '5 min read',
      desc: 'The technical challenge of shooting keynotes under variable venue lighting. Strategies for crisp, high-contrast, candid shots in crowded environments.'
    }
  ]

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <>
      <section className="section subpage-hero">
        <span className="section-tag">04 / Studio Insights & Perspectives</span>
        <h1 className="subpage-title">Perspectives on camera direction, studio lighting, and digital culture.</h1>
        <p className="subpage-lead">We write about technical lens configurations, advanced strobe setups, model directing, and the post-production pipelines behind commercial captures.</p>
      </section>

      {/* Featured Cover Article */}
      <section className="section featured-blog-section">
        <div className="featured-card">
          <div className="featured-content">
            <span className="featured-badge">Featured Manifesto</span>
            <span className="featured-date">May 2026 &bull; 10 min read</span>
            <h2 className="featured-title">Designing For The Next Decade: The 2026 Studio Visual Manifesto</h2>
            <p className="featured-desc">
              As AI commoditizes generic stock vectors, the premium commercial brands of the future will succeed on emotional model connection, gorgeous custom studio setups, and cinematic motion reels. Read our manifesto on where photography strategy meets set execution.
            </p>
            <button className="read-featured-btn" onClick={() => setShowManifesto(true)}>
              Read Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto Overlay Modal */}
      {showManifesto && (
        <div className="manifesto-modal-overlay" onClick={() => setShowManifesto(false)}>
          <div className="manifesto-modal-content" onClick={e => e.stopPropagation()}>
            <button className="manifesto-modal-close" onClick={() => setShowManifesto(false)}>
              &times;
            </button>
            <span className="featured-badge">Manifesto</span>
            <h2 className="modal-title">Designing For The Next Decade: The 2026 Studio Visual Manifesto</h2>
            <p className="modal-intro">
              As AI commoditizes generic stock vectors, the premium commercial brands of the future will succeed on emotional model connection, gorgeous custom studio setups, and cinematic motion reels. This outlines our creative philosophy for the decade.
            </p>

            <div className="modal-sections">
              <div className="modal-section">
                <h3>01 / Light as Architecture</h3>
                <p>Lighting is the primary framework through which texture, volume, and material premium are rendered. We configure set strobes and color calibrations to command attention across print and digital pipelines.</p>
              </div>
              <div className="modal-section">
                <h3>02 / Meticulous Authenticity</h3>
                <p>In a landscape filled with synthetic imagery, authentic human expression, real lookbook styling, on-location atmosphere, and optical depth of field capture real consumer connection.</p>
              </div>
              <div className="modal-section">
                <h3>03 / Unified Motion Guidelines</h3>
                <p>Still imagery must be backed by seamless dynamic visual assets. Editorial fashion motion lookbooks and event summary reels bridge the gap between high cinema and commercial digital systems.</p>
              </div>
              <div className="modal-section">
                <h3>04 / Color Calibration Integrity</h3>
                <p>Bespoke color retouching pipelines are engineered to guarantee maximum chromatic accuracy across multiple screens, ensuring corporate color spaces remain absolutely uniform.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publications List */}
      <section className="section blog-list-section">
        <div className="blog-list-header">
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Insights
            </button>
            <button
              className={`filter-btn ${activeCategory === 'lighting' ? 'active' : ''}`}
              onClick={() => setActiveCategory('lighting')}
            >
              Studio Lighting
            </button>
            <button
              className={`filter-btn ${activeCategory === 'motion' ? 'active' : ''}`}
              onClick={() => setActiveCategory('motion')}
            >
              Fashion Motion
            </button>
            <button
              className={`filter-btn ${activeCategory === 'event' ? 'active' : ''}`}
              onClick={() => setActiveCategory('event')}
            >
              Events
            </button>
          </div>
        </div>

        <div className="blog-list">
          {filteredArticles.map(article => (
            <div key={article.id} className="blog-item" onClick={() => setSelectedArticle(article)}>
              <span className="blog-date">{article.date} &bull; {article.readTime}</span>
              <div className="blog-main">
                <span className="blog-category-tag">{article.categoryLabel}</span>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-desc">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Article Overlay Modal */}
      {selectedArticle && (
        <div className="manifesto-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="manifesto-modal-content" onClick={e => e.stopPropagation()}>
            <button className="manifesto-modal-close" onClick={() => setSelectedArticle(null)}>
              &times;
            </button>
            <span className="featured-badge">{selectedArticle.categoryLabel}</span>
            <span style={{ display: 'block', margin: '8px 0 16px 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 500 }}>
              {selectedArticle.date} &bull; {selectedArticle.readTime}
            </span>
            <h2 className="modal-title">{selectedArticle.title}</h2>
            <p className="modal-intro">{selectedArticle.desc}</p>

            <div style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {selectedArticle.category === 'lighting' && (
                <>
                  <p>
                    Product catalog photography is an exact camera science where set parameters must remain completely uniform. We configure multiple studio strobe arrays, including active key lights, fill arrays, and backlit backgrounds, to outline the product's edge profile cleanly.
                  </p>
                  <p>
                    We utilize honeycomb grid screens and softbox diffuser masks to focus shadows and highlights without creating harsh hot-spots. Meticulous color calibration is executed using master GretagMacbeth color checker charts to achieve pixel-perfect chromatic accuracy.
                  </p>
                </>
              )}
              {selectedArticle.category === 'motion' && (
                <>
                  <p>
                    Cinematic visual storytelling requires capturing garments in dynamic, active motion. We coordinate with modeling directors to establish exact tracking speeds, walking paces, and kinetic turns on set.
                  </p>
                  <p>
                    Using 35mm prime lenses wide open (e.g. f/1.8) and 120fps high-shutter captures, we isolate models from the background with gorgeous optical bokeh while keeping every fabric fold completely sharp. Post-production retiming curves are applied to sync movement beats perfectly with the audio track.
                  </p>
                </>
              )}
              {selectedArticle.category === 'event' && (
                <>
                  <p>
                    Corporate event photography requires shooting in dynamic, variable venue environments. We utilize fast telephoto prime lenses (like 85mm f/1.4 or 70-200mm f/2.8) to isolate key speakers on low-lit keynotes from the background noise.
                  </p>
                  <p>
                    We shoot strictly in dual-native ISO camera states to preserve high-contrast shadow detail without adding noise, and apply soft bounce flash diffusers off walls and ceilings to create balanced, natural ambient lighting across crowded venues.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="quick-cta">
        <div className="cta-box">
          <h2 className="cta-heading">Want to stay updated with our studio insights?</h2>
          <div className="newsletter-teaser">
            <Link href="/contact" className="cta-btn">
              Subscribe / Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
