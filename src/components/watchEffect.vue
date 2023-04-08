<template>
    <input type="text" v-model="text">
    <button @click="stopWatch">停止监听</button>
</template>
<script setup lang='ts'>
import { ref , reactive, watchEffect} from 'vue'
const text = ref<String>('')
// 直接将值放进watchEffect里就可以进行监听
watchEffect(()=>{
    console.log(text);
})
// 可以接收一个前置函数
watchEffect((beforeWatch)=>{
    beforeWatch(()=>{
        console.log("我要触发监听了");
    })
    console.log(text);
},{
    flush:'post', //和watch一样，也有flush配置项以控制触发时机
    // 提供了一下两个开发时可能用到的函数
    onTrack(r){
        console.log(r,'r');
    },
    onTrigger(e){
        console.log(e,'e');
    }
})
// 可以自定义停止监听
const stop = watchEffect(()=>{
    console.log(text);
})
// 执行后将不再触发监听
const stopWatch = () => stop()
</script>
<style scoped>
</style>
