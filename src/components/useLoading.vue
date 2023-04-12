<template>
    <button @click="open">打开loading并在3s后关闭</button>
</template>
<script setup lang='ts'>
import { getCurrentInstance, } from 'vue'
const {proxy} = getCurrentInstance()
console.log(proxy);

const open = ()=> {
    proxy._loading.show()
    setTimeout(() => {
        proxy._loading.hide()
    }, 3000);
}
</script>
<style scoped>
</style>