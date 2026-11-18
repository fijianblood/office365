import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes the built page work from any address or subfolder
// (GitHub Pages, Cloudflare, or opening dist/ on any web server).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
