// src/components/sections/about.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionTitle } from '@/components/shared/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import profilePhoto from '@/assets/Retrato_Diego_comprimido.png'
import aboutBg from '@/assets/aboutmebg.jpg'

export function About() {
  return (
  <SectionWrapper bgImage={aboutBg} id="sobre-mi">
      <SectionTitle title="Sobre mi" />

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
        {/* Foto */}
        <div className="rounded-lg overflow-hidden aspect-4/5">
          <img
            src={profilePhoto}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Resumen profesional */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Resumen Profesional
            </h3>
            <p className="text-muted-foreground mb-4">
              Soy Ingeniero en Informática con foco en desarrollo fullstack,
              construyendo aplicaciones web desde la interfaz hasta la lógica del
              servidor y la base de datos. He trabajado en proyectos reales con
              React, Vue.js, Node.js y ASP.NET. Me enfoco en escribir código claro,
              escalable y mantenible, optimizando procesos y mejorando la
              experiencia del usuario en cada solución.
            </p>
            <p className="text-muted-foreground">
              Disfruto resolver problemas complejos y transformar ideas en
              productos funcionales. Me adapto rápido a nuevos entornos y
              tecnologías, aportando siempre una mentalidad analítica y orientada
              a resultados.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Educación + Certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Educación
            </h3>
            <p className="text-muted-foreground">
              Titulado en la Universidad Bernardo O'Higgins en el año 2025 de
              Ingeniería en Informática.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Certificados
            </h3>
            <p className="text-muted-foreground mb-2">
              freeCodeCamp | Certificación de más de 300 horas en lógica de
              programación y desarrollo con Python.
            </p>
            <a
              href="https://freecodecamp.org/espanol/certification/diegoariel/python-v9"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-foreground/70 hover:text-foreground underline"
            >
              Ver certificado
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Botón descargar CV */}
      <div className="mt-10">
        <Button variant="secondary" size="lg">
          Descargar CV
        </Button>
      </div>
    </SectionWrapper>
  )
}