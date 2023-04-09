<template>
    <div class="item">
        第一种写法:函数渲染
        <one></one>
    </div>
    <div class="item">
        第二种写法：options API渲染 类似vue2
        <two></two>
    </div>
    <div class="item">
        第三种写法:setup函数（最广泛写法）
        <thr name="prop传递的name" @kailei="jiehsou"></thr>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
import one from "../assets/tsx1"
import two from "../assets/tsx2"
import thr from "../assets/tsx3"

const jiehsou = (val:any)=> {
    console.log('接收到值val：'+ val);
    
}
</script>
<style scoped>
.item{
    outline: 1px solid #ccc;
    margin: 16px;
}
</style>