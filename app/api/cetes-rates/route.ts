import { NextResponse } from "next/server"
import { fetchCetesRates } from "@/lib/banxico-api"

export async function GET() {
  try {
    const rates = await fetchCetesRates()

    return NextResponse.json({
      success: true,
      data: rates,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("API Error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Cetes rates",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export const revalidate = 3600 // Revalidate every hour
