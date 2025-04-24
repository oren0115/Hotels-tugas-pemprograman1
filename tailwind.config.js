// import {heroui} from "@heroui/theme"

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// }

import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B5942C",
        },
      },
      height: {
        header: "80px",
        hero: "400px",
      },
      spacing: {
        section: "20px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FBF7E8",
              100: "#F7EFD1",
              200: "#EFDFA3",
              300: "#E7CF75",
              400: "#DFBF47",
              500: "#D4AF37", // Gold
              600: "#B5942C",
              700: "#967A24",
              800: "#78611D",
              900: "#5A4815",
              DEFAULT: "#D4AF37",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
