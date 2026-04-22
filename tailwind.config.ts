import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLime: "var(--lime)",
        brandGold: "var(--gold)",
        brandBlack: "var(--black)",
      },
    },
  },
  plugins: [],
};

export default config;
