/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        // montserrat: ['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}
