<template>
    <div class="provideA">
        我是A
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive, provide, inject} from 'vue'
import type {Ref} from 'vue'

const color = inject<Ref<string>>('clolorValue',ref('green'))

</script>
<style scoped>
.provideA{
    width: 400px;
    height: 200px;
    background-color: v-bind(color);
}
</style>