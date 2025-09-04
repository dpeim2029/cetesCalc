import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
  description:
    "Guía práctica de impuestos en CETES: retención provisional (LIF 2025), concepto de interés real (LISR), pasos para tu declaración anual, constancias y casos frecuentes.",
  alternates: {
    canonical: "https://www.cetes.app/educacion/impuestos-en-cetes-isr-retencion-declaracion",
  },
  openGraph: {
    title: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
    description:
      "Todo sobre ISR en CETES: retención 0.50% (2025), interés real, declaración anual, constancia y errores comunes.",
    type: "article",
    url: "https://www.cetes.app/educacion/impuestos-en-cetes-isr-retencion-declaracion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
    description:
      "Retención provisional, interés real y cómo declarar tus CETES en el SAT. Incluye CTA a la calculadora.",
  },
}

const content = [
  "# Impuestos en CETES: ISR, retención y **cómo declararlos** (guía 2025)",
  "",
  "Esta guía te explica, en español claro, **cómo te cobran impuestos** por invertir en **CETES** y **cómo declarar** en el SAT. Incluye la **retención provisional** vigente en 2025 y el concepto clave de **interés real**.",
  "",
  "---",
  "",
  "## Resumen rápido",
  "",
  "- A lo largo del año te hacen una **retención provisional** de ISR sobre el **capital/saldo** de tu inversión. Para **2025**, la **tasa anual** es **0.50%** (LIF 2025).",
  "- En la **declaración anual**, el cálculo definitivo del impuesto sobre intereses es sobre el **interés real** (interés **menos** inflación), conforme a la **LISR**.",
  "- La **retención** se **acredita** contra tu ISR anual. En algunos casos puedes **optar** porque sea **definitiva** (ver más abajo).",
  "- En cetesdirecto, tu **constancia** y **retenciones** suelen **precargarse** en la anual del SAT; aun así verifica todo.",
  "",
  "> **No es asesoría fiscal personalizada.** Revisa siempre tu situación y la normativa vigente.",
  "",
  "---",
  "",
  "## 1) Retención **provisional** durante el año",
  "",
  "- Quien paga los intereses (institución del sistema financiero) **retiene** ISR **sobre el monto del capital que da lugar a los intereses**; esa retención es **provisional** y se entera al SAT.",
  "- Para **2025**, la **Ley de Ingresos** fija la **tasa anual de retención** en **0.50%**.",
  "",
  "### Ejemplo ilustrativo",
  "",
  "- Si mantuviste un **saldo promedio** de $100,000 en el año, la **retención anual** aproximada sería $100,000 × **0.50%** = **$500** (proporcional si fue menos tiempo/saldo).",
  "- Esa cantidad **no es tu impuesto final**; en la anual se ajusta con base en tu **interés real** y en tus demás ingresos.",
  "",
  "---",
  "",
  "## 2) ¿Qué es el **interés real** (LISR)?",
  "",
  "En personas físicas, el impuesto anual sobre intereses se determina sobre el **interés real**:",
  "",
  "> **Interés real = Intereses nominales – Ajuste por inflación**",
  "",
  "El **ajuste por inflación** se calcula con el **INPC** del periodo y el **saldo promedio** de la inversión. El SAT y tu constancia generalmente **ya traen** estos campos (interés nominal, **interés real** y **retención**).",
  "",
  "### Mini–ejemplo (solo para entender la lógica)",
  "",
  "- Invertiste $100,000 y tus **intereses nominales** del año fueron **$7,500**.",
  "- La **inflación** del periodo implicó un **ajuste** de **$3,000**.",
  "- **Interés real** = $7,500 − $3,000 = **$4,500**. Sobre esto se determina el ISR anual, **acreditando** lo ya **retenido**.",
  "",
  "> En algunas coyunturas, si la inflación fue alta y tus intereses **nominales** no la superan, el **interés real** puede ser **bajo** e incluso **cero/negativo**.",
  "",
  "---",
  "",
  "## 3) ¿Cuándo la retención puede ser **definitiva**?",
  "",
  "La LISR permite que, si **solo** tienes ingresos acumulables por **intereses** (este capítulo) y **no exceden de $100,000** en el ejercicio, **puedas optar** por considerar la **retención** como **pago definitivo**. Si tomas esa opción **no acumulas** los intereses a tus demás ingresos ni presentas la anual por ese concepto (sujeto a cumplir los demás requisitos del artículo 150 y reglas aplicables).",
  "",
  "> Si además tienes **otros ingresos** (sueldos, honorarios, arrendamiento, etc.) o **rebasas** los umbrales, generalmente **sí** debes presentar tu anual y **acumular** tus **intereses reales**, **acreditando** la retención.",
  "",
  "---",
  "",
  "## 4) Pasos para **declarar** (flujo práctico)",
  "",
  "1) **Reúne tu constancia** de intereses/retenciones (cetesdirecto y cualquier otra institución).",
  "2) Entra a tu **Declaración Anual** del SAT; normalmente los **intereses y retenciones** ya vienen **precargados**. **Verifica** vs. tus constancias.",
  "3) Revisa que aparezcan **intereses nominales**, **intereses reales** y **retenciones**; corrige si falta algo.",
  "4) **Acredita** la retención provisional contra el ISR anual que resulte.",
  "5) **Envía** tu declaración. Si te da **saldo a favor**, puedes **solicitar devolución**; si sale a pagar, **paga en línea** (hay opciones de parcialidades).",
  "",
  "### ¿Dónde obtengo la constancia en cetesdirecto?",
  "",
  "- En el portal o app de cetesdirecto puedes **consultar tu constancia** de retenciones y **estados de cuenta**. Además, cetesdirecto **reporta** tus intereses y retenciones para que el SAT los **precargue** en tu anual.",
  "",
  "---",
  "",
  "## 5) Casos frecuentes y tips",
  "",
  "- **Varias instituciones**: reúne **todas** tus constancias; el SAT suele precargar, pero **verifica**.",
  "- **Venta anticipada**: si vendes antes del vencimiento, habrá **interés devengado** y posible **ganancia/pérdida** de mercado; revisa cómo viene **clasificado** en tu constancia.",
  "- **UDIBONOS/BONOS**: también se determina **interés real**; confirma en tu constancia.",
  "- **Residentes en el extranjero**: reglas distintas; consulta la LISR/Tratados y asesoría profesional.",
  "",
  "---",
  "",
  "## 6) Errores comunes (y cómo evitarlos)",
  "",
  "- **Confiarse** al 100% de la precarga sin ver constancias. → **Cruza** datos.",
  "- **Confundir** interés **nominal** con **real**. → En anual, el impuesto va sobre el **real**.",
  "- **Olvidar** acreditar la **retención**. → Es dinero ya retenido a tu favor.",
  "- **No revisar** si aplicas a la **opción** de retención **definitiva** (si solo intereses ≤ $100,000).",
  "",
  "---",
  "",
  "## Calcula tu rendimiento **neto** y planea impuestos",
  "",
  "👉 **Usa la calculadora del Home** para estimar tu **bruto vs. neto** y aproximar tu **interés real**. Te ayuda a planear expectativas de **ISR**.",
  "",
  "[**Abrir calculadora**](/)",
  "",
  "---",
  "",
  "## Preguntas frecuentes (FAQ)",
  "",
  "### ¿La retención del 0.50% en 2025 es mi impuesto final?",
  "No. Es **provisional**. En la anual se compara contra tu ISR sobre **interés real** y se **acredita**. Solo puede ser **definitiva** si **optas** y cumples los **requisitos** (solo intereses y ≤ $100,000).",
  "",
  "### ¿Qué es exactamente el interés real?",
  "Es el **interés nominal** menos el **ajuste por inflación** del periodo (con base en INPC y saldo promedio).",
  "",
  "### Si la inflación superó a mis intereses, ¿pago ISR?",
  "Si el **interés real** resulta **cero** o **negativo**, en principio **no habría** base gravable de intereses; valida tu caso en el portal del SAT y constancias.",
  "",
  "### ¿Dónde veo mis intereses y retenciones de CETES?",
  "En tu cuenta de **cetesdirecto**: estados de cuenta y **constancia** anual. Esos datos suelen **precargarse** en la anual del SAT; de todos modos **revísalos**.",
  "",
  "### ¿Cambia la retención cada año?",
  "Sí, la **tasa de retención** la fija cada año la **Ley de Ingresos**. En **2025** es **0.50%**.",
  "",
  "---",
  "",
  "## Nota legal",
  "Contenido **informativo y educativo**. No constituye asesoría fiscal personalizada. Consulta la **LISR** y tu **contador** ante casos particulares o cambios normativos.",
].join("\n")

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
    description:
      "Guía práctica de impuestos en CETES: retención provisional (LIF 2025), interés real (LISR), pasos para la declaración anual, constancias y casos frecuentes.",
    author: { "@type": "Person", name: "cetes.app" },
    publisher: { "@type": "Organization", name: "cetes.app" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cetes.app/educacion/impuestos-en-cetes-isr-retencion-declaracion",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La retención del 0.50% en 2025 es mi impuesto final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Es provisional. En la anual se compara contra tu ISR sobre interés real y se acredita. Solo puede ser definitiva si optas y cumples los requisitos (solo intereses y ≤ $100,000).",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es exactamente el interés real?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el interés nominal menos el ajuste por inflación del periodo (con base en INPC y saldo promedio).",
        },
      },
      {
        "@type": "Question",
        name: "Si la inflación superó a mis intereses, ¿pago ISR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si el interés real resulta cero o negativo, en principio no habría base gravable de intereses; valida tu caso en el portal del SAT y constancias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde veo mis intereses y retenciones de CETES?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En tu cuenta de cetesdirecto: estados de cuenta y constancia anual. Esos datos suelen precargarse en la anual del SAT; de todos modos revísalos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cambia la retención cada año?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, la tasa de retención la fija cada año la Ley de Ingresos. En 2025 es 0.50%.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/educacion">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Educación
                </Link>
              </Button>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>

        {/* CTA Section */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">¿Quieres calcular tu rendimiento neto?</h3>
          <p className="text-muted-foreground mb-4">
            Usa nuestra calculadora para estimar tus ganancias después de impuestos
          </p>
          <Button size="lg" asChild>
            <Link href="/">Calcular rendimiento</Link>
          </Button>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </main>
    </div>
  )
}
