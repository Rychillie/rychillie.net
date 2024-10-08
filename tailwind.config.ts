import typograhpy from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typograhpy]
} satisfies Config;
