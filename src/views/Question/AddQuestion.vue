<template>
    <el-drawer v-model="props.visible" title="I am the title">
        <span>Hi, there!</span>
    </el-drawer>
</template>
<script lang="ts" setup>
const props = defineProps(['visible'])
</script>
<style scoped></style>
