<template>
    <slot></slot>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
</script>
<style scoped>
/* 当组件里有插槽，想要修改插槽传过来的内容样式变化时，直接修改是无效的，可以用下面的方法 */
:slotted(.solt){
    color: red;
}
</style>