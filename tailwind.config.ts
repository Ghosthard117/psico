import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserratAlternates: ["var(--font-montserrat-alternates)"],
      }
    },
    colors: {
      primary: {
        20: "#E1B3FF",
        50: "#b342ff",
        60: "#a41cff",
        70: "#7d00d0"
      },
      gray: {
        10: "#2b2829",
        20: "#433e3f",
        30: "#5a5555",
        50: "#898384",
        90: "#e3e3e3",
      },
      white: {
        10: "#f9f6ee",
        100: '#fafafa',
      },
      black: {
        100: '#0a0a0b',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
