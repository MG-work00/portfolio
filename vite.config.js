//vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  server: {
    host: true,
  },
  theme: {
    extend: {
      colors: {
        green: {
          500: "#2f855a", // Forest green
          600: "#276749",
          900: "#1a4731",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
});
