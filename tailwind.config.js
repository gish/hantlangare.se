const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[100],
        secondary: {
          50: "#ECF3EF",
          100: "#DCEAE2",
          200: "#B9D4C6",
          300: "#93BDA7",
          400: "#71A88A",
          500: "#558B6E",
          600: "#446F58",
          700: "#325241",
          800: "#23392D",
          900: "#111C17",
          950: "#080D0A",
        },
        accent: {
          50: "#F3EDF0",
          100: "#E4D8DE",
          200: "#CBB3BF",
          300: "#B18C9E",
          400: "#986780",
          500: "#704C5E",
          600: "#5B3E4D",
          700: "#432D38",
          800: "#2E1F26",
          900: "#150E12",
          950: "#0C080A",
        },
      },
    },
  },
  plugins: [],
};
