<template>
    <el-button type="primary" @click="changeValue">测试nextTick</el-button>
    <el-input v-model="input" placeholder="Please input" />
    <div ref="div">{{ input }}</div>
</template>
<script setup lang='ts'>
import { ref, reactive, nextTick, watch } from 'vue'
const input = ref('陈凯磊')
const div = ref()
const changeValue = async () => {
    input.value = '凯磊最帅'

    console.log(div.value.innerText); //陈凯磊
    await nextTick()
    console.log(div.value.innerText); //凯磊最帅

}


setTimeout(()=>{
    // 循环多次 监听input变化
    for (let index = 0; index <5; index++) { //赋值的更改属于微任务，会等宏任务执行完成后才会执行，所以这里会在循环结束后才执行一次
        input.value = index+''
    }
},2000)


// 这里监听input值的变化
watch(input,(val)=>{
    console.log(val); //只会打印一次
})
</script>
<style scoped></style>
