<template>
    可以直接拿到：{{ $custom }}
    方法 ： {{ $function.addStr('212') }}
</template>
<script setup lang='ts'>
import { getCurrentInstance} from 'vue'

const instance = getCurrentInstance() 
console.log(instance?.proxy?.$custom);

</script>
<style scoped>
</style>