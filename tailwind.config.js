/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#d5b9b9",
        darkBg: "#1B1C1E",
        lightText: "#000000",
        darkText: "#ffffff",
        bgInDark: "#2D3031",
        inputBg: "#F9ECE8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jose: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        mdPlus: { min: "950px", max: "1023px" },
        smMinus: { min: "490px", max: "639px" },
        xs: { max: "410px" },
        xss: { max: "360px" },
        xsss: { max: "380px" },
      },
      transitionProperty: {
        bg: "background-color",
      },
    },
  },
  plugins: [],
};
