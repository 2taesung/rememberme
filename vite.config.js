import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@image': path.resolve(__dirname, './public'),
      '@': path.resolve(__dirname, '.')
    }
  }
});
