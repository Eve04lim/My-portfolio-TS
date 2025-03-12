// vite.config.ts の例
import react from '@vitejs/plugin-react'; // Reactの場合
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Firebase用にルートディレクトリ指定
})
