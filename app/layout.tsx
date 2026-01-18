import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { Rajdhani, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import StructuredData from './components/StructuredData';

const rajdhani = Rajdhani({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ashley Van Steenacker | Creative Technologist',
  description: 'Creative Technologist - Designing Things That Glow',
  authors: [{ name: 'Ashley Van Steenacker' }],
  keywords: ['Creative Technologist', 'Developer', 'Engineer', 'Designer'],

  openGraph: {
    title: 'Ashley Van Steenacker | Creative Technologist',
    description: 'Creative Technologist - Designing Things That Glow',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ashley Van Steenacker | Creative Technologist',
    description: 'Creative Technologist - Designing Things That Glow',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="antialiased">
        <StructuredData />
        {/* Font Awesome (CSS) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="beforeInteractive"
        />

        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
