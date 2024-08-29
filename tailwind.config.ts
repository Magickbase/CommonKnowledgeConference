import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'md': '750px',
      'xl': '1200px',
      '2xl': '1920px',
      '3xl': '2560px',
      '4xl': '3840px',
      'ticket-sm': '480px',
      'ticket-md': '880px',
      'ticket-xl': '1300px',
      'ticket-2xl': '2020px',
      'ticket-3xl': '2660px',
      'ticket-4xl': '3940px',
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        veneer: 'Veneer',
        articulatCF: 'Articulat_CF',
        chakraPetch: 'ChakraPetch',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
