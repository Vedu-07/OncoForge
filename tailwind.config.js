/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter: ["Inter","sans-serif"],
        Calistoga: ["Calistoga","sans-serif"],
      },
    animation:{
      fadeindown: 'fade-in-down 1.5s ease-in 0.5s 1',
      fadein: 'fade-in 3s ease-in-out 0.25s 1',
    },
    keyframes:{
      "fade-in": {
              "0%": {
                  opacity: 0
              },
              "100%": {
                  opacity: 1
              },
          },
      "fade-in-down": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(0, -100%, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
    }
    },
  },
  plugins: [],
}