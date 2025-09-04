import { Suspense, lazy } from "react"
import { CetesCalculator } from "@/components/cetes-calculator"
import { BrandHeader } from "@/components/brand-header"
import { LoadingSpinner } from "@/components/loading-spinner"
import { FAQSection } from "@/components/faq-section"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const RatesDashboard = lazy(() => import("@/components/rates-dashboard").then((m) => ({ default: m.RatesDashboard })))
const HistoricalChart = lazy(() =>
  import("@/components/historical-chart").then((m) => ({ default: m.HistoricalChart })),
)
const EducationSection = lazy(() =>
  import("@/components/education-section").then((m) => ({ default: m.EducationSection })),
)

export default function HomePage() {
  const { ref: ratesDashboardRef, isVisible: ratesDashboardVisible } = useIntersectionObserver()
  const { ref: historicalChartRef, isVisible: historicalChartVisible } = useIntersectionObserver({ threshold: 0.5 })

  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Cetes Calculator - Feature Estrella - Above the fold, no lazy loading */}
        <section>
          <CetesCalculator />
        </section>

        {/* Current Rates Dashboard - Lazy loaded */}
        <section ref={ratesDashboardRef}>
          {ratesDashboardVisible ? (
            <Suspense fallback={<LoadingSpinner />}>
              <RatesDashboard />
            </Suspense>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
        </section>

        {/* Historical Chart - Lazy loaded with lower priority */}
        <section ref={historicalChartRef}>
          {historicalChartVisible ? (
            <Suspense fallback={<LoadingSpinner />}>
              <HistoricalChart />
            </Suspense>
          ) : (
            <div className="h-80 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
        </section>

        {/* Education Section */}
        <section>
          <Suspense fallback={<LoadingSpinner />}>
            <EducationSection />
          </Suspense>
        </section>

        {/* FAQ Section - Load immediately for SEO */}
        <section>
          <FAQSection />
        </section>
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            {/* Brand Info */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-primary">Cetes.app</h3>
            </div>

            {/* Data Source */}
            <div className="text-sm text-muted-foreground">
              <p>Datos oficiales del Sistema de Información Económica (SIE) de Banxico</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-primary transition-colors underline">
                Política de Privacidad
              </a>
              <a href="/terms" className="hover:text-primary transition-colors underline">
                Términos de Uso
              </a>
              <a href="/disclaimer" className="hover:text-primary transition-colors underline">
                Aviso Legal
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-border text-xs text-muted-foreground">
              <p>© 2025 Cetes.app - Herramienta informativa independiente</p>
              <p className="mt-1">No afiliada al Gobierno de México ni a CetesDirecto.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
