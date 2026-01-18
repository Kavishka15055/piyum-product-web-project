import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a27',
          50: '#f7faf7',
          100: '#e9f4e9',
          200: '#d3e8d3',
          300: '#aed4ae',
          400: '#82b782',
          500: '#5f9a5f',
          600: '#4a7c4a',
          700: '#3d643d',
          800: '#2d5a27',
          900: '#244924',
        },
        secondary: {
          DEFAULT: '#8bc34a',
          50: '#f9fbea',
          100: '#f0f6d2',
          200: '#e1eeaa',
          300: '#cae178',
          400: '#b2d44e',
          500: '#8bc34a',
          600: '#6ba33d',
          700: '#517e33',
          800: '#42642d',
          900: '#385329',
        },
      },
    },
  },
  plugins: [],
}
export default config