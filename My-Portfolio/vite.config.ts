import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  root: ".", // ルートディレクトリを明示的に指定
  plugins: [react()],
  build: {
    outDir: "dist", // ビルド出力ディレクトリを指定
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});