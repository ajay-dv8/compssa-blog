'use client';
import '../../style/globals.css'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
//import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Banner from '@/components/banner'
import Footer from '@/components/footer'


//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Compssa | Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto'>
        <Header />
        {!['/contact', '/about'].includes(pathname) && <Banner />}
        {children}
        <Footer/>
      </body>
    </html>
  )
}
