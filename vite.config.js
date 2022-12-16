import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  console.log('VitePluginRadar', VitePluginRadar)
  console.log('env.VITE_GTM_CONTAINER_ID', env.VITE_GTM_CONTAINER_ID)
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
