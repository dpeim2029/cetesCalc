import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Calculadora de Rendimiento CETES 2025 - Neto con ISR | Cetes.app",
  description:
    "Calcula en tiempo real el rendimiento neto de tus CETES después de impuestos. Datos oficiales de Banxico. ¡Invierte inteligentemente!",
  generator: "v0.app",
  keywords: "cetes, calculadora, rendimiento, inversión, banxico, méxico, ISR",
  authors: [{ name: "Cetes.app" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.jpg", color: "#15803d" }],
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${notoSans.variable} ${notoSansMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
