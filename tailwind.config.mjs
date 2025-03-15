import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            // Set Inter as the font family for typography
            fontFamily: theme('fontFamily.sans').join(', '),
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
}
