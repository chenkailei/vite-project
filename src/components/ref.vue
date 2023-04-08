<template>
    a:{{ a }}
    b:{{ b }}
    <button @click="changeVlaue">点我</button>
</template>
<script setup lang='ts'>
    import { ref , reactive , onMounted} from 'vue'
    type M = {
        name:String,
        age:Number
    }
    const a = reactive<M>({
        name:'张三',
        age:21
    })
    const b = ref<String>('aa')
    const changeVlaue = () => {
        console.log(b);
        a.name = "aa"
        b.value = 'bb'
    }
</script>
<style scoped>
</style>