import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|checkbox|input|link|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(128,0,128)",
          100: "#E0B0FF",
          200: "#D891EF",
          300: "#C964E3",
          400: "#B743C8",
          500: "#A022B5",
          600: "#8B1C9F",
          700: "#771688",
          800: "#631071",
          900: "#4F0A5A",
        },
        secondary: {
          DEFAULT: "rgb(255,215,0)",
          100: "#FFF8E1",
          200: "#FFECB3",
          300: "#FFE082",
          400: "#FFD54F",
          500: "#FFCA28",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
