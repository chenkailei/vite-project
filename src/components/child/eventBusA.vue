<template>
    <el-input v-model="input" placeholder="Please input" />
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  import eventBus from '../../assets/bus'
  const input = ref('')

  watch(input,(val)=>{
    eventBus.emit('up',val)
  })
  </script>
  