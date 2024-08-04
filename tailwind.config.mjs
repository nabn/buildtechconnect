import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bricolage Grotesque Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryBg: "hsl(8.57deg 100% 97.25%)",
        textFg: "rgb(46, 64, 91)",
      },
      backgroundImage: {
        dotted: "radial-gradient(#999 5%, transparent 0)",
        square: `
         linear-gradient(to right,rgba(0,0,0,.02) 1px,transparent 1px),
         linear-gradient(to bottom,rgba(0,0,0,.02) 1px,transparent 1px)`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
