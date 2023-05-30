<template>
    <div>
        <el-input :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Please input" />
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>