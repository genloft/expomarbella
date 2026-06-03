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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          orange: "#FBBA00",
          navy: "#001840",
          light: "#C8D0DC",
          dark: "#0A0A0A",
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      }
    },
  },
  plugins: [],
};
export default config;
