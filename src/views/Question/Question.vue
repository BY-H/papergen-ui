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
    <AddQuestion v-model:visible="drawerVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Pagination from '@/components/Pagination.vue'
import AddQuestion from './AddQuestion.vue'

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
const total = ref(10)
const pageObj = ref({
    page: 1,
    page_size: 20
})
const onUpdate = () => {
    console.log('更新页码')
}

const questions = ref<Question[]>([
    {
        id: 1,
        question: '若机器字长为16位，可表示的无符号数范围为：______。',
        question_type: '填空题',
        answer: '0-65535',
        hard_level: 1,
        score: 5,
        tag: '计算机组成原理',
        creator: '张三'
    },
    {
        id: 2,
        question: '在TCP/IP协议中，HTTP协议默认使用的端口号是：______。',
        question_type: '填空题',
        answer: '80',
        hard_level: 2,
        score: 10,
        tag: '计算机网络',
        creator: '李四'
    },
    {
        id: 3,
        question: 'Python中，用于定义类的关键字是：______。',
        question_type: '填空题',
        answer: 'class',
        hard_level: 1,
        score: 5,
        tag: '编程语言',
        creator: '王五'
    },
    {
        id: 4,
        question: '在关系型数据库中，用于从表中查询数据的关键字是：______。',
        question_type: '填空题',
        answer: 'SELECT',
        hard_level: 2,
        score: 10,
        tag: '数据库',
        creator: '赵六'
    },
    {
        id: 5,
        question: '在HTML中，用于定义超链接的标签是：______。',
        question_type: '填空题',
        answer: '<a>',
        hard_level: 1,
        score: 5,
        tag: '前端开发',
        creator: '孙七'
    },
    {
        id: 6,
        question: '在JavaScript中，用于声明变量的关键字是：______。',
        question_type: '填空题',
        answer: 'let',
        hard_level: 1,
        score: 5,
        tag: '编程语言',
        creator: '周八'
    },
    {
        id: 7,
        question: '在Linux系统中，用于查看当前目录路径的命令是：______。',
        question_type: '填空题',
        answer: 'pwd',
        hard_level: 2,
        score: 10,
        tag: '操作系统',
        creator: '吴九'
    },
    {
        id: 8,
        question: '在C语言中，用于动态分配内存的函数是：______。',
        question_type: '填空题',
        answer: 'malloc',
        hard_level: 3,
        score: 15,
        tag: '编程语言',
        creator: '郑十'
    },
    {
        id: 9,
        question: '在Git中，用于克隆远程仓库的命令是：______。',
        question_type: '填空题',
        answer: 'git clone',
        hard_level: 2,
        score: 10,
        tag: '版本控制',
        creator: '王十一'
    },
    {
        id: 10,
        question: '在Java中，用于表示单行注释的符号是：______。',
        question_type: '填空题',
        answer: '//',
        hard_level: 1,
        score: 5,
        tag: '编程语言',
        creator: '李十二'
    }
])

const drawerVisible = ref(false)

const handleAdd = () => {
    console.log('添加题目')
    drawerVisible.value = true
    console.log('添加题目2')
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
