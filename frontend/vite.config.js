import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://34.207.115.246:3000",
      "/uploads/": "http://34.207.115.246:3000",
    },
  },
});
