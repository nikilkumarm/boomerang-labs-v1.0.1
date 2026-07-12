'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

type Plan = {
  name: string;
  price: string;
  worth: string;
  idealFor?: string;
  features: string[];
  badge: string | null;
  cta: string;
  isPopular?: boolean;
}

const plans = [
  {
    name: 'Basic',
    price: '₹19,999',
    worth: '₹29,999',
    features: [
      '2Hr Studio Session',
      '2 Camera Setup',
      'Professional Lighting & Mics',
      'Audio Cleanup & Sync',
      'Intro/Outro Integration',
      'Thumbnail Design',
      '3 Vertical Clips',
      '1 Revision'
    ],
    badge: null,
    cta: 'Book Basic'
  },
  {
    name: 'Premium',
    price: '₹39,999',
    worth: '₹54,999',
    features: [
      '3Hr Recording Session',
      '3 Camera Cinematic Setup',
      'Premium Audio Production',
      'Multi-Camera Editing',
      'Professional Colour Grading',
      'Motion Graphics Package',
      'Thumbnail Design',
      '8 Social Media Clips',
      'Priority Delivery'
    ],
    badge: 'Most Popular',
    cta: 'Book Premium',
    isPopular: true
  },
  {
    name: 'VIP Bundle',
    price: '₹69,999',
    worth: '₹99,999',
    features: [
      '4Hr Production Session',
      '3-4 Cinema Camera Setup',
      'Dedicated Producer & Editor',
      'Premium Sound Mastering',
      'Cinematic Colour Grading',
      'Custom Intro Package',
      'YouTube & Spotify Optimization',
      '15 Short-form Clips',
      'Priority Turnaround'
    ],
    badge: 'Ultimate Value',
    cta: 'Book VIP Bundle'
  }
]

export default function PodcastPricing({ hideHeader = false, hideCTA = false }: { hideHeader?: boolean, hideCTA?: boolean } = {}) {
  return (
    <div className={`w-full bg-[#FAFAFA] text-slate-900 ${hideHeader ? 'pt-12' : 'pt-32'} pb-16 px-6 md:px-12 selection:bg-blue-600 selection:text-white`}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight mb-6 text-slate-900 whitespace-nowrap">
              Tailored <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 pr-2">Packages.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12">
              Invest in audio that defines your brand. Select a package tailored to your broadcasting needs.
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative flex flex-col bg-white rounded-[24px] p-8 md:p-10 transition-all duration-300 ${
                plan.isPopular 
                  ? 'shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] ring-2 ring-blue-600 lg:scale-[1.02] z-10' 
                  : 'shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              {!plan.isPopular && (
                <span className="inline-block w-fit bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full mb-6">
                  {plan.badge}
                </span>
              )}
              {plan.isPopular && <div className="h-4 mb-6"></div>}

              <h3 className="text-2xl font-bold text-slate-900 mb-8">{plan.name}</h3>

              <div className="mb-8">
                <p className="text-sm text-slate-500 font-medium mb-1">Starting from</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                </div>
                <p className="text-sm text-slate-400 font-medium line-through mt-2 decoration-slate-300">Worth {plan.worth}</p>
              </div>

              <Link href="/contact" className={`w-full py-4 px-6 rounded-full font-bold text-sm text-center transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}>
                {plan.cta}
              </Link>

              <div className="w-full h-px bg-slate-100 my-8"></div>

              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">What's Included</p>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 max-w-4xl mx-auto relative">
          <svg width="0" height="0" className="absolute">
            <linearGradient id="photo-trust-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#2563eb" offset="0%" />
              <stop stopColor="#06b6d4" offset="100%" />
            </linearGradient>
          </svg>
          {[
            'High-Fidelity Audio',
            'Multi-Cam Setup',
            'Audio Synchronization',
            'Fast Turnaround',
            'Custom Intro/Outro',
            'Broadcast Quality'
          ].map((trust, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" stroke="url(#photo-trust-grad)" />
              <span className="font-semibold text-slate-700 text-sm">{trust}</span>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        {!hideCTA && (
          <div className="w-full pt-20 md:pt-32 pb-10 border-t border-slate-200 mt-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-medium tracking-tighter leading-tight mb-8 max-w-none text-slate-900 whitespace-nowrap">
              Ready to <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text pr-2">Broadcast?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mb-12">
              Whether you're starting season one or revamping season ten, let's make it sound incredible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 relative z-10 items-center justify-center">
              <Link href="/contact" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:border-blue-600 transition-colors group">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 -ml-2">Book a Session</span> <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-blue-600 transition-colors" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
