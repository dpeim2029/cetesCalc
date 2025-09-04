import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más? (Comparativa práctica)",
  description:
    "Guía comparativa de plazos CETES (28, 91, 182 y 364 días): rendimiento, liquidez, sensibilidad a tasas, escenarios y estrategias (escalera, barbell). Incluye fórmulas, ejemplos y CTA a la calculadora.",
  alternates: {
    canonical: "https://www.cetes.app/educacion/cetes-que-plazo-conviene-comparativa",
  },
  openGraph: {
    title: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más? (Comparativa práctica)",
    description:
      "Compara plazos de CETES con números ilustrativos y decide según tu horizonte, liquidez y expectativas de tasas. Con fórmulas, ejemplos y CTA a la calculadora de cetes.app.",
    type: "article",
    url: "https://www.cetes.app/educacion/cetes-que-plazo-conviene-comparativa",
  },
  twitter: {
    card: "summary_large_image",
    title: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más? (Comparativa práctica)",
    description: "Comparativa de plazos CETES con fórmulas, ejemplos, estrategias y CTA a la calculadora de cetes.app.",
  },
}

const content = [
  "# CETES 28, 91, 182 y 364 días: ¿qué **plazo** conviene más?",
  "",
  "Elegir el plazo ideal **no es solo** el que paga más. Depende de **tus objetivos**, **tu liquidez** y **lo que esperas de las tasas** en los próximos meses. Aquí tienes una **comparativa práctica** con fórmulas, ejemplos y estrategias para decidir.",
  "",
  "---",
  "",
  "## Cómo comparar plazos (metodología simple)",
  "",
  "- Los CETES son **cupón cero**: compras con **descuento** y al vencimiento recibes **$10** por título. ",
  "- La tasa de rendimiento es **anual** (base 360). Para un plazo *t* (días) con tasa **r**:",
  "",
  "```",
  "Precio por título (valor nominal 10):",
  "P = 10 / (1 + r * t / 360)",
  "",
  "Ganancia bruta al vencimiento: 10 − P",
  "Rendimiento del periodo (aprox.): r * t / 360",
  "```",
  "",
  "- **ISR**: retención anual **provisional** (p. ej., 0.50% en 2025). Estimación rápida del **neto anual** ≈ `r − 0.50%`. Neto del **periodo** ≈ `(r − 0.005) * t / 360`.",
  "",
  "> **Clave**: compara **liquidez vs. tasa**. A más plazo, suele haber **mayor tasa** (si la curva es normal) pero **menor flexibilidad** y **mayor sensibilidad** a cambios de tasas.",
  "",
  "---",
  "",
  "## Ventajas típicas por plazo",
  "",
  "### 28 días",
  "- **Máxima liquidez** y flexibilidad para **reubicar** tu dinero cada mes.",
  "- Menor **sensibilidad** a movimientos de tasas.",
  "- Útil para **caja** o **parking** de efectivo.",
  "",
  "### 91 días",
  "- Buen **equilibrio** entre liquidez y tasa.",
  "- Ahorro trimestral, **reinvierte** 4 veces al año.",
  "",
  "### 182 días",
  "- Suele ofrecer **mejor tasa** que 28/91 (si la curva está normal).",
  "- **Compromiso** semestral; útil si crees que las tasas **bajarán** y quieres **asegurar** tasa actual.",
  "",
  "### 364 días",
  "- Frecuentemente el **mayor rendimiento anual** (si la curva es normal).",
  "- **Mayor duración**: más **sensibilidad** a movimientos de tasas y **menor liquidez**.",
  "- Conviene si anticipas **recortes** de tasas y quieres **fijar** la tasa por más tiempo.",
  "",
  "> **Ojo**: si esperas **subidas** de tasa, convienen plazos **cortos** para reinvertir después a un nivel más alto. Si esperas **bajadas**, plazos **largos** para fijar la tasa actual.",
  "",
  "---",
  "",
  "## Ejemplos numéricos (tasas **ilustrativas**)",
  "",
  "Supongamos (solo para ejemplo) esta curva anual **bruta**:",
  "",
  "- 28 días: **7.20%**",
  "- 91 días: **7.50%**",
  "- 182 días: **7.70%**",
  "- 364 días: **7.90%**",
  "",
  "Usando la aproximación de **neto anual** = `r − 0.50%` y del **periodo** = `(r − 0.005) * t / 360`, obtenemos:",
  "",
  "| Plazo | Tasa anual **bruta** | Retención aprox. | Neto anual **aprox.** | Rend. periodo **bruto** | Rend. periodo **neto aprox.** |",
  "|---:|---:|---:|---:|---:|---:|",
  "| **28 días**  | 7.20% | 0.50% | 6.70% | 0.56% | 0.52% |",
  "| **91 días**  | 7.50% | 0.50% | 7.00% | 1.90% | 1.77% |",
  "| **182 días** | 7.70% | 0.50% | 7.20% | 3.89% | 3.64% |",
  "| **364 días** | 7.90% | 0.50% | 7.40% | 7.99% | 7.48% |",
  "",
  "> **Interpretación**: a mayor plazo, mayor rendimiento del **periodo**; pero también **pierdes flexibilidad** y te expones más a cambios de tasas.",
  "",
  "---",
  "",
  "## ¿Qué conviene si…? (escenarios rápidos)",
  "",
  "- **Espero que las tasas suban** → Plazos **cortos (28/91)** para reinvertir pronto más arriba.",
  "- **Espero recortes de tasas** → Plazos **largos (182/364)** para asegurar la tasa actual.",
  "- **Necesito liquidez** (posibles retiros) → **28/91**.",
  "- **Meta definida a 6–12 meses** → **182/364** (alineas el vencimiento con tu objetivo).",
  "",
  "---",
  "",
  "## Estrategias útiles",
  "",
  "### Escalera (laddering)",
  "Divide el monto en varios plazos (28, 91, 182, 364). Cada vencimiento **reinvierte** al escalón más largo. Obtienes **flujo periódico** + exposición diversificada de tasas.",
  "",
  "### Barbell (barra)",
  "Combina **muy corto (28)** y **largo (364)**. Buscas equilibrio entre **liquidez** y **tasa alta** del tramo largo.",
  "",
  "### Ahorro recurrente / DCA",
  "Aportes automáticos y recurrentes (p. ej., mensual). Suavizas el riesgo de comprar en un mal momento y construyes posición con disciplina.",
  "",
  "### Reinvención automática y ventana previa al vencimiento",
  "Define si **reinvierte** o **retira**. Revisa y ajusta tu instrucción con unos días hábiles de **antelación** al vencimiento.",
  "",
  "---",
  "",
  "## Riesgos y consideraciones",
  "",
  "- **Duración/sensibilidad**: los plazos **largos** se mueven más con cambios de tasas (precio de mercado).",
  "- **Venta anticipada**: puedes vender antes del vencimiento al **precio de mercado**; el resultado puede ser **mayor o menor** a lo esperado.",
  "- **Restricciones**: en compras por **domiciliación/ahorro recurrente** podría haber ventanas mínimas antes de vender.",
  "- **Impuestos**: la retención (p. ej., 0.50% anual) es **provisional** y se **ajusta** en tu declaración anual.",
  "",
  "---",
  "",
  "## Checklist para elegir tu plazo",
  "",
  "- ¿Cuándo **necesitarías** el dinero? (liquidez)",
  "- ¿Qué **esperas de las tasas** en los próximos meses?",
  "- ¿Tienes una **meta con fecha**? (alinear vencimiento)",
  "- ¿Prefieres **simplicidad** (un plazo) o **diversificación** (escalera/barbell)?",
  "",
  "---",
  "",
  "## Calcula tu rendimiento **neto** ahora",
  "",
  "👉 **Usa la calculadora del Home** para estimar tu resultado **bruto vs. neto** según **monto**, **plazo** y **tasa**.",
  "",
  "[**Abrir calculadora**](/)",
  "",
  "---",
  "",
  "## Preguntas frecuentes (FAQ)",
  "",
  "### ¿El plazo más largo **siempre** paga más?",
  "No necesariamente. Depende de la **curva de tasas** del momento. A veces 182 y 364 están muy cerca, o la curva puede aplanarse/invertirse.",
  "",
  "### ¿Puedo mezclar plazos?",
  "Sí. Estrategias como **escalera** o **barbell** combinan liquidez con rendimiento potencial y diversifican el riesgo de reinversión.",
  "",
  "### Si suben las tasas durante mi plazo largo, ¿pierdo?",
  "Tu **precio de mercado** puede bajar si necesitas vender antes. Si **mantienes a vencimiento**, recibes el **valor nominal** acordado.",
  "",
  "### ¿En plazos cortos la retención casi no afecta?",
  "En 28 días, el impacto **proporcional** de la retención es **pequeño**. En 364 días, se acerca a **0.5 puntos** anuales del neto.",
  "",
  "### ¿Qué hago si tengo una meta a 9–12 meses?",
  "Considera **182 o 364** para alinear el vencimiento con tu objetivo, o una **escalera** que te dé flujo y flexibilidad.",
  "",
  "---",
  "",
  "## Nota legal",
  "Contenido **informativo y educativo**. No constituye asesoría financiera o fiscal personalizada. Verifica siempre tasas y reglas vigentes antes de invertir.",
].join("\n")

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más?",
    description:
      "Comparativa de plazos CETES (28, 91, 182 y 364 días) con fórmulas, ejemplos, riesgos y estrategias (escalera, barbell) para decidir según liquidez y expectativas.",
    author: { "@type": "Person", name: "cetes.app" },
    publisher: { "@type": "Organization", name: "cetes.app" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cetes.app/educacion/cetes-que-plazo-conviene-comparativa",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El plazo más largo **siempre** paga más?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. Depende de la curva de tasas del momento. A veces 182 y 364 están muy cerca, o la curva puede aplanarse o invertirse.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo mezclar plazos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Estrategias como escalera o barbell combinan liquidez con rendimiento potencial y diversifican el riesgo de reinversión.",
        },
      },
      {
        "@type": "Question",
        name: "Si suben las tasas durante mi plazo largo, ¿pierdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El precio de mercado puede bajar si necesitas vender antes. Si mantienes a vencimiento, recibes el valor nominal acordado.",
        },
      },
      {
        "@type": "Question",
        name: "¿En plazos cortos la retención casi no afecta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En 28 días, el impacto proporcional de la retención es pequeño. En 364 días, se acerca a 0.5 puntos anuales del neto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hago si tengo una meta a 9–12 meses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Considera 182 o 364 para alinear el vencimiento con tu objetivo, o una estrategia de escalera que te dé flujo y flexibilidad.",
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
          <div className="not-prose mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-primary">¿Listo para calcular tu rendimiento?</h3>
              <p className="text-sm text-muted-foreground">
                Usa nuestra calculadora para comparar diferentes plazos y estimar tus ganancias netas
              </p>
              <a
                href="/#calculadora"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Abrir Calculadora
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </div>
  )
}
