import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// @ts-ignore
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/components/styles/global.scss";`,
      },
    },
  },
})
