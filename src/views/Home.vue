<template>
    <div>Papergen</div>
</template>
<script lang="ts" name="Home" setup>
import { ping } from '@/api/ping'

const p = await ping()

console.log(p)
</script>
<style scoped>
</style>
