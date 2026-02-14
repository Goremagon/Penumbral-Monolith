import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
    port: 4321
  },
  // Configure the underlying Vite server to allow the production domain
  vite: {
    server: {
      allowedHosts: ['penumbralmonolith.com']
    }
  }
});
