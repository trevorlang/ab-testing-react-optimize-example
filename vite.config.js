import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      eslint(),
      VitePluginRadar({
        enableDev: true,
        // Google Analytics tag injection
        gtm: {
          id: env.VITE_GTM_CONTAINER_ID
        }
      })
    ]
  }
})
