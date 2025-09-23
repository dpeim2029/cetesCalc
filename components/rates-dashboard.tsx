"use client"

import { memo } from "react"
import useSWR from "@/hooks/use-swr"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock, Loader2, AlertCircle } from "@/components/icons"
import { cn } from "@/lib/utils"
import type { CetesRate } from "@/lib/banxico-api"

const PLAZO_LABELS = {
  "28": "CETES 28 días",
  "91": "CETES 91 días",
  "182": "CETES 6 meses",
  "364": "CETES 1 año",
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const RateCard = memo(({ rate }: { rate: CetesRate }) => {
  const getTrendIcon = (tendencia?: "up" | "down" | "neutral") => {
    switch (tendencia) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-muted-foreground" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-muted-foreground" />
      default:
        return <TrendingUp className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getTrendColor = (tendencia?: "up" | "down" | "neutral") => {
    switch (tendencia) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-muted-foreground"
    }
  }

  const formatDifference = (diferencia?: number) => {
    if (!diferencia || diferencia === 0) return "0 pb"
    const sign = diferencia > 0 ? "+" : ""
    return `${sign}${(diferencia * 100).toFixed(0)} pb`
  }

  return (
    <div className="p-4 border rounded-lg bg-card hover:bg-accent/5 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">{PLAZO_LABELS[rate.plazo]}</span>
        <div className="flex items-center gap-1">
          {getTrendIcon(rate.tendencia)}
          <div className="flex items-center gap-1 ml-1">
            <div className={cn("w-2 h-2 rounded-full", rate.source === "api" ? "bg-green-500" : "bg-yellow-500")} />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-2xl font-bold text-foreground">{rate.tasa.toFixed(2)}%</div>

        {rate.diferencia !== undefined && (
          <div className={`text-xs font-medium ${getTrendColor(rate.tendencia)}`}>
            {formatDifference(rate.diferencia)}
          </div>
        )}
      </div>
    </div>
  )
})

RateCard.displayName = "RateCard"

export function RatesDashboard() {
  const {
    data: ratesResponse,
    error,
    isLoading,
  } = useSWR("/api/cetes-rates", fetcher, {
    refreshInterval: 300000, // Refresh every 5 minutes
    revalidateOnFocus: false,
  })

  const rates = ratesResponse?.data as CetesRate[] | undefined
  const lastUpdated = ratesResponse?.lastUpdated

  const apiCount = rates?.filter((r) => r.source === "api").length || 0
  const fallbackCount = rates?.filter((r) => r.source === "fallback").length || 0

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Cargando..."
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    } catch {
      return dateString
    }
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="flex items-center justify-center p-8">
          <div className="text-center space-y-2">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
            <p className="text-sm text-muted-foreground">Error al cargar las tasas de Banxico</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl font-bold">Tasas CETES Banxico</CardTitle>
        </div>
        <CardDescription>
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Cargando tasas actuales...
            </div>
          ) : (
            `Datos actualizados a la última subasta de Banxico: ${rates?.[0]?.fecha || formatDate(lastUpdated)}`
          )}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 border rounded-lg bg-card">
                  <div className="animate-pulse space-y-2">
                    <div className="h-4 bg-muted rounded w-16" />
                    <div className="h-8 bg-muted rounded w-20" />
                    <div className="h-3 bg-muted rounded w-12" />
                  </div>
                </div>
              ))
            : rates?.map((rate) => <RateCard key={rate.plazo} rate={rate} />)}
        </div>

        <div className="mt-6 space-y-3">
          {/* Data Source Summary */}
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-green-700 font-medium">
                {apiCount} tasa{apiCount !== 1 ? "s" : ""} en tiempo real
              </span>
            </div>
            {fallbackCount > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-yellow-700 font-medium">
                  {fallbackCount} tasa{fallbackCount !== 1 ? "s" : ""} de referencia
                </span>
              </div>
            )}
          </div>

          {/* Main Status */}
          <div
            className={cn(
              "p-3 border rounded-lg",
              apiCount === 4 ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200",
            )}
          >
            <div className="flex items-center gap-2 text-sm">
              <div
                className={cn("w-2 h-2 rounded-full", apiCount === 4 ? "bg-green-500 animate-pulse" : "bg-yellow-500")}
              />
              <span className={cn("font-medium", apiCount === 4 ? "text-green-700" : "text-yellow-700")}>
                {apiCount === 4
                  ? "Todas las tasas provienen de la API oficial de Banxico"
                  : `Solo ${apiCount} de 4 tasas disponibles vía API • Las demás son datos oficiales de referencia`}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
