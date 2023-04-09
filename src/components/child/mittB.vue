<template>
    <el-button type="primary" @click="off">移除监听</el-button>
    <el-input v-model="input" placeholder="Please input" />
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import imtt from '../../assets/mitt'
  const input = ref('')
  imtt.on('ckl',(val:any)=>{
    console.log(val);
  })

  // 监听多个事件
  imtt.on('*',(event:string,val:any)=>{
    // event  事件名
    // val  传递的值
    console.log(event,val);
  })

  // 移除事件
  const fn = (val:any)=> {
    console.log(val);
  }
  imtt.on('ckl',(val:any)=>fn(val))
  // 移除监听
  const off =()=> {
    // 移除单个
    imtt.off('ckl')
    // 移除所有
    imtt.all.clear();
  }
  </script>
  