// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://samhlking.github.io/',
  base: '/astro-tutorial',

  fonts: [{
  provider: fontProviders.local(),
  name: "Inter",
  cssVariable: "--inter-font",
  options: {
    variants: [{
      src: ['./src/assets/fonts/InterVariable.woff2'],
      weight: '100 700',
      style: 'normal'
    }]
  }
}],

  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()]
  }
});