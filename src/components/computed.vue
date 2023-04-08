<template>
    <input type="text" v-model="aName">
    <input type="text" v-model="bName">

    'name'=={{ name }}
</template>
<script setup lang='ts'>
import { ref , reactive, computed} from 'vue'
    const aName = ref<String>("")
    const bName = ref<String>("")

    const name = computed<String>(()=>{
        return aName.value + '----' + bName.value
    })
</script>
<style scoped>
</style>