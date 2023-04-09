<template>
    <div>
        我是子组件，可以通过useAttr获取传递过来的所有属性值
        <slot></slot>
        <slot name="aaa"></slot>
    </div>
</template>
<script setup lang='ts'>
import { useAttrs ,useSlots , getCurrentInstance} from 'vue'
console.log(useAttrs());
const slots = useSlots()
// 打印是一个对象，里边是所有的插槽，可以用来判断是否拥有某一个插槽
console.log(slots);

// 插槽也可以通过vue的proxy实例拿到
const instance =  getCurrentInstance()
console.log(instance?.proxy?.$slots);


</script>
<style scoped>
</style>