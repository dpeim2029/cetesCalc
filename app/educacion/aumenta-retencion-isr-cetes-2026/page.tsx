import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aumenta la retención de ISR sobre CETES en 2026: ¿cómo afecta tu inversión? | Cetes.app",
  description:
    "Descubre cómo el aumento de la retención de ISR del 0.50% al 0.90% en 2026 afectará tus inversiones en CETES. Guía práctica con ejemplos y recomendaciones.",
  keywords: "ISR CETES 2026, retención ISR, impuestos CETES, Paquete Económico 2026, declaración anual CETES",
  alternates: {
    canonical: "https://www.cetes.app/educacion/aumenta-retencion-isr-cetes-2026",
  },
  openGraph: {
    title: "Aumenta la retención de ISR sobre CETES en 2026: ¿cómo afecta tu inversión?",
    description:
      "Descubre cómo el aumento de la retención de ISR del 0.50% al 0.90% en 2026 afectará tus inversiones en CETES. Guía práctica con ejemplos y recomendaciones.",
    url: "https://www.cetes.app/educacion/aumenta-retencion-isr-cetes-2026",
    siteName: "Cetes.app",
    images: [
      {
        url: "https://www.cetes.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cetes.app - Calculadora de CETES",
      },
    ],
    locale: "es_MX",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumenta la retención de ISR sobre CETES en 2026",
    description:
      "Descubre cómo el aumento de la retención de ISR del 0.50% al 0.90% en 2026 afectará tus inversiones en CETES.",
    images: ["https://www.cetes.app/og-image.jpg"],
  },
}

// SVG Infographic Component
function ISRRetentionInfographic() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 960 700"
        role="img"
        aria-labelledby="title2 desc2"
        className="w-full h-auto"
      >
        <title id="title2">¿Cuánto te retienen según el monto invertido?</title>
        <desc id="desc2">
          Tabla comparativa de retención provisional de ISR para 2025 y 2026 con montos de 10,000; 50,000; 100,000 y
          250,000 pesos.
        </desc>
        <defs>
          <linearGradient id="b2025" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#8FB3FF" />
            <stop offset="1" stopColor="#3D6BDB" />
          </linearGradient>
          <linearGradient id="b2026" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FFC68F" />
            <stop offset="1" stopColor="#DB7A3D" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="#F8FAFC" />
        <rect x="24" y="24" width="912" height="652" rx="16" fill="#FFFFFF" stroke="#E5E7EB" />

        <g transform="translate(48,56)">
          <text
            x="0"
            y="0"
            fontFamily="system-ui, -apple-system, Segoe UI, Roboto"
            fontSize="28"
            fontWeight="700"
            fill="#0F172A"
          >
            ¿Cuánto te retienen según el monto invertido?
          </text>
          <text x="0" y="32" fontFamily="system-ui, -apple-system, Segoe UI, Roboto" fontSize="16" fill="#334155">
            Comparativa 2025 (0.50%) vs 2026 (0.90%) · Retención provisional sobre capital, prorrateable por plazo
          </text>
        </g>

        {/* Tabla */}
        <g transform="translate(48,112)">
          {/* Header */}
          <rect x="0" y="0" width="864" height="40" fill="#F1F5F9" rx="8" />
          <text x="16" y="26" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#0F172A">
            Monto invertido
          </text>
          <text x="300" y="26" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#0F172A">
            2025 (0.50%)
          </text>
          <text x="520" y="26" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#0F172A">
            2026 (0.90%)
          </text>

          {/* Rows */}
          <g fontFamily="system-ui" fontSize="14" fill="#0F172A">
            <rect x="0" y="48" width="864" height="40" fill="#FFFFFF" />
            <text x="16" y="74">
              $10,000
            </text>
            <text x="300" y="74">
              $50
            </text>
            <text x="520" y="74">
              $90
            </text>

            <rect x="0" y="88" width="864" height="40" fill="#FBFDFF" />
            <text x="16" y="114">
              $50,000
            </text>
            <text x="300" y="114">
              $250
            </text>
            <text x="520" y="114">
              $450
            </text>

            <rect x="0" y="128" width="864" height="40" fill="#FFFFFF" />
            <text x="16" y="154">
              $100,000
            </text>
            <text x="300" y="154">
              $500
            </text>
            <text x="520" y="154">
              $900
            </text>

            <rect x="0" y="168" width="864" height="40" fill="#FBFDFF" />
            <text x="16" y="194">
              $250,000
            </text>
            <text x="300" y="194">
              $1,250
            </text>
            <text x="520" y="194">
              $2,250
            </text>
          </g>
        </g>

        {/* Mini barras comparativas */}
        <g transform="translate(48,340)">
          <text x="0" y="-8" fontFamily="system-ui" fontSize="16" fontWeight="600" fill="#0F172A">
            Visualización rápida (barras a escala)
          </text>

          {/* 10,000 */}
          <g transform="translate(0,20)">
            <text x="0" y="16" fontFamily="system-ui" fontSize="13" fill="#334155">
              $10,000
            </text>
            <rect x="100" y="0" width="11" height="16" fill="url(#b2025)" rx="4" />
            <rect x="120" y="0" width="20" height="16" fill="url(#b2026)" rx="4" />
            <text x="100" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2025: $50
            </text>
            <text x="160" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2026: $90
            </text>
          </g>

          {/* 50,000 */}
          <g transform="translate(0,80)">
            <text x="0" y="16" fontFamily="system-ui" fontSize="13" fill="#334155">
              $50,000
            </text>
            <rect x="100" y="0" width="56" height="16" fill="url(#b2025)" rx="4" />
            <rect x="160" y="0" width="100" height="16" fill="url(#b2026)" rx="4" />
            <text x="100" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2025: $250
            </text>
            <text x="210" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2026: $450
            </text>
          </g>

          {/* 100,000 */}
          <g transform="translate(0,140)">
            <text x="0" y="16" fontFamily="system-ui" fontSize="13" fill="#334155">
              $100,000
            </text>
            <rect x="100" y="0" width="111" height="16" fill="url(#b2025)" rx="4" />
            <rect x="220" y="0" width="200" height="16" fill="url(#b2026)" rx="4" />
            <text x="100" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2025: $500
            </text>
            <text x="320" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2026: $900
            </text>
          </g>

          {/* 250,000 */}
          <g transform="translate(0,200)">
            <text x="0" y="16" fontFamily="system-ui" fontSize="13" fill="#334155">
              $250,000
            </text>
            <rect x="100" y="0" width="278" height="16" fill="url(#b2025)" rx="4" />
            <rect x="388" y="0" width="500" height="16" fill="url(#b2026)" rx="4" />
            <text x="100" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2025: $1,250
            </text>
            <text x="600" y="36" fontFamily="system-ui" fontSize="12" fill="#64748B">
              2026: $2,250
            </text>
          </g>

          <text x="0" y="290" fontFamily="system-ui" fontSize="12" fill="#64748B">
            Nota: Retención provisional sobre capital invertido; se acredita/ajusta en la declaración anual. Si el plazo
            no es anual, se prorratea por días.
          </text>
        </g>
      </svg>
    </div>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Aumenta la retención de ISR sobre CETES en 2026: ¿cómo afecta tu inversión?",
  description:
    "Descubre cómo el aumento de la retención de ISR del 0.50% al 0.90% en 2026 afectará tus inversiones en CETES. Guía práctica con ejemplos y recomendaciones.",
  image: "https://www.cetes.app/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "Cetes.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Cetes.app",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cetes.app/logo.png",
    },
  },
  datePublished: "2025-01-18",
  dateModified: "2025-01-18",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.cetes.app/educacion/aumenta-retencion-isr-cetes-2026",
  },
}

export default function ISRRetentionArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Website branding on the left */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="p-2 bg-primary rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-foreground">Cetes.app</h1>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/educacion">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Educación
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Actualización fiscal 2026</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold mb-4">
                📈 Aumenta la retención de ISR sobre CETES en 2026: ¿cómo afecta tu inversión?
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                ¿Sabías que a partir de 2026 aumentará la retención de impuestos sobre tu inversión en CETES? Aunque
                este cambio aún es una propuesta incluida en el Paquete Económico, es importante que lo entiendas para
                que tomes mejores decisiones financieras.
              </p>

              <p>
                En este artículo te explicamos, de forma clara y práctica, qué significa el cambio en la retención,
                cuánto te afectará, y qué puedes hacer al respecto.
              </p>

              <h2>✅ ¿Qué es la retención de ISR sobre CETES?</h2>

              <p>
                Cuando inviertes en CETES y otros instrumentos de renta fija, el gobierno te retiene una parte de tus
                rendimientos como pago provisional del Impuesto Sobre la Renta (ISR).
              </p>

              <blockquote>
                <p>
                  <strong>Lo que muchos no saben:</strong>
                </p>
                <p>
                  La retención no se calcula sobre los intereses que ganas, sino sobre el monto total que inviertes.
                </p>
                <p>
                  Esto significa que aunque no hayas ganado mucho (por ejemplo, si vendes antes del plazo), te retendrán
                  un porcentaje de tu inversión desde el primer día.
                </p>
              </blockquote>

              <h2>🔄 ¿Qué cambiará en 2026?</h2>

              <ul>
                <li>
                  En 2025, la retención provisional de ISR es del <strong>0.50% anual</strong>.
                </li>
                <li>
                  La propuesta del Gobierno para 2026 es aumentarla al <strong>0.90% anual</strong>.
                </li>
              </ul>

              <p>Este cambio está incluido en el Paquete Económico 2026, que debe aprobar el Congreso de la Unión.</p>

              <h2>📊 Comparativo práctico: cuánto te retendrán</h2>

              <ISRRetentionInfographic />

              <blockquote>
                <p>
                  <strong>🔍 Importante:</strong> Si mantienes tu inversión solo 3 o 6 meses, se hace un prorrateo
                  proporcional a ese tiempo.
                </p>
              </blockquote>

              <h2>🤔 ¿Eso significa que gano menos?</h2>

              <p>
                <strong>Sí y no.</strong>
              </p>

              <p>
                <strong>Sí</strong> porque la retención se aplica desde el inicio, así que el dinero que recibes ya
                tiene una parte retenida.
              </p>

              <p>
                <strong>No necesariamente</strong>, porque si haces tu declaración anual, el SAT calcula el impuesto
                real sobre tus rendimientos y podrías:
              </p>

              <ul>
                <li>Recuperar lo retenido (si fue más de lo que debías pagar).</li>
                <li>Pagar la diferencia (si fue menos).</li>
              </ul>

              <blockquote>
                <p>
                  <strong>
                    🎯 Pero si no haces declaración anual, la retención se queda como definitiva, y sí terminas ganando
                    menos.
                  </strong>
                </p>
              </blockquote>

              <h2>🧠 ¿Por qué el gobierno hace este cambio?</h2>

              <p>
                La tasa de retención cambia cada año en la Ley de Ingresos, y se basa en una fórmula que proyecta la
                inflación, tasas reales, y necesidades de recaudación.
              </p>

              <p>En los últimos años:</p>
              <ul>
                <li>2023: 0.15%</li>
                <li>2024: 0.50%</li>
                <li>2026 (propuesta): 0.90%</li>
              </ul>

              <p>
                Este aumento busca recaudar más recursos de los inversionistas, aunque genera preocupación entre quienes
                promueven el ahorro formal.
              </p>

              <h2>🙋‍♂️ ¿A quién afecta más este cambio?</h2>

              <ul>
                <li>A los pequeños y medianos inversionistas que no hacen su declaración anual.</li>
                <li>A quienes invierten en plazos cortos y no alcanzan un rendimiento alto.</li>
                <li>A quienes están empezando a ahorrar en CETES o instrumentos similares.</li>
              </ul>

              <h2>🧭 ¿Qué puedes hacer?</h2>

              <p>Aquí van algunas recomendaciones prácticas para principiantes:</p>

              <h3>✅ Conoce bien el instrumento donde estás invirtiendo</h3>
              <p>CETES son seguros y predecibles, pero tienen reglas fiscales específicas.</p>

              <h3>📄 Considera hacer tu declaración anual, aunque no estés obligado</h3>
              <p>Si solo inviertes en CETES, podrías recuperar parte o todo lo retenido.</p>

              <h3>💡 Diversifica tu inversión</h3>
              <p>Evalúa pagarés bancarios, fondos de inversión o bonos M para comparar rendimientos netos.</p>

              <h3>📚 Edúcate sobre impuestos e inversión</h3>
              <p>Conocer cómo funciona el ISR sobre inversiones te puede ahorrar miles de pesos a largo plazo.</p>

              <h2>🔚 Conclusión</h2>

              <p>
                El aumento en la retención del ISR sobre CETES al 0.90% en 2026 no es un nuevo impuesto, pero sí reduce
                el rendimiento neto inmediato de tus inversiones si no haces declaración anual.
              </p>

              <p>
                La clave está en informarte, planear y declarar. Así evitarás perder dinero innecesariamente y podrás
                seguir aprovechando las ventajas de invertir en CETES.
              </p>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Calculator className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Calcula tu rendimiento neto con la nueva retención</h3>
                  <p className="text-muted-foreground">
                    Usa nuestra calculadora para estimar cómo te afectará el cambio del ISR en 2026
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/#calculadora">Calcular rendimiento</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
              <p>
                <strong>Aviso legal:</strong> Este artículo es únicamente informativo y no constituye asesoría fiscal o
                de inversión. Las tasas de retención pueden cambiar según la legislación vigente. Consulta siempre con
                un profesional en materia fiscal para tu situación específica.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}
