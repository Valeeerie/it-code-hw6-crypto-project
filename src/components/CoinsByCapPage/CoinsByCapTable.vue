<template>
  <div>
    <el-table :data="tableData"
    @row-click="itemClicked"
    height="600"
     stripe style="width: 100%">
     <el-table-column label="#" prop="market_cap_rank" width="40" />
     <el-table-column label="Thumb" width="70">
      <template #default="scope">
        <el-image style="width: 30px" :src="scope.row.image"/>
      </template>
    </el-table-column>
      <el-table-column prop="name" label="Coin"/>
      <el-table-column prop="symbol" label="Symbol"/>
      <el-table-column label="Price">
      <template #default="scope">
        <span>${{ scope.row.current_price }}</span>
      </template>
    </el-table-column>
      <el-table-column label="Price change 24h">
      <template #default="scope">
        <span>{{ scope.row.price_change_percentage_24h }}%</span>
      </template>
    </el-table-column>
      <el-table-column label="Mkt cap">
      <template #default="scope">
        <span>${{ scope.row.market_cap }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Total volume">
      <template #default="scope">
        <span>${{ scope.row.total_volume }}</span>
      </template>
    </el-table-column>
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

defineProps({
  tableData:Array,
})
const emit = defineEmits(['itemClicked'])

let clickedRow = ""



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

.red{
  color: red;
}
</style>