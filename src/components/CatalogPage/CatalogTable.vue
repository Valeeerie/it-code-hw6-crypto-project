<template>
  <div>
    <el-table :data="tableData"
    @row-click="itemClicked"
     stripe style="width: 100%">
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="symbol" label="Symbol"/>
      <el-table-column prop="current_price" label="Price"/>
      <el-table-column prop="price_change_percentage_24h" label="Price change (24h)"/>
      <el-table-column prop="market_cap" label="Market capitalization"/>
      <el-table-column prop="total_volume" label="Total volume"/>
      <el-table-column>
      <template #default="scope">
        <el-button
          size="small"
          type="primary" plain
          @click="console.log()"
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
  clickedRow = row.id;
  emit('itemClicked', clickedRow)
}
</script>

<style lang="scss" scoped>

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  max-width: 100px;
  display: block;
}
</style>