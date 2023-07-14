/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        gradientS: "hsl(var(--gradientS))",
        gradientE: "hsl(var(--gradientE))"
      },
      fontFamily: {
        sans: ["Heebo", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        "fluid-sm": ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        "fluid-base": [
          "clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)",
          "1.5"
        ],
        "fluid-lg": ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        "fluid-xl": ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "fluid-2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "fluid-3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "fluid-4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "fluid-5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "fluid-6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"]
      },
      spacing: {
        "fluid-1": "clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)",
        "fluid-2": "clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)"
      }
    }
  },
  plugins: []
};
