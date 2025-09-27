import { NextResponse } from "next/server"
import { fetchCetesRates } from "@/lib/banxico-api"

export async function GET() {
  try {
    const rates = await fetchCetesRates()

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: new Date().toISOString(),
      source: "api",
    })
  } catch (error) {
    console.error("API Error:", error)

    // Return fallback rates only on complete API failure
    return NextResponse.json({
      success: true,
      data: [
        { plazo: "28", tasa: 9.1, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "91", tasa: 9.02, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "182", tasa: 8.96, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "364", tasa: 9.06, source: "fallback", lastUpdated: "2025-03-31" },
      ],
      lastUpdated: new Date().toISOString(),
      source: "fallback",
    })
  }
}

export const revalidate = 1800 // Reduced to 30 minutes for fresher data
