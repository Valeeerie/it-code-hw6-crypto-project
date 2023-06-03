<template>
  <div class="wrapper">
    <h2 class="title">Cryptocurrency Prices by Market Cap</h2>
    <CoinsByCapTable
    :tableData="cryptoStore.coins"
    @itemClicked="(item)=> $router.push(`/item/${item}`)"></CoinsByCapTable>
    <el-pagination background layout="prev, pager, next" :total="250" v-model:current-page="page"/>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import CoinsByCapTable from "../components/CoinsByCapPage/CoinsByCapTable.vue"

import { storeToRefs } from 'pinia'
import { useCryptoStore } from '../store/crypto-store'

const cryptoStore = useCryptoStore()
let {page}=storeToRefs(cryptoStore)

page.value=1
cryptoStore.coins=[]

cryptoStore.fetchCoinsByPage(cryptoStore.page)

watch(page, (newPage)=>{
  cryptoStore.fetchCoinsByPage(newPage)
})

</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 1vh;

  .title{
    margin-bottom: 2vh;
  }

}
</style>