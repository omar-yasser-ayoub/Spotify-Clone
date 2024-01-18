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
    },
  },
  plugins: [],
}
