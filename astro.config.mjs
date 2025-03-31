import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explicitly specify static output (which is also the default)
  site: 'https://astro-brook.example.com',
  // Enable built-in image optimization with specific settings
  image: {
    // Configure domains for remote images if needed
    domains: [],
    // Format settings apply to both local and remote images
    format: 'webp', // Default format
    quality: 80, // Default quality (0-100)
    // Make sure sharp is used for image processing
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap()
  ]
});
