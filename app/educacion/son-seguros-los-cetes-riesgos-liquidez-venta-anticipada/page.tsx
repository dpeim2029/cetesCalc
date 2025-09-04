import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada (guía clara)",
  description:
    "Qué tan seguros son los CETES: riesgo soberano, riesgo de tasa/mercado si vendes antes, liquidez, venta anticipada, inflación, operativos y cómo mitigarlos. Incluye CTA a la calculadora.",
  alternates: {
    canonical: "https://www.cetes.app/educacion/son-seguros-los-cetes-riesgos-liquidez-venta-anticipada",
  },
  openGraph: {
    title: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada (guía clara)",
    description:
      "Entiende la seguridad de los CETES y sus riesgos reales: crédito, mercado, liquidez, inflación y operativos. Consejos para minimizarlos.",
    type: "article",
    url: "https://www.cetes.app/educacion/son-seguros-los-cetes-riesgos-liquidez-venta-anticipada",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada (guía clara)",
    description:
      "Riesgos de CETES (soberano, mercado, liquidez, inflación, operativo) y cómo mitigarlos. Con CTA a la calculadora.",
  },
}

const content = [
  "# ¿Son **seguros** los CETES? Riesgos, liquidez y **venta anticipada**",
  "",
  "Los **CETES** (Certificados de la Tesorería) son emitidos por el **Gobierno de México**. Se consideran de **bajo riesgo de crédito** frente a otras alternativas, pero *bajo* no es **cero** y, además del riesgo soberano, existen **otros riesgos** (mercado, liquidez, inflación y operativos) que debes conocer para usarlos bien.",
  "",
  "---",
  "",
  "## ¿Qué significa seguro en CETES?",
  "",
  "- **Emisor soberano**: el pago proviene del Gobierno Federal.",
  "- **Cupón cero**: los compras con **descuento** y al vencimiento recibes su **valor nominal de $10** por título; la ganancia es la diferencia.",
  "- **A vencimiento**: si **mantienes** hasta la fecha pactada, recibes el nominal acordado (tu resultado no depende del precio de mercado intermedio).",
  "- **No son depósitos bancarios**: por tanto **no** cubiertos por seguro de depósitos.",
  "",
  "> Con **horizonte alineado** y evitando vender antes, el riesgo práctico baja mucho. Si **vendes anticipadamente**, tu precio depende del **mercado** del día.",
  "",
  "---",
  "",
  "## Principales riesgos y cómo mitigarlos",
  "",
  "| Riesgo | Qué es | Cuándo te afecta | Cómo mitigarlo |",
  "|---|---|---|---|",
  "| **Soberano (crédito)** | Capacidad del emisor (Gobierno) para pagar | Siempre, aunque históricamente es bajo | Diversifica patrimonio; evita concentrarlo todo en un solo emisor/país |",
  "| **Tasa / mercado** | Cambios en tasas afectan **precio** si vendes antes | Si necesitas **salir** antes del vencimiento | Alinea **plazo** con tu meta; evita ventas por pánico; usa **escalera** de plazos |",
  "| **Liquidez operativa** | Ventanas/horarios para vender/retirar | Si requieres **dinero urgente** fuera de horarios | Mantén **colchón** en efectivo/fondo líquido; conoce **horas de corte** |",
  "| **Reinversión** | Tasas cambian cuando vence tu papel | Si esperas **bajadas** y reinviertes más bajo | Fija plazos **más largos** o combina con **barbell** (corto + largo) |",
  "| **Inflación** | Pérdida de poder de compra | En periodos de **inflación alta** | Considera metas **reales** (después de inflación); evalúa otros instrumentos indexados |",
  "| **Cambio** | Meta en USD y ahorro en MXN | Si tu gasto/meta es en otra **moneda** | Define una **estrategia cambiaria** y objetivos por divisa |",
  "| **Operativo / seguridad** | Errores/estafas/robo de credenciales | Siempre | Usa **2FA**, contraseñas fuertes, verifica **dominios oficiales** y CLABEs |",
  "",
  "---",
  "",
  "## Venta anticipada: cómo funciona en la práctica",
  "",
  "- Puedes **vender antes del vencimiento** al **precio de mercado** disponible en tu plataforma. Ese precio puede ser **mayor o menor** al que pagaste.",
  "- Normalmente existen **ventanas y horarios** (por ejemplo, hasta cierto número de **días hábiles previos** al vencimiento y **antes de una hora de corte**). **Consulta las reglas** específicas de tu plataforma.",
  "- **No suele haber penalización** por vender anticipadamente, pero tu **precio** podría implicar ganancia o pérdida.",
  "- Tras vender, el **retiro** de efectivo depende de **horas de corte**: solicitado **antes** de la hora límite, suele abonarse **el mismo día hábil**; después, **al siguiente**.",
  "",
  "> Si tu prioridad es **no depender** del precio de mercado, busca **alinear** el **vencimiento** con la **fecha** en que realmente necesitas el dinero.",
  "",
  "---",
  "",
  "## ¿Qué tan líquidos son los CETES?",
  "",
  "- **Al vencimiento**: liquidez plena (recibes nominal).",
  "- **Antes del vencimiento**: liquidez **condicionada** al precio de mercado y a **horarios/ventanas** de la plataforma.",
  "- **Comparado** con fondos ultracortos: los CETES pueden tener más **fricción** si deseas salir **el mismo día** fuera de cortes.",
  "",
  "---",
  "",
  "## Cómo hacerlos más seguros para ti",
  "",
  "1. **Alinea plazos** con tus metas (viaje en 6 meses → papel a 182 días).",
  "2. Construye una **escalera** (28/91/182/364) para tener **flujo** y flexibilidad.",
  "3. Mantén un **colchón** de liquidez aparte (gastos 1–3 meses).",
  "4. Evita vender **por pánico** cuando suben tasas; si puedes, **mantén a vencimiento**.",
  "5. Revisa tus **instrucciones al vencimiento** (reinvertir/retirar) con unos **días hábiles** de anticipación.",
  "6. Activa **2FA**, cuida tus **credenciales** y **dominios oficiales**.",
  "7. Considera la **inflación** en tus metas (rendimiento **real**).",
  "",
  "---",
  "",
  "## Mitos comunes",
  "",
  "- **CETES nunca pierden** → Si **vendes antes**, podrías **perder** dependiendo del precio de mercado. A **vencimiento**, recibes el **nominal** por título.",
  "- **Están cubiertos por el seguro de depósitos** → **No**; no son **depósitos**, son **valores**.",
  "- **Siempre conviene el plazo más largo** → No siempre. Depende de tu **liquidez**, **curva de tasas** y **expectativas**.",
  "",
  "---",
  "",
  "## Calcula tu **rendimiento neto** y decide con datos",
  "",
  "👉 **Usa la calculadora del Home** para comparar **bruto vs. neto** según **monto** y **plazo**. Te ayudará a elegir sin improvisar.",
  "",
  "[**Abrir calculadora**](/)",
  "",
  "---",
  "",
  "## Preguntas frecuentes (FAQ)",
  "",
  "### ¿Los CETES están cubiertos por seguro de depósitos?",
  "No. No son **depósitos bancarios**; son **valores** emitidos por el Gobierno. El seguro de depósitos aplica a **ciertos** pasivos bancarios, no a valores.",
  "",
  "### ¿Puedo **perder dinero** en CETES?",
  "Sí **si vendes antes del vencimiento** y el **precio de mercado** es menor al que pagaste. Si mantienes hasta el vencimiento, recibes el **valor nominal** del título.",
  "",
  "### ¿Puedo vender **en cualquier momento**?",
  "Puedes vender **antes**, pero sujeto a **ventanas/horarios** y al **precio de mercado**. Revisa reglas y **hora de corte** de tu plataforma.",
  "",
  "### ¿Son adecuados para **fondo de emergencia**?",
  "Pueden serlo si usas **plazos cortos** o **escalera** para mejorar liquidez. Si quieres **acceso inmediato** fuera de horarios, evalúa combinar con **vehículos más líquidos**.",
  "",
  "### ¿Qué pasa si el emisor **incumple**?",
  "Existe un **riesgo soberano** (bajo en la práctica, pero no nulo). Mitígalo **diversificando** y no concentrando todo tu patrimonio en un solo emisor/país.",
  "",
  "---",
  "",
  "## Nota legal",
  "Contenido **informativo y educativo**. No constituye asesoría financiera. Revisa siempre las **reglas de tu plataforma**, **horarios** y tu situación **fiscal**.",
].join("\n")

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada (guía clara)",
    description:
      "Seguridad de los CETES y sus riesgos: soberano, mercado, liquidez, inflación y operativos. Consejos prácticos para mitigarlos.",
    author: { "@type": "Person", name: "cetes.app" },
    publisher: { "@type": "Organization", name: "cetes.app" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cetes.app/educacion/son-seguros-los-cetes-riesgos-liquidez-venta-anticipada",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Los CETES están cubiertos por seguro de depósitos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. No son depósitos bancarios; son valores emitidos por el Gobierno. El seguro de depósitos aplica a ciertos pasivos bancarios, no a valores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo perder dinero en CETES?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí si vendes antes del vencimiento y el precio de mercado es menor al que pagaste. Si mantienes hasta el vencimiento, recibes el valor nominal por título.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo vender en cualquier momento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes vender antes, pero sujeto a ventanas/horarios y al precio de mercado. Revisa reglas y hora de corte de tu plataforma.",
        },
      },
      {
        "@type": "Question",
        name: "¿Son adecuados para fondo de emergencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden serlo si usas plazos cortos o escalera para mejorar liquidez. Si quieres acceso inmediato fuera de horarios, combina con vehículos más líquidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el emisor incumple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existe un riesgo soberano (bajo en la práctica, pero no nulo). Mitígalo diversificando y no concentrando todo el patrimonio en un solo emisor o país.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/educacion">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Educación
              </Link>
            </Button>
            <div className="h-4 w-px bg-border" />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert max-w-none md:prose-lg prose-headings:text-balance prose-p:text-pretty">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>

          {/* CTA Section */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">¿Listo para calcular tu rendimiento?</h3>
            <p className="text-muted-foreground mb-4">
              Usa nuestra calculadora para estimar tu ganancia neta después de impuestos
            </p>
            <Button size="lg" asChild>
              <Link href="/">Calcular rendimiento CETES</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </div>
  )
}
