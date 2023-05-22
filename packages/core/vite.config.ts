import { defineConfig } from 'vite'
import path from 'path'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      formats:['es'],
      entry: './src/index.ts',
      name: pkg.name
    }
  },
  resolve:{
    alias:{
      "@svelte-fui/theme": path.resolve('../theme'),
      "@svelte-fui/tailwindcss": path.resolve('../tailwindcss'),
    }
  }
})
