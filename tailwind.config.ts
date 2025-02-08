import type { Config } from "tailwindcss";

export default {
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
        "brand-brown": "#774936",
        "button-bg": "#E6B8A2",
        highlight: "#EDC4B3",
        "upload-bg": "#FAEEE9",
        "brand-border": "#9D6B53",
      },
      fontFamily: {
        otomanopee: ["'Otomanopee One'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      screens: {
        xs: "495px",
        "1xl": "1365px",
      },
    },
  },
  plugins: [],
} satisfies Config;
