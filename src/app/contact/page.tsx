'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'fashion',
    details: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        projectType: 'fashion',
        details: ''
      })
    }, 4000)
  }

  return (
    <>
      <section className="section subpage-hero">
        <span className="section-tag">Book A Shoot</span>
        <h1 className="subpage-title">Let's coordinate a premium commercial visual session.</h1>
        <p className="subpage-lead">We operate high-fidelity studio set operations and on-location shoots globally, working with premium consumer brands and leading enterprise groups.</p>
      </section>

      <section className="section contact-main-section">
        <div className="contact-box">
          <div className="contact-left-col">
            <div>
              <h2 className="contact-heading">We capture your strategic creative directions perfectly.</h2>
              <p className="contact-p">
                Drop us a line to book a new model lookbook session, premium product photography catalog, or dynamic conference/event visual package.
              </p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="info-label">Direct Correspondence</span>
                <span className="info-val">hello@boomeranglabs.com</span>
                <span className="info-val">+44 (0) 20 7946 0958</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Studio Coordinates</span>
                <span className="info-val">London &bull; Shoreditch High St.</span>
                <span className="info-val">Munich &bull; Leopoldstra&szlig;e 22</span>
                <span className="info-val">Amsterdam &bull; Herengracht 405</span>
              </div>
            </div>
          </div>

          <div className="contact-right-col">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon">&bull;</div>
                <h3 className="success-title">Booking Details Received</h3>
                <p className="success-text">Thank you. Our studio coordinators will review your visual requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name / Agency</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Alexander Wright"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alexander@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project-type">Visual Campaign Scope</label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="custom-select"
                  >
                    <option value="fashion">Model & Fashion Lookbooks</option>
                    <option value="product">E-Commerce Product Photography</option>
                    <option value="event">Conferences & Corporate Events</option>
                    <option value="campaign">Full Custom Brand Campaign</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Set parameters & visual targets</label>
                  <textarea
                    id="details"
                    rows={4}
                    required
                    placeholder="Outline your models castings, studio sets, lighting variables, location scout parameters, and revenue target milestones (₹1.5Cr target etc.)..."
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
