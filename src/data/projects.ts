export interface Project {
  title: string;
  description: string;
  image: string;
  badge: string;
  category: 'Datavolve B2B' | 'Desarrollo Personal y Academia';
  url: string;
}

export const projectsData: Project[] = [
  // --- BLOQUE 1: ECOSISTEMA DATAVOLVE ---
  {
    title: "Agente IA para Automatización del Pipeline de Consultoría",
    category: "Datavolve B2B",
    badge: "EN PROCESO",
    image: "https://placehold.co/600x400/1e3a8a/ffffff?text=AI+Consulting+Agent",
    description: "Desarrollo de un agente inteligente basado en LLMs orientado a optimizar el embudo de ventas comercial. Automatiza la calificación de leads, el análisis sintáctico de necesidades del cliente y la pre-generación de plantillas de evaluación personalizadas y esquemas de diagnóstico estratégico.",
    url: "#"
  },
  {
    title: "Sitio Web Corporativo • DATAVOLVE",
    category: "Datavolve B2B",
    badge: "EN DISEÑO",
    image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Datavolve+Corporate+Web",
    description: "Diseño y arquitectura de la plataforma institucional de la consultora TI. Optimizado para el posicionamiento orgánico (SEO), velocidad de carga y conversión de clientes corporativos mediante una propuesta de valor clara basada en datos.",
    url: "#"
  },
  {
    title: "Template Web para Venta de Servicios (MVP SaaS)",
    category: "Datavolve B2B",
    badge: "EN PROCESO",
    image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Service+Sales+Template",
    description: "Estructura modular reutilizable diseñada para profesionales independientes y empresas de servicios. Permite el despliegue rápido de landings de alta conversión con integración nativa para agendamiento y pasarelas de pago.",
    url: "#"
  },
  {
    title: "Framework Datavolve Data-Ops: Almacenamiento y Analítica Plus",
    category: "Datavolve B2B",
    badge: "EN PROCESO",
    image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Data-Ops+Analytics+Framework",
    description: "Sistema escalable que combina una base de datos relacional para el registro de transacciones comerciales con un módulo interactivo de Business Intelligence (BI). Permite transformar la data cruda de ventas y operaciones en gráficos de KPIs financieros procesables.",
    url: "#"
  },
  // --- BLOQUE 2: PROYECTOS INDEPENDIENTES ---
  {
    title: "EduMetrics Hub • Gestión de Rendimiento Universitario",
    category: "Desarrollo Personal y Academia",
    badge: "EN PROCESO",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=EduMetrics+Hub",
    description: "Aplicación analítica personal para el control y proyección del rendimiento académico en Ingeniería Civil Informática. Permite registrar asignaturas, ponderar calificaciones en tiempo real e indexar de forma automatizada los repositorios de código de cada cátedra.",
    url: "#"
  },
  {
    title: "TalentTracker • Optimizador de Postulaciones y Prácticas TI",
    category: "Desarrollo Personal y Academia",
    badge: "EN PROCESO",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=TalentTracker+App",
    description: "Pipeline interactivo basado en tableros Kanban para gestionar procesos de selección y búsqueda de prácticas profesionales. Cuenta con un microservicio que analiza descripciones de ofertas laborales para sugerir keywords estratégicas en la postulación.",
    url: "#"
  },
  {
    title: "Portafolio Profesional y Vitrina de Credenciales",
    category: "Desarrollo Personal y Academia",
    badge: "COMPLETADO",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Astro+DRY+Portfolio",
    description: "Implementación de este entorno web modular utilizando Astro, Tailwind CSS y TypeScript. Diseñado bajo el principio de ingeniería DRY (Don't Repeat Yourself) para centralizar y automatizar la renderización de proyectos y certificaciones globales.",
    url: "https://github.com/victopvl/victopvl.github.io"
  }
];