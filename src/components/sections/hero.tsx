// src/components/sections/hero.tsx
export function Hero() {
  return (
    <section className="texture-diagonal min-h-screen flex flex-col items-center justify-center bg-background px-6">
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
    </section>
  )
}