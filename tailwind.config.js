module.exports = {
  purge: {
    mode: "layers",
    content: ["./**/*.html"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // screens: {
      //   "2xl": { max: "1535px" },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }
      // },
      colors: {
        gold: {
          icons: "#a49657",
          lighter: "#bcac3f",
          light: "#a69523",
          dark: "#92831e",
        },
        gray: {
          light: "#f5f4f4",
          lighter: "#1e1e1f",
        },
      },
      fontFamily: {
        sans: "Montserrat",
        serif: "DM Serif Display",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
