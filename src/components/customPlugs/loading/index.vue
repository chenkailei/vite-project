<template>
    <div class="loaingBox" v-if="isShow">
        <div class="text">
            loading···
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
const isShow =ref<boolean>(false)

const show = ()=> {
    isShow.value = true
}

const hide = ()=> {
    isShow.value = false
}
// 将属性抛出
defineExpose({
    show,
    hide
})
</script>
<style scoped lang="less">
.loaingBox{
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,0.7);
    .text{
        margin-top: 50%;
        margin-left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>