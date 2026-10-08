import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'clasificador-gastos',
    title: 'Clasificador de gastos con IA',
    description:
      'Aplicación web que automatiza la clasificación de gastos a partir de archivos CSV utilizando inteligencia artificial.',
    image: '/projects/Clasificador_De_gastos.png',
    technologies: ['Node.js', 'Express', 'SQLite3', 'Multer', 'csv-parser', 'OpenRouter'],
    githubUrl: 'https://github.com/Diego4riel/Clasificador-de-gastos',
    highlights: [
      'Carga y procesamiento de archivos CSV',
      'Clasificación automática mediante IA',
      'Clasificación en 7 categorías de gastos',
      'Persistencia de datos con SQLite3',
      'Visualización de estadísticas y resultados',
    ],
  },
  {
    id: 'Crov_spa',
    title: 'CrovSpA - Gestión Ambiental y Reciclaje',
    description:
      'Sitio web corporativo desarrollado desde cero para una empresa de gestión de residuos industriales. El proyecto abarcó desde la configuración de hosting hasta el diseño responsivo, redacción de contenidos (copywriting) y optimización SEO.',
    image: 'projects/crovspahome.png',
    technologies: ['WordPress', 'Elementor', 'SMTP', 'SEO', 'Google Search Console'],
    liveUrl: 'https://crovspa.com/',
    highlights: [
      'Configuración integral del entorno WordPress, dominio y hosting.',
      'Diseño y maquetación Full Responsive (Desktop, Tablet, Mobile) con Elementor.',
      'Redacción de contenidos, descripciones de servicios y selección de material gráfico.',
      'Implementación de formularios de contacto fluidos con envío de correos vía SMTP.',
      'Mejoras de rendimiento (WPO), SEO básico y redacción de páginas legales.',
      'Indexación y conexión exitosa del sitio mediante Google Search Console.',
    ],
  },
];
