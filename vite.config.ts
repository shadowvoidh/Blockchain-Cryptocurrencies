import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite config: React + TS, static build (no backend/proxy needed — the
// contact form talks directly to Web3Forms, see src/lib/webform.ts).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    sourcemap: false, // don't ship source maps to production (avoid leaking source)
  },
});
