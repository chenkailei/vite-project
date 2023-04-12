<template>
    <!-- 动态style可以直接用，也可以包在数组里写多个 -->
    <div class="title" :class="[$style.div,CKL.div]">
        css完整性
    </div>
    <cssChild>
        <div class="solt">
            我是插槽内容
        </div>
    </cssChild>
</template>
<script setup lang='ts'>
import { ref , render, useCssModule} from 'vue'
import cssChild from './child/cssChild.vue';

// const titleColor = ref('red')
const titleColor = ref({
    color:'red'
})

setTimeout(() => {
    titleColor.value.color = 'pink'
}, 2000);


// 获取module样式表
const cssModule =useCssModule('CKL')
console.log(cssModule);  // {div: '_div_1ower_3'}
// 这种应用情况较少，通常会使用在render函数里
// render(`<div :class="${CKL.div}"></div>`)


</script>
<style scoped>
/* deep穿透，在vue3中使用会报警告，可以用下面的方法代替 */
:deep(.a){
    color: red;
}
/* 动态样式 */
.title{
    /* 字符串时可以直接使用 */
    /* color: v-bind(titleColor); */
    /* 属性为对象时需要用引号包裹，不然报错 */
    color: v-bind('titleColor.color');
}
/* 如果在scoped下想应用到全局，除了创建一个新的style还可通过这个方法 */
:global(.a){
    color:beige
}
</style>

<!-- 动态style -->
<style module>
    .div{
        outline: 1px solid #ccc;
    }
</style>
<!-- module可以起名 -->
<style module="CKL">
    .div{
        outline: 1px solid #ccc;
        background: green;
    }
</style>