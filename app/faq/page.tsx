import { BrandHeader } from "@/components/brand-header"
import { FAQSection } from "@/components/faq-section"

export const metadata = {
  title: "Preguntas Frecuentes - Cetes.app",
  description: "Respuestas a las preguntas más comunes sobre inversiones en Cetes mexicanos",
}

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué son los Cetes (Certificados de la Tesorería)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los Cetes son instrumentos de deuda emitidos por el Gobierno Federal mexicano. Al invertir en ellos, básicamente estás prestando dinero al gobierno, quien te lo devolverá al vencimiento junto con un rendimiento previamente pactado. Se consideran inversiones de bajo riesgo y son ideales para perfiles conservadores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro invertir en Cetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Invertir en Cetes es una de las formas más seguras de invertir en México, ya que están respaldados por el Gobierno Federal. Esto significa que el riesgo de impago es extremadamente bajo, incluso más bajo que en inversiones bancarias o corporativas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona esta calculadora y de dónde provienen los datos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La calculadora de Cetes.app utiliza datos oficiales de Banxico (Banco de México) obtenidos a través de su API pública. Esto asegura transparencia y actualización constante de tasas y fechas de subasta. Todos los cálculos de rendimiento están basados en fórmulas estandarizadas del mercado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se calculan los impuestos (ISR) sobre los Cetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El rendimiento de los Cetes está sujeto al Impuesto Sobre la Renta (ISR). El SAT establece cada año una tasa de retención provisional, que en 2025 es del 0.50% anual sobre el monto invertido (no sobre el rendimiento). Este impuesto se retiene automáticamente por la institución donde realizas la inversión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo son las subastas de Cetes y cuándo se actualizan las tasas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las subastas de Cetes se realizan cada martes por el Banco de México. En ellas se determina la tasa de rendimiento de los Cetes a diferentes plazos (28, 91, 182 y 364 días). Las tasas disponibles en nuestra calculadora se actualizan automáticamente después de cada subasta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo retirar mi dinero antes del plazo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, aunque no es lo ideal. Puedes hacer una venta anticipada de tus Cetes, pero es importante saber que: No siempre hay compradores disponibles de inmediato. Es posible que obtengas un rendimiento menor o incluso una pérdida, dependiendo de las tasas vigentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo invertir en Cetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes invertir directamente a través de Cetesdirecto.com, la plataforma oficial del gobierno. También puedes usar casas de bolsa y plataformas fintech como GBM+, Kuspit o Finamex. Solo necesitas: Tener una cuenta en alguna de estas plataformas, transferir fondos desde tu banco, elegir el plazo (28, 91, 182 o 364 días) y confirmar tu inversión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dinero necesito para comenzar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes empezar a invertir en CETES desde $100 pesos a través de Cetesdirecto. Es una opción accesible para cualquier persona que quiera comenzar a generar rendimientos sin tomar grandes riesgos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el mejor plazo para invertir en Cetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tus objetivos: Plazo corto (28 días): mayor liquidez. Plazo largo (364 días): mayor rendimiento. Muchos inversionistas eligen diversificar entre distintos plazos para tener una estrategia de inversión más equilibrada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los CETES vencen automáticamente o tengo que reinvertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando llega el vencimiento: Puedes retirar el capital y rendimiento, o configurar una reinversión automática en plataformas como Cetesdirecto.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />

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
