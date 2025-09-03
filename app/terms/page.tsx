import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Términos de Uso</h1>
          </div>

          <p className="text-muted-foreground">Última actualización: 2 de septiembre de 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Aceptación de Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al utilizar Cetes.app, usted acepta estos términos de uso. Si no está de acuerdo con alguno de estos
              términos, no utilice este servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Naturaleza del Servicio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cetes.app es una herramienta informativa independiente para el cálculo de rendimientos de Cetes.{" "}
              <strong>No somos CetesDirecto.com ni estamos afiliados al Gobierno de México.</strong>
              Este servicio es únicamente informativo y educativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los cálculos proporcionados son estimaciones basadas en datos oficiales de Banxico. No garantizamos la
              exactitud absoluta de los resultados. Los rendimientos reales pueden variar. Esta herramienta no
              constituye asesoría financiera.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Fuentes de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos datos del Sistema de Información Económica (SIE) de Banxico. Aunque nos esforzamos por mantener
              la información actualizada, no podemos garantizar que los datos estén siempre actualizados en tiempo real.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Uso Apropiado</h2>
            <p className="text-muted-foreground leading-relaxed">
              Este servicio está destinado para uso personal e informativo. No debe utilizarse como única base para
              decisiones de inversión. Siempre consulte fuentes oficiales y considere obtener asesoría financiera
              profesional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en
              vigor inmediatamente después de su publicación.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
