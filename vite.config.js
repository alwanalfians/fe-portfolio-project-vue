import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vendor-vue';
            }
            if (id.includes('ant-design')) {
              return 'vendor-antd';
            }
            if (id.includes('apexcharts')) {
              return 'vendor-charts';
            }
            if (id.includes('moment')) {
              return 'vendor-utils';
            }
            // Other node_modules
            return 'vendor';
          }
          
          // Feature chunks
          if (id.includes('/components/charts/')) {
            return 'feature-dashboard';
          }
          if (id.includes('/components/HeadBar.vue') ||
              id.includes('/components/SideBar.vue') ||
              id.includes('/components/BreadCrumbBar.vue') ||
              id.includes('/components/ContentSection.vue') ||
              id.includes('/components/FootBar.vue')) {
            return 'feature-layout';
          }
          if (id.includes('/components/HeaderTable.vue')) {
            return 'feature-common';
          }
        },
        // Optimize chunk size
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps in production
    sourcemap: true
  }
})
