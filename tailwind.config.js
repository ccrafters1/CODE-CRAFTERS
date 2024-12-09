/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'blue': {
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
          },
          'purple': {
            500: '#8B5CF6',
            900: '#4C1D95',
          },
          'pink': {
            500: '#EC4899',
          },
          'green': {
            500: '#22C55E',
          },
        },
        animation: {
          'gradient': 'gradient 8s linear infinite',
        },
        keyframes: {
          gradient: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
        },
      },
    },
    plugins: [],
  }