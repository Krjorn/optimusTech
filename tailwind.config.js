/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#FFFFFF',
        'primary': '#3A404E',
        'secondary': '#8E2424',
        'tertiary': '#667085',
      },
      padding: {
        '18': '1.125rem',
      }
    },
  },
  plugins: [],
}

