<template>
    <div class="home-wrapper">
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>欢迎来到 Papergen</span>
                    </div>
                    <div class="text item">这是一个简约、美观的首页示例。</div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="stats-row">
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>题目总数</span>
                    </div>
                    <div class="text item">100</div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>试卷总数</span>
                    </div>
                    <div class="text item">50</div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>用户总数</span>
                    </div>
                    <div class="text item">200</div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToQuestions = () => {
    router.push({ name: 'Question' })
}
</script>

<style scoped>
.home-wrapper {
    padding: 20px;
}

.box-card {
    margin-bottom: 20px;
}

.stats-row {
    margin-top: 0px;
}

.nav-row {
    margin-top: 40px;
    text-align: center;
}

.text {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
}
</style>
