/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{jsx,js}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        // Define your custom colors
        'light-beige': '#f7f1de', 
        'deep-maroon': '#561C24', 
        'light-maroon': '#6D2932',
        'dark-beige': '#C7B7A3',

      },
    },
  },
  plugins: [],
}