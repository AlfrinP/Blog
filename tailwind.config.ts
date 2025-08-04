import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141c25",
        secondary: "#494f5b",
      },
    },
  },
  plugins: [],
};

export default config;
