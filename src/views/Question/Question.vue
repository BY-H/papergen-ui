<template>
    <div class="questions-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>题目列表</span>
                <el-button style="float: right" type="primary" @click="handleAdd">添加题目</el-button>
            </div>
            <el-table :data="questions" style="width: 100%">
                <el-table-column prop="ID" label="ID" width="50"></el-table-column>
                <el-table-column prop="question" label="题目" width="300">
                    <template v-slot="scope">
                        <div>
                            <p>{{ scope.row.question }}</p>
                            <p v-if="scope.row.question_type === 'single_choice' || scope.row.question_type === 'multiple_choice'">
                                {{ scope.row.options }}
                            </p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="question_type" label="类型" width="100">
                    <template v-slot="scope">
                        <span>{{ questionTypeMap[scope.row.question_type as keyof typeof questionTypeMap] || '未知类型' }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="answer" label="答案" width="200"></el-table-column>
                <el-table-column prop="hard_level" label="难度" width="100"></el-table-column>
                <el-table-column prop="score" label="分值" width="100"></el-table-column>
                <el-table-column prop="tag" label="标签" width="150"></el-table-column>
                <el-table-column prop="creator" label="创建人" width="150"></el-table-column>
                <el-table-column label="操作" width="200">
                    <template v-slot="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <Pagination :pageObj="pageObj" :total="total" :onUpdate="getQuestionsList" />
        </el-card>
    </div>
    <AddQuestion v-model:visible="drawerVisible" @submit="getQuestionsList" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Pagination from '@/components/Pagination.vue'
import AddQuestion from './AddQuestion.vue'
import { getQuestions } from '@/api/question'

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
const total = ref(0)
const pageObj = ref({
    page: 1,
    page_size: 20
})
const onUpdate = () => {
    console.log('更新页码')
}

const questions = ref<Question[]>([])

const params = ref({
    date_start: '',
    date_end: '',
    page: pageObj.value.page,
    page_size: pageObj.value.page_size
})

const getQuestionsList = async () => {
    try {
        const response: any = await getQuestions(params.value)
        questions.value = response.list
        total.value = response.total
        console.log(response)
    } catch (error) {
        console.error('获取题目列表失败:', error)
    }
}

const drawerVisible = ref(false)

const handleAdd = () => {
    drawerVisible.value = true
}

const handleEdit = (row: Question) => {
    console.log('编辑题目', row)
}

const handleDelete = (row: Question) => {
    console.log('删除题目', row)
}

const questionTypeMap = {
    single_choice: '单选题',
    multiple_choice: '多选题',
    true_false: '判断题',
    short_answer: '简答题',
    fill_blank: '填空题'
}

onMounted(() => {
    getQuestionsList()
})
</script>

<style scoped>
.questions-wrapper {
    padding: 20px;
}

.box-card {
    margin-bottom: 20px;
}
</style>
