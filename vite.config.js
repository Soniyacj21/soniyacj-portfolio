import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work on Netlify, Vercel AND GitHub Pages
export default defineConfig({
  plugins: [react()],
   base: '/soniyacj-portfolio/',
});
