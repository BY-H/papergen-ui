<template>
    <div class="papers-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>试卷列表</span>
                <el-button style="float: right" type="primary" @click="handleAdd">添加试卷</el-button>
            </div>
            <el-table :data="papers" style="width: 100%">
                <el-table-column prop="id" label="ID" width="50"></el-table-column>
                <el-table-column prop="title" label="标题" width="200"></el-table-column>
                <el-table-column prop="description" label="描述" width="200"></el-table-column>
                <el-table-column prop="creator" label="创建人" width="150"></el-table-column>
                <el-table-column prop="created_at" label="创建时间" width="180"></el-table-column>
                <el-table-column prop="updated_at" label="更新时间" width="180"></el-table-column>
                <el-table-column prop="status" label="状态" width="100"></el-table-column>
                <el-table-column label="操作">
                    <template v-slot="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <Pagination :pageObj="pageObj" :total="total" :onUpdate="onUpdate" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Pagination from '@/components/Pagination.vue'

interface Paper {
    id: number
    title: string
    description: string
    creator: string
    created_at: string
    updated_at: string
    status: string
}

const total = ref(3)
const pageObj = ref({
    page: 1,
    page_size: 20
})
const onUpdate = () => {
    console.log('更新页码')
}

const papers = ref<Paper[]>([
    { id: 1, title: '试卷1', description: '[1, 2, 3]', creator: '张三', created_at: '2025-03-01 10:00', updated_at: '2025-03-05 12:00', status: '已发布' },
    { id: 2, title: '试卷2', description: '[4, 5, 6]', creator: '李四', created_at: '2025-03-02 11:00', updated_at: '2025-03-06 13:00', status: '草稿' },
    { id: 3, title: '试卷3', description: '[7, 8, 9]', creator: '王五', created_at: '2025-03-03 12:00', updated_at: '2025-03-07 14:00', status: '已发布' }
])

const handleAdd = () => {
    console.log('添加试卷')
}

const handleEdit = (row: Paper) => {
    console.log('编辑试卷', row)
}

const handleDelete = (row: Paper) => {
    console.log('删除试卷', row)
}
</script>

<style scoped>
.papers-wrapper {
    padding: 20px;
}

.box-card {
    margin-bottom: 20px;
}
</style>
