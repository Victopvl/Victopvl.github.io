export interface Project {
  title: string;
  description: string;
  image: string;
  badge: string;
  category: 'Datavolve B2B' | 'Desarrollo Personal y Academia';
  url: string;
}

// Helper para generar placeholders consistentes con los colores de tu marca
const getImageUrl = (text: string) => `https://placehold.co/600x400/6C8297/ffffff?text=${encodeURIComponent(text)}`;

export const projectsData: Project[] = [
  // --- BLOQUE 1: ECOSISTEMA DATAVOLVE ---
  {
    title: "Agente IA para Automatización del Pipeline de Consultoría",
    category: "Datavolve B2B",
    badge: "EN PROCESO",
    image: getImageUrl("Agente IA Consultoría"),
    description: "Desarrollo de un agente inteligente basado en LLMs orientado a optimizar el embudo de ventas comercial. Automatiza la calificación de leads, el análisis sintáctico de necesidades del cliente y la pre-generación de plantillas de diagnóstico.",
    url: "#"
  },
  {
    title: "Sitio Web Corporativo • DATAVOLVE",
    category: "Datavolve B2B",
    badge: "EN DISEÑO",
    image: getImageUrl("Datavolve Web"),
    description: "Diseño y arquitectura de la plataforma institucional de la consultora TI. Optimizado para SEO, velocidad de carga y conversión de clientes corporativos mediante una propuesta de valor basada en datos.",
    url: "#"
  },
  // ... (puedes aplicar este helper al resto de proyectos)
  {
    title: "Portafolio Profesional y Vitrina de Credenciales",
    category: "Desarrollo Personal y Academia",
    badge: "COMPLETADO",
    image: getImageUrl("Portafolio V.V."),
    description: "Implementación de este entorno web modular utilizando Astro, Tailwind CSS y TypeScript. Diseñado bajo el principio de ingeniería DRY para centralizar y automatizar la renderización de proyectos y certificaciones.",
    url: "https://github.com/victopvl/victopvl.github.io"
  }
];