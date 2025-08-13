import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import TanstackProvider from './TanstackProvider';

const hanken_grotesk = Hanken_Grotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'OpenMind — Blogs, Stories & Ideas',
  description:
    'OpenMind is a space for curious minds. Explore blogs, stories, guides, and personal insights on technology, lifestyle, travel, health, creativity, and more — all in one place.',
  keywords: [
    'blogs',
    'stories',
    'lifestyle',
    'travel',
    'technology',
    'health',
    'personal growth',
    'creativity',
    'ideas',
  ],
  authors: [{ name: 'Alfrin Poulose', url: 'https://alfrin.vercel.app' }],
  openGraph: {
    title: 'OpenMind — Blogs, Stories & Ideas',
    description: 'Read blogs and stories across lifestyle, travel, tech, health, creativity, and more.',
    url: 'https://alfrin.vercel.app',
    siteName: 'OpenMind',
    images: [
      {
        url: 'https://alfrin.vercel.app/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'OpenMind Blog Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackProvider>
        <body className={`${hanken_grotesk.className} antialiased`}>{children}</body>
      </TanstackProvider>
    </html>
  );
}
