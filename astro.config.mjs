// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Geist",
    cssVariable: "--font-geist",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Geist/Geist-VariableFont_wght.ttf'],
        weight: '400 500 600 700',
        style: 'normal'
      }]
    }
  }]
});