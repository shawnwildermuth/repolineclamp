module.exports = {
  content: [
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
