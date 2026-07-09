import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-foreground text-background hover:opacity-90',
  secondary: 'card-glass text-foreground hover:bg-secondary',
  outline: 'border border-border text-foreground hover:bg-secondary',
  ghost: 'text-foreground/80 hover:text-foreground hover:bg-secondary',
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
}