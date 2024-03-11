/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        // sm: { min: '400px', max: '767px' },
        // md: { min: '768px', max: '991px' },
        // lg: { min: '992px', max: '1199px' },
        // xl: { min: '1200px' },
      },
      colors: {
        'dark': '#212529',
        'dark-1': 'rgb(0 0 0 / 15%)',
        'dark-2': 'rgb(30 30 30 / 90%)',
        'border-1': 'rgb(255 255 255 / 15%)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
