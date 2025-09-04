"use client"

import { useState, useMemo } from "react"
import useSWR from "swr"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

const TIME_PERIODS = [
  { value: "6M", label: "6 Meses" },
  { value: "1Y", label: "1 Año", default: true },
  { value: "5Y", label: "5 Años" },
  { value: "MAX", label: "Máximo" },
]

const PLAZO_OPTIONS = [
  { value: "28", label: "28 días", color: "#15803d", visible: true },
  { value: "91", label: "91 días", color: "#f59e0b", visible: true },
  { value: "182", label: "6 meses", color: "#dc2626", visible: false },
  { value: "364", label: "1 año", color: "#be123c", visible: false },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function HistoricalChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("1Y")
  const [visibleSeries, setVisibleSeries] = useState(
    PLAZO_OPTIONS.reduce((acc, option) => ({ ...acc, [option.value]: option.visible }), {}),
  )

  console.log("[v0] Visible series state:", visibleSeries)
  console.log(
    "[v0] Has visible series:",
    Object.values(visibleSeries).some((visible) => visible),
  )

  const query28 = useSWR(`/api/historical-data?plazo=28&period=${selectedPeriod}`, fetcher, {
    refreshInterval: 600000,
    revalidateOnFocus: false,
  })

  const query91 = useSWR(`/api/historical-data?plazo=91&period=${selectedPeriod}`, fetcher, {
    refreshInterval: 600000,
    revalidateOnFocus: false,
  })

  const query182 = useSWR(`/api/historical-data?plazo=182&period=${selectedPeriod}`, fetcher, {
    refreshInterval: 600000,
    revalidateOnFocus: false,
  })

  const query364 = useSWR(`/api/historical-data?plazo=364&period=${selectedPeriod}`, fetcher, {
    refreshInterval: 600000,
    revalidateOnFocus: false,
  })

  const queries = {
    "28": query28,
    "91": query91,
    "182": query182,
    "364": query364,
  }

  const isLoading = Object.values(queries).some((query) => query.isLoading)
  const hasError = Object.values(queries).some((query) => query.error)
  const hasVisibleSeries = Object.values(visibleSeries).some((visible) => visible)

  console.log("[v0] Chart states - isLoading:", isLoading, "hasError:", hasError, "hasVisibleSeries:", hasVisibleSeries)

  const chartData = useMemo(() => {
    if (isLoading || hasError) {
      console.log("[v0] Returning empty data due to loading or error state")
      return []
    }

    const allDates = new Set()
    const seriesData = {}

    console.log("[v0] Processing chart data for period:", selectedPeriod)

    // First pass: collect all unique dates and organize data by series
    Object.entries(queries).forEach(([plazo, query]) => {
      if (!query.data?.success || !query.data.data) {
        console.log("[v0] No data for plazo:", plazo)
        return
      }

      console.log("[v0] Processing plazo:", plazo, "data points:", query.data.data.length)

      seriesData[plazo] = new Map()
      query.data.data.forEach((item: any, index: number) => {
        const dateKey = item.fecha
        const value = item[plazo]
        allDates.add(dateKey)
        seriesData[plazo].set(dateKey, value)

        // Log first and last few data points for 364 series
        if (plazo === "364" && (index < 3 || index >= query.data.data.length - 3)) {
          console.log("[v0] 364 data point:", { index, fecha: dateKey, value })
        }
      })
    })

    console.log("[v0] Total unique dates:", allDates.size)
    console.log("[v0] Series data keys:", Object.keys(seriesData))

    // Convert to array and sort dates
    const sortedDates = Array.from(allDates).sort(
      (a, b) =>
        new Date(a.split("/").reverse().join("-")).getTime() - new Date(b.split("/").reverse().join("-")).getTime(),
    )

    console.log("[v0] Date range:", sortedDates[0], "to", sortedDates[sortedDates.length - 1])

    // Second pass: create chart data with all dates, filling missing values with null
    const result = sortedDates.map((dateKey) => {
      const chartPoint = {
        fecha: new Date(dateKey.split("/").reverse().join("-")).toLocaleDateString("es-MX", {
          month: "short",
          year: "2-digit",
        }),
        fullDate: dateKey,
      }

      // Add data for each series, using null for missing values
      Object.keys(seriesData).forEach((plazo) => {
        chartPoint[plazo] = seriesData[plazo].get(dateKey) || null
      })

      return chartPoint
    })

    console.log("[v0] Final chart data points:", result.length)
    console.log("[v0] Sample chart data (first 3):", result.slice(0, 3))
    console.log("[v0] Sample chart data (last 3):", result.slice(-3))

    return result
  }, [selectedPeriod, visibleSeries, isLoading, hasError])

  const dataStats = useMemo(() => {
    const stats = {}
    Object.entries(queries).forEach(([plazo, query]) => {
      if (query.data?.success && query.data.data) {
        stats[plazo] = {
          count: query.data.data.length,
          lastDate: query.data.data[query.data.data.length - 1]?.fecha || null,
        }
      }
    })
    return stats
  }, [selectedPeriod])

  const hasIncompleteData = useMemo(() => {
    if (!dataStats["364"] || !dataStats["91"]) return false
    const ratio = dataStats["364"].count / dataStats["91"].count
    return ratio < 0.8 // If 364-day series has less than 80% of 91-day data
  }, [dataStats])

  const toggleSeries = (plazo: string) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [plazo]: !prev[plazo],
    }))
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const fullDate = payload[0]?.payload?.fullDate
      const formattedDate = fullDate
        ? new Date(fullDate.split("/").reverse().join("-")).toLocaleDateString("es-MX", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : label

      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground mb-2">{formattedDate}</p>
          {payload.map((entry: any, index: number) => {
            const plazoOption = PLAZO_OPTIONS.find((p) => p.value === entry.dataKey)
            if (!plazoOption || !visibleSeries[entry.dataKey]) return null

            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-muted-foreground">{plazoOption.label}:</span>
                <span className="font-semibold">{entry.value}%</span>
              </div>
            )
          })}
        </div>
      )
    }
    return null
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-center gap-2 mb-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl font-bold">Gráfica Histórica de CETES</CardTitle>
        </div>
        <CardDescription className="text-center">
          Visualiza la tendencia histórica de las tasas de Cetes por plazo
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Time Period Controls */}
        <div className="flex flex-wrap justify-center gap-2">
          {TIME_PERIODS.map((period) => (
            <button
              key={period.value}
              onClick={() => setSelectedPeriod(period.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                selectedPeriod === period.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground",
              )}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Series Controls */}
        <div className="flex flex-wrap justify-center gap-2">
          {PLAZO_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleSeries(option.value)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                visibleSeries[option.value]
                  ? "bg-card border-2 border-primary text-foreground"
                  : "bg-muted text-muted-foreground",
              )}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: option.color }} />
              {visibleSeries[option.value] ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              {option.label}
            </button>
          ))}
        </div>

        <div className="h-80 w-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">Cargando datos históricos de Banxico...</p>
              </div>
            </div>
          ) : hasError ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
                <p className="text-sm text-muted-foreground">Error al cargar datos históricos</p>
                <p className="text-xs text-muted-foreground">Intenta recargar la página</p>
              </div>
            </div>
          ) : !hasVisibleSeries ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">Selecciona al menos una serie para visualizar</p>
              </div>
            </div>
          ) : chartData.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">No hay datos disponibles para el período seleccionado</p>
              </div>
            </div>
          ) : (
            (() => {
              console.log("[v0] Rendering chart with data points:", chartData.length)
              console.log("[v0] Chart data sample:", chartData.slice(0, 2))
              return (
                <div
                  role="img"
                  aria-label={`Gráfica histórica de tasas CETES para el período de ${TIME_PERIODS.find((p) => p.value === selectedPeriod)?.label}. Muestra la evolución de las tasas de rendimiento de CETES de ${Object.entries(
                    visibleSeries,
                  )
                    .filter(([_, visible]) => visible)
                    .map(([plazo, _]) => PLAZO_OPTIONS.find((p) => p.value === plazo)?.label)
                    .join(", ")} según datos oficiales de Banxico.`}
                  className="w-full h-full min-h-[320px]"
                  style={{ width: "100%", height: "320px" }}
                >
                  <ResponsiveContainer width="100%" height={320} minWidth={300} minHeight={320}>
                    <LineChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 40,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                      <XAxis
                        dataKey="fecha"
                        tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
                        tickLine={{ stroke: "hsl(var(--border))" }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                      />
                      <YAxis
                        domain={["dataMin - 0.5", "dataMax + 0.5"]}
                        tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
                        tickLine={{ stroke: "hsl(var(--border))" }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        label={{
                          value: "Tasa (%)",
                          angle: -90,
                          position: "insideLeft",
                          style: { textAnchor: "middle", fill: "hsl(var(--foreground))" },
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />

                      {PLAZO_OPTIONS.map((option) => (
                        <Line
                          key={option.value}
                          type="linear"
                          dataKey={option.value}
                          stroke={option.color}
                          strokeWidth={2.5}
                          dot={false}
                          hide={!visibleSeries[option.value]}
                          connectNulls={option.value === "364"}
                          strokeDasharray={option.value === "364" ? "8 4" : undefined}
                          activeDot={{ r: 4, fill: option.color }}
                        />
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )
            })()
          )}
        </div>

        {/* Data Source */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t space-y-1">
          <div>
            Datos históricos del Sistema de Información Económica (SIE) de Banxico • Período:{" "}
            {TIME_PERIODS.find((p) => p.value === selectedPeriod)?.label}
            {isLoading && " • Cargando..."}
          </div>
          {hasIncompleteData && visibleSeries["364"] && (
            <div className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400">
              <AlertCircle className="h-3 w-3" />
              <span>
                Los Cetes de 1 año se emiten con menor frecuencia, por lo que tienen menos datos históricos disponibles
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
