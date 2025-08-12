import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/navigation/main-nav"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "AgriTrust - Blockchain Supply Chain Agriculture",
  description:
    "Integrated agricultural supply chain platform based on Hedera DLT with traceability, automated payments, and microfinance",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
      <body className="font-sans bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <MainNav />
        {children}
      </body>
    </html>
  )
}
