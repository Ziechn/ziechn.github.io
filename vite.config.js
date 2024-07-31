import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/ziechn.git.io/',
  define: {
    'process.env.BASE_URL': JSON.stringify('/')
  }
})
