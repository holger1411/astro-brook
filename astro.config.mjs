import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explicitly specify static output (which is also the default)
  site: 'https://astro-brook.example.com',
  // Enable built-in image optimization with specific settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Use webp as preferred format for better compression and quality
        format: 'webp',
        // Higher quality setting (0-100)
        quality: 80,
        // Default sizes for responsive images
        sizes: [640, 960, 1280, 1600, 2000],
        // Process images into multiple sizes for responsiveness
        resizeOptions: {
          fit: 'cover',
          position: 'center'
        }
      }
    }
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  // Enable view transitions for smooth page navigation
  experimental: {
    viewTransitions: true
  }
});
