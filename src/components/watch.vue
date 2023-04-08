<template>
    <input type="text" v-model="text">
    <input type="text" v-model="msg">
    <br>
    对象监听：<input type="text" v-model="objData.foo.age">
    对象监听单一属性：<input type="text" v-model="objData2.foo.age">
</template>
<script setup lang='ts'>
import { reactive, ref , watch} from 'vue'
    const text = ref<String>("")
    const msg = ref<String>("")
    const objData = ref({
        foo:{
            age:'1'
        }
    })
    const objData2 = reactive({
        foo:{
            age:'1'
        }
    })
    // 第一种监听方式
    watch(text,(val,oldValue)=>{
        console.log(val,oldValue);
    })
    // 监听多个数据源时 可以使用数组
    watch([text,msg],(val,oldValue)=>{
        // 返回的值也是数组类型
        console.log(val,oldValue);
    })
    // 监听对象
    watch(objData,(val,oldValue)=>{
        // 这样监听引用类型，返回的新值和旧值是相同的
        console.log(val,oldValue);
    },{
        // 开启deep属性深度监听，如果值的类型定义为reactive类型，则vue会自动开启deep
        deep:true,
        immediate:true, //初始化监听
        flush:'pre' //默认值为pre
        // flush 意义为控制watch执行时机，接收三个值（pre、async、post）：
        // pre:组件更新之前调用
        // async:同步执行
        // post:组件更新之后执行
    })
    // 只监听对象里的一个属性，需要通过函数返回对应的值,因为此处我们监听的是字符串，直接写的话不是ref对象就会报错
    watch(()=>objData2.foo.age,(val,oldValue)=>{
        console.log(val,oldValue);
    })
</script>
<style scoped>
</style>