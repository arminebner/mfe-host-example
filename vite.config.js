import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./UserFetcher": "./src/components/UserFetcher.vue",
      },
      shared: ["vue"],
    }),
  ],
});
