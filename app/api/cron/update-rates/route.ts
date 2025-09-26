import { type NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest) {
  try {
    // Verify this is a legitimate cron request (optional security)
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = createServiceClient()

    // Check if it's a business day (Monday-Friday)
    const now = new Date()
    const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      await supabase.from("rate_update_log").insert({
        success: false,
        error_message: "Skipped: Weekend day",
        rates_fetched: null,
      })

      return NextResponse.json({
        message: "Skipped: Not a business day",
        timestamp: now.toISOString(),
      })
    }

    // Check if we should run (6:00 AM or 1:00 PM Mexico City time)
    const mexicoTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Mexico_City" }))
    const hour = mexicoTime.getHours()

    if (hour !== 6 && hour !== 13) {
      return NextResponse.json({
        message: "Skipped: Not scheduled time (6:00 AM or 1:00 PM Mexico City)",
        currentHour: hour,
        timestamp: now.toISOString(),
      })
    }

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
        fetched_at: now.toISOString(),
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
      message: "Rates updated successfully",
      rates,
      validRates,
      timestamp: now.toISOString(),
    })
  } catch (error) {
    console.error("Error updating CETES rates:", error)

    // Log failed update
    const supabase = createServiceClient()
    await supabase.from("rate_update_log").insert({
      success: false,
      error_message: error instanceof Error ? error.message : "Unknown error",
      rates_fetched: null,
    })

    return NextResponse.json(
      {
        error: "Failed to update rates",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
