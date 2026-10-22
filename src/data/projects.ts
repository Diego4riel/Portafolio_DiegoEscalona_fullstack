import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'clasificador-gastos',
    title: 'Clasificador de gastos con IA',
    description:
      'Aplicación web que automatiza la clasificación de gastos a partir de archivos CSV utilizando inteligencia artificial.',
    image: 'projects/clasificadorigastos.png',
    technologies: ['Node.js', 'Express', 'SQLite3', 'Multer', 'csv-parser', 'OpenRouter'],
    liveUrl: 'https://clasificador-de-gastos.vercel.app/',
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
  {
    id: 'cotizador_web',
    title: 'Cotizador Web - Presupuestos Interactivos para PYMEs',
    description:
      'Aplicación web full stack que permite a pequeñas y medianas empresas configurar un proyecto digital y obtener un presupuesto transparente en tiempo real. El proyecto abarcó desde el diseño de la interfaz por pasos y el motor de cálculo de precios hasta la generación de propuestas en PDF, el envío de cotizaciones por correo y el despliegue en producción.',
    image: 'projects/cotizadorweb.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'EmailJS', 'Vitest'],
    liveUrl: 'https://cotizador-web-lvsr.vercel.app/',
    highlights: [
      'Flujo guiado de 4 pasos con resumen del presupuesto que se actualiza en tiempo real.',
      'Motor de cálculo con 7 tipos de proyecto, precios dinámicos, recargo por urgencia, soporte y descuentos por tecnología y pago anticipado.',
      'Conversión CLP/USD con el dólar observado, caché local y tasa de respaldo.',
      'Generación de propuestas en PDF con folio, condiciones comerciales y vigencia.',
      'Envío de cotizaciones por correo con EmailJS y respaldo mediante API Express con Nodemailer.',
      'Seguridad del backend con validación de datos, rate limiting, CORS restringido y protección contra spam.',
      'Interfaz responsive con modo claro/oscuro y mejoras de accesibilidad.',
      'Pruebas automatizadas con Vitest y despliegue continuo en Vercel.',
    ],
  },
];
