// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: vervangen zodra het definitieve domein er is (zie PLAN.md §10, punt 1)
export default defineConfig({
  site: 'https://profkluswerk.nl',
  integrations: [
    sitemap({
      // Bedankpagina en de nog lege projectenpagina horen niet in de index
      filter: (pagina) =>
        !pagina.includes('/offerte/bedankt') && !pagina.includes('/projecten'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
