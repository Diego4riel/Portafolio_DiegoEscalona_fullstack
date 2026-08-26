// src/components/sections/projects.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/shared/grid';
import { projects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa';
import projectsbg from '@/assets/projectsbg.jpg';

export function Projects() {
  return (
    <SectionWrapper bgImage={projectsbg} id="proyectos">
      <SectionTitle title="Mis Proyectos" />

      <Grid cols={{ base: 1, md: 3 }} gap="lg">
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="aspect-video bg-muted">
              <img
                src={project.image}
                alt={`Captura del proyecto ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              {project.highlights && (
                <ul className="text-xs text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm">
                    <FaGithub className="h-4 w-4" />{' '}
                    {/* Puedes ajustar el tamaño con clases de CSS o Tailwind */}
                    GitHub
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
