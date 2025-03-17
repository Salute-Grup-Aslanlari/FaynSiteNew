import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Fayn Cocktail | Premium Cocktail Bar",
  description: "Fayn Cocktail, eşsiz içecekleri ve benzersiz atmosferiyle en iyi kokteyl deneyimini sunuyor.",
  keywords: "kokteyl bar, premium içecekler, Fayn Cocktail, İzmir barları, özel kokteyller",
  authors: [{ name: "Fayn Cocktail Team", url: "https://fayn.com.tr" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fayn Cocktail | Premium Cocktail Bar",
    description: "Benzersiz atmosferimizde özel kokteyllerin tadını çıkarın. İzmir'in en iyi kokteyl barına hoş geldiniz.",
    url: "https://fayn.com.tr",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/assets/seo-banner.webp",
        width: 1200,
        height: 630,
        alt: "Fayn Cocktail Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayn Cocktail | Premium Cocktail Bar",
    description: "İzmir'in en iyi kokteyl barında özel içeceklerin tadını çıkarın."
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.className} antialiased`}
      >
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
