/** @type {import('tailwindcss').Config} */
/** @type {import url(https://fonts.googleapis.com/css?family=Inter&subset=latin,latin-ext)} */
/** @type {import url(https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap)} */
/** @type {import url(https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap)} */
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
        'sans': ['Albert Sans', 'Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

