/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0F1C',
        surface: '#161927',
        surface2: '#1E2233',
        cream: '#F1EFE9',
        muted: '#9A9DB3',
        gold: '#E4B343',
        velvet: '#C1443B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
