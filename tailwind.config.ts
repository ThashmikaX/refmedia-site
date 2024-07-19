import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "425px",
      },
      colors: {
        sectionTitle: "rgba(0, 0, 0, 0.5)",
        supportingText: "rgba(0, 0, 0, 0.85)",
        border: "rgba(0, 0, 0, 0.1)",
        button: "rgba(98, 27, 218, 1)",
        buttonShadowDefault:"0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45), 0px 16px 20px 0px rgba(95, 0, 255, 0.20)",
        buttonShadowHoverd:"0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45)",
        buttonShadowPressed:"0px 48px 1px 1px rgba(0, 0, 0, 0.20) inset"
      },
    },
  },
  plugins: [],
};
export default config;
