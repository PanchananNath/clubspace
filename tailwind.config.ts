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
        primary: "#365486",
        secondary: "#DCF2F1",
        ternary: "#B3DCE9",
        quaternary: "#0F1035",
        grey: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
export default config;
