/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter, Arial, Helvetica, sans-serif"],
    },
    extend: {
      colors: {
        "custom-light": "#fffaf8",
        "custom-primary": "#FA8C4C",
        "custom-dark": "#151518",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
