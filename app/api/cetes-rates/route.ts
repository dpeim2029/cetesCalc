import { NextResponse } from "next/server"
import { fetchCetesRates } from "@/lib/banxico-api"

export async function GET() {
  try {
    console.log("[v0] Fetching CETES rates directly from Banxico API...")

    // Get fresh data directly from Banxico API
    const rates = await fetchCetesRates()

    console.log("[v0] Successfully fetched rates:", rates.length)

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: new Date().toISOString(),
      source: "banxico",
    })
  } catch (error) {
    console.error("[v0] API Error:", error)

    // Return fallback rates on error
    return NextResponse.json({
      success: true,
      data: [
        { plazo: "28", tasa: 10.45, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "91", tasa: 10.25, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "182", tasa: 10.15, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "364", tasa: 10.05, source: "fallback", lastUpdated: "2025-03-31" },
      ],
      lastUpdated: new Date().toISOString(),
      source: "fallback",
    })
  }
}

export const revalidate = 0 // No caching - fresh data every time
