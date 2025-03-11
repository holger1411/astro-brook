import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explizit statischen Output spezifizieren (ist auch default)
  site: 'https://astro-brook.example.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ]
});
