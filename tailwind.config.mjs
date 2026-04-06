/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#09090B',
        gold: '#D6B46A',
        champagne: '#F5E7C1',
        graphite: '#18181B'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        card: '0 20px 60px -30px rgba(214, 180, 106, 0.35)'
      }
    }
  },
  plugins: []
};
