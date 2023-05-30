import { defineConfig } from 'vite'
import path from 'path'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      formats:['es'],
      entry: path.resolve('./src/index.ts'),
      name: pkg.name,
      fileName:'index'
    }
  },
  optimizeDeps: {
    include:['@svelte-fui/theme']
  }
})
