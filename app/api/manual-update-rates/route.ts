import { type NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = createServiceClient()

    const banxicoResponse = await fetch(
      "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43936,SF43939,SF43942,SF43945/datos/oportuno",
      {
        headers: {
          "Bmx-Token": process.env.BANXICO_TOKEN || "191860f124b2b1f7747333cb34affe8ee0c8059161416c3d8e8a483282693043",
        },
      },
    )

    if (!banxicoResponse.ok) {
      throw new Error(`Banxico API error: ${banxicoResponse.status}`)
    }

    const banxicoData = await banxicoResponse.json()

    // Parse the rates with correct series mapping
    const series = banxicoData.bmx?.series || []
    const rates = {
      rate_28_days: 0,
      rate_91_days: 0,
      rate_182_days: 0,
      rate_364_days: 0,
    }

    // Map series to rates with correct series IDs
    series.forEach((serie: any) => {
      const latestData = serie.datos?.[0]
      if (latestData?.dato) {
        const rate = Number.parseFloat(latestData.dato)
        switch (serie.idSerie) {
          case "SF43936": // 28 days
            rates.rate_28_days = rate
            break
          case "SF43939": // 91 days
            rates.rate_91_days = rate
            break
          case "SF43942": // 182 days
            rates.rate_182_days = rate
            break
          case "SF43945": // 364 days
            rates.rate_364_days = rate
            break
        }
      }
    })

    // Validate we got valid rates
    const validRates = Object.values(rates).filter((rate) => rate > 0).length
    if (validRates === 0) {
      throw new Error("No valid rates received from Banxico API")
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
      validRates,
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
