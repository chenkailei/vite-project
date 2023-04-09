<template>
    <el-button type="primary" @click="changeColor">改变颜色</el-button>
    <A style="margin:16px"></A>
    <B style="margin:16px"></B>
    <C style="margin:16px"></C>
</template>
<script setup lang='ts'>
import { ref , provide, readonly} from 'vue'
import A from './child/provideA.vue'
import B from './child/provideB.vue'
import C from './child/provideC.vue'
const color = ref<string>('')
const changeColor = () => {
    color.value = 'yellow'
}

provide('clolorValue',color)
// provide('clolorValue',readonly(color))   //设置readonly之后，子组件就不能修改传过去的值了


</script>
<style scoped>
</style>