/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        /* 'primary-heading-pink-color': '#F82BA9',
        'primary-heading-black-color': '#160E4B',
        'second-color-text': '#757F95',
        'background-purple': '#8C52FF',
        'background-pink': '#FEEDF7',
        'background-rose': '#F82BA9',
        'layer-background': '#F82BA9B2', */

        'primary': '#A6252A ',
        'darkMode-primary': '#D75458',

        'primary-light': '#FBEAEA;',
        'primary-dark': '#741C21;',
        'secondary': '#FF668B',
        'darkMode-secondary': '#FFC2D0',
        'secondary-dark': '#71717A',
        'secondary-light': '#E65073',
        'shopping': '#8C52FF',
        'dark-shopping': '#CD2E33',
        'price-color': '#D4D4D8',
        'textGray': '#E4E4E7',
        'textDesc': '#52525B',
      },
    },
  },
  plugins: [],
}

