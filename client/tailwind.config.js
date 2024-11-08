/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        cs: "480px",
        gmd: "700px",
      },
    },
  },
  plugins: [],
};
