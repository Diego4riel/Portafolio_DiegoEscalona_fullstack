import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline'
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-4 py-2 text-sm font-medium',
        variant === 'default' && 'bg-secondary text-secondary-foreground',
        variant === 'outline' && 'border border-border text-foreground/80',
        className
      )}
      {...props}
    />
  )
}