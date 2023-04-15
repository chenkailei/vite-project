<template>
    <div class="mt24">
        <el-select v-model="activeValue" class="m-2" placeholder="Select" size="large">
            <el-option
                v-for="(item,index) in componentsList"
                :key="index"
                :label="item.name"
                :value="index"
            />
        </el-select>
    </div>
    <div class="component">
        <component :is="componentsList[activeValue].ref" :title="title" @yes="yes"></component>
    </div>
</template>
<script setup lang='ts'>
    // ref 和 reactive
    import refVue from './components/ref.vue'
    // computed
    import computed from './components/computed.vue'
    // watch
    import watch from './components/watch.vue'
    // watchEffect
    import watchEffect from './components/watchEffect.vue'
    // defineProps
    import defineProps from './components/defineProps.vue'
    // teleport
    import teleport from './components/teleport.vue'
    // KeepAlive
    import KeepAlive from './components/keepAlive.vue'
    // provideandinject
    import provideandinject from './components/provideandinject.vue'
    // eventBus
    import eventBus from './components/eventBus.vue'
    // mitt
    import mitt from './components/mitt.vue'
    // tsx
    import tsx from './components/tsx.vue'
    // v-model
    import V_model from './components/v-model.vue'
    // direct
    import direct from './components/direct.vue'
    // vMove
    import vMove from './components/vMove.vue'
    // vLazy
    import vLazy from './components/v-lazy.vue'
    // vLazy
    import useAttrs from './components/useAttrs.vue'
    // 全局指令
    import globalInstructions from './components/globalInstructions.vue'
    // 使用自定义插件
    import useLoading from './components/useLoading.vue'
    // css
    import css from './components/css.vue'
    // nextTick
    import nextTick from './components/nextTick.vue'
    // 语法糖
    import syntaxSugar from './components/syntaxSugar.vue'
    // 环境变量
    import environmentVariable from './components/environmentVariable.vue'
    import { ref, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onRenderTracked, onRenderTriggered, defineAsyncComponent } from 'vue';
    
    const componentsList = [
        {name:'refVue',ref:refVue},
        {name:'computed计算属性',ref:computed},
        {name:'watch监听',ref:watch},
        {name:'watchEffect监听',ref:watchEffect},
        {name:'父子组件传值',ref:defineProps},
        {name:'teleport内置组件',ref:teleport},
        {name:'KeepAlive缓存',ref:KeepAlive},
        {name:'provide和inject',ref:provideandinject},
        {name:'eventBus',ref:eventBus},
        {name:'mitt',ref:mitt},
        {name:'tsx',ref:tsx},
        {name:'v-model',ref:V_model},
        {name:'direct',ref:direct},
        {name:'vMove',ref:vMove},
        {name:'vLazy',ref:vLazy},
        {name:'useAttrs和useSlots',ref:useAttrs},
        {name:'全局变量',ref:globalInstructions},
        {name:'使用自定义插件Loading',ref:useLoading},
        {name:'css完整性',ref:css},
        {name:'nextTick',ref:nextTick},
        {name:'vue3.3.25及以上版本语法糖',ref:syntaxSugar},
        {name:'测试环境、生产环境',ref:environmentVariable},
    ]

    const activeValue = ref(0)
    activeValue.value = componentsList.length -1

    const title = ref("张三")
    const yes = ()=> console.log('传到父组件了')

    // 生命周期
    onBeforeMount(()=>{
        console.log('组件创建之前');
        // 此时获取不到页面dom
    })

    onMounted(()=>{
        console.log('组件创建之后')
        // 此时可以获取到页面dom
    })

    onBeforeUpdate(()=>{
        console.log("组件更新之前")
    })

    onUpdated(()=>{
        console.log("组件更新之后")
    })

    onBeforeUnmount(()=>{
        console.log("组件销毁之前");
    })

    onMounted(()=>{
        console.log("组件销毁之后");
    })


    // 以下两个声明周期基本用来调试，返回的是effect依赖
    onRenderTracked((e)=>{
        // 接收一个event
        // 相当于响应式里的get方法
    })

    onRenderTriggered((e)=>{
        // 接收一个event
        // 相当于响应式里的set方法
    })
</script>
<style scoped>
.component{
    width: 100%;
    flex: 1;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin: 50px auto;
}
</style>