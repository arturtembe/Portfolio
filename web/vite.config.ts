import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        implementation: sass, //sass
        includePaths: ['node_modules']
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
