import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Educación sobre CETES - Guías y Artículos | Cetes.app",
  description:
    "Aprende todo sobre los Certificados de la Tesorería con nuestras guías prácticas: cómo invertir, ISR, cetesdirecto y más.",
  keywords: "CETES educación, guías CETES, cómo invertir CETES, cetesdirecto tutorial, ISR CETES",
}

const articles = [
  {
    title: "Cómo invertir en CETES paso a paso (guía con cetesdirecto)",
    description:
      "Guía práctica para invertir en CETES usando cetesdirecto: requisitos, mínimos, cómo comprar en subastas, venta anticipada, ISR y consejos.",
    slug: "como-invertir-en-cetes-paso-a-paso",
    readTime: "8 min",
    date: "2025-09-03",
    tags: ["CETES", "cetesdirecto", "ISR", "inversión"],
  },
  {
    title: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
    description:
      "Aprende a calcular el rendimiento bruto y neto de los CETES, incluyendo la retención del ISR y ejemplos prácticos con diferentes montos de inversión.",
    slug: "cuanto-pagan-los-cetes-rendimiento-neto-isr",
    readTime: "6 min",
    date: "2025-09-03",
    tags: ["Rendimiento", "ISR", "Cálculo", "Impuestos"],
  },
  {
    title: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más? (Comparativa práctica)",
    description:
      "Comparativa detallada de los diferentes plazos de CETES con ejemplos numéricos, estrategias de inversión y guía para elegir el plazo óptimo según tus objetivos.",
    slug: "cetes-que-plazo-conviene-comparativa",
    readTime: "10 min",
    date: "2025-09-03",
    tags: ["Plazos", "Estrategias", "Comparativa", "Liquidez"],
  },
  {
    title: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
    description:
      "Guía práctica de impuestos en CETES: retención provisional (LIF 2025), concepto de interés real (LISR), pasos para tu declaración anual, constancias y casos frecuentes.",
    slug: "impuestos-en-cetes-isr-retencion-declaracion",
    readTime: "9 min",
    date: "2025-09-03",
    tags: ["Impuestos", "ISR", "SAT", "Declaración"],
  },
  {
    title: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir? (Guía comparativa)",
    description:
      "Comparativa práctica de CETES, pagarés bancarios y fondos de deuda por rendimiento, liquidez, riesgo, costos y fiscalidad. Incluye escenarios y estrategias.",
    slug: "cetes-vs-pagare-vs-fondos-de-deuda",
    readTime: "10 min",
    date: "2025-09-03",
    tags: ["Comparativa", "Pagarés", "Fondos", "Estrategias"],
  },
  {
    title: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada (guía clara)",
    description:
      "Seguridad de los CETES y sus riesgos: soberano, mercado, liquidez, inflación y operativos. Consejos prácticos para mitigarlos y entender la venta anticipada.",
    slug: "son-seguros-los-cetes-riesgos-liquidez-venta-anticipada",
    readTime: "8 min",
    date: "2025-09-03",
    tags: ["Seguridad", "Riesgos", "Liquidez", "Venta anticipada"],
  },
]

export default function EducacionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Educación sobre CETES</h1>
                <p className="text-muted-foreground">Guías prácticas para invertir inteligentemente</p>
              </div>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Articles Grid */}
          <div className="grid gap-6">
            {articles.map((article) => (
              <Card key={article.slug} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                      <CardDescription className="text-base">{article.description}</CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>
                          {new Date(article.date).toLocaleDateString("es-MX", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <Link href={`/educacion/${article.slug}`}>
                      <Button>
                        Leer artículo
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">¿Listo para invertir en CETES?</h2>
                <p className="text-muted-foreground">
                  Usa nuestra calculadora para estimar tu rendimiento neto después de impuestos
                </p>
                <Button size="lg" asChild>
                  <Link href="/#calculadora">Calcular rendimiento</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
