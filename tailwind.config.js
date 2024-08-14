/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '2000ms',
      },
      base: '/',
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
