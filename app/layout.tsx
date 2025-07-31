import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raju Kanchan - Full Stack Software Engineer",
  description:
    "Passionate Full Stack Software Engineer with 5+ years of experience building scalable web applications. Specializing in Node.js, React, AWS, and modern web technologies.",
  keywords: "Full Stack Developer, Software Engineer, Node.js, React, AWS, TypeScript, JavaScript",
  authors: [{ name: "Raju Kanchan" }],
  openGraph: {
    title: "Raju Kanchan - Full Stack Software Engineer",
    description:
      "Passionate Full Stack Software Engineer with 5+ years of experience building scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raju Kanchan - Full Stack Software Engineer",
    description:
      "Passionate Full Stack Software Engineer with 5+ years of experience building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
