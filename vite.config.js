import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build also works from a subfolder or a preview host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
