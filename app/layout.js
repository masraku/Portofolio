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
    // url: 'https://your-domain.com', // Uncomment when deployed
    // images: ['/og-image.jpg'], // Prepare an OpenGraph image in public folder
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raku — Fullstack Web Developer',
    description: 'Building digital experiences that matter.',
    // images: ['/og-image.jpg'],
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
