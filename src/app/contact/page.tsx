'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

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

          {/* Right Side: Form */}
          <div className="flex-[2] w-full lg:mt-24">
            <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase mb-12 block border-b border-slate-300 pb-4">
              Transmission
            </span>

            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 group">
                <label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="phone" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="social" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Social Media ID
                </label>
                <input
                  type="text"
                  id="social"
                  value={formData.social}
                  onChange={(e) => setFormData({...formData, social: e.target.value})}
                  required
                  placeholder="@yourhandle or URL"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="package" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Chosen Package
                </label>
                <input
                  type="text"
                  id="package"
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  required
                  placeholder="Which package?"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="service" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-500 outline-none transition-colors duration-300 rounded-none cursor-pointer appearance-none"
                >
                  <option value="" disabled className="text-slate-300">Select a service</option>
                  <option value="Photography" className="text-slate-900 text-lg">Photography</option>
                  <option value="Podcasts" className="text-slate-900 text-lg">Podcasts</option>
                  <option value="Other" className="text-slate-900 text-lg">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="project" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-focus-within:text-blue-600 transition-colors">
                  Project Details
                </label>
                <textarea
                  id="project"
                  rows={4}
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  required
                  placeholder="Describe your objectives"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-600 py-4 text-2xl md:text-4xl font-medium tracking-tight text-slate-900 outline-none placeholder:text-slate-300 transition-colors duration-300 resize-none rounded-none"
                />
              </div>

              <button type="submit" className="mt-8 flex items-center justify-between w-full bg-slate-900 text-white px-8 py-8 md:py-10 hover:bg-blue-600 transition-colors duration-300 group">
                <span className="text-2xl md:text-3xl font-medium tracking-tight">Submit Project</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-300" strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
