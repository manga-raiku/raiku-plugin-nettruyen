import { defineConfig } from "vitest/config"

// vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./test/setup-file.ts",
    testTimeout: 60_000
  }
})
