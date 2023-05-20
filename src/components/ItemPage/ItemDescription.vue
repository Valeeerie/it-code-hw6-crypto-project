<template>
    <div>
        <el-descriptions
        :column="2"
        :border="true">
        <el-descriptions-item 
        v-for="(value,key) in data" 
        :label="key">{{value}}
        </el-descriptions-item>
    </el-descriptions>
</div>
</template>

<script setup lang="ts">
defineProps({
  data:Object,
})
</script>

<style lang="scss" scoped>

</style>