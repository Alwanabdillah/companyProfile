/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      writingMode: {
        "vertical-rl": "vertical-rl",
        "horizontal-tb": "horizontal-tb",
      },
      boxShadow: {
        "solid-gray": "0px 4px 6px rgba(0, 0, 0, 0)", 
      },
    },
  },
  plugins: [],
};

