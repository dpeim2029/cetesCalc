"use client"

import type React from "react"

import { useState, useMemo, useCallback, memo } from "react"
import useSWR from "swr"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { Calculator, TrendingUp, Receipt, Banknote, Loader2, HelpCircle } from "lucide-react"
import type { CetesPlazo, CetesRate } from "@/lib/banxico-api"
import { cn } from "@/lib/utils"

const PLAZO_OPTIONS = [
  { value: "28" as CetesPlazo, label: "28 días", days: 28 },
  { value: "91" as CetesPlazo, label: "91 días", days: 91 },
  { value: "182" as CetesPlazo, label: "6 meses", days: 182 },
  { value: "364" as CetesPlazo, label: "1 año", days: 364 },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const CalculationResult = memo(
  ({
    label,
    value,
    icon: Icon,
    tooltip,
    className = "",
    isHighlighted = false,
  }: {
    label: string
    value: string
    icon: any
    tooltip?: string
    className?: string
    isHighlighted?: boolean
  }) => (
    <div
      className={cn(
        "flex items-center justify-between p-3 border rounded-lg",
        isHighlighted && "bg-primary/10 border-2 border-primary",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span className={cn("text-sm", isHighlighted && "font-medium text-primary")}>{label}</span>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <span className={cn("font-semibold", isHighlighted ? "text-xl text-primary" : "text-green-600")}>{value}</span>
    </div>
  ),
)

CalculationResult.displayName = "CalculationResult"

export function CetesCalculator() {
  const [amount, setAmount] = useState<string>("10000")
  const [displayAmount, setDisplayAmount] = useState<string>("10,000")
  const [selectedPlazo, setSelectedPlazo] = useState<CetesPlazo>("91")
  const [isrYear, setIsrYear] = useState<2025 | 2026>(2025)

  const {
    data: ratesResponse,
    error,
    isLoading,
  } = useSWR("/api/cetes-rates", fetcher, {
    refreshInterval: 180000, // Refresh every 3 minutes
    revalidateOnFocus: false,
  })

  const rates = ratesResponse?.data as CetesRate[] | undefined
  const lastUpdated = ratesResponse?.lastUpdated
  const dataSource = ratesResponse?.source

  const currentRate = useMemo(() => {
    if (!rates) return 9.02 // Updated fallback rate to more realistic value
    const rateData = rates.find((r) => r.plazo === selectedPlazo)
    return rateData?.tasa || 9.02
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

    const isrRate = isrYear === 2025 ? 0.005 : 0.009 // 0.50% for 2025, 0.90% for 2026
    const grossReturn = (numericAmount * (currentRate / 100) * days) / 365
    const isrRetention = (numericAmount * isrRate * days) / 365
    const netReturn = grossReturn - isrRetention
    const totalAmount = numericAmount + netReturn

    return {
      grossReturn,
      isrRetention,
      netReturn,
      totalAmount,
    }
  }, [amount, selectedPlazo, currentRate, isrYear])

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(value)
  }, [])

  const formatPercentage = useCallback((value: number) => {
    return `${value.toFixed(2)}%`
  }, [])

  const formatNumberWithCommas = useCallback((value: string) => {
    const numericValue = value.replace(/[^\d]/g, "")
    if (!numericValue) return ""
    return Number(numericValue).toLocaleString("es-MX")
  }, [])

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      const numericValue = inputValue.replace(/[^\d]/g, "")
      setAmount(numericValue)
      setDisplayAmount(formatNumberWithCommas(numericValue))
    },
    [formatNumberWithCommas],
  )

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
                    aria-label={`Seleccionar plazo de ${option.label}${selectedPlazo === option.value ? " (seleccionado)" : ""}`}
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
                    En Vivo
                  </Badge>
                )}
              </div>
            </div>

            {/* Calculation Results */}
            <div className="grid gap-3">
              <CalculationResult
                label="Rendimiento Bruto"
                value={formatCurrency(calculation.grossReturn)}
                icon={Banknote}
                tooltip="(Monto × Tasa × Días) ÷ 365"
              />

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Retención ISR</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p className="text-xs">(Monto × {isrYear === 2025 ? "0.50%" : "0.90%"} × Días) ÷ 365</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-2 ml-2">
                    <span
                      className={cn("text-xs font-medium", isrYear === 2025 ? "text-primary" : "text-muted-foreground")}
                    >
                      2025 (0.50%)
                    </span>
                    <Switch
                      checked={isrYear === 2026}
                      onCheckedChange={(checked) => setIsrYear(checked ? 2026 : 2025)}
                      className="scale-75"
                      aria-label={`Cambiar año de retención ISR. Actualmente seleccionado: ${isrYear} (${isrYear === 2025 ? "0.50%" : "0.90%"})`}
                    />
                    <span
                      className={cn("text-xs font-medium", isrYear === 2026 ? "text-primary" : "text-muted-foreground")}
                    >
                      2026 (0.90%)
                    </span>
                  </div>
                </div>
                <span className="font-semibold text-red-600">-{formatCurrency(calculation.isrRetention)}</span>
              </div>

              <CalculationResult
                label="Rendimiento Neto Total"
                value={formatCurrency(calculation.netReturn)}
                icon={TrendingUp}
                isHighlighted={true}
              />

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
                <span className="text-green-600 font-medium">✓ Datos en tiempo real desde API oficial de Banxico</span>{" "}
                • Última actualización:{" "}
                {lastUpdated
                  ? new Date(lastUpdated).toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Cargando..."}
                <br />
                Tasa de retención ISR provisional {isrYear}: {isrYear === 2025 ? "0.50%" : "0.90%"}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
