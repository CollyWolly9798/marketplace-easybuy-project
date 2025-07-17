export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['var(--font-dm)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        zen: ['var(--font-zen)', 'cursive'],
      },
      container: {
        center: true,
        padding: '16px',
        screens: {
          sm: '375px',
          md: '768px',
          xl: '1680px',
        },
      },
      borderRadius: {
        xl: '24px',
      },
      colors: {
        'white-2': '#FFF5EE',
      },
      boxShadow: {
        card: '2px 2px 8px 2px rgba(0, 0, 0, 0.25), -2px -2px 8px 2px #fffaf6',
      },
    },
  },
  plugins: [],
};
