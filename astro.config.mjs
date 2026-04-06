import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://innova.vip',
  integrations: [tailwind({ applyBaseStyles: false })]
});
