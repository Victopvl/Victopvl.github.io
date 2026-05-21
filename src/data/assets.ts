export interface Asset {
  title: string;
  description: string;
  badge: string;
  githubUrl: string;
}

export const assetsData: Asset[] = [
  {
    title: "Estructura Base para Landing Page B2B",
    badge: "ASTRO + TAILWIND",
    description: "Componente esqueleto optimizado para el despliegue rápido de páginas de servicios profesionales. Incluye configuración modular y diseño responsivo nativo.",
    githubUrl: "https://github.com/victopvl" // Aquí pondrás el link real a tu repositorio en el futuro
  },
  {
    title: "Script Core para Análisis Sintáctico de Requerimientos",
    badge: "PYTHON + OPENAI API",
    description: "Versión base de un script en Python para conectar con modelos de lenguaje. Permite recibir texto crudo de formularios y clasificar palabras clave operativas de forma automatizada.",
    githubUrl: "https://github.com/victopvl"
  },
  {
    title: "Esquema Relacional para Control Operativo y Ventas",
    badge: "POSTGRESQL / SQL",
    description: "Plantilla de modelado de base de datos relacional para registrar flujos de leads, estados comerciales e ingresos brutos. Diseñado para servir de base a tableros de Business Intelligence.",
    githubUrl: "https://github.com/victopvl"
  }
];