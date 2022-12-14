module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Lato",
      cursive: "Stalemate",
    },

    extend: {
      colors: {
        primary1: "#EDBFB7",
        primary2: "#2B1C40",
        secondary: "#0F7173",
        accent: "#ADF6B1",
      },
      gradientColorStops: (theme) => ({
        gradientColor1: "#2F0743",
        gradientColor2: "#000000FC",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
