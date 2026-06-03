import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// プロジェクトパスに全角記号（＿）があり、node_modules/.vite への書き込みが失敗するため /tmp に退避
const viteCacheDir = path.join(os.tmpdir(), "vite-cache-kansai-shukatsu-6-6");

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: viteCacheDir,
  server: {
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
      "embla-carousel-react",
      "embla-carousel-autoplay",
    ],
  },
});
