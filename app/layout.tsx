import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Hamza | PPC Developer & Full Stack Engineer",
  description:
    "Professional portfolio showcasing 100+ high-converting PPC landing pages, React applications, and AI/ML projects. Specialized in fast performance, UI/UX optimization, and RESTful APIs.",
  generator: "v0.app",
  openGraph: {
    title: "Muhammad Hamza | PPC Developer & Full Stack Engineer",
    description:
      "Professional portfolio showcasing 100+ high-converting PPC landing pages, React applications, and AI/ML projects.",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/Picture.jpg",
        type: "image/jpeg",
        sizes: "20x20",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel:"icon",
        url: "/favicon.ico",
        type: "x-icon",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
      </head>
      <body className={`font-sans antialiased dark`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
