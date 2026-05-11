import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import StoreProvider from "../providers/StoreProvider";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="ru">
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
          <Header/>
          <StoreProvider>
              <main className="flex-1">{children}</main>
          </StoreProvider>
          <Footer/>
      </body>
    </html>
  )
}
