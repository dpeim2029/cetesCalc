import { BrandHeader } from "@/components/brand-header"
import { FAQSection } from "@/components/faq-section"

export const metadata = {
  title: "Preguntas Frecuentes - Cetes.app",
  description: "Respuestas a las preguntas más comunes sobre inversiones en Cetes mexicanos",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />

      <main className="container mx-auto px-4 py-8">
        <FAQSection />
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-primary">Cetes.app</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Herramienta independiente para el cálculo de rendimientos de Cetes mexicanos
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Datos oficiales del Sistema de Información Económica (SIE) de Banxico</p>
            </div>

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
