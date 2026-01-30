import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://masraku.dev'),
  title: 'Raku — Fullstack Web Developer',
  description:
    'Fullstack web developer specializing in building scalable, modern web applications with Next.js, React, and Node.js. Based in Indonesia.',
  keywords: ['Fullstack Developer', 'Web Developer', 'React', 'Next.js', 'Indonesia', 'Portfolio'],
  authors: [{ name: 'Raku' }],
  openGraph: {
    title: 'Raku — Fullstack Web Developer',
    description: 'Building digital experiences that matter.',
    type: 'website',
    locale: 'en_US',
    url: 'https://masraku.dev',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Raku — Fullstack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raku — Fullstack Web Developer',
    description: 'Building digital experiences that matter.',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white antialiased selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
