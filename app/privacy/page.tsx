import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Política de Privacidad</h1>
          </div>

          <p className="text-muted-foreground">Última actualización: 2 de septiembre de 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cetes.app es una herramienta de cálculo que funciona completamente en su navegador. No recopilamos,
              almacenamos ni procesamos información personal de los usuarios. Todos los cálculos se realizan localmente
              en su dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Datos de Uso</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos servicios de análisis web básicos (como Vercel Analytics) para entender el uso general del
              sitio, pero estos datos son anónimos y agregados. No podemos identificar usuarios individuales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Este sitio puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de
              seguimiento o publicitarias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Fuentes de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos de tasas de Cetes provienen exclusivamente del Sistema de Información Económica (SIE) de
              Banxico, la fuente oficial del Banco de México.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de los canales
              disponibles en nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
