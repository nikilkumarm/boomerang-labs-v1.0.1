'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

type Plan = {
  name: string;
  price: string;
  worth: string;
  idealFor?: string;
  features: string[];
  badge: string;
  cta: string;
  isPopular?: boolean;
}

const creatorsPlans: Plan[] = [
  {
    name: 'Creator Starter',
    price: '₹7,999',
    worth: '₹10,999',
    idealFor: 'Creators starting their content journey.',
    features: [
      '8 Reels per month',
      'Professional captions',
      'Basic cuts',
      'Sound effects',
      'Background music sync',
      'Aspect ratio optimization',
      'Export in 1080P',
      '2 revisions',
      'Delivery within 5-7 days',
      'WhatsApp support',
      'Organized project management'
    ],
    badge: 'Starter',
    cta: 'Get Started'
  },
  {
    name: 'Creator Growth',
    price: '₹15,999',
    worth: '₹19,999',
    idealFor: 'Creators scaling audience growth and engagement.',
    features: [
      '8 Premium Reels',
      'Motion captions',
      'Advanced transitions',
      'Colour correction',
      'Sound design',
      'Basic motion graphics',
      'Brand consistency editing',
      'Thumbnail suggestions',
      'Hook optimization',
      'Platform optimization',
      '4 revisions',
      'Priority delivery',
      'Dedicated editor support'
    ],
    badge: 'Most Popular',
    cta: 'Scale My Content',
    isPopular: true
  },
  {
    name: 'Creator Elite',
    price: '₹23,999',
    worth: '₹28,999',
    idealFor: 'Premium creators building a serious personal brand.',
    features: [
      '8 Cinematic Reels',
      'Premium transitions',
      'Motion typography',
      'Advanced motion graphics',
      'Professional colour grading',
      'Premium sound design',
      'Viral hook optimization',
      'Storytelling edit structure',
      'Thumbnail consultation',
      'Platform-specific optimization',
      'Unlimited minor revisions',
      'Fast turnaround',
      'Dedicated editor',
      'Priority support'
    ],
    badge: 'Best Value',
    cta: 'Go Premium'
  }
]

const brandsPlans: Plan[] = [
  {
    name: 'Brand Starter',
    price: '₹9,999',
    worth: '₹14,999',
    features: [
      '8 Brand Reels',
      'Subtitles',
      'Logo integration',
      'Brand color implementation',
      'Brand typography implementation',
      '8 Posters/Carousel designs',
      'Basic ad creatives',
      'Product showcase edits',
      '2 revisions',
      'Standard delivery'
    ],
    badge: 'Starter',
    cta: 'Start Building'
  },
  {
    name: 'Brand Growth',
    price: '₹24,999',
    worth: '₹29,999',
    features: [
      '15 Videos',
      'Product-focused editing',
      'Ad creatives',
      'Campaign support',
      '15 Posts/Carousel designs',
      'Motion graphics',
      'Brand guideline implementation',
      'Marketing optimization',
      'Multiple format exports',
      'Priority delivery',
      '4 revisions',
      'Dedicated support'
    ],
    badge: 'Most Popular',
    cta: 'Grow My Brand',
    isPopular: true
  },
  {
    name: 'Brand Domination',
    price: '₹34,999',
    worth: '₹39,999',
    features: [
      '20 Premium Videos',
      'Campaign editing',
      'Premium motion graphics',
      'Dedicated editor',
      '20 Posts/Carousel designs',
      'Product launch creatives',
      'Paid ads creatives',
      'Advanced branding assets',
      'Multiple campaign support',
      'Fast delivery pipeline',
      'Unlimited minor revisions',
      'Monthly strategy call',
      'Priority support'
    ],
    badge: 'For Teams',
    cta: 'Scale Aggressively'
  }
]

const youtubePlans: Plan[] = [
  {
    name: 'YouTube Starter',
    price: '₹4,999',
    worth: '₹8,999',
    features: [
      'Videos up to 10 minutes',
      'Basic cuts',
      'Audio balancing',
      'Intro and outro insertion',
      'Background music',
      'Basic colour correction',
      '1080P export',
      '2 revisions'
    ],
    badge: 'Starter',
    cta: 'Start Editing'
  },
  {
    name: 'YouTube Pro',
    price: '₹7,999',
    worth: '₹10,999',
    features: [
      'Videos between 10-20 minutes',
      'Advanced storytelling edits',
      'Multi-camera editing',
      'Audio cleanup',
      'Motion titles',
      'Lower thirds',
      'Colour correction',
      'B-roll integration',
      'Platform optimization',
      '4 revisions',
      'Priority support'
    ],
    badge: 'Most Popular',
    cta: 'Upgrade My Channel',
    isPopular: true
  },
  {
    name: 'YouTube Cinema',
    price: '₹11,999',
    worth: '₹24,999',
    features: [
      'Videos between 20-30 minutes',
      'Documentary storytelling',
      'Advanced motion graphics',
      'Premium sound design',
      'Colour grading',
      'Dynamic pacing',
      'Cinematic transitions',
      'Premium title sequences',
      'Dedicated editor',
      'Priority delivery',
      'Unlimited minor revisions',
      'Premium support'
    ],
    badge: 'Premium',
    cta: 'Create Cinematic Content'
  }
]

const faqs = [
  { question: "How many revisions are included?", answer: "The number of revisions depends on your selected plan. Starter plans include 2 revisions, Growth/Pro plans include 4, and our top-tier plans offer unlimited minor revisions to ensure perfection." },
  { question: "What is your average turnaround time?", answer: "Standard delivery is typically 5-7 days. Growth and Premium tiers include priority delivery pipelines, bringing turnaround times down to 2-4 days depending on project complexity." },
  { question: "Do you provide raw project files?", answer: "Project files are not included by default but can be handed over upon request for an additional fee depending on the project scope." },
  { question: "Can I upgrade plans later?", answer: "Absolutely. You can upgrade, downgrade, or pause your subscription at any time based on your content needs for that month." },
  { question: "Do you support urgent projects?", answer: "Yes, we offer rush delivery (24-48 hours) for an additional fee. Dedicated editors on our highest tiers can also accommodate urgent turnaround requests." },
  { question: "Which editing software do you use?", answer: "We use industry-standard tools: Adobe Premiere Pro for cutting, After Effects for motion graphics, and DaVinci Resolve for professional color grading." },
  { question: "Do you provide subtitles and captions?", answer: "Yes! All plans include professional, engaging captions optimized for retention, with motion typography available on our Growth and Elite tiers." },
  { question: "Can you work with brand guidelines?", answer: "Definitely. For the Companies & Brands plans, we ensure strict adherence to your brand colors, typography, logos, and overall visual identity." }
]

type TabId = 'creators' | 'brands' | 'youtube'

export default function VideoEditingPricing({ hideHeader = false, hideCTA = false }: { hideHeader?: boolean, hideCTA?: boolean } = {}) {
  const [activeTab, setActiveTab] = useState<TabId>('creators')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const getActivePlans = () => {
    if (activeTab === 'creators') return creatorsPlans;
    if (activeTab === 'brands') return brandsPlans;
    return youtubePlans;
  }

  const getSubtitle = () => {
    if (activeTab === 'creators') return 'For creators, influencers, photographers, filmmakers and personal brands.';
    if (activeTab === 'brands') return 'For startups, brands and companies looking to scale marketing content.';
    return 'For podcasters, educators, documentary creators and storytellers.';
  }

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
              Invest in content that scales your authority. Select a collection tailored to your production volume.
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 overflow-x-auto max-w-full">
            {(['creators', 'brands', 'youtube'] as TabId[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === 'creators' && 'Creators'}
                  {tab === 'brands' && 'Companies & Brands'}
                  {tab === 'youtube' && 'YouTube (Podcast & Doc)'}
                </span>
              </button>
            ))}
          </div>
          
          <motion.p 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-slate-500 font-medium h-6"
          >
            {getSubtitle()}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="wait">
            {getActivePlans().map((plan, idx) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                
                {plan.idealFor && (
                  <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{plan.idealFor}</p>
                )}
                {!plan.idealFor && <div className="min-h-[40px] mb-6"></div>}

                <div className="mb-8">
                  <p className="text-sm text-slate-500 font-medium mb-1">Starting from</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                    <span className="text-slate-500 font-medium">/mo</span>
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
                  <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Included Features</p>
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
          </AnimatePresence>
        </div>

        {/* Comparison Table */}
        <div className="mb-32 max-w-5xl mx-auto overflow-x-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">Compare Plans</h3>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="py-4 px-6 font-bold text-slate-900 border-b border-slate-200 w-1/4">Features</th>
                <th className="py-4 px-6 font-bold text-slate-900 border-b border-slate-200 text-center w-1/4">Starter</th>
                <th className="py-4 px-6 font-bold text-slate-900 border-b border-slate-200 text-center w-1/4">Growth / Pro</th>
                <th className="py-4 px-6 font-bold text-blue-600 border-b-2 border-blue-600 text-center w-1/4">Premium / Elite</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'Output Volume', s: '8-10 Videos', g: '15-20 Videos', p: '20+ Videos' },
                { name: 'Motion Graphics', s: 'Basic', g: 'Advanced', p: 'Premium 2D/3D' },
                { name: 'Revisions', s: '2 Rounds', g: '4 Rounds', p: 'Unlimited Minor' },
                { name: 'Delivery Speed', s: 'Standard (5-7 days)', g: 'Priority (3-5 days)', p: 'Fast Track (24-48h)' },
                { name: 'Dedicated Editor', s: '-', g: '✓', p: '✓ (Priority)' },
                { name: 'Color Grading', s: 'Basic Correction', g: 'Professional', p: 'Broadcast Cinema Grade' },
                { name: 'Strategy Call', s: '-', g: '-', p: 'Monthly' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700 border-b border-slate-100">{row.name}</td>
                  <td className="py-4 px-6 text-slate-500 text-center border-b border-slate-100">{row.s}</td>
                  <td className="py-4 px-6 text-slate-500 text-center border-b border-slate-100">{row.g}</td>
                  <td className="py-4 px-6 font-semibold text-slate-900 text-center border-b border-slate-100">{row.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-On Services */}
        <div className="max-w-5xl mx-auto mb-32">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">
            Add-On <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text py-1 px-2 pr-2">Services.</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Extra Reel', price: '₹1,999' },
              { name: 'Extra YouTube Video', price: '₹3,499' },
              { name: 'Thumbnail Design', price: '₹499' },
              { name: 'Rush Delivery (24 Hours)', price: '+30%' },
              { name: 'Podcast Edit', price: '₹2,999 onwards' },
              { name: 'Shorts from Long-form', price: '₹499 each' }
            ].map((addon, i) => (
              <div key={i} className="group relative bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 rounded-[1.5rem] flex flex-col justify-between hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1.5rem] pointer-events-none"></div>
                <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mb-3 relative z-10">{addon.name}</span>
                <span className="text-2xl font-extrabold text-slate-900 relative z-10">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-32 max-w-4xl mx-auto relative">
          <svg width="0" height="0" className="absolute">
            <linearGradient id="trust-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#2563eb" offset="0%" />
              <stop stopColor="#06b6d4" offset="100%" />
            </linearGradient>
          </svg>
          {[
            'Dedicated Editor',
            'Fast Delivery',
            'Unlimited Support',
            'Premium Quality',
            'Industry Standard Workflow',
            'Broadcast Quality Export'
          ].map((trust, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" stroke="url(#trust-grad)" />
              <span className="font-semibold text-slate-700 text-sm">{trust}</span>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-32">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h3>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {!hideCTA && (
          <div className="w-full pt-20 md:pt-32 pb-10 border-t border-slate-200 mt-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-medium tracking-tighter leading-tight mb-8 max-w-none text-slate-900 whitespace-nowrap">
              Ready to <span className="italic font-serif bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text pr-2">Scale Your Content?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mb-12">
              Let's create videos that actually move your brand forward.
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
