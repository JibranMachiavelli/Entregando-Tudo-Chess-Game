import { transform } from "next/dist/build/swc";
import { blob } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "20%": {
            transform: "translate(100px, -150px) scale(1.1)"
          },
          "40%": {
            transform: "translate(-80px, 80px) scale(0.9)"
          },
          "60%": {
            transform: "translate(150px, 40px) scale(1.05)"
          },
          "80%": {
            transform: "translate(-30px, -150px) scale(0.95)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
      "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
