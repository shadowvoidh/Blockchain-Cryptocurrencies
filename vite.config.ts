import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite config: React + TS. Dev server proxies /api to the Express
// backend so cookies (HttpOnly CSRF/session) work under one origin.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
        credentials: true,
      } as any,
    },
  },
  build: {
    sourcemap: false, // don't ship source maps to production (avoid leaking source)
  },
});
