// Lightweight CVA replacement for preview environment
export function cva(base: string, config?: any) {
  return (props?: any) => {
    if (!config || !props) return base
    
    let classes = base
    
    if (config.variants) {
      for (const [key, value] of Object.entries(props)) {
        const variant = config.variants[key]
        if (variant && variant[value as string]) {
          classes += ' ' + variant[value as string]
        }
      }
    }
    
    if (config.defaultVariants && !props) {
      for (const [key, value] of Object.entries(config.defaultVariants)) {
        const variant = config.variants?.[key]
        if (variant && variant[value as string]) {
          classes += ' ' + variant[value as string]
        }
      }
    }
    
    return classes
  }
}

export type VariantProps<T> = T extends (props?: infer P) => any ? P : never
