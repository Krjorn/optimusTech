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
        'secondary-o-1': 'rgba(142, 36, 36, 0.05)',
        'secondary-o-2': 'rgba(195, 25, 25, 0.03)',
        'g-0': '#F9FAFB',
        'g-1': '#98A2B3',
        'g-2': '#667085',
        'g-3': '#101828',
        'g-border': '#EAECF0',
      },
      padding: {
        '18': '1.125rem',
      },
      maxWidth: {
        '280': '280px',
      }
    },
  },
  plugins: [],
}

