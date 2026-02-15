/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#00d4aa',
        'accent-dark': '#00b894',
        surface: '#18181b',
        'surface-light': '#1a1a2e',
      },
    },
  },
  plugins: [],
};
