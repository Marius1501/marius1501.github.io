// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://marius1501.github.io",
  base: "/",
  output: "static",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
