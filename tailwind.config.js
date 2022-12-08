/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primary: '#26A69A',
      secondary: '#424242',
      accent: '#82B1FF'
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif']
    },
    spacing: {
      '5': '1.25rem',
      '10': '2.5rem',
      '15': '3.75rem'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
   // require('@tailwindcss/custom-forms')
  ],
  content: ['templates/chatbot.html'],
  output: '/static/styles/stylesheet.css',

};