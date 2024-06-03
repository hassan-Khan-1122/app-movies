/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
    
      extend: {
        colors: {
          customColor: 'rgb(59 130 246 / 0.5)', // Example RGBA color
        }
      }
    }
  },
  plugins: [],
}