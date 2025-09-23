import { type NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = createServiceClient()

    // Mock rates for testing (replace with actual Banxico API call)
    const mockRates = {
      rate_28_days: 10.45,
      rate_91_days: 10.25,
      rate_182_days: 10.15,
      rate_364_days: 10.05,
    }

    // Mark all previous rates as not current
    await supabase.from("cetes_rates").update({ is_current: false }).eq("is_current", true)

    // Insert new rates
    const { data: newRate, error: insertError } = await supabase
      .from("cetes_rates")
      .insert({
        ...mockRates,
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
      rates_fetched: mockRates,
    })

    return NextResponse.json({
      success: true,
      message: "Rates updated successfully (manual)",
      rates: mockRates,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error updating CETES rates:", error)

    return NextResponse.json(
      {
        error: "Failed to update rates",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
