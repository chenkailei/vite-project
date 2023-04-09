<template>
    <el-input v-model="input" placeholder="Please input" />
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  import imtt from '../../assets/mitt'
  const input = ref('')
  watch(input,(val)=>{
    imtt.emit('ckl',input)
    imtt.emit('lkc','lkc')
  })
  </script>
  