import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify('https://rji-portfolio-backend-126d5f0ba5b9.herokuapp.com/api')
  },
})
