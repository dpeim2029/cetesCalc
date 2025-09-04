import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir? (Guía comparativa)",
  description:
    "Compara CETES, pagarés bancarios y fondos de deuda: rendimiento, liquidez, riesgo, costos y fiscalidad. Incluye escenarios, estrategias y CTA a la calculadora.",
  alternates: {
    canonical: "https://www.cetes.app/educacion/cetes-vs-pagare-vs-fondos-de-deuda",
  },
  openGraph: {
    title: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir? (Guía comparativa)",
    description:
      "Guía práctica para decidir entre CETES, pagarés y fondos de deuda según horizonte, liquidez, riesgo, costos y fiscalidad.",
    type: "article",
    url: "https://www.cetes.app/educacion/cetes-vs-pagare-vs-fondos-de-deuda",
  },
  twitter: {
    card: "summary_large_image",
    title: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir? (Guía comparativa)",
    description:
      "Comparativa clara: rendimiento, liquidez, riesgo, costos y fiscalidad. Incluye escenarios y CTA a la calculadora.",
  },
}

const content = [
  "# CETES vs pagaré bancario vs **fondos de deuda**: ¿cuál elegir?",
  "",
  "Si buscas un instrumento **conservador** para tu dinero, normalmente te toparás con **CETES**, **pagarés bancarios** y **fondos de deuda**. No existe un mejor absoluto: depende de **tu horizonte**, **necesidad de liquidez**, **tolerancia al riesgo** y **costos**. Aquí va una **comparativa práctica** + **escenarios** para decidir.",
  "",
  "---",
  "",
  "## Resumen en una tabla",
  "",
  "| Criterio | **CETES** | **Pagaré bancario** | **Fondos de deuda** |",
  "|---|---|---|---|",
  "| **Emisor / respaldo** | Gobierno Federal (instrumento soberano) | Banco comercial (riesgo de contraparte bancaria) | Cartera diversificada (gobierno, bancario, corporativo según el fondo) |",
  "| **Riesgo principal** | **Tasa** (si vendes antes, cambia el precio) | **Tasa** y **penalización** por retiro anticipado; riesgo del banco | **Mercado** (marcación a mercado), **tasa**, **crédito** de emisores en cartera |",
  "| **Liquidez** | Al vencimiento; venta anticipada **a precio de mercado** | Usualmente **al vencimiento**; retiros antes suelen tener **penalización** | Generalmente **diaria** o **T+1/T+2** (según fondo) |",
  "| **Horizonte típico** | 28–364 días (u otros plazos en subastas) | 28–365+ días (según banco y producto) | Variable (ultracorto, corto, mediano plazo) |",
  "| **Rendimiento** | Determinado por subasta (cupón cero) | Tasa **fija** al contratar | Depende del desempeño de la cartera; **no garantizado** |",
  "| **Costos** | Sin comisiones en compra/venta en plataformas como cetesdirecto | Sin comisión explícita; puede haber penalización por romper plazo | **Comisiones** de administración + gastos del fondo (afectan rendimiento) |",
  "| **Fiscalidad** | Retención provisional anual sobre intereses; ajuste en anual | Similar (intereses) | Intereses/ganancias gravan; el fondo retiene y reporta (revisa prospecto) |",
  "| **¿Protección de seguro de depósitos?** | **No aplica** (no es depósito bancario) | Puede aplicar a **ciertos** pagarés del banco (verifica condiciones) | **No** (no son depósitos; es inversión en valores) |",
  "",
  "> *Nota:* Las condiciones específicas varían por plataforma, banco y fondo. **Verifica** siempre **prospectos**, **carátulas** y **penalizaciones**.",
  "",
  "---",
  "",
  "## Cómo pensar la decisión (metodología simple)",
  "",
  "1) **Liquidez**: ¿Necesitas acceso al dinero **antes** de X meses?  \n",
  "2) **Horizonte**: ¿Tienes una **fecha meta** (p. ej., 6–12 meses)?  \n",
  "3) **Riesgo**: ¿Qué tanto te afecta ver **variaciones diarias** (fondos) vs. un precio fijo al vencimiento (CETES/pagaré)?  \n",
  "4) **Costos**: Fondos tienen **comisión** que descuenta del rendimiento.  \n",
  "5) **Tasas**: Si esperas **bajadas**, fijar tasa **más larga** hoy puede convenir; si esperas **subidas**, mejor **plazos cortos** para reinvertir arriba.",
  "",
  "---",
  "",
  "## CETES (cupón cero, subastas)",
  "",
  "- Compras con **descuento** y recibes **$10** por título al **vencimiento**.  \n",
  "- Puedes **vender antes** al **precio de mercado** (podría ser mayor/menor a tu costo).  \n",
  "- Sin comisiones operativas en plataformas como **cetesdirecto**.  \n",
  "- Útiles para **metas definidas** (alineas el vencimiento) o estrategias de **escalera**.",
  "",
  "### Pros",
  "- Respaldo soberano.  \n",
  "- Plazos variados.  \n",
  "- Sin comisión (en compra/venta) en algunas plataformas.",
  "",
  "### Contras",
  "- Menor **liquidez intradía** (venta anticipada a precio de mercado).  \n",
  "- Si suben tasas, el **precio de mercado** puede bajar (si necesitas vender).",
  "",
  "---",
  "",
  "## Pagaré bancario (tasa fija al contratar)",
  "",
  "- Contratas una **tasa fija** por un **plazo** con tu banco.  \n",
  "- **Retiros anticipados** suelen implicar **penalización** (o no permitirlos).  \n",
  "- La **protección de seguro de depósitos** puede aplicar a **ciertos** productos (revisa términos del banco y límites).",
  "",
  "### Pros",
  "- **Certidumbre**: conoces la tasa y monto al vencimiento.  \n",
  "- Simplicidad operativa.",
  "",
  "### Contras",
  "- **Baja flexibilidad**: penalización si necesitas el dinero antes.  \n",
  "- Dependes de la **solidez del banco** y condiciones del producto.",
  "",
  "---",
  "",
  "## Fondos de deuda (liquidez y diversificación)",
  "",
  "- Invierten en una **cartera** (gobierno, bancario, corporativo) y se **marcan a mercado**.  \n",
  "- Tienen **comisión** de administración que **resta** rendimiento.  \n",
  "- **Liquidez** usualmente **diaria** o **T+1/T+2** (ver **prospecto**).  \n",
  "- No garantizan rendimiento; pueden presentar **variación diaria** (pequeña o moderada según el riesgo y duración).",
  "",
  "### Pros",
  "- **Liquidez** (vs. plazos fijos) y **diversificación**.  \n",
  "- Acceso a instrumentos que quizá no contratarías directo.  \n",
  "- Puedes alinear el **riesgo** (fondos de **ultracorto**, **corto** o **mediano** plazo).",
  "",
  "### Contras",
  "- **Comisiones** y **gastos** (impacto en el neto).  \n",
  "- **No garantizan** rendimiento; hay **volatilidad** (menor o mayor según el mandato).",
  "",
  "---",
  "",
  "## Escenarios rápidos (qué conviene si…)",
  "",
  "- **Necesito alta liquidez** y evitar penalizaciones → **Fondo de deuda ultracorto/corto** o **CETES 28–91 días** (conscientes de la marcación/flexibilidad).  \n",
  "- **Tengo meta a 6–12 meses** con fecha definida → **CETES 182–364** o **pagaré** del mismo horizonte.  \n",
  "- **Anticipo bajadas de tasa** → **Plazos más largos** (CETES 182–364 o pagaré largo).  \n",
  "- **Anticipo subidas** → **Plazos cortos** para reinvertir luego a mayor nivel (CETES 28–91 o fondo de ultracorto).  \n",
  "- **No quiero monitorear diario** → **CETES/pagaré**.  \n",
  "- **Quiero mover efectivo con facilidad** → **fondo de deuda** con liquidez T+0/T+1.",
  "",
  "---",
  "",
  "## Costos y fiscalidad (visión práctica)",
  "",
  "- **CETES**: sin comisiones operativas en plataformas como cetesdirecto; **retención** provisional anual de ISR sobre intereses; ajuste en anual.  \n",
  "- **Pagaré**: usualmente sin comisión explícita, pero **penaliza** romper plazo; fiscalidad similar (intereses).  \n",
  "- **Fondo**: cobra **comisión** de administración y otros gastos (verifica el **TER** o comisión publicada); fiscalidad de **intereses/ganancias** con retenciones reportadas por la operadora.",
  "",
  "> **Clave**: lo que **paga** un fondo se ve **después** de comisiones. Dos fondos con misma cartera pueden rendir distinto por **costos**.",
  "",
  "---",
  "",
  "## Estrategias combinadas",
  "",
  "### Escalera (ladder) con CETES",
  "Divide en 28/91/182/364 y **reinvierte** cada vencimiento al tramo largo; ganas **flujo** + **tasa**.",
  "",
  "### Barbell (barra) liquidez + tasa",
  "Una parte en **fondo ultracorto** (liquidez) y otra en **CETES 364** o **pagaré** (tasa).",
  "",
  "### Fondo + CETES a meta",
  "Usa **fondo** para el efectivo del día a día y **CETES** para la meta con fecha (alineando vencimiento).",
  "",
  "---",
  "",
  "## Checklist antes de contratar",
  "",
  "- **Objetivo y fecha** (liquidez vs. rendimiento).  \n",
  "- **Riesgos** que aceptas (tasa, mercado, crédito, liquidez).  \n",
  "- **Costos** (comisiones del fondo, penalizaciones del pagaré).  \n",
  "- **Fiscalidad** (retención provisional; anual).  \n",
  "- **Documentos**: prospecto del fondo / carátula del pagaré / reglas de la plataforma.",
  "",
  "---",
  "",
  "## Calcula tu **rendimiento neto** ahora",
  "",
  "👉 **Usa la calculadora del Home** para estimar tu **bruto vs. neto** con **montos y plazos**. Te ayudará a comparar alternativas con números.",
  "",
  "[**Abrir calculadora**](/)",
  "",
  "---",
  "",
  "## Preguntas frecuentes (FAQ)",
  "",
  "### ¿Cuál paga más: CETES, pagaré o fondo de deuda?",
  "Depende del **momento de mercado**, **plazo** y **costos**. Un pagaré largo puede superar a CETES cortos; un fondo puede rendir similar o menos **después** de comisiones. **Compara neto**.",
  "",
  "### ¿El pagaré está cubierto por seguro de depósitos?",
  "Algunos **depósitos** y pagarés bancarios pueden estar **protegidos** por el seguro de depósitos del sistema (hasta ciertos límites). **Verifica** con tu banco el **producto específico** y los **límites** aplicables.",
  "",
  "### ¿Un fondo de deuda puede perder valor?",
  "Sí. Los fondos se **marcan a mercado**: si suben las tasas o hay eventos de crédito, el precio puede **bajar**. El riesgo varía según el **mandato** (ultracorto vs. mediano plazo, etc.).",
  "",
  "### ¿Puedo salir cuando quiera en un fondo?",
  "Generalmente hay **liquidez diaria** o **T+1/T+2**; revisa el **prospecto** del fondo y ventanas de corte.",
  "",
  "### ¿Y si necesito liquidez antes en un pagaré?",
  "Usualmente implica **penalización** o no se permite rescatar antes. **Confírmalo** con tu banco **antes** de contratar.",
  "",
  "---",
  "",
  "## Nota legal",
  "Contenido **informativo y educativo**. No constituye asesoría financiera. Verifica **prospectos**, **carátulas**, **penalizaciones** y **reglas** vigentes antes de invertir.",
].join("\n")

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir? (Guía comparativa)",
    description:
      "Comparativa de CETES, pagarés bancarios y fondos de deuda por rendimiento, liquidez, riesgo, costos y fiscalidad. Incluye escenarios y estrategias.",
    author: { "@type": "Person", name: "cetes.app" },
    publisher: { "@type": "Organization", name: "cetes.app" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cetes.app/educacion/cetes-vs-pagare-vs-fondos-de-deuda",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál paga más: CETES, pagaré o fondo de deuda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del momento de mercado, plazo y costos. Un pagaré largo puede superar a CETES cortos; un fondo puede rendir similar o menos después de comisiones. Compara neto.",
        },
      },
      {
        "@type": "Question",
        name: "¿El pagaré está cubierto por seguro de depósitos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Algunos depósitos y pagarés bancarios pueden estar protegidos por el seguro de depósitos del sistema (hasta ciertos límites). Verifica con tu banco el producto específico y los límites aplicables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Un fondo de deuda puede perder valor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los fondos se marcan a mercado: si suben las tasas o hay eventos de crédito, el precio puede bajar. El riesgo varía según el mandato del fondo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo salir cuando quiera en un fondo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente hay liquidez diaria o T+1/T+2; revisa el prospecto del fondo y ventanas de corte.",
        },
      },
      {
        "@type": "Question",
        name: "¿Y si necesito liquidez antes en un pagaré?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usualmente implica penalización o no se permite rescatar antes. Confírmalo con tu banco antes de contratar.",
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
              <div className="h-4 w-px bg-border" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Inicio
                </Link>
              </Button>
            </div>
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
              Usa nuestra calculadora para comparar diferentes opciones de inversión
            </p>
            <Button size="lg" asChild>
              <Link href="/">Ir a la calculadora</Link>
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
