<template>
    <div class="provideC">
        我是C
        <el-button type="primary" @click="changeColor">我是可以通过子组件改变颜色</el-button>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive, inject} from 'vue'

import type {Ref} from 'vue'

const color = inject<Ref<string>>('clolorValue')
// const color = inject<Ref<string>>('clolorValue',ref(''))  //设置默认值

const changeColor = ()=> {
    // 非空断言：通过!.value的方式设置值
    // 也可以在上边定义color的地方设置默认
    color!.value = 'white'

    // 如果在这里想禁止修改inject传过来的值，可以在父组件provide处设置readonly
}
</script>
<style scoped>
.provideC{
    width: 400px;
    height: 200px;
    background-color: v-bind(color);
}
</style>