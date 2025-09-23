import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: currentRates, error } = await supabase
      .from("cetes_rates")
      .select("*")
      .eq("is_current", true)
      .maybeSingle() // Use maybeSingle instead of single to handle 0 rows

    if (error) {
      console.error("Database query error:", error)
      return getFallbackResponse()
    }

    if (!currentRates) {
      // No current rates found, return fallback
      return getFallbackResponse()
    }

    // Transform database format to expected API format
    const rates = [
      { plazo: "28", tasa: currentRates.rate_28_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "91", tasa: currentRates.rate_91_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "182", tasa: currentRates.rate_182_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "364", tasa: currentRates.rate_364_days, source: "database", lastUpdated: currentRates.fetched_at },
    ]

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: currentRates.fetched_at,
      source: "database",
    })
  } catch (error) {
    console.error("API Error:", error)
    return getFallbackResponse()
  }
}

function getFallbackResponse() {
  return NextResponse.json(
    {
      success: true,
      data: [
        { plazo: "28", tasa: 10.45, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "91", tasa: 10.25, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "182", tasa: 10.15, source: "fallback", lastUpdated: "2025-03-31" },
        { plazo: "364", tasa: 10.05, source: "fallback", lastUpdated: "2025-03-31" },
      ],
      lastUpdated: new Date().toISOString(),
      source: "fallback",
    },
    { status: 200 },
  )
}

export const revalidate = 3600 // Revalidate every hour
