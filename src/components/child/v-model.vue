<template>
    <div v-if="modelValue">
        {{ modelValue}}
        <br>
        {{ text}}
        <p>我是子组件，假装是dialog</p>
        内容：<input :value="text" @input="updateText"  placeholder="Please input" />
        <el-button type="danger" @click="close">关闭弹框</el-button>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive} from 'vue'
const input = ref('')

    const props = defineProps<{
        // modelValue默认值
        modelValue:boolean,
        text?:string,
        // 自定义的值前边要加名字，如果是默认的modelValue可以直接写Modifiers
        textModifiers?:boolean
    }>()

    const emit = defineEmits(['update:modelValue','update:text']) //需要更新那个值就在update:后边跟自定义的名字

    const close = ()=> {
        emit('update:modelValue',false)
    }

    const updateText = (e:Event)=> {
        const target = e.target as HTMLInputElement;
        // 可以判断是否加了自定义修饰符，对数据进行一个修改
        emit('update:text',props.textModifiers ? target.value + '加了修饰符' : target.value)
    }
</script>
<style scoped>
</style>