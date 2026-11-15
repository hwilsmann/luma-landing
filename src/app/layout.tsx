import type { Metadata } from 'next'

import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luma | Learn Without Limits',
  description:
    'Discover courses, develop new skills, and learn without limits with Luma.',
  icons: {
    icon: [
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/images/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: '/images/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="text-text-muted font-sans">{children}</body>
    </html>
  )
}
