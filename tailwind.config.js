/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
      colors: {
        primary: "#2d5092",
        filterBg: "#2d5092",
        filterBgEven: "#a6c6ff",
        titleBar: "#000000",
        fontColor: "#FFFFFF",
      },
      fontFamily: {
        body: ['Lato'],
        title: ['sans']
      },
      minHeight: {
        '1/4': '25%',
      }
    },
  },
  plugins: [],
}
