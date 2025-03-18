<template>
    <div class="questions-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>题目列表</span>
                <el-button style="float: right" type="primary" @click="handleAdd">添加题目</el-button>
            </div>
            <el-table :data="questions" style="width: 100%">
                <el-table-column prop="id" label="ID" width="50"></el-table-column>
                <el-table-column prop="question" label="题目" width="300"></el-table-column>
                <el-table-column prop="question_type" label="类型" width="100"></el-table-column>
                <el-table-column prop="answer" label="答案" width="200"></el-table-column>
                <el-table-column prop="hard_level" label="难度" width="100"></el-table-column>
                <el-table-column prop="score" label="分值" width="100"></el-table-column>
                <el-table-column prop="tag" label="标签" width="150"></el-table-column>
                <el-table-column prop="creator" label="创建人" width="150"></el-table-column>
                <el-table-column label="操作">
                    <template v-slot="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <Pagination :pageObj="pageObj" :total="total" :onUpdate="onUpdate" />
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Pagination from '@/components/Pagination.vue'

interface Question {
    id: number
    question: string
    question_type: string
    answer: string
    hard_level: number
    score: number
    tag: string
    creator: string
}
const total = ref(3)
const pageObj = ref({
    page: 1,
    page_size: 20
})
const onUpdate = () => {
    console.log('更新页码')
}

const questions = ref<Question[]>([
    { id: 1, question: '若机器字长为16位，可表示的无符号数范围为：______。', question_type: '选择题', answer: '0-65535', hard_level: 1, score: 5, tag: '数学', creator: '张三' },
    { id: 2, question: '题目2', question_type: '填空题', answer: '42', hard_level: 2, score: 10, tag: '物理', creator: '李四' },
    { id: 3, question: '题目3', question_type: '判断题', answer: '正确', hard_level: 3, score: 15, tag: '化学', creator: '王五' }
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
