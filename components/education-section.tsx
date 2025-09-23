"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, Calculator } from "@/components/icons"
import Link from "next/link"

const articles = [
  {
    title: "Aumenta la retención de ISR sobre CETES en 2026: ¿cómo afecta tu inversión?",
    description:
      "Descubre cómo el aumento de la retención de ISR del 0.50% al 0.90% en 2026 afectará tus inversiones en CETES. Guía práctica con ejemplos.",
    slug: "aumenta-retencion-isr-cetes-2026",
    readTime: "7 min",
    tags: ["ISR", "2026", "Retención", "Impuestos"],
  },
  {
    title: "Cómo invertir en CETES paso a paso (guía con cetesdirecto)",
    description:
      "Guía práctica para invertir en CETES usando cetesdirecto: requisitos, mínimos, cómo comprar en subastas, venta anticipada, ISR y consejos.",
    slug: "como-invertir-en-cetes-paso-a-paso",
    readTime: "8 min",
    tags: ["CETES", "cetesdirecto", "ISR", "inversión"],
  },
  {
    title: "¿Cuánto pagan los CETES? Cálculo del rendimiento neto (incluye ISR)",
    description:
      "Aprende a estimar el rendimiento bruto y neto de los CETES: fórmula de precio, tasa anualizada, retención de ISR y ejemplos prácticos.",
    slug: "cuanto-pagan-los-cetes-rendimiento-neto-isr",
    readTime: "6 min",
    tags: ["Rendimiento", "ISR", "Cálculo", "Fórmulas"],
  },
  {
    title: "CETES 28, 91, 182 y 364 días: ¿qué plazo conviene más?",
    description:
      "Comparativa práctica de plazos CETES: rendimiento vs liquidez, estrategias (escalera, barbell), escenarios de tasas y cómo elegir según tus objetivos.",
    slug: "cetes-que-plazo-conviene-comparativa",
    readTime: "7 min",
    tags: ["Plazos", "Estrategias", "Comparativa", "Liquidez"],
  },
  {
    title: "Impuestos en CETES: ISR, retención y cómo declararlos (guía 2025)",
    description:
      "Guía práctica de impuestos en CETES: retención provisional (LIF 2025), concepto de interés real (LISR), pasos para tu declaración anual, constancias y casos frecuentes.",
    slug: "impuestos-en-cetes-isr-retencion-declaracion",
    readTime: "9 min",
    tags: ["Impuestos", "ISR", "SAT", "Declaración"],
  },
  {
    title: "CETES vs pagaré bancario vs fondos de deuda: ¿cuál elegir?",
    description:
      "Comparativa práctica de CETES, pagarés bancarios y fondos de deuda: rendimiento, liquidez, riesgo, costos y fiscalidad. Incluye escenarios y estrategias.",
    slug: "cetes-vs-pagare-vs-fondos-de-deuda",
    readTime: "10 min",
    tags: ["Comparativa", "Pagarés", "Fondos", "Estrategias"],
  },
  {
    title: "¿Son seguros los CETES? Riesgos, liquidez y venta anticipada",
    description:
      "Seguridad de los CETES y sus riesgos: soberano, mercado, liquidez, inflación y operativos. Consejos prácticos para mitigarlos y venta anticipada.",
    slug: "son-seguros-los-cetes-riesgos-liquidez-venta-anticipada",
    readTime: "8 min",
    tags: ["Seguridad", "Riesgos", "Liquidez", "Venta anticipada"],
  },
]

export function EducationSection() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl font-bold">Educación sobre CETES</CardTitle>
        </div>
        <CardDescription>
          Aprende todo sobre los Certificados de la Tesorería con nuestras guías prácticas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Articles Grid */}
        <div className="grid gap-4 md:grid-cols-1">
          {articles.map((article) => (
            <Link key={article.slug} href={`/educacion/${article.slug}`} className="block">
              <div className="border rounded-lg p-4 hover:bg-muted/50 hover:shadow-md transition-all duration-200 cursor-pointer group">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <div className="flex gap-1">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-muted px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to Calculator */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/calculadora">
              Calcular rendimiento de CETES
              <Calculator className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* View All Articles */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/educacion">
              Ver todos los artículos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
