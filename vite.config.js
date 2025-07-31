import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodePolyfills from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'rollup-plugin-node-polyfills/polyfills/crypto',
    },
  },
  build: {
    rollupOptions: {
      plugins: [NodePolyfills()],
    },
  },
});
