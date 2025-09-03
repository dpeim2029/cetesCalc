import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, ExternalLink } from "lucide-react"

export function LegalDisclaimer() {
  return (
    <div className="space-y-4">
      {/* Main Disclaimer - Prominent */}
      <Alert className="border-primary/30 bg-primary/10">
        <AlertTriangle className="h-5 w-5 text-primary" />
        <AlertDescription className="text-sm leading-relaxed">
          <strong className="text-primary">Aviso Importante:</strong> Cetes.app es una herramienta informativa
          independiente. <strong>No es CetesDirecto.com ni está afiliada al Gobierno de México.</strong> Los cálculos
          son referenciales y no constituyen asesoría financiera. Para inversiones oficiales, visite{" "}
          <a
            href="https://www.cetesdirecto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            CetesDirecto.com
            <ExternalLink className="h-3 w-3" />
          </a>
        </AlertDescription>
      </Alert>

      {/* Additional Legal Notice */}
      <div className="text-xs text-muted-foreground text-center p-3 bg-secondary/50 rounded-lg">
        <p>
          Esta herramienta utiliza datos oficiales del Sistema de Información Económica (SIE) de Banxico para
          proporcionar cálculos informativos. Los resultados son estimaciones y pueden variar de los rendimientos
          reales.
        </p>
      </div>
    </div>
  )
}
