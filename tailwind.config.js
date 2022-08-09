const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/**/*.js',
  ],
  theme: {
    fontFamily: {
      "orbitron": ["Orbitron", "sans serif"],
      "raleway": ["Raleway", "sans serif"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '9999px': '9999px'
      },
      gridTemplateColumns: {
        "navbar": "1fr auto minmax(400px, 3fr) 2fr"
      }
    },
  },
  darkMode: 'class',
  theme: {},
}