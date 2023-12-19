/** @type {import('tailwindcss').Config} */

import { defaultStyles } from "./tailwind-base";

const customColours = {
  transparent: "transparent",
  current: "currentColor",
  white: {
    DEFAULT: "rgba(255, 255, 255, 1)",
    88: "rgba(255, 255, 255, 0.88)",
    80: "rgba(255, 255, 255, 0.80)",
    64: "rgba(255, 255, 255, 0.64)",
    56: "rgba(255, 255, 255, 0.56)",
    40: "rgba(255, 255, 255, 0.40)",
    32: "rgba(255, 255, 255, 0.32)",
    24: "rgba(255, 255, 255, 0.24)",
    16: "rgba(255, 255, 255, 0.16)",
    12: "rgba(255, 255, 255, 0.12)",
    "08": "rgba(255, 255, 255, 0.08)",
  },
  black: {
    DEFAULT: "rgba(0, 0, 0, 1)",
    88: "rgba(0, 0, 0, 0.88)",
    80: "rgba(0, 0, 0, 0.80)",
    64: "rgba(0, 0, 0, 0.64)",
    56: "rgba(0, 0, 0, 0.56)",
    40: "rgba(0, 0, 0, 0.40)",
    32: "rgba(0, 0, 0, 0.32)",
    24: "rgba(0, 0, 0, 0.24)",
    16: "rgba(0, 0, 0, 0.16)",
    14: "rgba(0, 0, 0, 0.14)",
    12: "rgba(0, 0, 0, 0.12)",
    10: "rgba(0, 0, 0, 0.1)",
    "08": "rgba(0, 0, 0, 0.08)",
  },
  primary: {
    100: "rgba(237, 237, 237, 1)",
    200: "rgba(219, 219, 219, 1)",
    300: "rgba(200, 200, 200, 1)",
    400: "rgba(173, 173, 173, 1)",
    500: "rgba(153, 153, 153, 1)",
    600: "rgba(136, 136, 136, 1)",
    700: "rgba(123, 123, 123, 1)",
    800: "rgba(103, 103, 103, 1)",
    900: "rgba(84, 84, 84, 1)",
    1000: "rgba(54, 54, 54, 1)",
  },
  secondary: {
    100: "rgba(253, 250, 242, 1)",
    200: "rgba(250, 244, 230, 1)",
    300: "rgba(245, 233, 205, 1)",
    400: "rgba(240, 223, 179, 1)",
    500: "rgba(235, 212, 154, 1)",
    600: "rgba(230, 201, 129, 1)",
    700: "rgba(184, 161, 103, 1)",
    800: "rgba(138, 121, 77, 1)",
    900: "rgba(92, 80, 52, 1)",
    1000: "rgba(46, 40, 26, 1)",
  },
  grey: {
    100: "rgba(234, 234, 234, 1)",
    200: "rgba(220, 220, 220, 1)",
    300: "rgba(186, 186, 186, 1)",
    400: "rgba(151, 151, 151, 1)",
    500: "rgba(116, 116, 116, 1)",
    600: "rgba(82, 82, 82, 1)",
    700: "rgba(47, 47, 47, 1)",
    800: "rgba(39, 39, 39, 1)",
    900: "rgba(31, 31, 31, 1)",
    1000: "rgba(24, 24, 24, 1)",
    1100: "rgba(16, 16, 16, 1)",
    1200: "rgba(8, 8, 8, 1)",
  },
  info: {
    100: "rgba(248, 251, 255, 1)",
    300: "rgba(220, 238, 255, 1)",
    500: "rgba(120, 190, 255, 1)",
    700: "rgba(2, 132, 254, 1)",
    900: "rgba(1, 64, 143, 1)",
  },
  success: {
    100: "rgba(241, 255, 251, 1)",
    300: "rgba(189, 240, 224, 1)",
    500: "rgba(62, 211, 163, 1)",
    700: "rgba(11, 176, 123, 1)",
    900: "rgba(0, 114, 77, 1)",
  },
  warning: {
    100: "rgba(255, 252, 245, 1)",
    300: "rgba(255, 236, 199, 1)",
    500: "rgba(255, 202, 101, 1)",
    700: "rgba(255, 173, 13, 1)",
    900: "rgba(240, 115, 0, 1)",
  },
  danger: {
    100: "rgba(255, 248, 248, 1)",
    300: "rgba(255, 223, 223, 1)",
    500: "rgba(255, 102, 102, 1)",
    700: "rgba(240, 61, 61, 1)",
    900: "rgba(165, 0, 0, 1)",
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...defaultStyles(customColours),
    extend: {},
  },
  plugins: [],
};
