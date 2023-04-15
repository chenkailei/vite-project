<template>
    <button @click="add">改变数字</button>

    {{ count }}

    {{ name }}
</template>
<script setup lang='ts'>
import { $ref,$$,$,$computed ,$customRef,$shallowRef,$toRef} from 'vue/macros'
import { ref, reactive, watch, toRefs } from 'vue'


let count = $ref(0)

const add = () => {
    count++ 
}

watch($$(count),(v)=>{
    console.log(v);
})



const obj = reactive({
    name:'张三',
    desc:'我是张三'
})

// let {name,desc} = toRefs(obj)
let {name,desc} = $(obj)
name = '李四'
console.log(name,desc);

</script>
<style scoped></style>