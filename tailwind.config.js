/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yantra': '#1e3a8a',
        'mango-accent': '#f6ad55',
      },
    },
  },
  plugins: [],
}