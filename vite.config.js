import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugin:react/jsx-runtime
  // transpilePackages: ["swiper", "ssr-window", "dom7"]
})