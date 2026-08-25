import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['@ionic/vue', '@ionic/vue-router', '@ionic/core', '@vue/devtools-api'],
  },
});
