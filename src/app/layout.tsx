import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes To Self',
  description: 'A simple blog to keep track of my thoughts and ideas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
