<template>
    <div class="wrapper">
        <el-select v-model="cat" class="m-2" placeholder="Select category">
    <el-option
      v-for="item in cryptoStore.categories"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />symbol</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />current price</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin image</el-col>
  </el-row>
  <ul>
    <li v-for="coin in cryptoStore.apiData">
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.name }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.symbol }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.current_price }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /> <el-avatar :size="30" :src="coin.image" /></el-col>
  </el-row>
    </li>
  </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { watch } from 'vue'
import { useCryptoStore } from '../store/crypto-store';

const cryptoStore = useCryptoStore()
let cat = ref(cryptoStore.cat)

cryptoStore.fetchCoinsCategories()
cryptoStore.fetchAllCoins()

watch(cat, (newCat) => {
  if (newCat==="All"){
    cryptoStore.fetchAllCoins()
  }else{
    cryptoStore.fetchCoinsByCategory(cat.value)
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 10px;
}
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  height: 50px;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
ul{
  margin-top: 10px;
}

ul li{
  list-style: none;
}

</style>