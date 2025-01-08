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
        web: resolve(__dirname, 'web-design-development.html'),
        seo: resolve(__dirname, 'seo.html'),
        smm: resolve(__dirname, 'social-media-marketing.html'),
        aipr: resolve(__dirname, 'artificial-public-response.html'),
      },
    },
  },
});
