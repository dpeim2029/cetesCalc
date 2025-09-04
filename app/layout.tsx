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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .min-h-screen{min-height:100vh}
            .bg-background{background-color:hsl(var(--background))}
            .container{width:100%;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}
            @media(min-width:640px){.container{max-width:640px}}
            @media(min-width:768px){.container{max-width:768px}}
            @media(min-width:1024px){.container{max-width:1024px}}
            @media(min-width:1280px){.container{max-width:1280px}}
            .space-y-8>:not([hidden])~:not([hidden]){margin-top:2rem}
            .font-sans{font-family:var(--font-geist-sans),ui-sans-serif,system-ui}
            .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          `,
          }}
        />

        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-9QP42RNK0G"
          onLoad={() => {
            window.dataLayer = window.dataLayer || []
            function gtag() {
              window.dataLayer.push(arguments)
            }
            gtag("js", new Date())
            gtag("config", "G-9QP42RNK0G")
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.banxico.org.mx" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />

        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />

        <meta name="theme-color" content="#15803d" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
