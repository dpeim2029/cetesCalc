import { apiCache } from "./cache"

const BANXICO_BASE_URL = "https://www.banxico.org.mx/SieAPIRest/service/v1"
const BANXICO_TOKEN = process.env.BANXICO_TOKEN || "191860f124b2b1f7747333cb34affe8ee0c8059161416c3d8e8a483282693043"

// Series IDs for Cetes rates (these are the official Banxico series)
export const CETES_SERIES = {
  "28": "SF43936", // 28 days - Cetes 28 días (confirmed from working implementation)
  "91": "SF43939", // 91 days - Cetes 91 días (from working implementation)
  "182": "SF43942", // 182 days - Cetes 182 días (from working implementation)
  "364": "SF43945", // 364 days - Cetes 364 días (from working implementation)
} as const

export type CetesPlazo = keyof typeof CETES_SERIES

export interface CetesRate {
  plazo: CetesPlazo
  tasa: number
  fecha: string
  tendencia?: "up" | "down" | "neutral"
  diferencia?: number
  source: "api" | "fallback"
  lastUpdated?: string
}

export interface HistoricalData {
  fecha: string
  [key: string]: string | number // Dynamic keys for different plazos
}

// ISR retention rate for 2025 (must be updated annually)
export const ISR_RETENTION_RATE = 0.005 // 0.50% for 2025

export async function fetchCetesRates(): Promise<CetesRate[]> {
  const cacheKey = "cetes-rates"
  const cached = apiCache.get<CetesRate[]>(cacheKey)

  if (cached) {
    console.log("[v0] Using cached rates data")
    return cached
  }

  console.log("[v0] Fetching fresh rates data from Banxico API")
  const results: CetesRate[] = []

  for (const [plazo, seriesId] of Object.entries(CETES_SERIES)) {
    try {
      console.log(`[v0] Fetching current rate for ${plazo} days (${seriesId})`)
      const currentResponse = await fetch(`${BANXICO_BASE_URL}/series/${seriesId}/datos/oportuno`, {
        headers: {
          "Bmx-Token": BANXICO_TOKEN,
        },
        next: { revalidate: 3600 },
      })

      if (currentResponse.ok) {
        const currentData = await currentResponse.json()
        const latestData = currentData.bmx.series[0].datos[0]
        const currentRate = Number.parseFloat(latestData.dato)
        console.log(`[v0] Current rate for ${plazo} days: ${currentRate}% (${latestData.fecha})`)

        let tendencia: "up" | "down" | "neutral" = "neutral"
        let diferencia: number | undefined = undefined

        try {
          const thirtyDaysAgo = new Date()
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
          const startDate = thirtyDaysAgo.toISOString().split("T")[0]

          console.log(`[v0] Fetching recent historical data for ${plazo} days from ${startDate}`)
          const historicalResponse = await fetch(
            `${BANXICO_BASE_URL}/series/${seriesId}/datos/${startDate}/${latestData.fecha}`,
            {
              headers: {
                "Bmx-Token": BANXICO_TOKEN,
              },
              next: { revalidate: 3600 },
            },
          )

          if (historicalResponse.ok) {
            const historicalData = await historicalResponse.json()
            const datos = historicalData.bmx.series[0].datos
            console.log(`[v0] Historical data points for ${plazo} days:`, datos?.length || 0)

            if (datos && datos.length >= 2) {
              const targetIndex = Math.min(Math.floor(datos.length * 0.7), datos.length - 2)
              const olderRate = Number.parseFloat(datos[targetIndex].dato)
              const olderDate = datos[targetIndex].fecha
              diferencia = currentRate - olderRate

              console.log(`[v0] ${plazo} days trend calculation:`)
              console.log(`[v0]   - Older rate (${olderDate}): ${olderRate}%`)
              console.log(`[v0]   - Current rate (${latestData.fecha}): ${currentRate}%`)
              console.log(`[v0]   - Difference: ${diferencia} percentage points`)

              if (diferencia > 0.05) {
                tendencia = "up"
              } else if (diferencia < -0.05) {
                tendencia = "down"
              } else {
                tendencia = "neutral"
              }

              console.log(`[v0]   - Trend: ${tendencia}`)
            } else {
              console.log(`[v0] Insufficient historical data for ${plazo} days trend calculation`)
              tendencia = "down"
            }
          } else {
            console.log(`[v0] Failed to fetch historical data for ${plazo} days:`, historicalResponse.status)
            tendencia = "down"
          }
        } catch (trendError) {
          console.error(`[v0] Error calculating trend for ${plazo}-day Cetes:`, trendError)
          tendencia = "down"
        }

        results.push({
          plazo: plazo as CetesPlazo,
          tasa: currentRate,
          fecha: latestData.fecha,
          tendencia,
          diferencia,
          source: "api",
          lastUpdated: new Date().toISOString(),
        })
      } else {
        throw new Error(`API call failed for ${plazo} days`)
      }
    } catch (error) {
      console.error(`[v0] Error fetching ${plazo}-day Cetes rate from API:`, error)

      const fallbackRates: Record<string, number> = {
        "28": 9.1,
        "91": 9.02,
        "182": 8.96,
        "364": 9.06,
      }

      results.push({
        plazo: plazo as CetesPlazo,
        tasa: fallbackRates[plazo],
        fecha: "31/03/2025",
        tendencia: "down",
        source: "fallback",
        lastUpdated: "31/03/2025",
      })
    }
  }

  apiCache.set(cacheKey, results, 60)
  return results
}

export async function fetchHistoricalData(
  plazo: CetesPlazo,
  startDate: string,
  endDate: string,
): Promise<HistoricalData[]> {
  const cacheKey = `historical-${plazo}-${startDate}-${endDate}`
  const cached = apiCache.get<HistoricalData[]>(cacheKey)

  if (cached) {
    return cached
  }

  try {
    const seriesId = CETES_SERIES[plazo]
    const response = await fetch(`${BANXICO_BASE_URL}/series/${seriesId}/datos/${startDate}/${endDate}`, {
      headers: {
        "Bmx-Token": BANXICO_TOKEN,
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch historical data for ${plazo} days`)
    }

    const data = await response.json()
    const historicalData = data.bmx.series[0].datos.map((item: any) => ({
      fecha: item.fecha,
      [plazo]: Number.parseFloat(item.dato),
    }))

    apiCache.set(cacheKey, historicalData, 240)

    return historicalData
  } catch (error) {
    console.error("Error fetching historical data:", error)
    return []
  }
}

export function calculateNetReturn(
  amount: number,
  rate: number,
  days: number,
): {
  grossReturn: number
  isrRetention: number
  netReturn: number
  totalAmount: number
} {
  const grossReturn = (amount * rate * days) / (100 * 360)
  const isrRetention = (amount * ISR_RETENTION_RATE * days) / 365
  const netReturn = grossReturn - isrRetention
  const totalAmount = amount + netReturn

  return {
    grossReturn,
    isrRetention,
    netReturn,
    totalAmount,
  }
}
