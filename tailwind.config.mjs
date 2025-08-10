/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      letterSpacing: {
        tight: "-0.01em",
      },
      fontSize: {
        sm: [
          "clamp(0.875rem, 0.84rem + 0.2vw, 0.9375rem)",
          { lineHeight: "1.5" },
        ],
        base: [
          "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)",
          { lineHeight: "1.6" },
        ],
        lg: [
          "clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)",
          { lineHeight: "1.6" },
        ],
        xl: [
          "clamp(1.25rem, 1.2rem + 0.2vw, 1.5rem)",
          { lineHeight: "1.4" },
        ],
        "2xl": [
          "clamp(1.5rem, 1.44rem + 0.2vw, 1.75rem)",
          { lineHeight: "1.3" },
        ],
      },
      colors: {
        fg: "rgb(var(--fg) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        gray: {
          50: "rgb(var(--gray-50) / <alpha-value>)",
          100: "rgb(var(--gray-100) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
          300: "rgb(var(--gray-300) / <alpha-value>)",
          400: "rgb(var(--gray-400) / <alpha-value>)",
          500: "rgb(var(--gray-500) / <alpha-value>)",
          600: "rgb(var(--gray-600) / <alpha-value>)",
          700: "rgb(var(--gray-700) / <alpha-value>)",
          800: "rgb(var(--gray-800) / <alpha-value>)",
          900: "rgb(var(--gray-900) / <alpha-value>)",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
}

