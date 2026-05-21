/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
          {
            datavolve: {
              "primary": "#6C8297",       // Azul Acero (Botones principales y acentos)
              "secondary": "#A3B4C5",     // Azul Neblina (Etiquetas, badges y estados)
              "accent": "#6C8297",        // Enfoque secundario
              "neutral": "#CBD2D9",       // Gris Claro Neutro (Bordes finos y separadores)
              "base-100": "#FAFAFA",      // Blanco Suave (El fondo general de la pantalla)
              "base-200": "#FFFFFF",      // Blanco Puro (Fondo del menú lateral y tarjetas para contraste)
              "base-content": "#3A4B5C",  // Azul Oscuro Pizarra (El color de todos los textos y títulos)
            },
          },
        ],
        darkTheme: "datavolve", // Mantenemos tu paleta limpia como base predeterminada
        logs: false,
    }
}