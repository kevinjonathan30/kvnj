/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-zen-kaku-gothic-new)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"],
    }
  },
  plugins: [],
}
