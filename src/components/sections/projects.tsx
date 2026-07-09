// src/components/sections/projects.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionTitle } from '@/components/shared/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Grid } from '@/components/shared/grid'
import projectsbg from '@/assets/projectsbg.jpg'


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
    <SectionWrapper bgImage={projectsbg} id="proyectos">
      <SectionTitle title="Mis Proyectos" />

      <Grid cols={{ base: 1, md: 3 }} gap="lg">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="aspect-video bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent>
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
            </CardContent>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  )
}