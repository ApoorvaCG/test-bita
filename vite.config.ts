import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE_CLERK_PUBLISHABLE_KEY");  
  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };  

  return {
      plugins: [
          react(),
      ],
      define: envWithProcessPrefix,
     }
  })
