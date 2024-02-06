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
        accent: "#704C5E",
      },
    },
  },
  plugins: [],
};
