import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Cómo invertir en CETES paso a paso (guía con cetesdirecto) | Cetes.app",
  description:
    "Guía práctica para invertir en CETES usando cetesdirecto: requisitos, mínimos, cómo comprar en subastas, venta anticipada, ISR y consejos. Incluye CTA a la calculadora de rendimiento neto.",
  keywords: "CETES, cetesdirecto, ISR, inversión, México, guía paso a paso, subasta primaria",
}

export default function ComoInvertirEnCetes() {
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
          <h1>Cómo invertir en CETES paso a paso (guía con cetesdirecto)</h1>

          <blockquote>
            Esta guía te explica <strong>qué son los CETES</strong>,{" "}
            <strong>cómo abrir tu cuenta en cetesdirecto</strong>, <strong>enviar dinero</strong>,{" "}
            <strong>comprar en subasta</strong>, <strong>vender anticipadamente</strong> y{" "}
            <strong>qué impuestos aplican</strong>. Al final encontrarás un <strong>CTA</strong> para usar la{" "}
            <strong>calculadora de rendimiento neto</strong> del Home.
          </blockquote>

          <h2>¿Qué son los CETES y por qué usarlos?</h2>

          <p>
            Los <strong>Certificados de la Tesorería de la Federación (CETES)</strong> son valores emitidos por el
            Gobierno de México. Se compran <strong>a descuento</strong> y al vencimiento recibes su{" "}
            <strong>valor nominal de $10</strong>, por lo que tu ganancia es la diferencia entre lo que pagaste y esos
            $10. Los plazos típicos son <strong>28, 91, 182 y 364 días</strong> (y otros que publique el emisor).
          </p>

          <p>
            <strong>Ventajas clave con cetesdirecto</strong>
          </p>
          <ul>
            <li>
              <strong>Sin comisiones ni penalizaciones</strong> por manejo o transacción.
            </li>
            <li>
              <strong>Desde $100 MXN</strong> por inversión y hasta <strong>10 millones</strong>.
            </li>
            <li>
              Compra directa en <strong>subasta primaria</strong> (Banco de México como agente financiero de SHCP).
            </li>
          </ul>

          <blockquote>
            <em>Tip:</em> Antes de invertir, define un objetivo (p. ej. fondo de emergencia, metas a 3–12 meses) y tu
            horizonte de liquidez.
          </blockquote>

          <hr />

          <h2>Requisitos para abrir tu cuenta</h2>

          <ul>
            <li>
              <strong>Ser mayor de edad</strong> (mexicano o extranjero residente).
            </li>
            <li>
              <strong>Cuenta bancaria a la vista (CLABE) en México</strong>.
            </li>
            <li>
              <strong>CURP y RFC</strong>.
            </li>
            <li>
              <strong>Domicilio con CP</strong>, <strong>correo</strong> y <strong>celular</strong>.
            </li>
          </ul>

          <p>
            La activación es <strong>en línea</strong> con firma electrónica simple; si luego necesitas límites más
            altos, podrás <strong>escalar</strong> con <strong>e.firma</strong> (FIEL) o trámite presencial.
          </p>

          <h3>Límites y mínimos</h3>

          <ul>
            <li>
              <strong>Mínimo por inversión: $100 MXN</strong>.
            </li>
            <li>
              <strong>Ahorro Recurrente</strong> (cargo automático) para CETES a <strong>3 meses</strong>:{" "}
              <strong>mínimo $300</strong> por cargo (máx. $24,000 por cargo).
            </li>
            <li>
              <strong>Sin comisiones</strong> por operar.
            </li>
          </ul>

          <blockquote>
            <em>Horario SPEI</em>: si el envío entra <strong>antes de las 13:00 (CDMX)</strong> en día hábil bancario,
            se <strong>abona el mismo día</strong>; después, <strong>al siguiente día hábil</strong>.
          </blockquote>

          <hr />

          <h2>Paso a paso: cómo invertir en CETES con cetesdirecto</h2>

          <h3>1) Abre y activa tu cuenta</h3>
          <p>
            Regístrate en el portal/app, valida tu información y vincula tu <strong>CLABE</strong>. Tu cuenta queda{" "}
            <strong>operativa</strong> tras completar el expediente básico.
          </p>

          <h3>2) Envía recursos a tu cuenta</h3>
          <ul>
            <li>
              <strong>Transferencia (SPEI)</strong> → llega a tu <strong>Inversión Líquida</strong> en cetesdirecto.
            </li>
            <li>
              <strong>Domiciliación</strong> → cargos automáticos programados desde tu banco.
            </li>
          </ul>

          <blockquote>
            <em>Importante:</em> Transferencias recibidas <strong>antes de las 13:00</strong> se aplican el mismo día;
            después, al siguiente día hábil.
          </blockquote>

          <h3>3) Programa tu compra en la subasta</h3>
          <p>
            Entra a <strong>Comprar → CETES</strong>:
          </p>
          <ol>
            <li>
              Elige <strong>plazo</strong> (28, 91, 182, 364…).
            </li>
            <li>
              Selecciona la <strong>subasta (semana)</strong>.
            </li>
            <li>
              Captura el <strong>monto</strong> y el <strong>medio de pago</strong> (Inversión Líquida o Domiciliación).
            </li>
          </ol>

          <p>
            <strong>Calendario de subastas</strong>
          </p>
          <ul>
            <li>
              <strong>Los viernes</strong> se publican las <strong>convocatorias</strong>.
            </li>
            <li>
              <strong>El martes siguiente</strong> se realiza la <strong>subasta primaria</strong>.
            </li>
            <li>
              Debes <strong>registrar tu postura a más tardar el día hábil previo</strong> (típicamente{" "}
              <strong>lunes</strong>).
            </li>
            <li>
              <strong>Fondéate</strong> a más tardar <strong>13:00 (CDMX)</strong> del{" "}
              <strong>día de la subasta</strong> para que se ejecute tu instrucción.
            </li>
          </ul>

          <h3>4) ¿Cuándo ves tu compra?</h3>
          <p>
            La asignación se realiza conforme al proceso de subasta; puedes revisar tu posición en tu sesión y consultar{" "}
            <strong>resultados</strong> oficiales.
          </p>

          <h3>5) ¿Qué pasa al vencimiento?</h3>
          <p>Antes de vencer, indica si deseas:</p>
          <ul>
            <li>
              <strong>Reinvertir automáticamente</strong>,
            </li>
            <li>
              <strong>Recibir en tu cuenta bancaria</strong>, o
            </li>
            <li>
              <strong>Mover a Inversión Líquida</strong>.
            </li>
          </ul>

          <p>
            Registra estas <strong>instrucciones al vencimiento</strong> <strong>hasta 3 días hábiles</strong> previos,{" "}
            <strong>antes de las 13:00 (CDMX)</strong>.
          </p>

          <hr />

          <h2>¿Puedo vender antes del vencimiento?</h2>

          <p>
            Sí. Puedes hacer <strong>venta anticipada</strong> de CETES <strong>hasta 3 días hábiles</strong> previos al
            vencimiento y <strong>antes de las 13:00 (CDMX)</strong>, al <strong>precio de mercado</strong> que provee
            el <strong>Proveedor de Precios</strong> (NAFIN). <strong>No hay penalización</strong>.
          </p>

          <p>
            <strong>Restricciones:</strong>
          </p>
          <ul>
            <li>
              Si <strong>compraste por Domiciliación</strong>, solo podrás vender cuando hayan transcurrido{" "}
              <strong>al menos 90 días</strong> desde el inicio de la inversión.
            </li>
            <li>
              Si vendes y solicitas <strong>retiro antes de las 13:00 (CDMX)</strong> en día hábil, el depósito se abona{" "}
              <strong>el mismo día</strong>; después, <strong>al siguiente día hábil</strong>.
            </li>
          </ul>

          <blockquote>
            <em>Recuerda:</em> Al vender anticipadamente, el precio puede ser <strong>mayor o menor</strong> al que
            pagaste según el mercado.
          </blockquote>

          <hr />

          <h2>Impuestos (ISR) sobre tus rendimientos</h2>

          <p>
            La <strong>retención anual provisional</strong> de ISR sobre intereses <strong>para 2025 es 0.50%</strong>{" "}
            (Ley de Ingresos de la Federación 2025, Art. 21). Esta retención <strong>no es impuesto definitivo</strong>:
            es un <strong>adelanto</strong> que se ajusta en tu declaración anual según tu situación fiscal.
          </p>

          <blockquote>
            En cetesdirecto puedes descargar tu <strong>constancia anual</strong> de intereses/retenciones para tu
            declaración.
          </blockquote>

          <hr />

          <h2>Mejores prácticas y tips rápidos</h2>

          <ul>
            <li>
              <strong>Comisiones</strong>: cetesdirecto <strong>no cobra</strong> comisiones ni penalizaciones.
            </li>
            <li>
              <strong>Mínimo</strong>: desde <strong>$100 MXN</strong> por inversión.
            </li>
            <li>
              <strong>Calendario</strong>: revisa <strong>convocatorias (viernes)</strong> y{" "}
              <strong>resultados (martes)</strong> cada semana.
            </li>
            <li>
              <strong>Ahorro Recurrente</strong>: útil para automatizar aportes (mínimo <strong>$300</strong>, CETES a{" "}
              <strong>3 meses</strong>).
            </li>
            <li>
              <strong>Liquidez</strong>: si puedes necesitar el dinero <strong>antes</strong>, considera el{" "}
              <strong>riesgo de precio</strong> en venta anticipada.
            </li>
          </ul>

          <hr />

          <Card className="my-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Calcula tu rendimiento neto</h2>
                </div>
                <p className="text-muted-foreground">
                  ¿Cuánto te quedaría en mano? Usa nuestra calculadora para estimar el rendimiento neto (incluye ISR)
                  con tu monto y plazo.
                </p>
                <Button size="lg" asChild>
                  <Link href="/#calculadora">Abrir calculadora</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <hr />

          <h2>Preguntas frecuentes (FAQ)</h2>

          <h3>¿Cuál es el mínimo para invertir en CETES por cetesdirecto?</h3>
          <p>
            <strong>$100 MXN</strong> por inversión (y <strong>$300</strong> por cargo en{" "}
            <strong>Ahorro Recurrente</strong> a 3 meses).
          </p>

          <h3>¿Qué documentos necesito para abrir mi cuenta?</h3>
          <p>
            <strong>CLABE</strong>, <strong>CURP</strong>, <strong>RFC</strong>, domicilio con <strong>CP</strong>,{" "}
            <strong>correo</strong> y <strong>celular</strong>. Mayores de edad (mexicanos o extranjeros residentes).
          </p>

          <h3>¿Cuándo debo programar la compra para entrar a la subasta?</h3>
          <p>
            A más tardar <strong>el día hábil previo</strong> a la subasta (usualmente <strong>lunes</strong>). Fondéate{" "}
            <strong>antes de las 13:00 (CDMX)</strong> del <strong>día de la subasta</strong>.
          </p>

          <h3>¿Puedo vender antes del vencimiento?</h3>
          <p>
            Sí, <strong>hasta 3 días hábiles previos</strong> y <strong>antes de las 13:00 (CDMX)</strong>; precio de
            mercado, <strong>sin penalización</strong>. Si compraste por <strong>Domiciliación</strong>,{" "}
            <strong>espera 90 días</strong> desde el inicio.
          </p>

          <h3>¿Qué ISR me retienen en 2025?</h3>
          <p>
            La <strong>retención anual</strong> provisional es <strong>0.50%</strong> (LIF 2025). Se ajusta en tu{" "}
            <strong>declaración anual</strong> según tu caso.
          </p>

          <hr />

          <h2>Nota legal</h2>

          <p>
            Contenido <strong>informativo y educativo</strong>. <strong>No</strong> es asesoría financiera o fiscal
            personalizada. Verifica siempre el <strong>calendario de subastas</strong> y las{" "}
            <strong>reglas de operación</strong> vigentes antes de invertir.
          </p>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Cómo invertir en CETES paso a paso (guía con cetesdirecto)",
            description:
              "Guía práctica para invertir en CETES con cetesdirecto: requisitos, mínimos, subastas, venta anticipada e impuestos (ISR), con calculadora de rendimiento neto.",
            author: { "@type": "Person", name: "cetes.app" },
            publisher: { "@type": "Organization", name: "cetes.app" },
            datePublished: "2025-09-03",
            dateModified: "2025-09-03",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.cetes.app/educacion/como-invertir-en-cetes-paso-a-paso",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuál es el mínimo para invertir en CETES por cetesdirecto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "$100 MXN por inversión (y $300 por cargo en Ahorro Recurrente a 3 meses).",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué documentos necesito para abrir mi cuenta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CLABE, CURP, RFC, domicilio con CP, correo y celular. Mayores de edad (mexicanos o extranjeros residentes).",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuándo debo programar la compra para entrar a la subasta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A más tardar el día hábil previo (usualmente lunes). Fondéate antes de las 13:00 (CDMX) del día de la subasta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo vender antes del vencimiento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, hasta 3 días hábiles previos y antes de las 13:00 (CDMX); precio de mercado, sin penalización. Si compraste por Domiciliación, espera 90 días desde el inicio.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué ISR me retienen en 2025?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La retención anual provisional es 0.50% (LIF 2025). Se ajusta en tu declaración anual según tu caso.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
