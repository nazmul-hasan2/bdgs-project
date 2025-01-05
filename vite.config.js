import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        servies: resolve(__dirname, 'services.html'),
        resources: resolve(__dirname, 'resources.html'),
      },
    },
  },
});
