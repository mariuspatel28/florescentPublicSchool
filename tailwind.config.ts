import type { Config } from "tailwindcss"

export default {
  // Content is auto-detected in v4, but you can specify paths if needed
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {}, // Colors are now handled in globals.css
  },
} satisfies Config