'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RotateCcw } from 'lucide-react'

export default function EditorialContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    social: '',
    service: '',
    package: '',
    project: ''
  })

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      social: '',
      service: '',
      package: '',
      project: ''
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSocial Media: ${formData.social}\nService: ${formData.service}\nPackage: ${formData.package}\n\nProject Details:\n${formData.project}`)
    
    window.location.href = `mailto:hello@boomeranglabs.in?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white">

      {/* 1. EDITORIAL HERO */}
      <section className="w-full pt-40 pb-20 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-slate-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
            Initiate Project
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] text-slate-900 mb-8 lg:mb-0">
            Let's <br />
            <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2">Collaborate.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-sm lg:text-right pb-4"
        >
          <p className="text-slate-600 font-medium leading-relaxed">
            Reach out to discuss your upcoming campaign, project requirements, or strategic vision. Our lead producers will review your transmission.
          </p>
        </motion.div>
      </section>

      {/* 2. THE FORM (MAGAZINE LAYOUT) */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 flex flex-col gap-32">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Left Side: Contact Details */}
          <div className="flex-1 w-full lg:max-w-md">
            <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase mb-12 block border-b border-slate-300 pb-4">
              Headquarters
            </span>
            <div className="flex flex-col gap-12">
              <div>
                <span className="text-4xl font-serif italic text-slate-300 block mb-4">01</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Bengaluru, Karnataka,<br />
                  India
                </p>
              </div>
              <div>
                <span className="text-4xl font-serif italic text-slate-300 block mb-4">02</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 mb-2">Direct Line</h3>
                <a href="tel:+918050645364" className="block text-slate-600 leading-relaxed font-medium hover:text-blue-600 transition-colors cursor-pointer">
                  +91 80506 45364
                </a>
              </div>
              <div>
                <span className="text-4xl font-serif italic text-slate-300 block mb-4">03</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 mb-2">Electronic</h3>
                <a href="mailto:hello@boomeranglabs.in" className="block text-slate-600 leading-relaxed font-medium hover:text-blue-600 transition-colors cursor-pointer">
                  hello@boomeranglabs.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Top-Aligned with Headquarters) */}
          <div className="flex-[2] w-full">
            <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase mb-12 block border-b border-slate-300 pb-4">
              Transmission
            </span>

            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Number */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="phone" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                  />
                </div>

                {/* Social Media ID */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="social" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Social Media ID
                  </label>
                  <input
                    type="text"
                    id="social"
                    value={formData.social}
                    onChange={(e) => setFormData({...formData, social: e.target.value})}
                    required
                    placeholder="@yourhandle or URL"
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Interested In */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="service" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none transition-colors duration-300 rounded-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">Select a service</option>
                    <option value="Photography" className="text-slate-900 text-base">Fashion & Commercial Photography</option>
                    <option value="Podcasts" className="text-slate-900 text-base">Podcasts Production</option>
                    <option value="Creative Ads" className="text-slate-900 text-base">Creative Ads & Campaigns</option>
                    <option value="Other" className="text-slate-900 text-base">Other / Custom Inquiries</option>
                  </select>
                </div>

                {/* Chosen Package Dropdown */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="package" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                    Chosen Package
                  </label>
                  <select
                    id="package"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                    required
                    className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none transition-colors duration-300 rounded-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">Select a package</option>
                    <optgroup label="Photography Packages" className="font-bold text-slate-900">
                      <option value="Photography - Basic (₹7,999)" className="font-normal text-slate-800 text-base">Basic Plan — ₹7,999 (2 Hrs, 20 Edits)</option>
                      <option value="Photography - Premium (₹13,999)" className="font-normal text-slate-800 text-base">Premium Plan — ₹13,999 (3 Hrs, 40 Edits, Popular)</option>
                      <option value="Photography - VIP Bundle (₹16,999)" className="font-normal text-slate-800 text-base">VIP Bundle — ₹16,999 (4 Hrs, 60 Edits, Creative Dir.)</option>
                    </optgroup>
                    <optgroup label="Podcast Packages" className="font-bold text-slate-900">
                      <option value="Podcast - Basic (₹19,999)" className="font-normal text-slate-800 text-base">Basic Podcast — ₹19,999 (2 Cams, Audio Cleanup)</option>
                      <option value="Podcast - Premium (₹39,999)" className="font-normal text-slate-800 text-base">Premium Podcast — ₹39,999 (3 Cams, 8 Clips, Popular)</option>
                      <option value="Podcast - VIP Bundle (₹69,999)" className="font-normal text-slate-800 text-base">VIP Podcast Bundle — ₹69,999 (Full Studio Suite)</option>
                    </optgroup>
                    <optgroup label="Creative Ads & Custom" className="font-bold text-slate-900">
                      <option value="Creative Ads Campaign" className="font-normal text-slate-800 text-base">Creative Ads / Commercial Campaign</option>
                      <option value="Custom / Enterprise Plan" className="font-normal text-slate-800 text-base">Custom Scope / Enterprise Plan</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2 group">
                <label htmlFor="project" className="text-xs font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Project Details
                </label>
                <textarea
                  id="project"
                  rows={2}
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  required
                  placeholder="Describe your objectives, timeline, or special requirements"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-2.5 text-lg md:text-xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 resize-none rounded-none"
                />
              </div>

              {/* Action Buttons: Clear & Submit (Equal 50/50 Size, Red & Green) */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Clear Button (Red) */}
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-4 rounded-none transition-all duration-300 group shadow-md hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" strokeWidth={2.2} />
                  <span className="text-base md:text-lg font-bold tracking-tight">Clear</span>
                </button>

                {/* Submit Button (Green) */}
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-3 bg-[#1DAF5A] hover:bg-[#158C46] text-white px-6 py-4 rounded-none transition-all duration-300 group shadow-md hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold tracking-tight">Submit Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.2} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
