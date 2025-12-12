// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // <--- Usamos la integración oficial

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Esto asegura que Tailwind se aplique a los estilos base automáticamente
      applyBaseStyles: true, 
    }),
  ],
});