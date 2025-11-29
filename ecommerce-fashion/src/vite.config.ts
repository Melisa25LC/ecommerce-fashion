import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia 'ecommerce-fashion' por el nombre de tu repositorio
  base: '/ecommerce-fashion/',
});
