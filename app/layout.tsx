import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import SiteBackground from "@/components/site-background"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Hamza | CS Student | Software Engineering & QA",
  description:
    "Portfolio of a Computer Science student interested in software engineering and quality assurance. Projects in web development, React, Python, and testing.",
  generator: "v0.app",
  openGraph: {
    title: "Muhammad Hamza | CS Student | Software Engineering & QA",
    description:
      "Portfolio of a Computer Science student interested in software engineering and quality assurance.",
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
      <body className={`font-sans antialiased dark relative isolate overflow-x-hidden`}>
        <SiteBackground />
        <div className="relative z-10">{children}</div>
        <ScrollToTop />
      </body>
    </html>
  )
}
