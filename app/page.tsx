import { Suspense, lazy } from "react"
import { CetesCalculator } from "@/components/cetes-calculator"
import { BrandHeader } from "@/components/brand-header"
import { LoadingSpinner } from "@/components/loading-spinner"
import { FAQSection } from "@/components/faq-section"
import { createClient } from "@/lib/supabase/server"

const RatesDashboard = lazy(() => import("@/components/rates-dashboard").then((m) => ({ default: m.RatesDashboard })))
const HistoricalChart = lazy(() =>
  import("@/components/historical-chart").then((m) => ({ default: m.HistoricalChart })),
)
const EducationSection = lazy(() =>
  import("@/components/education-section").then((m) => ({ default: m.EducationSection })),
)

async function getCetesRates() {
  try {
    const supabase = await createClient()

    // Get the most recent rates from database
    const { data: currentRates, error } = await supabase.from("cetes_rates").select("*").eq("is_current", true).single()

    if (error || !currentRates) {
      // Fallback to reference rates if no data in database
      return {
        success: true,
        data: [
          { plazo: "28", tasa: 10.45, source: "fallback", lastUpdated: "2025-03-31" },
          { plazo: "91", tasa: 10.25, source: "fallback", lastUpdated: "2025-03-31" },
          { plazo: "182", tasa: 10.15, source: "fallback", lastUpdated: "2025-03-31" },
          { plazo: "364", tasa: 10.05, source: "fallback", lastUpdated: "2025-03-31" },
        ],
        lastUpdated: new Date().toISOString(),
        source: "fallback",
      }
    }

    // Transform database format to expected API format
    const rates = [
      { plazo: "28", tasa: currentRates.rate_28_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "91", tasa: currentRates.rate_91_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "182", tasa: currentRates.rate_182_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "364", tasa: currentRates.rate_364_days, source: "database", lastUpdated: currentRates.fetched_at },
    ]

    return {
      success: true,
      data: rates,
      lastUpdated: currentRates.fetched_at,
      source: "database",
    }
  } catch (error) {
    console.error("SSR Data fetch error:", error)

    // Return fallback rates on error
    return {
      success: true,
      data: [
        { plazo: "28", tasa: 10.45, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "91", tasa: 10.25, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "182", tasa: 10.15, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "364", tasa: 10.05, source: "fallback", lastUpdated: "2025-03-31" },
      ],
      lastUpdated: new Date().toISOString(),
      source: "fallback",
    }
  }
}

export default async function HomePage() {
  const initialRatesData = await getCetesRates()

  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Cetes Calculator - Feature Estrella - Above the fold, no lazy loading */}
        <section id="calculadora" className="flex justify-center animate-fade-in">
          <div className="w-full max-w-4xl">
            <CetesCalculator initialData={initialRatesData} />
          </div>
        </section>

        {/* Current Rates Dashboard - Lazy loaded */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-6xl">
            <Suspense fallback={<LoadingSpinner />}>
              <RatesDashboard />
            </Suspense>
          </div>
        </section>

        {/* Historical Chart - Lazy loaded */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-6xl">
            <Suspense fallback={<LoadingSpinner />}>
              <HistoricalChart />
            </Suspense>
          </div>
        </section>

        {/* Education Section */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-4xl">
            <Suspense fallback={<LoadingSpinner />}>
              <EducationSection />
            </Suspense>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-4xl">
            <FAQSection />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-gradient-to-br from-card to-muted mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            {/* Brand Info */}
            <div className="space-y-3">
              <h3 className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cetes.app
              </h3>
            </div>

            {/* Data Source */}
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Datos oficiales del Sistema de Información Económica (SIE) de Banxico</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a
                href="/privacy"
                className="hover:text-primary transition-colors underline underline-offset-4 decoration-2 hover:decoration-primary"
              >
                Política de Privacidad
              </a>
              <a
                href="/terms"
                className="hover:text-primary transition-colors underline underline-offset-4 decoration-2 hover:decoration-primary"
              >
                Términos de Uso
              </a>
              <a
                href="/disclaimer"
                className="hover:text-primary transition-colors underline underline-offset-4 decoration-2 hover:decoration-primary"
              >
                Aviso Legal
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-border text-xs text-muted-foreground space-y-1">
              <p className="font-medium">© 2025 Cetes.app - Herramienta informativa independiente</p>
              <p>No afiliada al Gobierno de México ni a CetesDirecto.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const revalidate = 3600 // Revalidate every hour
