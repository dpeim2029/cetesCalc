import { CetesCalculator } from "@/components/cetes-calculator"
import { BrandHeader } from "@/components/brand-header"
import { FAQSection } from "@/components/faq-section"
import { RatesDashboard } from "@/components/rates-dashboard"
import { HistoricalChart } from "@/components/historical-chart"
import { EducationSection } from "@/components/education-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Cetes Calculator - Feature Estrella - Above the fold */}
        <section id="calculadora" className="flex justify-center animate-fade-in">
          <div className="w-full max-w-4xl">
            <CetesCalculator />
          </div>
        </section>

        {/* Current Rates Dashboard */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-6xl">
            <RatesDashboard />
          </div>
        </section>

        {/* Historical Chart */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-6xl">
            <HistoricalChart />
          </div>
        </section>

        {/* Education Section */}
        <section className="flex justify-center animate-slide-up">
          <div className="w-full max-w-4xl">
            <EducationSection />
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
