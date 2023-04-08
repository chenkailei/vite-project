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
    import { ref, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onRenderTracked, onRenderTriggered, defineAsyncComponent } from 'vue';
    
    const componentsList = [
        {name:'refVue',ref:refVue},
        {name:'computed计算属性',ref:computed},
        {name:'watch监听',ref:watch},
        {name:'watchEffect监听',ref:watchEffect},
        {name:'父子组件传值',ref:defineProps},
        {name:'teleport内置组件',ref:teleport},
        {name:'KeepAlive缓存',ref:KeepAlive}
    ]

    const activeValue = ref(0)

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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>