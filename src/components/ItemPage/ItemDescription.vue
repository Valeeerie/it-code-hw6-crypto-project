<template>
    <div>
        <el-descriptions
        :column="2"
        :border="true">
        <el-descriptions-item 
        v-for="(value,key) in item" 
        :label="key">{{value}}
        </el-descriptions-item>
    </el-descriptions>
</div>
</template>

<script setup lang="ts">
import item from '../../data/item'
</script>

<style lang="scss" scoped>

</style>