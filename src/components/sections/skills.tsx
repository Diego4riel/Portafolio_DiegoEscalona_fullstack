// src/components/sections/skills.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionTitle } from '@/components/shared/section-title'
import { Badge } from '@/components/ui/badge'
import { Grid } from '@/components/shared/grid'
import skillsBg from '@/assets/skillsbg.jpg'


const skills = [
  'HTML', 'CSS', 'Java', 'Python', 'Javascript', 'C#',
  'React', 'Expo Go', 'Vue.js', 'Node.js', 'ASP.NET', 'NumPy',
  'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'MySQL', 'SQL Server',
  'Figma', 'Microsoft Office', 'Miro', 'Canva', 'Wordpress', 'Git',
  'GitHub', 'Windows', 'Linux',
]

export function Skills() {
  return (
    <SectionWrapper bgImage={skillsBg} id="habilidades">
      <SectionTitle title="Mis Habilidades" />

      <Grid cols={{ base: 2, sm: 3, md: 6 }} gap="sm">
        {skills.map((skill) => (
          <Badge key={skill} className="justify-center">
            {skill}
          </Badge>
        ))}
      </Grid>
    </SectionWrapper>
  )
}