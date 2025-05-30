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
            lineHeight: '1.8',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid #3b82f6',
              paddingBottom: '1px',
              '&:hover': {
                borderBottomColor: '#60a5fa',
              },
            },
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '2rem',
              lineHeight: '1.2',
              letterSpacing: '-0.015em',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '1.5rem',
              lineHeight: '1.2',
              marginTop: '2rem',
              marginBottom: '1.25rem',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '1.25rem',
              lineHeight: '1.3',
              marginTop: '1.75rem',
              marginBottom: '1rem',
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'italic',
              color: theme('colors.gray.700'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.gray.300'),
              paddingLeft: '1rem',
            },
            'ul > li': {
              paddingLeft: '1.75em',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            'ol > li': {
              paddingLeft: '1.75em',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: theme('colors.gray.500'),
            },
            'ul > li::marker': {
              color: theme('colors.gray.400'),
            },
          },
        },
        xl: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.9',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          }
        },
      }),
    },
  },
  plugins: [typographyPlugin],
}
