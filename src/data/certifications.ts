export interface Certification {
  title: string;
  institution: string;
  image: string;
  category: 'Certificación' | 'Curso' | 'Webinar' | 'Microcurso';
  tags: string[];
  comment: string;
  url: string;
  date: string;
}

export const certificationsData: Certification[] = [
  {
    title: "Agile Explorer",
    institution: "IBM",
    image: "https://images.credly.com/size/340x340/images/68da177e-de6c-48be-8f3e-8e65842f4ec3/Agile_Explorer.png",
    category: "Certificación",
    tags: ["Agile", "Scrum", "Proyectos"],
    comment: "Me dio las bases fundamentales para entender cómo se gestionan y coordinan los proyectos tecnológicos modernos bajo marcos de trabajo ágiles.",
    url: "https://www.credly.com/", // Aquí puedes poner el link real a tu credencial de Credly
    date: "2026"
  },
  {
    title: "Gestión Efectiva de Proyectos y Equipos",
    institution: "Open Academy Santander",
    image: "https://placehold.co/400x250/1e3a8a/ffffff?text=Santander+Academy", // Marcador azul temporal
    category: "Curso",
    tags: ["Gestión", "Liderazgo", "Equipos"],
    comment: "Clave para desarrollar habilidades de coordinación humana y entender la dinámica de trabajo en células de alta demanda operativa.",
    url: "#",
    date: "2026"
  },
  {
    title: "Liderazgo en el Entorno Digital",
    institution: "Open Academy Santander",
    image: "https://placehold.co/400x250/1e3a8a/ffffff?text=Santander+Liderazgo",
    category: "Curso",
    tags: ["Liderazgo", "Digital", "Estrategia"],
    comment: "Enfocado en cómo guiar equipos distribuidos geográficamente y potenciar la transformación digital dentro de las organizaciones.",
    url: "#",
    date: "2026"
  },
  {
    title: "Boost Sales Team CRM Efficiency",
    institution: "Salesforce Trailhead",
    image: "https://placehold.co/400x250/00a1e0/ffffff?text=Salesforce+Trailhead", // Marcador celeste Salesforce
    category: "Curso",
    tags: ["CRM", "Salesforce", "Ventas"],
    comment: "Introducción técnica a la optimización de embudos de negocio y gestión de clientes utilizando el ecosistema CRM líder del mercado.",
    url: "#",
    date: "2026"
  }
];