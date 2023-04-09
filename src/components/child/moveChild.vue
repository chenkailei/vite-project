<template>
    <div class="A">
        <header></header>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'

</script>
<style scoped lang="less">
    .A{
        width: 300px;
        height: 300px;
        background: #000;     
        header{
            background: #ccc;
            width: 100%;
            height: 50px;
        }
        margin: 0 auto;
    }
</style>