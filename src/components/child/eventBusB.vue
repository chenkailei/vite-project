<template>
    <el-input v-model="input" placeholder="Please input" />
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import eventBus from '../../assets/bus'

  eventBus.on('up',(val:any)=>{
    console.log('监听到了');
    
  })

  const input = ref('')
  </script>
  