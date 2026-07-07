// src/components/sections/skills.tsx
import { SectionWrapper } from '@/components/shared/section-wrapper'

const skills = [
  'HTML', 'CSS', 'Java', 'Python', 'Javascript', 'C#',
  'React', 'Expo Go', 'Vue.js', 'Node.js', 'ASP.NET', 'NumPy',
  'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'MySQL', 'SQL Server',
  'Figma', 'Microsoft Office', 'Miro', 'Canva', 'Wordpress', 'Git',
  'GitHub', 'Windows', 'Linux',
]

export function Skills() {
  return (
    <SectionWrapper texture="diagonal-strong" id="habilidades">
      <h2 className="text-h2 text-foreground mb-10">Mis Habilidades</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-sm font-medium text-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  )
}