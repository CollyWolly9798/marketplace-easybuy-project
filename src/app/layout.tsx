import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import StoreProvider from "@/app/StoreProvider";
import "@/styles/globals.scss";
import AppInit from "@/features/auth/AppInit";

import { Inter, DM_Sans, Zen_Dots } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm',
})

const zenDots = Zen_Dots({
    subsets: ['latin'],
    weight: '400', // Zen Dots має лише 400
    variable: '--font-zen',
})

export const metadata: Metadata = {
  title: "Easybuy",
  description: "marketplace",
};

export default function RootLayout({
children,

}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${zenDots.variable}`}>
      <StoreProvider>
        <AppInit />
        <div className="layout">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </StoreProvider>
      </body>
      </html>
  );
}
