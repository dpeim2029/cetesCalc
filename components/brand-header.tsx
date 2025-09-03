import { TrendingUp, Calculator, BarChart3 } from "lucide-react"

export function BrandHeader() {
  return (
    <header className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary rounded-xl">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-foreground">Cetes.app</h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            La herramienta más precisa para calcular el rendimiento neto de tus inversiones en Cetes
          </p>

          {/* Features Icons */}
          <div className="flex items-center gap-8 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calculator className="h-4 w-4 text-primary" />
              <span>Cálculo en Tiempo Real</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>Datos Oficiales Banxico</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Incluye ISR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
