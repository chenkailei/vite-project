import loading from "./index.vue";
import {App,VNode, render} from 'vue'
import {createVNode} from 'vue'
export default {
    // 必须要有install函数
    install(app:App){
        const VNode:VNode = createVNode(loading)
        render(VNode,document.body)
        app.config.globalProperties._loading = {
            // 需要在组件里进行抛出才能拿到VNode.component?.exposed
            show:VNode.component?.exposed?.show,
            hide:VNode.component?.exposed?.hide,
        }
    }
}