<template>
    <el-drawer v-model="localVisible" title="添加试题" @close="handleClose">
        <div>
            <el-input v-model="questionTitle" placeholder="请输入试题标题"></el-input>
            <el-input type="textarea" v-model="questionContent" placeholder="请输入试题内容" rows="4"></el-input>
            <el-button type="primary" @click="submitQuestion">提交试题</el-button>
        </div>
    </el-drawer>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps(['visible'])
const emit = defineEmits(['update:visible'])

const localVisible = computed({
    get: () => props.visible,
    set: value => emit('update:visible', value)
})

const questionTitle = ref('')
const questionContent = ref('')

function handleClose() {
    emit('update:visible', false)
}

function submitQuestion() {
    // 提交试题的逻辑
    console.log('试题标题:', questionTitle.value)
    console.log('试题内容:', questionContent.value)
    // 清空输入框
    questionTitle.value = ''
    questionContent.value = ''
    handleClose()
}
</script>
<style scoped>
.el-input {
    margin-bottom: 20px;
}
</style>