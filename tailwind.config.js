/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
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
        'primary-light': '#FBEAEA;',
        'primary-dark': '#741C21;',
        'secondary': '#FF668B',
        'secondary-dark': '#71717A',
        'secondary-light': '#E65073',
        'shopping': '#8C52FF',
      },
    },
  },
  plugins: [],
}

