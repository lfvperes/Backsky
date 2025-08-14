import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // Set the base path for deployment to GitHub Pages
  base: '/Backsky/',
  plugins: [react()],
  // By removing envDir and the manual loadEnv calls, we let Vite
  // automatically and correctly load .env files from the root of
  // the frontend project (which is the correct behavior).
})
