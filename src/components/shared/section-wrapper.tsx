import type { ReactNode } from 'react'
import { Container } from '@/components/layout/container'

interface SectionWrapperProps {
  children: ReactNode
  bgImage?: string
  id?: string
}

export function SectionWrapper({ children, bgImage, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
  className="relative py-section overflow-hidden bg-background border-t border-white/60 scroll-mt-24"
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {bgImage && <div className="absolute inset-0 bg-background/70" />}
      <Container className="relative z-10">{children}</Container>
    </section>
  )
}