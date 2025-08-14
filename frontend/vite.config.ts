import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envFromFile = loadEnv(mode, path.resolve(process.cwd(), 'frontend'), '');

  // Explicitly get the variable from the process environment if it exists
  // This is crucial for variables set by GitHub Actions or other CI systems.
  const envFromProcess = {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  };

  // Merge them, with process env taking precedence (e.g., from GitHub Secrets)
  const env = { ...envFromFile, ...envFromProcess };

  console.log('--- vite.config.ts ---');
  console.log('Mode:', mode);
  console.log('Loaded Env:', env);
  console.log('----------------------');

  return {
    // Set the base path for deployment to GitHub Pages
  base: '/Backsky/',
  plugins: [react()],
  envDir: path.resolve(process.cwd(), 'frontend'),
  }
})

