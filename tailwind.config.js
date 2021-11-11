module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm':'320px',
      'md': '720px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
