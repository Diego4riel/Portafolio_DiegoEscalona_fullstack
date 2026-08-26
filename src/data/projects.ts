import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'clasificador-gastos',
    title: 'Clasificador de gastos con IA',
    description:
      'Aplicación web que automatiza la clasificación de gastos a partir de archivos CSV utilizando inteligencia artificial.',
    image: '/projects/Clasificador_De_gastos.png',
    technologies: [
      'Node.js',
      'Express',
      'SQLite3',
      'Multer',
      'csv-parser',
      'OpenRouter',
    ],
    githubUrl: 'https://github.com/Diego4riel/Clasificador-de-gastos',
    highlights: [
      'Carga y procesamiento de archivos CSV',
      'Clasificación automática mediante IA',
      'Clasificación en 7 categorías de gastos',
      'Persistencia de datos con SQLite3',
      'Visualización de estadísticas y resultados',
    ],
  },
]
