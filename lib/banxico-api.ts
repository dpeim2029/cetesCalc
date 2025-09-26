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
  const results: CetesRate[] = []

  const fetchPromises = Object.entries(CETES_SERIES).map(async ([plazo, seriesId]) => {
    try {
      const currentResponse = await fetch(`${BANXICO_BASE_URL}/series/${seriesId}/datos/oportuno`, {
        headers: {
          "Bmx-Token": BANXICO_TOKEN,
        },
        cache: "no-store", // Force fresh data
      })

      if (currentResponse.ok) {
        const currentData = await currentResponse.json()
        const latestData = currentData.bmx.series[0].datos[0]
        const currentRate = Number.parseFloat(latestData.dato)

        let tendencia: "up" | "down" | "neutral" = "neutral"
        let diferencia: number | undefined = undefined

        try {
          const thirtyDaysAgo = new Date()
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
          const startDate = thirtyDaysAgo.toISOString().split("T")[0]

          const historicalResponse = await fetch(
            `${BANXICO_BASE_URL}/series/${seriesId}/datos/${startDate}/${latestData.fecha}`,
            {
              headers: {
                "Bmx-Token": BANXICO_TOKEN,
              },
              cache: "no-store",
            },
          )

          if (historicalResponse.ok) {
            const historicalData = await historicalResponse.json()
            const datos = historicalData.bmx.series[0].datos

            if (datos && datos.length >= 2) {
              const targetIndex = Math.min(Math.floor(datos.length * 0.7), datos.length - 2)
              const olderRate = Number.parseFloat(datos[targetIndex].dato)
              diferencia = currentRate - olderRate

              if (diferencia > 0.05) {
                tendencia = "up"
              } else if (diferencia < -0.05) {
                tendencia = "down"
              } else {
                tendencia = "neutral"
              }
            } else {
              tendencia = "down"
            }
          } else {
            tendencia = "down"
          }
        } catch (trendError) {
          tendencia = "down"
        }

        return {
          plazo: plazo as CetesPlazo,
          tasa: currentRate,
          fecha: latestData.fecha,
          tendencia,
          diferencia,
          source: "api" as const,
          lastUpdated: new Date().toISOString(),
        }
      } else {
        throw new Error(`API call failed for ${plazo} days`)
      }
    } catch (error) {
      const fallbackRates: Record<string, number> = {
        "28": 9.1,
        "91": 9.02,
        "182": 8.96,
        "364": 9.06,
      }

      return {
        plazo: plazo as CetesPlazo,
        tasa: fallbackRates[plazo],
        fecha: "31/03/2025",
        tendencia: "down" as const,
        source: "fallback" as const,
        lastUpdated: "31/03/2025",
      }
    }
  })

  const settledResults = await Promise.allSettled(fetchPromises)

  settledResults.forEach((result) => {
    if (result.status === "fulfilled") {
      results.push(result.value)
    }
  })

  return results
}

export async function fetchHistoricalData(
  plazo: CetesPlazo,
  startDate: string,
  endDate: string,
): Promise<HistoricalData[]> {
  try {
    const seriesId = CETES_SERIES[plazo]
    const response = await fetch(`${BANXICO_BASE_URL}/series/${seriesId}/datos/${startDate}/${endDate}`, {
      headers: {
        "Bmx-Token": BANXICO_TOKEN,
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch historical data for ${plazo} days`)
    }

    const data = await response.json()
    const historicalData = data.bmx.series[0].datos.map((item: any) => ({
      fecha: item.fecha,
      [plazo]: Number.parseFloat(item.dato),
    }))

    return historicalData
  } catch (error) {
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
