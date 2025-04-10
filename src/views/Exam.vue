<template>
    <div class="exam-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>组卷</span>
            </div>
            <!-- 输入试卷标题 -->
            <el-form :model="form" label-width="100px" class="exam-form">
                <el-form-item label="试卷标题" prop="title">
                    <el-input v-model="form.title" placeholder="请输入试卷标题"></el-input>
                </el-form-item>
                <el-form-item label="试卷描述" prop="description">
                    <el-input v-model="form.description" placeholder="请输入试卷描述"></el-input>
                </el-form-item>
            </el-form>

            <!-- 选项卡：自动组卷和手动组卷 -->
            <el-tabs v-model="activeTab">
                <el-tab-pane label="自动组卷" name="auto">
                    <div class="auto-exam">
                        <el-form :model="autoForm" label-width="120px">
                            <el-form-item label="知识点标签">
                                <el-select v-model="autoForm.tag" placeholder="请选择知识点标签">
                                    <el-option v-for="tag in tags" :key="tag" :label="tag" :value="tag"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="填空题数量">
                                <el-input-number v-model="autoForm.fill_blank_count" :min="0" placeholder="请输入填空题数量"></el-input-number>
                            </el-form-item>
                            <el-form-item label="判断题数量">
                                <el-input-number v-model="autoForm.true_false_count" :min="0" placeholder="请输入判断题数量"></el-input-number>
                            </el-form-item>
                            <el-form-item label="单选题数量">
                                <el-input-number v-model="autoForm.single_choice_count" :min="0" placeholder="请输入单选题数量"></el-input-number>
                            </el-form-item>
                            <el-form-item label="多选题数量">
                                <el-input-number v-model="autoForm.multiple_choice_count" :min="0" placeholder="请输入多选题数量"></el-input-number>
                            </el-form-item>
                            <el-form-item label="简答题数量">
                                <el-input-number v-model="autoForm.short_answer_count" :min="0" placeholder="请输入简答题数量"></el-input-number>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="handleAutoGenerate">生成试卷</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="手动组卷" name="manual">
                    <div class="manual-exam">
                        <el-table :data="questions" style="width: 100%">
                            <el-table-column type="selection" width="55"></el-table-column>
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
                            <el-table-column prop="tag" label="标签" width="150"></el-table-column>
                        </el-table>
                        <el-button type="primary" @click="handleManualGenerate" style="margin-top: 20px;">生成试卷</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { descriptionItemProps, ElMessage } from 'element-plus'
import { getTags } from '@/api/question'
import { el } from 'element-plus/es/locales.mjs'

interface Question {
    ID: number
    question: string
    question_type: string
    options: string
    tag: string
}

const form = reactive({
    title: '', // 试卷标题
    description: '' // 试卷描述
})

const activeTab = ref('auto') // 当前选项卡，默认自动组卷

// 自动组卷表单
const autoForm = reactive({
    tag: '', // 知识点标签
    fill_blank_count: 0,
    true_false_count: 0,
    single_choice_count: 0,
    multiple_choice_count: 0,
    short_answer_count: 0,
})

// 手动组卷数据
const questions = ref<Question[]>([]) // 题目列表
const selectedQuestions = ref<Question[]>([]) // 手动选择的题目

// 知识点标签
const tags = ref([])
const getTag = async() => {
    const response: any = await getTags()
    tags.value = response.tag
}

const handleAutoGenerate = async () => {
    // 校验试卷标题和描述
    if (!form.title.trim()) {
        ElMessage.error('请先输入试卷标题')
        return
    }
    if (!form.description.trim()) {
        ElMessage.error('请先输入试卷描述')
        return
    }

    // 校验知识点标签是否选择
    if (!autoForm.tag) {
        ElMessage.error('请选择知识点标签')
        return
    }

    // 校验题目数量
    const totalQuestions =
        autoForm.fill_blank_count +
        autoForm.true_false_count +
        autoForm.single_choice_count +
        autoForm.multiple_choice_count +
        autoForm.short_answer_count

    if (totalQuestions <= 0) {
        ElMessage.error('题目总数必须大于0')
        return
    }

    if (
        autoForm.fill_blank_count < 0 ||
        autoForm.true_false_count < 0 ||
        autoForm.single_choice_count < 0 ||
        autoForm.multiple_choice_count < 0 ||
        autoForm.short_answer_count < 0
    ) {
        ElMessage.error('每种题目数量必须大于等于0')
        return
    }
}

const handleManualGenerate = async () => {
    // 校验试卷标题和描述
    if (!form.title.trim()) {
        ElMessage.error('请先输入试卷标题')
        return
    }
    if (!form.description.trim()) {
        ElMessage.error('请先输入试卷描述')
        return
    }

    // 校验是否选择了题目
    if (selectedQuestions.value.length === 0) {
        ElMessage.error('请至少选择一道题目')
        return
    }

    
}

// 获取题目列表
const getQuestionsList = async () => {
}


// 题目类型映射
const questionTypeMap = {
    single_choice: '单选题',
    multiple_choice: '多选题',
    true_false: '判断题',
    short_answer: '简答题',
    fill_blank: '填空题'
}

// 页面加载时获取题目列表
onMounted(() => {
    getQuestionsList()
    getTag()
})
</script>

<style scoped>
.exam-wrapper {
    padding: 20px;
}

.box-card {
    margin-bottom: 20px;
}

.auto-exam,
.manual-exam {
    margin-top: 20px;
}
</style>