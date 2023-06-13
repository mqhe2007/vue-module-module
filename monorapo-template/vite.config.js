import { defineConfig, loadEnv } from 'vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { name } from './package.json'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const extractName = (originalString) => {
  if (originalString.includes('/')) {
    return originalString.split('/').pop()
  } else {
    return (originalString + '').replace(/-\D/g, function (match) {
      return match.charAt(1).toUpperCase()
    })
  }
}
export default defineConfig(({ mode, command }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  /**
   * @type {import('vite').UserConfig}
   */
  const config = {
    base: env.VITE_CONFIG_BASE,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx({}),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://host/api-v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
  if (command === 'build' && env.npm_lifecycle_event === 'build:module') {
    config.define = {
      'process.env.NODE_ENV': '"production"',
    }
    config.build = {
      outDir: './dist/module',
      sourcemap: 'inline',
      lib: {
        entry: resolve(__dirname, 'src/module.js'),
        // 格式必须为iife
        formats: ['iife'],
        name: extractName(name),
      },
      minify: false,
      rollupOptions: {
        // 为了使用同一vue对象，所有模块必须外置化vue
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
  }
  return config
})
