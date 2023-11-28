# Template React + Vite

![Static Badge](https://img.shields.io/badge/Vite-v5.0.0-lightgreen?style=flat%20flat-rounde&logo=vite&logoColor=lightpurple&labelColor=black) ![Static Badge](https://img.shields.io/badge/PWA-v6.3.1-lightgreen?style=flat%20flat-rounde&logo=pwa&logoColor=lightblue&labelColor=black) ![Static Badge](https://img.shields.io/badge/Ant%20Design-v2.13.11-lightgreen?style=flat%20flat-rounde&logo=antdesign&logoColor=lightblue&labelColor=black) ![Static Badge](https://img.shields.io/badge/tailwind-v3.3.5-lightgreen?style=flat%20flat-rounde&logo=tailwindcss&labelColor=black)

## Create Project with React + Vite

```
  npx create vite@5.0.0 prpject-name
```

## Package Installs

#### Tailwind install

```bash
  npm install -D tailwindcss
  npx tailwindcss init
```

#### Ant Design install

```
  npm install antd --save
```

#### dependencies

```bash
  npm install @vitejs/plugin-react
  npm install vite-plugin-pwa
  npm install pwa-asset-generator
  npm install workbox-window
```

## Setting Project

Add the code below to the file. `index.html` in tag `<head>`

```html
<!-- tailwind css -->
<link href="/dist/output.css" rel="stylesheet" />

<!-- setup pwa -->
<link rel="manifest" href="/site.webmanifest" />
```

#### Tailwind Setting

Add the code below to the file. `App.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add the code below to the file. `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### PWA Setting

Add the code below to the file. `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "React-vite-app",
    short_name: "react-vite-app",
    description: "I am a simple vite app",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable_icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
```

Add the Web Application icon to the `/public` folder with the name

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- maskable_icon.png
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png

create by https://favicon.io/ or https://maskable.app/

Add the code below to the file. `site.webmanifest` in `/public` folder

```webmanifest
  {
      "name": "",
      "short_name": "",
      "icons": [
          { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
          { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
      ],
      "theme_color": "#ffffff",
      "background_color": "#ffffff",
      "display": "standalone"
  }
```
