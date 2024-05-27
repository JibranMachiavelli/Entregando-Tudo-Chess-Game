import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '98': '0.98',
      },
      animation: {
        blob: "blob 10s infinite",
        blink: 'blink 1s infinite',
        revealFromRight: 'revealFromRight 1s ease-out forwards',
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
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        revealFromRight: {
          '0%': {
            clipPath: 'inset(0 0 0 100%)',
          },
          '100%': {
            clipPath: 'inset(0 0 0 0)',
          }
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'],
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(31, 29, 29, 0.5) transparent",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(31, 41, 55, 0.5)",
            borderRadius: "20px",
            border: "1px solid transparent",
          },
          "&::-webkit-scrollbar-button": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
