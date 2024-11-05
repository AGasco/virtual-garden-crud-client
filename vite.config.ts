import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      '@/api': resolve('src/api'),
      '@/assets': resolve('src/assets'),
      '@/components': resolve('src/components'),
      '@/constants': resolve('src/constants'),
      '@/data': resolve('src/data'),
      '@/types': resolve('src/types'),
      '@/hooks': resolve('src/hooks'),
      '@/services': resolve('src/services'),
      '@/styles': resolve('src/styles')
    }
  },
  plugins: [react()]
});
