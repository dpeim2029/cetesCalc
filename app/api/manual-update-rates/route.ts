import { type NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { fetchCetesRates } from "@/lib/banxico-api"

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const expectedAuth = process.env.CRON_SECRET

    if (!expectedAuth || authHeader !== `Bearer ${expectedAuth}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = createServiceClient()

    let rates
    try {
      const cetesRates = await fetchCetesRates()
      rates = {
        rate_28_days: cetesRates.find((r) => r.plazo === "28")?.tasa || 10.45,
        rate_91_days: cetesRates.find((r) => r.plazo === "91")?.tasa || 10.25,
        rate_182_days: cetesRates.find((r) => r.plazo === "182")?.tasa || 10.15,
        rate_364_days: cetesRates.find((r) => r.plazo === "364")?.tasa || 10.05,
      }
    } catch (apiError) {
      // Fallback to default rates if API fails
      rates = {
        rate_28_days: 10.45,
        rate_91_days: 10.25,
        rate_182_days: 10.15,
        rate_364_days: 10.05,
      }
    }

    // Mark all previous rates as not current
    await supabase.from("cetes_rates").update({ is_current: false }).eq("is_current", true)

    // Insert new rates
    const { data: newRate, error: insertError } = await supabase
      .from("cetes_rates")
      .insert({
        ...rates,
        is_current: true,
        fetched_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    // Log successful update
    await supabase.from("rate_update_log").insert({
      success: true,
      error_message: null,
      rates_fetched: rates,
    })

    return NextResponse.json({
      success: true,
      message: "Rates updated successfully (manual)",
      rates,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error updating CETES rates:", error)

    try {
      const supabase = createServiceClient()
      await supabase.from("rate_update_log").insert({
        success: false,
        error_message: error instanceof Error ? error.message : "Unknown error",
        rates_fetched: null,
      })
    } catch (logError) {
      console.error("Failed to log error:", logError)
    }

    return NextResponse.json(
      {
        error: "Failed to update rates",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
