// src/components/layout/navbar.tsx
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const next = { ...prev }
          entries.forEach((entry) => {
            next[entry.target.id] = entry.isIntersecting
          })
          return next
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const activeSection = links.find(
    (link) => visibleSections[link.href.replace('#', '')]
  )?.href.replace('#', '') ?? null

  return (
    <nav className="nav-pill hidden md:flex items-center gap-2 px-3 py-2 mx-auto w-fit fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {links.map((link) => {
        const isActive = activeSection === link.href.replace('#', '')
        return (
          <a key={link.href} href={link.href} className={cn('px-5 py-2 rounded-full font-medium transition-colors', isActive ? 'bg-white/90 text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]' : 'text-foreground/80 hover:text-foreground')}>
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}