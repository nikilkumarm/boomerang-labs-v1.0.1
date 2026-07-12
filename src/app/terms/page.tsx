import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Boomerang Labs',
  description: 'Terms of Service for Boomerang Labs.',
}

export default function TermsOfService() {
  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-slate-900 pt-32 pb-32 px-6 md:px-12 selection:bg-blue-600 selection:text-white">
      <div className="max-w-[800px] mx-auto bg-white p-10 md:p-16 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100">
        
        <div className="mb-16 border-b border-slate-100 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-medium">Last Updated: July 2026</p>
        </div>

        <div className="flex flex-col gap-8 text-slate-700 leading-relaxed">
          
          <p>
            These Terms of Service (&quot;Terms&quot;) establish the general framework and intentions regarding creative and media services provided by Boomerang Labs, Bengaluru, Karnataka (the &quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to you (the &quot;Client&quot;, &quot;you&quot;). By engaging with our services, you agree to be bound by these Terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Scope of Services</h2>
            <p className="mb-4">
              The Agency agrees to provide creative services to the Client. The specific details, deliverables, timelines, and costs for individual projects will be outlined in separate, mutually agreed-upon Statement of Work (SOW) documents attached to or referencing these Terms. General services may include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>Video Production and Digital Intermediate (DI)</li>
              <li>Brand Strategy and Identity Design</li>
              <li>Web Development and UI/UX Design</li>
              <li>Digital Media Production</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">1.1 Revision Policy</h3>
            <p className="mb-4">
              The Client is entitled to a maximum of <strong>2 revision rounds</strong> per deliverable. Additional revisions beyond the agreed limit will be charged separately.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">1.2 Approval Clause</h3>
            <p>
              Once final deliverables are approved by the Client, any future modifications will be treated as a new project or billed additionally.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Financial Arrangements</h2>
            <p className="mb-4">
              Payment structures, including deposits, milestone payments, and final balances, will be explicitly defined in each project&apos;s respective SOW.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-slate-600">
              <li><strong>Upfront Deposit:</strong> As a general policy, the Agency requires a <strong>35% upfront deposit</strong> before the commencement of any creative work.</li>
              <li><strong>Late Payment Penalty:</strong> Delayed payments beyond the agreed due date may result in project pause, delayed delivery, or an additional late fee of <strong>20%</strong>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property Rights & Licensing</h2>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">3.1 Final Deliverables</h3>
            <p className="mb-4">
              Upon receipt of full and final payment, the Agency grants the Client the rights to use the final, flattened creative deliverables for their intended commercial purposes.
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">3.2 Working Files</h3>
            <p className="mb-4">
              Unless explicitly negotiated and stated otherwise in an SOW, the Agency retains all rights and ownership to the raw files, source code, project files, and working drafts.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">3.3 Portfolio Rights</h3>
            <p className="mb-4">
              The Agency reserves the right to showcase the completed work in its portfolio, website, and promotional materials, unless a strict Non-Disclosure Agreement (NDA) supersedes this clause.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">3.4 Copyright Liability</h3>
            <p>
              The Agency shall not be responsible for copyright claims arising from music, footage, or assets provided directly by the Client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Client Responsibilities & Workflow</h2>
            <p className="mb-4">
              To ensure timely delivery, the Client agrees to provide necessary assets (logos, brand guidelines, content) and constructive, consolidated feedback within the timeframes agreed upon in the project timelines.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-slate-600">
              <li><strong>Communication:</strong> All official project communication and approvals must be conducted through email or mutually agreed communication platforms.</li>
              <li><strong>Delivery Timelines:</strong> Estimated delivery timelines are dependent upon timely receipt of all required materials and approvals from the Client.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both Parties agree to maintain the confidentiality of any proprietary information, trade secrets, or unreleased materials shared during the course of this partnership. This obligation extends beyond the termination of any agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Term, Termination & Refund Policy</h2>
            <p className="mb-4">
              Service agreements remain in effect until terminated by either party. Either Party may terminate an agreement by providing a <strong>30 Days</strong> written notice. Termination does not dissolve obligations regarding payments for work already completed or confidentiality.
            </p>
            <p>
              <strong>Cancellation & Refunds:</strong> Upfront deposits are <strong>non-refundable</strong> once work has commenced. If the Client terminates the project midway, payment shall still be due for completed stages of work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from this agreement shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
            </p>
          </div>

          <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about these Terms, please contact us at: <br />
              <Link href="mailto:hello@boomeranglabs.in" className="text-blue-600 font-medium hover:text-blue-700 underline mt-2 inline-block">hello@boomeranglabs.in</Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
