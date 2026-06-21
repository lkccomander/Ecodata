import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        "economic-indices": resolve(__dirname, "economic-indices.html"),
        "math-ai": resolve(__dirname, "math-ai.html"),
        pricing: resolve(__dirname, "pricing.html"),
        users: resolve(__dirname, "users.html"),
      },
    },
  },
});
