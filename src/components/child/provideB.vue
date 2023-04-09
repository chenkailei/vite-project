<template>
    <div class="provideB">
        我是B
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive, inject, readonly} from 'vue'
import type {Ref} from 'vue'

const color = inject<Ref<string>>('clolorValue')
</script>
<style scoped>
.provideB{
    width: 400px;
    height: 200px;
    background-color: v-bind(color);
}
</style>