import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import mitt from 'mitt'
const Mit = mitt()
import loading from './components/customPlugs/loading'

export const app = createApp(App)

//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit 
//Vue3挂载全局API
app.config.globalProperties.$custom = '自定义的' 
app.config.globalProperties.$function = {
    addStr<T>(str:T){
        return '自定义='+str
    }
}

type CustomFunction = {
    addStr<T>(str:T):string
}
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit,
        $custom:string,
        $function:CustomFunction
    }
}

app.use(ElementPlus)
app.use(loading)
app.mount('#app')
