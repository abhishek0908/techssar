/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#111729",
          700: "#1b2338",
        },
        brand: {
          400: "#5eead4",
          500: "#22d3ee",
          600: "#0ea5e9",
        },
        ember: {
          400: "#fb923c",
          500: "#f97316",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,13,0) 0%, #05070d 90%), radial-gradient(ellipse at top, rgba(34,211,238,0.18), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}