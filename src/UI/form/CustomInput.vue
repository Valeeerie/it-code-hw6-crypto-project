<template>
    <div>
        <input 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Please input coin" 
            />
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue', 'checkForEmptiness'])
</script>

<style scoped>

</style>