// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/task5_gdg/',
  
  server: {
    proxy: {
      '/api': {
        // THIS IS THE NEW TARGET (from your Postman link)
        target: 'https://e-learning-platform-w2l1.onrender.com', 
        changeOrigin: true,
        secure: false, 
        
      }
    }
  }
})
