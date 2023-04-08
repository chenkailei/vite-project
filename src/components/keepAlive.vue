<template>
    <div>
        <el-button type="primary" @click="flag = !flag">切换组件</el-button>
    </div>
    <div>
        <keep-alive>
            <A v-if="flag"></A>
            <B v-else></B>
        </keep-alive>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
import A from './child/keepAliveAform.vue'
import B from './child/keepAliveBform.vue'

const flag = ref<boolean>(false)
</script>
<style scoped>
</style>