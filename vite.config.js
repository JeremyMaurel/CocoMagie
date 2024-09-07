// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',

    minify: 'esbuild',
    rollupOptions: {
      input: './index.html',
    },
  },
});
