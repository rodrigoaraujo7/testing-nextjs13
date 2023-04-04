/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'dark-background': '#111010',
      'light-background': '#E7E5E4',
      'secondary-dark-background': '#1E1E1E',
      'secondary-light-background': '#c7c7c7',
      'primary-blue': '#6190E8',
      'secondary-blue': '#A7BFE8',
      'primary-green': '#65c983',
      'secondary-green': '#79a887',
      'primary-text': '#E7E5E4',
    },
    extend: {},
  },
  plugins: [],
}
