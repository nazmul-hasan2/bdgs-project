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
        web: resolve(__dirname, '/services/web-design-development.html'),
        seo: resolve(__dirname, '/services/seo.html'),
        smm: resolve(__dirname, '/services/social-media-marketing.html'),
        ms: resolve(__dirname, 'mission-statement.html'),
        mhs: resolve(__dirname, '/services/n.html'),
      },
    },
  },
});
