<template>
    <!-- 自定义指令模拟权限 -->
    <el-button type="primary" v-show-btn="'add'">创建</el-button>
    <el-button type="primary" v-show-btn="'edit'">编辑</el-button>
    <el-button type="primary" v-show-btn="'del'">删除</el-button>
</template>
<script setup lang='ts'>
import { ref , Directive} from 'vue'

localStorage.setItem('userId','ckl')

const permission = [
    "ckl:add",
    "ckl:edit",
    "ckl:del",
]

const vShowBtn:Directive = (el,binding)=> {
    // el:dom
    // binding里的内容: value:值  modifiers:自定义指令
    const userId = localStorage.getItem('userId')
    if(!permission.includes(userId+':'+binding.value)){
        el.style.display = 'none'
    }
}
</script>
<style scoped>
</style>