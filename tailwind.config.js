/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/components/*.jsx",
    "./src/routes/*.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'news1-pattern': "url('/img/news1.png')",
        'news2-pattern': "url('/img/news2.png')",
      }
    },
  },
  plugins: [],
}

