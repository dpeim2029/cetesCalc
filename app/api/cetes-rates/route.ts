import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    console.log("[v0] Starting CETES rates API call")

    const supabase = await createClient()
    console.log("[v0] Supabase client created successfully")

    // Get the most recent rates from database
    const { data: currentRates, error } = await supabase.from("cetes_rates").select("*").eq("is_current", true).single()

    console.log("[v0] Database query result:", { currentRates, error })

    if (error || !currentRates) {
      console.log("[v0] Using fallback rates due to:", error?.message || "No current rates found")

      // Fallback to reference rates if no data in database
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

    // Transform database format to expected API format
    const rates = [
      { plazo: "28", tasa: currentRates.rate_28_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "91", tasa: currentRates.rate_91_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "182", tasa: currentRates.rate_182_days, source: "database", lastUpdated: currentRates.fetched_at },
      { plazo: "364", tasa: currentRates.rate_364_days, source: "database", lastUpdated: currentRates.fetched_at },
    ]

    console.log("[v0] Returning database rates:", rates)

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: currentRates.fetched_at,
      source: "database",
    })
  } catch (error) {
    console.error("[v0] API Error:", error)

    // Return fallback rates on error
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
    ) // Ensure 200 status even on fallback
  }
}

export const revalidate = 3600 // Revalidate every hour
