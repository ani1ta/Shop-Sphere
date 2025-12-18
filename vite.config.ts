import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"), // Update to point to the correct folder
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      external: [], // Add external modules here if needed
    },
  },
});
