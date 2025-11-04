import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#f2e5aa',
          cream: '#fff7e1',
          goldSoft: '#f7efd0',
          black: '#050505',
          ink: '#111111',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(242, 229, 170, 0.3)',
      },
    },
  },
  plugins: [forms],
};
