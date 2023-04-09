<template>
    <!-- 实现给组件添加指令v-move，实现移动 -->
    <A v-move></A>
</template>
<script setup lang='ts'>
import { DirectiveBinding , Directive} from 'vue'
import A from './child/moveChild.vue'

const vMove:Directive = (el:HTMLElement,binding:DirectiveBinding)=>{
    // 给需要移动的元素添加类名，补充定位
    el.classList.add('moveDom')
    // 声明鼠标点击的位置
    let offsetX:number,offsetY:number
    // 鼠标移动时的函数
    const mousemove = (e:MouseEvent)=> {
        // 鼠标移动时
        el.style.left = e.clientX - offsetX + 'px'
        el.style.top = e.clientY - offsetY + 'px'
    }
    // 鼠标松开的函数，移除移动事件
    const mouseup = ()=> {
        // 松开
        document.removeEventListener('mousemove',mousemove)
    }
    // 鼠标点击的函数
    const mousedown = (e:MouseEvent)=> {
        // 鼠标点击，获取鼠标对于el的坐标
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        // 在document上添加移动事件和鼠标松开事件
        document.addEventListener('mousemove',mousemove)
        document.addEventListener('mouseup',mouseup)
    }
    // 添加鼠标按下时的事件
    el.addEventListener('mousedown',mousedown)
    
}
</script>
<style scoped>
.moveDom{
    position: fixed;
}
</style>