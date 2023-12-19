/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // TODO(HG): Theme properly with CH
        // Brand primary: #612d76
        // Interim generated: https://uicolors.app/create
        primary: {
          100: "#f5ecfb",
          200: "#ead8f6",
          300: "#dbbaed",
          400: "#c690e2",
          500: "#ab65d0",
          600: "#9145b4",
          700: "#783794",
          800: "#612d76",
          900: "#552a65",
          1000: "#341141",
        },
      },
    },
  },
  plugins: [],
};
