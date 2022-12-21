/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.3rem',
        sm: '2rem',
        md: '3rem',
        lg: '4.5rem',
        xl: '6rem',
      },
    },
    fontFamily: {
      sans: ['var(--font-manrope)', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
