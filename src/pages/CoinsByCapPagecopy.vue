<template>
  <div class="wrapper">
    <h2>Cryptocurrency Prices by Market Cap</h2>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in coinsMarketList" :key="i.id" class="infinite-list-item">{{ i.name }}</li>
  </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import CoinsByCapTable from "../components/CoinsByCapPage/CoinsByCapTable.vue"


import { storeToRefs } from 'pinia'
import { useCryptoStore } from '../store/crypto-store'

const cryptoStore = useCryptoStore()
let {page}=storeToRefs(cryptoStore)
let {coinsMarketList}=storeToRefs(cryptoStore)

page.value=1
// cryptoStore.coins=[]

cryptoStore.fetchCoinsByPage(page.value, 10,true)

const load = () => {
  page.value++
  cryptoStore.fetchCoinsByPage(page.value, 2,true)
}
</script>

<style lang="scss" scoped>


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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>