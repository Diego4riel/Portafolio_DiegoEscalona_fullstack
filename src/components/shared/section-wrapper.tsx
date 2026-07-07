// src/components/shared/section-wrapper.tsx
import type { ReactNode } from 'react'
interface SectionWrapperProps {
  children: ReactNode
  texture?: 'diagonal' | 'wood' | 'diagonal-strong' | 'none'
  id?: string
}

export function SectionWrapper({ children, texture = 'none', id }: SectionWrapperProps) {
  const textureClass = texture !== 'none' ? `texture-${texture}` : ''
  return (
    <section id={id} className={`${textureClass} py-section bg-background`}>
      <div className="max-w-content mx-auto px-6">{children}</div>
    </section>
  )
}