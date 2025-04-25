import path from 'node:path';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests.setup.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    }
  }
} as UserConfig);
