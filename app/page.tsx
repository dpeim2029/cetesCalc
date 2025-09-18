import { Suspense, lazy } from "react"
import { CetesCalculator } from "@/components/cetes-calculator"
import { BrandHeader } from "@/components/brand-header"
import { LoadingSpinner } from "@/components/loading-spinner"
import { FAQSection } from "@/components/faq-section"

const RatesDashboard = lazy(() => import("@/components/rates-dashboard").then((m) => ({ default: m.RatesDashboard })))
const HistoricalChart = lazy(() =>
  import("@/components/historical-chart").then((m) => ({ default: m.HistoricalChart })),
)
const EducationSection = lazy(() =>
  import("@/components/education-section").then((m) => ({ default: m.EducationSection })),
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Cetes Calculator - Feature Estrella - Above the fold, no lazy loading */}
        <section className="flex justify-center animate-fade-in">
          <div className="w-full max-w-4xl">
            <CetesCalculator />
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
