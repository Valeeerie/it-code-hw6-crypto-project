<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Thumb">
                <template #default="scope">
                    <el-image style="width: 30px" :src="scope.row.image"/>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Coin"/>
            <el-table-column prop="symbol" label="Symbol" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
defineProps(['tableData'])
</script>

<style scoped>

</style>