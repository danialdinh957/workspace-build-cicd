import type { Config } from 'tailwindcss'

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  prefix: 'pkg-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CEFF70',
          '50': '#F6FFDE',
          '100': '#E4FFBC',
          '200': '#D8FF76',
          '250': '#CFFF71',
          '300': '#B7EA6F',
          '350': '#BDFA66',
          '400': '#B4DA7A',
          '450': '#AFE761',
          '500': '#99D443',
          '550': '#95C74B',
          '600': '#66A900',
          '650': '#093D10',
          '700': '#BEE068',
          '950': '#072B09',
        },
      },
      screens: {
        mobile: { max: '991px' },
      },
    },
  },
  plugins: [],
} satisfies Config
