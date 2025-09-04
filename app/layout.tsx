import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Calculadora de Rendimiento CETES 2025 - Neto con ISR | Cetes.app",
  description:
    "Calcula en tiempo real el rendimiento neto de tus CETES después de impuestos. Datos oficiales de Banxico. ¡Invierte inteligentemente!",
  generator: "v0.app",
  keywords: "cetes, calculadora, rendimiento, inversión, banxico, méxico, ISR",
  authors: [{ name: "Cetes.app" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Calculadora de Rendimiento CETES 2025 - Neto con ISR | Cetes.app",
    description:
      "Calcula en tiempo real el rendimiento neto de tus CETES después de impuestos. Datos oficiales de Banxico. ¡Invierte inteligentemente!",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Rendimiento CETES 2025 - Neto con ISR | Cetes.app",
    description:
      "Calcula en tiempo real el rendimiento neto de tus CETES después de impuestos. Datos oficiales de Banxico. ¡Invierte inteligentemente!",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.banxico.org.mx" />
        <meta name="theme-color" content="#15803d" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
