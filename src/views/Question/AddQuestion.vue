<template>
    <el-drawer v-model="localVisible" title="I am the title" @close="handleClose">
        <span>Hi, there!</span>
    </el-drawer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps(['visible'])
const emit = defineEmits(['update:visible'])

const localVisible = computed({
    get: () => props.visible,
    set: value => emit('update:visible', value)
})

function handleClose() {
    emit('update:visible', false)
}
</script>
<style scoped></style>
