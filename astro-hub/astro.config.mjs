import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  server: {
    host: true,
    port: 4321
  },
  integrations: [keystatic(), react(), markdoc(), tailwind()],
  // Configure the underlying Vite server to allow the production domain
  vite: {
    server: {
      allowedHosts: ['penumbralmonolith.com']
    }
  }
});
