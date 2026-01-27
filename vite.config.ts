import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@config': path.resolve(__dirname, './src/config'),
      // Fix para compatibilidade entre DevExpress e MUI Icons
      '@mui/icons-material/esm': path.resolve(__dirname, './node_modules/@mui/icons-material/esm'),
      '@mui/icons-material': path.resolve(__dirname, './node_modules/@mui/icons-material'),
    },
  },
});
