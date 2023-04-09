<template>
    <el-button type="primary" @click="changeValue">改变值</el-button>
    {{ text }}
    <!-- A组件模拟dialog -->
    <A v-model="flag" v-model:text.add="text"></A>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
import  A  from "./child/v-model.vue";

const flag = ref<boolean>(true)
const text = ref<string>('11')
const changeValue = ()=> {
    flag.value = !flag.value
}
</script>
<style scoped>
</style>