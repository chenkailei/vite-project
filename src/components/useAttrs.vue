<template>
    <A id="1" name="2" age="3">
        <template>
            我是默认插槽
        </template>
        <template #aaa>
            我是具名插槽aaa
        </template>
    </A>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
import A from './child/useAttrschild.vue'
</script>
<style scoped>
</style>