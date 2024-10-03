// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://sensplastik.github.io',
  base: 'static.sensplastik.studio',

  integrations: [vue({ devtools: true , appEntrypoint: '/src/app' })],
  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/src/styles/_variables.scss";',
          api: 'modern',
          silenceDeprecations: ['mixed-decls'],
        },
      },
    },
  }
});