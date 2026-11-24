import { defineConfig } from "vite";

export default defineConfig({
  // Base path: "/" for Vercel/Firebase Hosting (served at domain root).
  // For GitHub Pages project sites set VITE_BASE=/offgrid/ at build time.
  base: process.env.VITE_BASE || "/",
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
