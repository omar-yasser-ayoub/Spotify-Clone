/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'log-gradient': [
          '#000000',
          '#111111',
          '#222222',
          'rgba(0,0,0,0)',
        ],
      },

      colors: {
        'dark-bg': '#141414',
        'light-bg': '#292929',
        'text-grey': '#B3B3B3',
        'spotify-green': '#1ED760'
      }
    },
  },
  plugins: [],
}
