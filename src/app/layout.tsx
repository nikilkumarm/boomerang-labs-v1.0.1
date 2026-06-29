import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat, Space_Grotesk, Comfortaa, Archivo_Black, Outfit } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenuBtn from '@/components/MobileMenuBtn'
import ScrollToTop from '@/components/ScrollToTop'
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
        <main className="container">
          {/* Top Navigation / Header */}
          <header className="header">
            <div className="header-left">
              <Link href="/" className="brand">
                <Image
                  src="/logo.webp"
                  alt="Boomerang Labs"
                  width={360}
                  height={120}
                  className="brand-logo"
                  priority
                />
              </Link>
            </div>

            <nav className="header-nav">
              <Link href="/company" className="nav-link">Company</Link>
              <Link href="/strategy" className="nav-link">Strategy</Link>
              <Link href="/portfolio" className="nav-link">Portfolio</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
            </nav>

            <div className="header-right">
              <a href="https://wa.me/918124887577?text=Hi%20Boomerang%20Labs,%20I'd%20love%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="currentColor" />
                </svg>
              </a>
              <Link href="/contact" className="contact-link-simple desktop-only">
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="contact-arrow-icon">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>

              <MobileMenuBtn />
            </div>
          </header>

          {children}

          <footer className="footer">
            <div className="footer-top">
              <div className="footer-logo">
                <Image
                  src="/logo.webp"
                  alt="Boomerang Labs"
                  width={110}
                  height={35}
                  className="brand-logo-footer"
                />
                <div className="footer-agency-info">
                  <p>Bengaluru, Karnataka, IN</p>
                  <a href="mailto:hello@boomeranglabs.in">hello@boomeranglabs.in</a>
                </div>
              </div>

              <nav className="footer-nav">
                <Link href="/company" className="footer-link">Company</Link>
                <Link href="/strategy" className="footer-link">Strategy</Link>
                <Link href="/portfolio" className="footer-link">Portfolio</Link>
                <Link href="/blog" className="footer-link">Blog</Link>
              </nav>

              <div className="footer-social">
                <a href="https://wa.me/918124887577?text=Hi%20Boomerang%20Labs,%20I'd%20love%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:hello@boomeranglabs.in" className="social-link" aria-label="Gmail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
              <p className="copyright">© 2026 Boomerang Labs. All Rights Reserved.</p>
              <div className="footer-legal">
                <Link href="/privacy" className="legal-link">Privacy</Link>
                <Link href="/terms" className="legal-link">Terms</Link>
              </div>
            </div>
          </footer>
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
}
