import vue from '@vitejs/plugin-vue'
// import { terser } from 'rollup-plugin-terser';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  server: {
    port: 3005
  },
  plugins: [vue()],
  optimizeDeps: {
    // include: ['socket.io-client/dist/socket.io.js'],
    exclude: [
        // 'rollup-plugin-terser',
        'peerjs'
    ]
  },
  build: {
/*
    rollupOptions: {
      output: {
        exports: 'named',
        format: 'cjs',
        entryFileNames: `main.js`, // Default is `[name].[hash].js`,
        plugins: [
          terser({
            compress: {
              defaults: false,
              drop_console: true
            },
            mangle: {
              eval: true,
              module: true,
              toplevel: true,
              safari10: true,
              properties: false
            },
            output: {
              comments: false,
              ecma: '2020'
            }
          })
        ]
      }
    }
*/
  }
}
