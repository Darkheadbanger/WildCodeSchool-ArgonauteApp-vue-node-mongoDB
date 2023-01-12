import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import i from "@vitejs/plugin-vue";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/scss/global.scss";',
      },
    },
  },
  plugins: [i()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
