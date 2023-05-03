import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import * as path from "node:path"
import process from "node:process"

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
})
