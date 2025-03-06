/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ff7eb3",
          foreground: "hsl(var(--primary-foreground))",
          light: "#ffa8d0",
          dark: "#e05a8f",
        },
        secondary: {
          DEFAULT: "#7ec1ff",
          foreground: "hsl(var(--secondary-foreground))",
          light: "#a8d4ff",
          dark: "#5a9fe0",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#b57eff",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 5px 15px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 10px 25px rgba(0, 0, 0, 0.1)",
      },
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        dash: {
          "0%": { strokeDashoffset: 280 },
          "50%": { strokeDashoffset: 75, transform: "rotate(45deg)" },
          "100%": { strokeDashoffset: 280, transform: "rotate(360deg)" },
        },
        scroll: {
          "0%": { opacity: 1, transform: "translateX(-50%) translateY(0)" },
          "100%": { opacity: 0, transform: "translateX(-50%) translateY(20px)" },
        },
        arrow: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 7s ease-in-out infinite",
        blink: "blink 0.7s infinite",
        dash: "dash 1.5s ease-in-out infinite",
        scroll: "scroll 2s infinite",
        arrow: "arrow 2s infinite",
        progress: "progress 1.5s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        "spin-slow": "spin-slow 3s linear infinite",
        "bounce-slow": "bounce-slow 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

