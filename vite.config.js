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
        aipr: resolve(__dirname, '/services/artificial-public-response.html'),
        ms: resolve(__dirname, 'mission-statement.html'),
        whe: resolve(__dirname, 'who-we-are.html'),
        pm: resolve(__dirname, 'project-management.html'),
        hiw: resolve(__dirname, 'how-it-works.html'),
        da: resolve(__dirname, 'data-analysis.html'),
        cu: resolve(__dirname, 'contact-us.html'),
        thankyou: resolve(__dirname, 'thankyou.html'),
        statistics: resolve(__dirname, 'statistics.html'),
      },
    },
  },
});
