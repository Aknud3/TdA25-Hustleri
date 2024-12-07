/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: '#0070BB',
        headBtnBlue: '#395A9A',
        lightBlue: '#E2F3FF',
        mainRed: '#E31837',
        lightRed: '#FFE3E7',
        backGrey: '#F6F6F6',
        strongGrey: '#D9D9D9',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'], // název fontu odpovídá `font-family` z CSS
      },
    },
  },
  plugins: [],
}

