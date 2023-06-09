import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [
//     vue({
//       reactivityTransform:true
//     }),
//     vueJsx(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
  
// })

export default ({mode})=> {
console.log(loadEnv(mode,process.cwd()));
  return  defineConfig({
    plugins: [
      vue({
        reactivityTransform:true
      }),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  })
}
