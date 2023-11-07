/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3': '0.75rem', // Add the desired border radius size
      },
    },
  },
  plugins: [],
}