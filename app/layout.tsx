import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  themeColor: "#15803d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.banxico.org.mx" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.jpg" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.jpg" sizes="32x32" type="image/png" />
      </head>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let chunkRetryCount = 0;
              const MAX_CHUNK_RETRIES = 2;
              
              function handleChunkError(message) {
                if (chunkRetryCount < MAX_CHUNK_RETRIES) {
                  chunkRetryCount++;
                  console.warn('[v0] Chunk loading error, attempt ' + chunkRetryCount + ', retrying in 1s');
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                } else {
                  console.error('[v0] Max chunk retry attempts reached, manual reload required');
                  // Show user-friendly error message
                  if (typeof window !== 'undefined' && window.document) {
                    const errorDiv = document.createElement('div');
                    errorDiv.innerHTML = '<div style="position:fixed;top:20px;right:20px;background:#ef4444;color:white;padding:12px;border-radius:8px;z-index:9999;font-family:system-ui;">Error de carga. <button onclick="window.location.reload()" style="background:rgba(255,255,255,0.2);border:none;color:white;padding:4px 8px;border-radius:4px;margin-left:8px;cursor:pointer;">Recargar</button></div>';
                    document.body.appendChild(errorDiv);
                  }
                }
              }
              
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('Loading chunk')) {
                  handleChunkError(e.message);
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.toString().includes('Loading chunk')) {
                  e.preventDefault();
                  handleChunkError(e.reason.toString());
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
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
