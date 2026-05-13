import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import QueryProvider from "../providers/QueryProvider";
import StoreProvider from "../providers/StoreProvider";
import React from "react";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Profil Doors — салон межкомнатных дверей в Гродно',
  description:
    'Официальный салон Profil Doors в Гродно: подбор дверей, монтаж и гарантия.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className={`${manrope.className} flex min-h-screen flex-col antialiased`}>
          <Header/>
          <StoreProvider>
            <QueryProvider>
              <main className="flex-1">{children}</main>
            </QueryProvider>
          </StoreProvider>
          <Footer/>
      </body>
    </html>
  )
}
