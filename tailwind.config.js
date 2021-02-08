module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.css, ./dist/**/*.js"],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      green: "#33cc33",
      blue: "#4f7df3",
      blueHover: "#7096f5",
      paleBlue: "#c2d3ff",
      lightRed: "#ff5263",
      gray: "#969696",
      veryDarkBlue: "#151f29",
    },
    fontFamily: {
      sans: ["Libre Franklin", "sans-serif"],
    },
    screens: {
      laptop: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
