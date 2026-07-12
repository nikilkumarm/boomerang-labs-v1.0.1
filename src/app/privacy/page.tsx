import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Boomerang Labs',
  description: 'Privacy Policy for Boomerang Labs.',
}

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-slate-900 pt-32 pb-32 px-6 md:px-12 selection:bg-blue-600 selection:text-white">
      <div className="max-w-[800px] mx-auto bg-white p-10 md:p-16 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100">
        
        <div className="mb-16 border-b border-slate-100 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last Updated: July 2026</p>
        </div>

        <div className="flex flex-col gap-8 text-slate-700 leading-relaxed">
          
          <p>
            At Boomerang Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our creative and media services.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company details provided via contact forms or project briefs.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have directly viewed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Facilitate project communication and deliver creative services.</li>
              <li>Respond to customer service requests and support needs.</li>
              <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Confidentiality & Data Security</h2>
            <p className="mb-4">
              As outlined in our standard Memorandum of Understanding (MoU), both parties agree to maintain the strict confidentiality of any proprietary information, trade secrets, or unreleased materials shared during the course of our partnership. 
            </p>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information and project assets. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Websites</h2>
            <p>
              The website may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave our website, any information you provide to these third parties is not covered by this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Updates to This Policy</h2>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last Updated&quot; date of this Privacy Policy.
            </p>
          </div>

          <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions or comments about this Privacy Policy, please contact us at: <br />
              <Link href="mailto:hello@boomeranglabs.in" className="text-blue-600 font-medium hover:text-blue-700 underline mt-2 inline-block">hello@boomeranglabs.in</Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
