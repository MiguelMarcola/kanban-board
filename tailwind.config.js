/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "rgba(0,0,0,.1)",
        columnBackgroundColor: "#fff",
      },
    },
  },
  plugins: [],
};
