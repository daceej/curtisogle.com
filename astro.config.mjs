// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://ddev.com",
  vite: {
    server: {
      allowedHosts: ["." + process.env.DDEV_TLD], // leave this unchanged for DDEV!
    },
    // Configure CORS for the dev server (security)
    cors: { origin: process.env.DDEV_PRIMARY_URL },    
  }
});
