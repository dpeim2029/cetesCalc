import { TrendingUp, Calculator, BarChart3 } from "@/components/icons"

export function BrandHeader() {
  return (
    <header className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg shadow-primary/20 animate-scale-in">
              <TrendingUp className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-foreground tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cetes.app
              </h1>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-medium animate-slide-up">
            La herramienta más precisa para calcular el rendimiento neto de tus inversiones en Cetes
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-slide-up">
            <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-all duration-200">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-card-foreground">Cálculo en Tiempo Real</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-all duration-200">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-card-foreground">Datos Oficiales Banxico</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-all duration-200">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-card-foreground">Incluye ISR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
