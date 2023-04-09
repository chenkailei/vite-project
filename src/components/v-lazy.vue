<template>
    <div>
        <img v-for="item in imageLists" v-lazy="item" alt="" style="width: 60%;display: block;margin: 0 auto;">
    </div>
</template>
<script setup lang='ts'>
import { Directive,DirectiveBinding} from 'vue'
// glob  异步移入 ()=> import()
// globEager 同步引入 module
const imageList:Record<string,{default:string}> = import.meta.globEager('../assets/images/*.*')
const imageLists = Object.values(imageList).map(v=>v.default)
const vLazy:Directive = async (el:HTMLImageElement,bindding:DirectiveBinding)=> {
    // 异步引入默认图片 并赋给el的src属性
    const def = await import('../assets/vue.svg')
    el.src = def.default

    const Observe = new IntersectionObserver((ent)=>{
        // ent接收的属性
        // time:可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
        // target:被观察的目标元素，是一个DOM节点对象
        // rootBounds:容器元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有容器元素（即直接相对于视口滚动），则返回null
        // boundingClientRect：目标元素的裕兴区域的信息
        // intersecionRect:目标元素与视口（或容器元素）的交叉区域的信息
        // intersectionRatio:目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见小于等于0
        console.log(ent[0].intersectionRatio,bindding);
        if(ent[0].intersectionRatio > 0){
            setTimeout(() => {
                el.src = bindding.value
            }, 2000);
            // 设置完成后卸载监听改el
            Observe.unobserve(el)
        }
    })
    // 开启监听
    Observe.observe(el)
}
</script>
<style scoped>
</style>