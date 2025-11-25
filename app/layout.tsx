import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
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
      <body className={`font-sans antialiased dark`}>{children}</body>
    </html>
  )
}
