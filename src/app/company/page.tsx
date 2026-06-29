'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TestimonialsMinimal } from '@/components/ui/minimal-testimonial'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Camera, Layers, Users, ShieldCheck } from 'lucide-react'
import styles from './company.module.css'

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return <span>{prefix}{count}{suffix}</span>;
}




export default function CompanyPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 relative z-10">

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl">
            <Breadcrumb currentPage="Company" />

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] text-[#0f172a] leading-[1.1] tracking-tight mb-8">
              <span className="block whitespace-nowrap font-medium text-[0.85em] mb-1">Your Trusted</span>
              <span className="block whitespace-nowrap font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Visual Partner.</span>
            </h1>

            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full p-2 pr-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mt-4 w-fit hover:bg-white transition-colors duration-300">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client avatar" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client avatar" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client avatar" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client avatar" />
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                Trusted by <span className="font-bold text-gray-900">50+ Creators.</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative mt-10 lg:mt-0 lg:pl-10">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white w-full aspect-[4/3] group">
              <Image
                src="/images/hero_team.png"
                alt="Studio team collaborating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>

            {/* Floating Action Button */}
            <button className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 z-20 flex items-center gap-3 group overflow-hidden">
              <span className="relative z-10">Let's Shoot Together</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {/* Button shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-0"></div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Minimal & Awesome */}
      <section className="py-32 max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-blue-600"></div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Our Studio</span>
            </div>

            <h2 className="text-[3.5rem] leading-[1.05] font-medium text-gray-900 tracking-tight mb-8">
              Turning <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Vision.</span><br />
              Into <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Capture.</span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              With years of hands-on experience in fashion lookbooks, editorial campaigns, and high-volume e-commerce catalogs, we empower brands to tell their story seamlessly, delivering high-fidelity assets built to last.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8 mt-4">
              {/* Premium Button */}
              <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-b from-gray-900 to-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.3)] border border-gray-800 hover:border-blue-500/50 overflow-hidden">
                <span className="relative z-10">Explore Our Process</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {/* Shimmer effect inside button */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer z-0"></div>
              </button>

              {/* Premium Rating Badge */}
              <div className="flex items-center gap-6">
                {/* Vertical Divider */}
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

                <div className="flex flex-col">
                  <div className="flex gap-[3px] mb-1.5 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-900">4.9/5</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Average Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container - Clean & Minimal */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto rounded-[2rem] overflow-hidden group">
              <Image
                src="/images/about_guy.png"
                alt="Professional photographer"
                fill
                className="object-cover object-center bg-gray-100 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none"></div>

              {/* Single Minimal Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg flex justify-between items-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Expertise</span>
                  <span className="text-sm font-semibold text-gray-900">High-Volume Commercial</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Side */}
          <div className="max-w-xl lg:pr-8">
            <span className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600 tracking-wide uppercase mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
              Built on <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Precision,</span><br />
              Driven by <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Aesthetics!</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We empower brands to tell their story seamlessly, delivering high-fidelity assets built to last from pre-production to final retouching.
            </p>
          </div>

          {/* Right Side - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop stopColor="#2563eb" offset="0%" />
                  <stop stopColor="#06b6d4" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
            {[
              {
                icon: <Camera strokeWidth={1.5} className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />,
                title: 'Tailored Shoots',
                content: "We don't believe in one-size-fits-all. Every shoot we produce is customized to your unique brand goals."
              },
              {
                icon: <Layers strokeWidth={1.5} className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />,
                title: 'High-Volume Capacity',
                content: 'Our studio infrastructure is designed to handle e-commerce catalogs seamlessly without compromising fidelity.'
              },
              {
                icon: <Users strokeWidth={1.5} className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />,
                title: 'Collaborative Process',
                content: 'We put our clients at the heart of everything we do, ensuring transparent communication.'
              },
              {
                icon: <ShieldCheck strokeWidth={1.5} className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />,
                title: 'Asset Security',
                content: 'Your visual assets are safe with us. We adhere to the highest standards of long-term archiving.'
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white border border-gray-100 rounded-[2.5rem] p-2.5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col min-h-[240px] cursor-pointer hover:-translate-y-1">

                {/* Top Section: Title & Icon */}
                <div className="px-4 pt-3 pb-3 flex items-start gap-3">
                  <div className="mt-0.5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight tracking-tight">{item.title}</h3>
                </div>

                {/* Inner Dark Section */}
                <div className="bg-gradient-to-br from-[#2a3a54] via-[#162133] to-[#0a101d] rounded-[2rem] p-6 flex-1 flex flex-col relative overflow-hidden transition-all duration-500 mt-1 border border-white/5">
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <p className="text-gray-300 leading-relaxed text-[13px] md:text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsMinimal />



      {/* Approval Logos Section */}
      <section className={styles.approvalSection}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            Official <span className="font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Accreditations</span>
          </h2>
        </div>
        <div className={styles.approvalLogos}>
          <div className={styles.approvalLogoWrap}>
            <Image
              src="/images/bl-approvel-logo.webp"
              alt="Boomerang Labs Approval Badge"
              width={400}
              height={250}
              className={styles.approvalLogo}
            />
          </div>
          <div className={styles.approvalLogoWrap}>
            <Image
              src="/images/bl-approvel-logo-2.webp"
              alt="Boomerang Labs Approval Badge 2"
              width={400}
              height={250}
              className={styles.approvalLogo}
              style={{ transform: 'scale(0.85)' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
