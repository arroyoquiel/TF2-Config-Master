/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tf2-dark': '#0a0a0a',
        'tf2-darker': '#050505',
        'tf2-accent': '#ff6b00',
        'tf2-accent-hover': '#ff8533',
      }
    }
  },
  plugins: [],
}