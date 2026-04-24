/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8fd0ff',
          400: '#59b5ff',
          500: '#3396ff',
          600: '#1d75f5',
          700: '#195ddf',
          800: '#1b4cb5',
          900: '#1c438e',
        },
        medical: {
          bg: '#f4f9ff',
          panel: '#ffffff',
          soft: '#e7f2ff',
          border: '#d4e5f9',
          text: '#0f172a',
          muted: '#5b6b82',
        },
      },
      boxShadow: {
        soft: '0 18px 45px -24px rgba(30, 64, 175, 0.35)',
      },
      fontFamily: {
        sans: ['Tahoma', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
