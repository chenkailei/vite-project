<template>
    <div>{{ title }}</div>
</template>
<script setup lang='ts'>
import { ref , reactive, onMounted} from 'vue'
// 父传子
// 非ts写法
// defineProps({
//     title:{
//         type:String,
//         default:'李四'
//     }
// })
// ts写法
// const props = defineProps<{
//     title:string
// }>()
// js里如果想要拿到props里的值就需要将defineProps定义为变量然后通过.的方式
// console.log(props.title);
// ts写法定义默认值 需要使用ts特有的功能withDefaults
const props = withDefaults(defineProps<{
    title:string
}>(),{
    title:()=>'李四'
}) 

// 子传父  defineEmits里可以定义多个
// const emit = defineEmits(['yes'])
// ts方式
const emit = defineEmits<{
    (e:"yes"):void
}>()

onMounted(()=>{
    setTimeout(() => {
        emit('yes')
    }, 3000);
})
</script>
<style scoped>
</style>
