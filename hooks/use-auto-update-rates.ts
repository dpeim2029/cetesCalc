"use client"

import { useState, useEffect, useCallback } from "react"
import { toast } from "sonner"

interface UpdateStatus {
  isUpdating: boolean
  hasAttempted: boolean
  error: string | null
}

export function useAutoUpdateRates(ratesData: any) {
  const [updateStatus, setUpdateStatus] = useState<UpdateStatus>({
    isUpdating: false,
    hasAttempted: false,
    error: null,
  })

  const triggerUpdate = useCallback(async () => {
    if (updateStatus.isUpdating || updateStatus.hasAttempted) return

    console.log("[v0] Starting automatic rates update...")
    setUpdateStatus((prev) => ({ ...prev, isUpdating: true }))

    try {
      const response = await fetch("/api/manual-update-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const result = await response.json()
      console.log("[v0] Update response:", result)

      if (response.ok && result.success) {
        toast.success("Tasas actualizadas desde Banxico", {
          description: `Se obtuvieron ${result.updatedRates || 0} tasas actualizadas`,
        })
        setUpdateStatus({
          isUpdating: false,
          hasAttempted: true,
          error: null,
        })
        // Trigger a page reload to get fresh data
        window.location.reload()
      } else {
        throw new Error(result.error || "Error al actualizar tasas")
      }
    } catch (error) {
      console.error("[v0] Error updating rates:", error)
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      setUpdateStatus({
        isUpdating: false,
        hasAttempted: true,
        error: errorMessage,
      })
      toast.error("Error al actualizar tasas", {
        description: errorMessage,
      })
    }
  }, [updateStatus.isUpdating, updateStatus.hasAttempted])

  // Auto-trigger update when no real rates are available
  useEffect(() => {
    if (!ratesData || updateStatus.hasAttempted) return

    const hasRealRates = ratesData.data?.some((rate: any) => rate.source === "api")
    const availableRatesCount = ratesData.data?.filter((rate: any) => rate.source === "api").length || 0

    console.log("[v0] Checking rates status:", { hasRealRates, availableRatesCount, source: ratesData.source })

    // If we have less than 4 real rates or no real rates at all, trigger update
    if (!hasRealRates || availableRatesCount < 4) {
      console.log("[v0] Insufficient real rates detected, triggering auto-update")
      triggerUpdate()
    }
  }, [ratesData, triggerUpdate, updateStatus.hasAttempted])

  return {
    ...updateStatus,
    triggerUpdate,
  }
}
