import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat, Space_Grotesk, Comfortaa, Archivo_Black, Outfit } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenuBtn from '@/components/MobileMenuBtn'
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Boomerang Studios — Commercial Photography',
  description: 'We shoot premium fashion lookbooks, high-volume e-commerce products, and corporate events globally. Boomerang Studios is dedicated to high-fidelity visual production.',
  keywords: ['commercial photography', 'fashion lookbook', 'model shoot', 'product photography', 'event photography', 'Boomerang Studios'],
  authors: [{ name: 'Boomerang Studios' }],
  openGraph: {
    title: 'Boomerang Studios — Commercial Photography',
    description: 'We shoot premium fashion lookbooks, high-volume e-commerce products, and corporate events globally.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${comfortaa.variable} ${archivoBlack.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main className="w-full">
          {children}

          <footer className="w-full bg-[#F8F9FB] pt-20 px-6 md:px-12 xl:px-24 relative z-50">
            <div className="max-w-[1440px] mx-auto bg-white rounded-t-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-l border-r border-gray-100 p-10 md:p-16 relative overflow-hidden">

              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#2E6BFF]/20 to-transparent rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none z-0" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#06b6d4]/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0" />



              {/* Middle Section: Links & Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 py-12 border-t border-gray-100 relative z-10">
                {/* Left: Logo & Info */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  <Image src="/logo.webp" alt="Boomerang Labs" width={240} height={80} className="w-auto h-[80px] md:h-[100px] object-contain object-left" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[13px] text-gray-500 font-medium">Bengaluru, Karnataka, IN</p>
                    <a href="mailto:hello@boomeranglabs.in" className="text-[15px] font-bold text-[#08152E] hover:text-[#2E6BFF] transition-colors">hello@boomeranglabs.in</a>
                  </div>
                </div>

                {/* Center: Nav Links */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  <h3 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] uppercase">Explore</h3>
                  <nav className="flex flex-col gap-4">
                    <Link href="/company" className="text-[15px] font-medium text-gray-600 hover:text-[#2E6BFF] transition-colors">Company</Link>
                    <Link href="/strategy" className="text-[15px] font-medium text-gray-600 hover:text-[#2E6BFF] transition-colors">Strategy</Link>
                    <Link href="/photography" className="text-[15px] font-medium text-gray-600 hover:text-[#2E6BFF] transition-colors">Photography</Link>
                    <Link href="/production" className="text-[15px] font-medium text-gray-600 hover:text-[#2E6BFF] transition-colors">Production</Link>
                    <Link href="/contact" className="text-[15px] font-medium text-gray-600 hover:text-[#2E6BFF] transition-colors">Contact</Link>
                  </nav>
                </div>

                {/* Right: Social */}
                <div className="md:col-span-3 flex flex-col gap-6 md:items-end">
                  <h3 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] uppercase">Connect</h3>
                  <div className="flex items-center gap-4">
                    <a href="https://wa.me/918124887577" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] rounded-full bg-[#F8F9FB] border border-gray-200 flex items-center justify-center hover:border-[#2E6BFF] hover:text-[#2E6BFF] text-gray-600 transition-all hover:-translate-y-1 shadow-sm" aria-label="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                    </a>
                    <a href="mailto:hello@boomeranglabs.in" className="w-[48px] h-[48px] rounded-full bg-[#F8F9FB] border border-gray-200 flex items-center justify-center hover:border-[#2E6BFF] hover:text-[#2E6BFF] text-gray-600 transition-all hover:-translate-y-1 shadow-sm" aria-label="Gmail">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                    </a>
                    <a href="https://instagram.com/boomerang.in_" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] rounded-full bg-[#F8F9FB] border border-gray-200 flex items-center justify-center hover:border-[#2E6BFF] hover:text-[#2E6BFF] text-gray-600 transition-all hover:-translate-y-1 shadow-sm" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Copyright & Legal */}
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100 relative z-10">
                <p className="text-[13px] text-gray-400 font-medium">© 2026 Boomerang Labs. All Rights Reserved.</p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors">Terms of Service</Link>
                </div>
              </div>

            </div>
          </footer>
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
}
