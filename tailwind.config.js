/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-bg': 'rgb(226 232 240)',
        'light-hl': '#cbd5e1',
        'light-acc': '#3b82f6',
		'neutral': 'rgb(100 116 139)',
        'dark-bg': '#1e293b',
        'darker-bg': '#0f172a',
        'dark-hl': '#334155',
        'dark-acc': '#bae6fd',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

