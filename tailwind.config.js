import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-violet': '#4B0082',
        'brand-peach': '#FFDAB9',
        'brand-periwinkle': '#CCCCFF',
        'brand-gold': '#FFD700',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(75, 0, 130, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'premium': '0 20px 40px -15px rgba(75, 0, 130, 0.25)',
        'gold-glow': '0 0 25px rgba(255, 215, 0, 0.45)',
      },
    },
  },
  plugins: [
    typography,
  ],
}
