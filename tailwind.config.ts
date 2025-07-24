import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-green': '0 0 30px 10px rgba(74, 222, 128, 0.6)',
        'glow-green-lg': '0 0 80px 30px rgba(74, 222, 128, 0.4)',
      },
      borderRadius: {
        '4xl': '40px',
        '5xl': '50px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dosis: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
