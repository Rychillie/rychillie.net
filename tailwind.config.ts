import typograhpy from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mdx: '920px'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      colors: {
        primary: '#161616',
        secondary: '#6F6F6F',
        'primary-dark': '#EDEDED',
        'secondary-dark': '#A0A0A0'
      },
      spacing: {
        'page-top': 'var(--page-top)',
        'page-top-mobile': 'var(--page-top-mobile)',
        'page-bottom': 'var(--page-bottom)',
        'page-bottom-mobile': 'var(--page-bottom-mobile)'
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'in-reverse': {
          '0%': { transform: 'translateY(-18px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        }
      },
      animation: {
        in: 'in .6s both',
        'in-reverse': 'in-reverse .6s both'
      }
    }
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typograhpy]
} satisfies Config;