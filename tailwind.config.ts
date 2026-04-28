import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#9333ea",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "#111827",
            "h1, h2, h3, h4, h5, h6": {
              color: "#111827",
              fontWeight: "700",
            },
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
