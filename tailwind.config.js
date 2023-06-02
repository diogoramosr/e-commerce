/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#FFF',
        'dark': '#000',
        'secondary': '#9ca3af',
        "primary-light": "#F7F7F7",
        'secondary-light': '#E5E5E5',
        'red': '#ef4444',
        "star": "#FFE135"
        },
    },
  },
  plugins: [require("daisyui")],
};
