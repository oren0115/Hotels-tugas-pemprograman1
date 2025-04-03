import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // Ignore TypeScript errors during build
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore TypeScript errors
        if (warning.code === "TS6133" || warning.code === "TS6196") return;
        warn(warning);
      },
    },
  },
});
