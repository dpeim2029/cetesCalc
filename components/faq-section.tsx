"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "¿Qué son los Cetes (Certificados de la Tesorería)?",
    answer:
      "Los Cetes son instrumentos de deuda emitidos por el Gobierno Federal mexicano. Al invertir en ellos, básicamente estás prestando dinero al gobierno, quien te lo devolverá al vencimiento junto con un rendimiento previamente pactado. Se consideran inversiones de bajo riesgo y son ideales para perfiles conservadores.",
  },
  {
    question: "¿Es seguro invertir en Cetes?",
    answer:
      "Sí. Invertir en Cetes es una de las formas más seguras de invertir en México, ya que están respaldados por el Gobierno Federal. Esto significa que el riesgo de impago es extremadamente bajo, incluso más bajo que en inversiones bancarias o corporativas.",
  },
  {
    question: "¿Cómo funciona esta calculadora y de dónde provienen los datos?",
    answer: (
      <>
        La calculadora de Cetes.app utiliza datos oficiales de{" "}
        <a
          href="https://www.banxico.org.mx"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          Banxico (Banco de México)
        </a>{" "}
        obtenidos a través de su API pública. Esto asegura transparencia y actualización constante de tasas y fechas de
        subasta. Todos los cálculos de rendimiento están basados en fórmulas estandarizadas del mercado.
      </>
    ),
  },
  {
    question: "¿Cómo se calculan los impuestos (ISR) sobre los Cetes?",
    answer:
      "El rendimiento de los Cetes está sujeto al Impuesto Sobre la Renta (ISR). El SAT establece cada año una tasa de retención provisional, que en 2025 es del 0.50% anual sobre el monto invertido (no sobre el rendimiento). Este impuesto se retiene automáticamente por la institución donde realizas la inversión.",
  },
  {
    question: "¿Cuándo son las subastas de Cetes y cuándo se actualizan las tasas?",
    answer:
      "Las subastas de Cetes se realizan cada martes por el Banco de México. En ellas se determina la tasa de rendimiento de los Cetes a diferentes plazos (28, 91, 182 y 364 días). Las tasas disponibles en nuestra calculadora se actualizan automáticamente después de cada subasta.",
  },
  {
    question: "¿Cómo puedo invertir en Cetes?",
    answer: (
      <>
        Puedes invertir directamente a través de:{" "}
        <a
          href="https://www.cetesdirecto.com"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          Cetesdirecto.com
        </a>
        , la plataforma oficial del gobierno. Casas de bolsa y plataformas fintech como{" "}
        <a
          href="https://gbm.com"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          GBM+
        </a>
        ,{" "}
        <a
          href="https://kuspit.com"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          Kuspit
        </a>{" "}
        o{" "}
        <a
          href="https://finamex.com"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          Finamex
        </a>
        . Solo necesitas: Tener una cuenta en alguna de estas plataformas. Transferir fondos desde tu banco. Elegir el
        plazo (28, 91, 182 o 364 días). Confirmar tu inversión.
      </>
    ),
  },
  {
    question: "¿Cuánto dinero necesito para comenzar?",
    answer: (
      <>
        Puedes empezar a invertir en CETES desde $100 pesos a través de{" "}
        <a
          href="https://www.cetesdirecto.com"
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-primary hover:underline"
        >
          Cetesdirecto
        </a>
        . Es una opción accesible para cualquier persona que quiera comenzar a generar rendimientos sin tomar grandes
        riesgos.
      </>
    ),
  },
]

export function FAQSection() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground">Todo lo que necesitas saber sobre los Cetes</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4 bg-card">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                {typeof faq.answer === "string" ? faq.answer : faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
