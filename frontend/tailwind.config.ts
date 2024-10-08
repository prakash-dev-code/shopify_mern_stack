import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#333333",
        white: "#ffffff",
        offwhite: "#f0f0f0",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        yellow: "#FFFF00",
        purple: "#800080",
        orange: "#FFA500",
        pink: "#FFC0CB",
      },
    },
  },
  plugins: [],
};
export default config;
