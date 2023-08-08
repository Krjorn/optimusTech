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
        'g-1': '#98A2B3',
        'g-2': '#667085',
        'g-3': '#101828',
      },
      padding: {
        '18': '1.125rem',
      }
    },
  },
  plugins: [],
}

