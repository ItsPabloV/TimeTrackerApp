/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: '#f0f6fd',
          100: '#e4effb',
          200: '#cfe1f6',
          300: '#b1cdf0',
          400: '#9fbaea',
          500: '#7794dd',
          600: '#5d75ce',
          700: '#4d61b5',
          800: '#405193',
          900: '#3a4875',
          950: '#222944',
        },
      },
    },
  },
  plugins: [],
}