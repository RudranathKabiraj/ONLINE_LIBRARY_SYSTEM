import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ONLINE_LIBRARY_SYSTEM/', //  important for GitHub Pages
  plugins: [react()],
});
