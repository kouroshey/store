/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#212529",
        "dark-1": "rgb(0 0 0 / 15%)",
        "dark-2": "rgb(30 30 30 / 90%)",
        "dark-3": "rgb(0 0 0 / 65%)",
        "dark-4": "rgb(0 0 0 / 20%)",
        "border-1": "rgb(255 255 255 / 15%)",
        "white-transparent": "rgb(255 255 255 / 25%)",
        "full-transparent": "#ffffff26",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
