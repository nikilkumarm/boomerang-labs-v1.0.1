'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Aethera Fashion Editorial',
      category: 'fashion',
      categoryLabel: 'Fashion / Model Lookbook',
      image: '/images/img-b.webp',
      desc: 'Bespoke apparel lookbook, on-location fashion storytelling, and model lookbook systems for an active streetwear line.'
    },
    {
      id: 2,
      title: 'Vertex Commercial Catalog',
      category: 'product',
      categoryLabel: 'Product / E-Commerce',
      image: '/images/img-c.webp',
      desc: 'High-volume product photography with uniform studio set parameters, shadow casting, and master color matching.'
    },
    {
      id: 3,
      title: 'Aura Summit Corporate Event',
      category: 'event',
      categoryLabel: 'Corporate / Live Events',
      image: '/images/img-d.webp',
      desc: 'Dynamic live event coverage, speaker keynote headshots, conference visual packages, and high-energy summary reels.'
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <>
      <section className="section subpage-hero">
        <Breadcrumb currentPage="Portfolio" />
        <h1 className="subpage-title">Capturing commercial presence with light and art direction.</h1>
        <p className="subpage-lead">Explore our latest visual productions spanning high-fashion lookbooks, sharp e-commerce product catalogs, and corporate event productions.</p>
      </section>

      <section className="section portfolio-showcase">
        {/* Filtering Badges */}
        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Captures
          </button>
          <button
            className={`filter-btn ${filter === 'fashion' ? 'active' : ''}`}
            onClick={() => setFilter('fashion')}
          >
            Model & Fashion
          </button>
          <button
            className={`filter-btn ${filter === 'product' ? 'active' : ''}`}
            onClick={() => setFilter('product')}
          >
            Product Shoots
          </button>
          <button
            className={`filter-btn ${filter === 'event' ? 'active' : ''}`}
            onClick={() => setFilter('event')}
          >
            Conferences & Events
          </button>
        </div>

        {/* Portfolio Bento Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item animate-fade-in">
              <div className="portfolio-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="portfolio-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="portfolio-info">
                <span className="item-category">{project.categoryLabel}</span>
                <h3 className="item-title">{project.title}</h3>
                <p className="item-desc-short">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-cta">
        <div className="cta-box">
          <h2 className="cta-heading">Interested in booking a commercial session?</h2>
          <Link href="/contact" className="cta-btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
