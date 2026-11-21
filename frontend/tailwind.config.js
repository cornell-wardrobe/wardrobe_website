/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

// Brand colors and fonts are defined once as CSS variables in src/index.css
// (":root" block). Update them there and every page follows.
const brandColor = (name) => `rgb(var(--color-${name}) / <alpha-value>)`

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'nav': '702px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Primary
        ink: brandColor('ink'),
        // Secondary
        cream: brandColor('cream'),
        sand: brandColor('sand'),
        charcoal: brandColor('charcoal'),
        // Accent (use sparingly)
        'brand-blue': brandColor('blue'),
        navy: brandColor('navy'),
        butter: brandColor('butter'),
      },
      fontFamily: {
        display: ['var(--font-display)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
