import type React from "react"
import type { Metadata, Viewport } from "next"
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
  themeColor: "#15803d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.banxico.org.mx" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.jpg" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.jpg" sizes="32x32" type="image/png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Handle chunk loading errors
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('Loading chunk')) {
                  console.warn('[v0] Chunk loading error detected, reloading page');
                  window.location.reload();
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.toString().includes('Loading chunk')) {
                  console.warn('[v0] Chunk loading promise rejection, reloading page');
                  e.preventDefault();
                  window.location.reload();
                }
              });

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9QP42RNK0G');
              
              // Load GA script after page load to avoid blocking
              window.addEventListener('load', function() {
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9QP42RNK0G';
                document.head.appendChild(script);
              });
            `,
          }}
        />
        <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
