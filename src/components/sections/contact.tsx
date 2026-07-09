// src/components/sections/contact.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import contactfill from '@/assets/contactfill.jpg'
import contactBg from '@/assets/contactbg.jpg'


export function Contact() {
  return (
    <SectionWrapper bgImage={contactBg} id="contacto">
      <div className="relative">
        {/* Fondo de ondas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="waves" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 text-foreground mb-8">Contacto</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Correo</h3>
                <p className="text-muted-foreground">diegoarielesc@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Linkedin</h3>
                <p className="text-muted-foreground">
                  www.linkedin.com/in/diego-escalona
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                <p className="text-muted-foreground">+56 9 95975622</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src={contactfill}
              alt="Espacio de trabajo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 mt-16 pt-8 border-t border-border">
          <a href="https://github.com/Diego4riel" target="_blank" rel="noreferrer">
            <FaGithub size={20} className="text-foreground/70 hover:text-foreground transition-colors" />
          </a>
          <a href="https://linkedin.com/in/diego-escalona" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} className="text-foreground/70 hover:text-foreground transition-colors" />
          </a>
          <p className="text-sm text-muted-foreground">
            Diego Escalona © 2026. All Rights Reserved. Fullstack Developer | Santiago, Chile
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}