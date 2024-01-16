/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'windows-background': '#008080',
        'windows-grey': '#C0C0C0',
        'windows-border-grey': '#DFDFDF',
        'windows-border-white': '#DFDFDF',
        'windows-border-dark-gray': '#808080',
        'windows-border-black': '#000000',
        'windows-blue': '#000080',
      },
      fontFamily: {
        'tahoma-custom': ['TahomaCustom', 'serif'],
        'press-start': ['PressStart', 'serif']
      }
    },
  },
  plugins: [],
}
