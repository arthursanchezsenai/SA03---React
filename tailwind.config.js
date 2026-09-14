/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // paleta "fogão de lenha": oliva profundo, tijolo queimado, papel manteiga
        oliva: {
          900: "#1F2A1A",
          800: "#2C3B23",
          700: "#3E5230",
        },
        tijolo: {
          600: "#B5482F",
          500: "#C85A3D",
          400: "#DB7B5A",
        },
        manteiga: {
          100: "#FBF6EC",
          200: "#F3E9D2",
        },
        mostarda: "#D9A441",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

