// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});