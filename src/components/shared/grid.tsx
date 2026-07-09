import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: {
    base?: 1 | 2 | 3
    sm?: 1 | 2 | 3 | 4
    md?: 1 | 2 | 3 | 4 | 6
  }
  gap?: 'sm' | 'md' | 'lg'
}

const colsMap = {
  base: { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' },
  sm: { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' },
  md: { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4', 6: 'md:grid-cols-6' },
}

const gapMap = { sm: 'gap-4', md: 'gap-6', lg: 'gap-8' }

export function Grid({
  cols = { base: 1, md: 3 },
  gap = 'md',
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        cols.base && colsMap.base[cols.base],
        cols.sm && colsMap.sm[cols.sm],
        cols.md && colsMap.md[cols.md],
        gapMap[gap],
        className
      )}
      {...props}
    />
  )
}