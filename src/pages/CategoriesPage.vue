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
  <el-row :gutter="10" class="title">
    <el-col :span="6">Coin</el-col>
    <el-col :span="6">Symbol</el-col>
    <el-col :span="6">Price</el-col>
    <el-col :span="6">Thumb</el-col>
  </el-row>
  <ul>
    <li v-for="coin in cryptoStore.apiData">
  <el-row :gutter="10">
    <el-col :span="6" class="bold">{{ coin.name }}</el-col>
    <el-col :span="6" class="uppercase">{{ coin.symbol }}</el-col>
    <el-col :span="6">${{ coin.current_price }}</el-col>
    <el-col :span="6"><el-avatar :size="30" :src="coin.image" /></el-col>
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
  margin-top: 2vh;
}
ul{
  margin-top: 10px;
}

ul li{
  list-style: none;
}

.uppercase{
  text-transform: uppercase;
}
.title{
  margin-bottom: 1vh;
}
.bold{
  font-weight: 900;
}

.title{
  font-size: 1.2rem;
  font-weight: 900;
  color: #409eff;
  margin-top: 2vh;
}

</style>