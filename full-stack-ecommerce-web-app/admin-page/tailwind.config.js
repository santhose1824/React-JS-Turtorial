/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "login-bg":"#F5F6FA",
        "auth-btn":"#1E2753"
      }
    },
  },
  plugins: [],
}

