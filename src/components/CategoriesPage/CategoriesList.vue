<template>
    <div>
        <el-table 
        :data="tableData"
        @row-click="itemClicked"
     stripe style="width: 100%">
      <el-table-column prop="name" label="Name"/>
      <el-table-column>
      <template #default="scope">
        <el-button
          size="small"
          type="primary" plain
          @click="$router.push('/item')"
          >See more</el-button
        >
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>

<script setup lang="ts">
let clickedRow = ""

defineProps({
  tableData:Array,
})

const emit = defineEmits(['itemClicked'])

function itemClicked(row){
  clickedRow = row.category_id;
  emit('itemClicked', clickedRow)
}

</script>

<style lang="scss" scoped>

</style>