"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface SWRConfig {
  refreshInterval?: number
  revalidateOnFocus?: boolean
}

interface SWRResponse<T> {
  data: T | undefined
  error: any
  isLoading: boolean
  mutate: () => void
}

export default function useSWR<T>(
  key: string | null,
  fetcher: (key: string) => Promise<T>,
  config: SWRConfig = {},
): SWRResponse<T> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)

  const fetchData = useCallback(async () => {
    if (!key || !fetcher) return

    try {
      setError(null)
      const result = await fetcher(key)
      if (mountedRef.current) {
        setData(result)
        setIsLoading(false)
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err)
        setIsLoading(false)
      }
    }
  }, [key, fetcher])

  const mutate = useCallback(() => {
    setIsLoading(true)
    fetchData()
  }, [fetchData])

  useEffect(() => {
    mountedRef.current = true
    fetchData()

    return () => {
      mountedRef.current = false
    }
  }, [fetchData])

  useEffect(() => {
    if (config.refreshInterval && config.refreshInterval > 0) {
      intervalRef.current = setInterval(() => {
        fetchData()
      }, config.refreshInterval)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [config.refreshInterval, fetchData])

  useEffect(() => {
    if (config.revalidateOnFocus !== false) {
      const handleFocus = () => {
        fetchData()
      }

      window.addEventListener("focus", handleFocus)
      return () => {
        window.removeEventListener("focus", handleFocus)
      }
    }
  }, [config.revalidateOnFocus, fetchData])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
