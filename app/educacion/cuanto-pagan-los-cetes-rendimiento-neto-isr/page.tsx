import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
  description:
    "Aprende a estimar el rendimiento bruto y neto de los CETES: fórmula de precio, tasa anualizada, retención de ISR y ejemplos prácticos. Incluye CTA a la calculadora del Home.",
  alternates: {
    canonical: "https://www.cetes.app/educacion/cuanto-pagan-los-cetes-rendimiento-neto-isr",
  },
  openGraph: {
    title: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
    description:
      "Fórmula de precio de CETES, rendimiento anualizado, retención ISR y ejemplos. CTA a la calculadora del Home.",
    type: "article",
    url: "https://www.cetes.app/educacion/cuanto-pagan-los-cetes-rendimiento-neto-isr",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
    description:
      "Fórmula de precio de CETES, rendimiento anualizado, retención ISR y ejemplos. CTA a la calculadora del Home.",
  },
}

const content = [
  "# ¿Cuánto pagan los CETES? Cálculo del **rendimiento neto** (incluye ISR)",
  "",
  "> En esta guía aprenderás a:",
  "> - Entender la **tasa de rendimiento** que ves en subastas.",
  "> - Pasar de **tasa → precio** y viceversa.",
  "> - Estimar tu **rendimiento neto** considerando la **retención de ISR**.",
  "> - Usar la **calculadora** del Home para obtener números rápidos.",
  "",
  "---",
  "",
  "## Antes de empezar: tres ideas clave",
  "",
  "- Los **CETES** son títulos **cupón cero** que se **compran con descuento** y pagan al vencimiento su **valor nominal de $10**. La ganancia es la diferencia entre lo que pagaste y esos $10.",
  "- La **tasa que ves (rendimiento anual)** se publica en cada **subasta primaria**. **Cambia semana a semana** y por **plazo** (28, 91, 182, 364 días, etc.).",
  "- El **ISR** sobre intereses tiene una **retención anual provisional** (0.50% para 2025). No es impuesto definitivo: se ajusta en tu declaración anual.",
  "",
  "> Consejo: si necesitas un número **hoy**, salta al final y usa la **calculadora** del Home.",
  "",
  "---",
  "",
  "## Cómo se calcula el **rendimiento bruto**",
  "",
  "### De la **tasa anual** al **precio** (por título de $10)",
  "",
  "Para un CETE a *t* días con **tasa de rendimiento anual** *r* (base 360), el **precio** *P* por título de **$10** se obtiene con:",
  "",
  "```",
  "P = 10 / (1 + r * t / 360)",
  "```",
  "",
  "- **Ganancia bruta al vencimiento** = 10 − P",
  "- **Rendimiento del periodo sobre lo invertido** = (10 − P) / P",
  "- **Equivalente del periodo con simple** ≈ r * t / 360 (la diferencia con (10 − P)/P suele ser pequeña en tasas típicas)",
  "",
  "> Ejemplo (ilustrativo):",
  "> **Plazo 91 días**, **r = 7.60% anual**.",
  "> y = r * t / 360 = 0.076 * 91 / 360 ≈ 0.0192",
  "> P ≈ 10 / (1 + 0.0192) = 9.813",
  "> **Ganancia** ≈ 10 − 9.813 = 0.187 por título.",
  "> **Rendimiento del periodo sobre lo invertido** ≈ 0.187 / 9.813 = 1.91%.",
  "",
  "---",
  "",
  "## Cómo estimar el **rendimiento neto** (incluye ISR)",
  "",
  "La **retención** de ISR sobre intereses para **2025** es **0.50% anual**. Operativamente, equivale a descontar aprox. esa tasa sobre el **saldo promedio** durante el periodo. Para una estimación rápida:",
  "",
  "**Aproximación práctica:**",
  "- **Rendimiento neto anual aprox.** ≈ **r bruta − 0.50%**",
  "- **Rendimiento neto del periodo** ≈ (r − 0.005) * t / 360",
  "",
  "> Ejemplo (ilustrativo):",
  "> **Plazo 364 días**, **r = 7.90%**.",
  "> **Bruto anual** = 7.90%.",
  "> **Neto anual aprox.** = 7.90% − 0.50% = **7.40%**.",
  "> **Neto del periodo** ≈ 0.074 * 364 / 360 = **7.48%** (aprox.).",
  "> **Precio bruto** P ≈ 10 / (1 + 0.079 * 364 / 360).",
  "> Para una **ganancia neta** más realista, descuenta del resultado la **retención proporcional** (0.50% * días/365 sobre el saldo promedio).",
  "",
  "> Importante: la **retención** es **provisional**; tu **impuesto definitivo** lo determina tu declaración anual. Esta guía solo te ayuda a **estimar**.",
  "",
  "---",
  "",
  "## Ejemplos rápidos (tasas **supuestas**)",
  "",
  "> **Solo a modo de ejemplo**. Consulta tasas actuales en tu plataforma o en la **calculadora** del Home.",
  "",
  "### Caso A: 28 días, r = 7.30%",
  "- y = 0.073 * 28 / 360 = 0.00567",
  "- P ≈ 10 / 1.00567 = 9.9437",
  "- **Bruto periodo** ≈ (10 − 9.9437) / 9.9437 = **0.57%**",
  "- **Neto aprox.**: (0.073 − 0.005) * 28 / 360 = **0.53%**",
  "",
  "### Caso B: 91 días, r = 7.60%",
  "- y = 0.076 * 91 / 360 = **0.0192**",
  "- P ≈ **9.813**",
  "- **Bruto periodo** ≈ **1.91%**",
  "- **Neto aprox.**: (0.076 − 0.005) * 91 / 360 = **1.79%**",
  "",
  "> *Tip:* En horizontes **largos** (364 días), la diferencia entre **bruto** y **neto** se acerca a **0.5 puntos** anuales (por la retención). En **plazos cortos**, el impacto es pequeño.",
  "",
  "---",
  "",
  "## ¿Y si vendo **antes** del vencimiento?",
  "",
  "Puedes vender anticipadamente (según reglas de tu plataforma) a **precio de mercado**. Tu resultado efectivo puede ser **mayor o menor** al estimado si las tasas **bajan o suben** respecto al día que compraste.",
  "Para **Ahorro Recurrente/Domiciliación** suelen existir **restricciones** mínimas de tiempo antes de poder vender.",
  "",
  "---",
  "",
  "## Calcula tu **rendimiento neto** con un clic",
  "",
  "👉 **Usa la calculadora del Home** para ver **bruto vs. neto** según **monto**, **plazo** y **tasa** (incluye la **retención**).",
].join("\n")

const ctaContent = `
[**🧮 Abrir calculadora**](/)

---

## Preguntas frecuentes (FAQ)

### ¿El rendimiento que veo en "subastas" ya es anual?
Sí. La **tasa de rendimiento** publicada es **anual** (base 360). Para un plazo t, el **factor del periodo** es r * t / 360.

### ¿Por qué el precio que pago no es $10?
Porque los CETES se **compran con descuento** y al vencimiento te pagan **$10** por título. La diferencia es tu **ganancia bruta**.

### ¿La retención del 0.50% es mi impuesto final?
No. Es **provisional**. Se acredita en tu **declaración anual** y el impuesto **definitivo** depende de tu situación fiscal.

### En plazos cortos, ¿la retención casi no afecta?
Correcto. En **28 días**, la retención proporcional es muy pequeña; en **364 días**, el impacto se aproxima a **0.5 puntos** anuales.

### ¿Dónde veo las tasas más recientes?
En tu plataforma y en los **resultados de subasta** oficiales. También puedes usar la **calculadora** del Home para ver **bruto vs. neto**.

---

## Nota legal
Contenido **informativo y educativo**. No constituye asesoría financiera o fiscal personalizada. Verifica siempre tasas y reglas vigentes antes de invertir.
`

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
    description:
      "Guía para estimar el rendimiento bruto y neto de los CETES: fórmula de precio, tasa anualizada, retención de ISR y ejemplos prácticos.",
    author: { "@type": "Person", name: "cetes.app" },
    publisher: { "@type": "Organization", name: "cetes.app" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cetes.app/educacion/cuanto-pagan-los-cetes-rendimiento-neto-isr",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El rendimiento que veo en subastas ya es anual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La tasa de rendimiento publicada es anual (base 360). Para un plazo t, el factor del periodo es r * t / 360.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué el precio que pago no es $10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque los CETES se compran con descuento y al vencimiento te pagan $10 por título. La diferencia es tu ganancia bruta.",
        },
      },
      {
        "@type": "Question",
        name: "¿La retención del 0.50% es mi impuesto final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Es provisional. Se acredita en tu declaración anual y el impuesto definitivo depende de tu situación fiscal.",
        },
      },
      {
        "@type": "Question",
        name: "En plazos cortos, ¿la retención casi no afecta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Correcto. En 28 días, la retención proporcional es muy pequeña; en 364 días, el impacto se aproxima a 0.5 puntos anuales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde veo las tasas más recientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En tu plataforma y en los resultados de subasta oficiales. También puedes usar la calculadora del Home para ver bruto vs. neto.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/educacion">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Educación
                </Button>
              </Link>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>

          {/* CTA Section */}
          <div className="not-prose bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-primary">¿Listo para calcular tu rendimiento?</h3>
              <p className="text-muted-foreground">
                Usa nuestra calculadora para ver bruto vs. neto según monto, plazo y tasa
              </p>
              <Link href="/#calculadora">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
                  🧮 Abrir calculadora
                </button>
              </Link>
            </div>
          </div>

          <ReactMarkdown remarkPlugins={[remarkGfm]}>{ctaContent}</ReactMarkdown>
        </article>
      </main>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </div>
  )
}
