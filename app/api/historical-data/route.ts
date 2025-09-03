import { NextResponse } from "next/server"
import { fetchHistoricalData, type CetesPlazo } from "@/lib/banxico-api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const plazo = searchParams.get("plazo") as CetesPlazo
    const period = searchParams.get("period") || "1Y"

    if (!plazo) {
      return NextResponse.json({ success: false, error: "Plazo parameter is required" }, { status: 400 })
    }

    const endDate = new Date().toISOString().split("T")[0] // Already in YYYY-MM-DD format
    const startDate = new Date()

    switch (period) {
      case "6M":
        startDate.setMonth(startDate.getMonth() - 6)
        break
      case "1Y":
        startDate.setFullYear(startDate.getFullYear() - 1)
        break
      case "5Y":
        startDate.setFullYear(startDate.getFullYear() - 5)
        break
      case "MAX":
        startDate.setFullYear(startDate.getFullYear() - 10)
        break
    }

    const formattedStartDate = startDate.toISOString().split("T")[0] // Keep YYYY-MM-DD format

    console.log("[v0] Fetching historical data:", { plazo, period, startDate: formattedStartDate, endDate })

    const historicalData = await fetchHistoricalData(plazo, formattedStartDate, endDate)

    console.log("[v0] Historical data received:", { dataLength: historicalData.length, plazo })

    return NextResponse.json({
      success: true,
      data: historicalData,
      period,
      plazo,
      dateRange: {
        start: formattedStartDate,
        end: endDate,
      },
    })
  } catch (error) {
    console.error("Historical Data API Error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch historical data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export const revalidate = 3600 // Revalidate every hour
