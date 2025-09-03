import { ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver a Cetes.app
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Aviso Legal</h1>
          </div>

          <p className="text-muted-foreground">Información importante sobre el uso de Cetes.app</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6">
          <section className="bg-primary/10 p-6 rounded-lg border border-primary/20">
            <h2 className="text-xl font-semibold mb-3 text-primary">Independencia del Servicio</h2>
            <p className="text-foreground leading-relaxed">
              <strong>Cetes.app es completamente independiente del Gobierno de México.</strong> No somos
              CetesDirecto.com ni tenemos afiliación alguna con instituciones gubernamentales. Somos una herramienta
              informativa privada e independiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Propósito Informativo</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta herramienta tiene fines exclusivamente informativos y educativos. Los cálculos presentados son
              estimaciones basadas en datos oficiales de Banxico, pero no constituyen asesoría financiera,
              recomendaciones de inversión, ni garantías de rendimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Exactitud de los Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Aunque utilizamos datos oficiales del Sistema de Información Económica (SIE) de Banxico, no podemos
              garantizar que la información esté siempre actualizada en tiempo real. Los usuarios deben verificar la
              información en fuentes oficiales antes de tomar decisiones de inversión.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Limitaciones de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              No nos hacemos responsables por decisiones de inversión tomadas basándose en la información proporcionada
              por esta herramienta. Los rendimientos reales pueden diferir de las estimaciones calculadas debido a
              diversos factores del mercado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Recomendación Oficial</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para realizar inversiones oficiales en Cetes, visite el sitio web oficial del gobierno:
              <a
                href="https://www.cetesdirecto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                www.cetesdirecto.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
