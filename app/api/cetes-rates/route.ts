import { NextResponse } from "next/server"
import { fetchCetesRates } from "@/lib/banxico-api"

export async function GET() {
  try {
    const rates = await fetchCetesRates()

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: new Date().toISOString(),
      source: "banxico",
    })
  } catch (error) {
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

export const dynamic = "force-dynamic"
