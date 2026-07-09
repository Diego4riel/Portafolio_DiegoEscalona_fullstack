// src/components/sections/hero.tsx
import { Button } from '@/components/ui/button'
import { Glow } from '@/components/shared/glow'
import heroBg from '@/assets/hero_bg.jpg'
import logoDE from '@/assets/logo_DE.png'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <Glow position="top" size="lg" />
      <img
        src={logoDE}
        alt="Logo Diego Escalona"
        className="relative z-20 w-32 md:w-40 mb-8 opacity-100"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-hero text-center uppercase">
          <span className="text-foreground">Transformando ideas</span><br />
          <span className="text-foreground">en software </span>
          <span className="text-muted-foreground">escalable</span>
          <span className="text-foreground">.</span>
        </h1>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl">
          Arquitectura digital de alto rendimiento que conecta datos, lógica de negocio
          y diseño visual en un flujo continuo y estructurado.
        </p>
        <Button variant="secondary" size="lg" className="mt-8">
          Descargar CV
        </Button>
      </div>
    </section>
  )
}