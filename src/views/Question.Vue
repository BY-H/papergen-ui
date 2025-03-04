<template>
    <div class="questions-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>题目列表</span>
                <el-button style="float: right" type="primary" @click="handleAdd">添加题目</el-button>
            </div>
            <el-table :data="questions" style="width: 100%">
                <el-table-column prop="id" label="ID" width="50"></el-table-column>
                <el-table-column prop="title" label="题目" width="300"></el-table-column>
                <el-table-column prop="type" label="类型" width="100"></el-table-column>
                <el-table-column prop="difficulty" label="难度" width="100"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Question {
    id: number
    title: string
    type: string
    difficulty: string
}

const questions = ref<Question[]>([
    { id: 1, title: '题目1', type: '选择题', difficulty: '简单' },
    { id: 2, title: '题目2', type: '填空题', difficulty: '中等' },
    { id: 3, title: '题目3', type: '判断题', difficulty: '困难' }
])

const handleAdd = () => {
    console.log('添加题目')
}

const handleEdit = (row: Question) => {
    console.log('编辑题目', row)
}

const handleDelete = (row: Question) => {
    console.log('删除题目', row)
}
</script>

<style scoped>
.questions-wrapper {
    padding: 20px;
}

.box-card {
    margin-bottom: 20px;
}
</style>
