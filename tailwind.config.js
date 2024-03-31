/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
// to supress tailwind warnings of old attributes...
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

export default {
  important: 'html',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        main: colors.red[400],
        // main: "#7A2F3C",
        main_dark: "#EF4444"
      },
    },
  },
  plugins: [],
}

