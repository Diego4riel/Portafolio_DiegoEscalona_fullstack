// src/components/sections/projects.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    image: '/placeholder-project.jpg',
    technologies: ['react', 'node'],
  },
  {
    title: 'Proyecto 2',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    image: '/placeholder-project.jpg',
    technologies: ['vue', 'express', 'mysql'],
  },
  {
    title: 'Proyecto 3',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    image: '/placeholder-project.jpg',
    technologies: ['react', 'typescript', 'tailwind', 'vite'],
  },
]

export function Projects() {
  return (
    <SectionWrapper texture="diagonal" id="proyectos">
      <h2 className="text-h2 text-foreground mb-10">Mis Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="card-glass overflow-hidden">
            <div className="aspect-video bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="w-8 h-8 rounded-full bg-secondary"
                    title={tech}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}