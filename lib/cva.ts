// Simple replacement for class-variance-authority
import { cn } from "@/lib/utils"

type ClassValue = string | number | boolean | undefined | null
type ClassArray = ClassValue[]
type ClassDictionary = Record<string, any>
type ClassProp = ClassValue | ClassArray | ClassDictionary

export interface VariantProps<T extends (...args: any) => any> {
  [key: string]: any
}

export function cva(
  base: string,
  config?: {
    variants?: Record<string, Record<string, string>>
    defaultVariants?: Record<string, string>
  },
) {
  return (props?: Record<string, any>) => {
    if (!config?.variants) return base

    let classes = base

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (value && config.variants?.[key]?.[value]) {
          classes = cn(classes, config.variants[key][value])
        }
      })
    }

    // Apply default variants for missing props
    if (config.defaultVariants) {
      Object.entries(config.defaultVariants).forEach(([key, defaultValue]) => {
        if (props?.[key] === undefined && config.variants?.[key]?.[defaultValue]) {
          classes = cn(classes, config.variants[key][defaultValue])
        }
      })
    }

    return classes
  }
}
