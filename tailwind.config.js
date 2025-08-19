// tailwind.config.js suggestion
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        main: ['Playfair Display', 'cursive'],
        title: ['Playfair Display', 'cursive'],
      },
      boxShadow: {
        'panel': '0 4px 12px rgba(0, 0, 0, 0.5)', // Deeper shadow for panels
        'inset-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
        'button': '0 2px 5px rgba(0, 0, 0, 0.4)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
      textShadow: { // Example custom utility (needs plugin or arbitrary value)
        'DEFAULT': '1px 1px 2px rgba(0,0,0,0.7)',
        'md': '1px 1px 3px rgba(0,0,0,0.7)',
        'lg': '2px 2px 5px rgba(0,0,0,0.7)',
      },
      // Keyframes/Animations could be defined here if replacing CSS ones
    },
  },
  plugins: [],
}