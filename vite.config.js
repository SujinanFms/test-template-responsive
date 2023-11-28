import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Template React Vite PWA",
    short_name: "Template",
    description: "I am a simple vite app",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png", "purpose": "any"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png", "purpose": "any"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png", "purpose": "any"
      },
      {
        src: "/maskable_icon.png",
        sizes: "192x192",
        type: "image/png", "purpose": "maskable"
      }
    ],
    screenshots: [
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
        form_factor: "narrow"
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/jpg",
        sizes: "512x512",
        form_factor: "wide"
      }
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})