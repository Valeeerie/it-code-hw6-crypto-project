<template>
  <div>
    <el-table :data="tableData"
    @row-click="itemClicked"
    height="600"
     stripe style="width: 100%">
     <el-table-column label="#" prop="market_cap_rank" width="40" />
     <el-table-column label="Thumb" width="80">
      <template #default="scope">
        <el-image style="width: 30px" :src="scope.row.image"/>
      </template>
    </el-table-column>
      <el-table-column label="Coin">
        <template #default="scope">
        <span class="bold">{{ scope.row.name }}</span>
      </template>
      </el-table-column>
      <el-table-column label="Symbol">
        <template #default="scope">
        <span class="uppercase">{{ scope.row.symbol }}</span>
      </template>
      </el-table-column>
      <el-table-column label="Price">
      <template #default="scope">
        <span>${{ scope.row.current_price }}</span>
      </template>
    </el-table-column>
      <el-table-column label="Price change 24h">
      <template #default="scope">
        <span :class="scope.row.price_change_percentage_24h>0?'green':'red'">{{ scope.row.price_change_percentage_24h }}%</span>
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
    <el-table-column label="Sparkline">
      <template #default="scope">
        <Sparkline v-bind:data="scope.row.sparkline_in_7d.price"></Sparkline>
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
import Sparkline from "../TheSparkline.vue"
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

.green{
  color:green;
}

.uppercase{
  text-transform: uppercase;
}

.bold{
  font-weight: 700;
}
</style>