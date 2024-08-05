import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Clash Display", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gridGradient:
          "radial-gradient(50% 100% at 50% 0%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      backgroundColor: {
        avatarBackground: "#C7B9DA",
      },
      screens: {
        sm: "425px",
        // "2xlc": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
        xlc: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        lgc: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
        mdc: { max: "767px" }, // => @media (max-width: 767px) { ... }
        smc: { max: "639px" }, // => @media (max-width: 639px) { ... }
      },
      colors: {
        sectionTitle: "rgba(0, 0, 0, 0.5)",
        supportingText: "rgba(0, 0, 0, 0.85)",
        border: "rgba(0, 0, 0, 0.1)",
        button: "rgba(98, 27, 218, 1)",
      },
      boxShadow: {
        buttonShadowDefault:
          "0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45), 0px 16px 20px 0px rgba(95, 0, 255, 0.20)",
        buttonShadowHoverd:
          "0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45)",
        buttonShadowPressed: "0px 48px 1px 1px rgba(0, 0, 0, 0.20) inset",
        containerShadow: "0px 0px 100px 0px rgba(207, 185, 255, 0.50)",
      },
      gridTemplateColumns: {
        "4": "repeat(auto-fit, 240px)",
        "3": "repeat(auto-fit,minmax(120px,1fr))",
        "2": "repeat(auto-fit, 100px)",
      },
    },
  },
  plugins: [],
};
export default config;
