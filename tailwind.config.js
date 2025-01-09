/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*',
           './services/**/*.html',       // Include all HTML files inside the "services" folder
    '*.js',
          '.main.css'
          ],
  theme: {
    extend: {},
  },
  plugins: [],
}

