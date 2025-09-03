"use client"

import type React from "react"

import { useState, useMemo } from "react"
import useSWR from "swr"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calculator, TrendingUp, Receipt, Banknote, Loader2, HelpCircle } from "lucide-react"
import { calculateNetReturn, type CetesPlazo, type CetesRate } from "@/lib/banxico-api"
import { cn } from "@/lib/utils"

const PLAZO_OPTIONS = [
  { value: "28" as CetesPlazo, label: "28 días", days: 28 },
  { value: "91" as CetesPlazo, label: "91 días", days: 91 },
  { value: "182" as CetesPlazo, label: "6 meses", days: 182 },
  { value: "364" as CetesPlazo, label: "1 año", days: 364 },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function CetesCalculator() {
  const [amount, setAmount] = useState<string>("10000")
  const [displayAmount, setDisplayAmount] = useState<string>("10,000")
  const [selectedPlazo, setSelectedPlazo] = useState<CetesPlazo>("91")

  const {
    data: ratesResponse,
    error,
    isLoading,
  } = useSWR("/api/cetes-rates", fetcher, {
    refreshInterval: 300000, // Refresh every 5 minutes
    revalidateOnFocus: false,
  })

  const rates = ratesResponse?.data as CetesRate[] | undefined

  const currentRate = useMemo(() => {
    if (!rates) return 10.45 // Fallback rate while loading
    const rateData = rates.find((r) => r.plazo === selectedPlazo)
    return rateData?.tasa || 10.45
  }, [rates, selectedPlazo])

  const currentRateData = useMemo(() => {
    if (!rates) return null
    return rates.find((r) => r.plazo === selectedPlazo)
  }, [rates, selectedPlazo])

  const calculation = useMemo(() => {
    const numericAmount = Number.parseFloat(amount) || 0
    const days = PLAZO_OPTIONS.find((p) => p.value === selectedPlazo)?.days || 91

    if (numericAmount <= 0) {
      return {
        grossReturn: 0,
        isrRetention: 0,
        netReturn: 0,
        totalAmount: 0,
      }
    }

    return calculateNetReturn(numericAmount, currentRate, days)
  }, [amount, selectedPlazo, currentRate])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`
  }

  const formatNumberWithCommas = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, "")
    if (!numericValue) return ""
    return Number(numericValue).toLocaleString("es-MX")
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const numericValue = inputValue.replace(/[^\d]/g, "")
    setAmount(numericValue)
    setDisplayAmount(formatNumberWithCommas(numericValue))
  }

  return (
    <TooltipProvider>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl font-bold">Rendimiento de CETES</CardTitle>
          </div>
          <CardDescription>Simula tu rendimiento neto después de impuestos en tiempo real</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium">
                Monto a Invertir (MXN)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  type="text"
                  value={displayAmount}
                  onChange={handleAmountChange}
                  placeholder="10,000"
                  className="pl-8 text-lg font-medium"
                />
              </div>
            </div>

            {/* Plazo Selection - Segmented Control */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Plazo de Inversión</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {PLAZO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedPlazo(option.value)}
                    className={cn(
                      "px-4 py-3 rounded-lg border text-sm font-medium transition-all",
                      "hover:bg-accent hover:text-accent-foreground",
                      selectedPlazo === option.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-card-foreground border-border",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Results Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Desglose de Rendimiento</h3>
            </div>

            {/* Current Rate */}
            <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <span className="text-sm text-muted-foreground">Tasa Aplicada (anual)</span>
              <div className="flex items-center gap-2">
                {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
                <Badge variant="secondary" className="text-base font-semibold">
                  {formatPercentage(currentRate)}
                </Badge>
                {currentRateData && (
                  <Badge
                    variant={currentRateData.source === "api" ? "default" : "outline"}
                    className={cn(
                      "text-xs",
                      currentRateData.source === "api"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-yellow-100 text-yellow-800 border-yellow-200",
                    )}
                  >
                    {currentRateData.source === "api" ? "API Banxico" : "Datos Ref."}
                  </Badge>
                )}
              </div>
            </div>

            {/* Calculation Results */}
            <div className="grid gap-3">
              {/* Gross Return */}
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Banknote className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Rendimiento Bruto</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p className="text-xs">(Monto × Tasa × Días) ÷ 365</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-semibold text-green-600">{formatCurrency(calculation.grossReturn)}</span>
              </div>

              {/* ISR Retention */}
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Retención ISR (0.50%)
                    <span className="text-xs text-muted-foreground ml-1">2025</span>
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p className="text-xs">(Monto × 0.50% × Días) ÷ 365</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="font-semibold text-red-600">-{formatCurrency(calculation.isrRetention)}</span>
              </div>

              {/* Net Return - Most Prominent */}
              <div className="flex items-center justify-between p-4 bg-primary/10 border-2 border-primary rounded-lg">
                <span className="font-medium text-primary">Rendimiento Neto Total</span>
                <span className="text-xl font-bold text-primary">{formatCurrency(calculation.netReturn)}</span>
              </div>

              {/* Total Amount */}
              <div className="flex items-center justify-between p-3 bg-accent/10 border border-accent rounded-lg">
                <span className="font-medium">Total a Recibir</span>
                <span className="text-lg font-bold text-foreground">{formatCurrency(calculation.totalAmount)}</span>
              </div>

              <div className="text-center p-2 text-sm text-muted-foreground bg-muted/30 rounded-lg">
                {(() => {
                  const today = new Date()
                  const days = PLAZO_OPTIONS.find((p) => p.value === selectedPlazo)?.days || 91
                  const maturityDate = new Date(today)
                  maturityDate.setDate(today.getDate() + days)

                  const formatDate = (date: Date) => {
                    return date.toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  }

                  return `Inversión realizada el ${formatDate(today)}, vence el ${formatDate(maturityDate)}`
                })()}
              </div>
            </div>
          </div>

          {/* Data Source Note */}
          <div className="text-xs text-muted-foreground text-center pt-2 border-t">
            {error ? (
              <span className="text-red-500">Error al obtener tasas • Usando tasas de referencia</span>
            ) : (
              <>
                {currentRateData?.source === "api" ? (
                  <>
                    <span className="text-green-600 font-medium">✓ Datos en tiempo real de Banxico</span> • Última
                    actualización:{" "}
                    {new Date().toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </>
                ) : (
                  <>
                    <span className="text-yellow-600 font-medium">⚠ Usando datos de referencia</span> • Solo tasa de 28
                    días disponible vía API • Otras tasas: datos oficiales del{" "}
                    {currentRateData?.lastUpdated || "31/03/2025"}
                  </>
                )}
                <br />
                Tasa de retención ISR provisional 2025: 0.50%
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
