<template>
  <div class="wrapper">
    <h2>All Cryptocurrencies</h2>
    <AllCoinsTable
    :tableData="cryptoStore.coins"
    @itemClicked="(item)=> $router.push(`/item/${item}`)"></AllCoinsTable>
    <!-- <el-pagination background layout="prev, pager, next" :total="250" v-model:current-page="page"/> -->
  </div>
</template>

<script setup lang="ts">
import AllCoinsTable from "../components/AllCoinsPage/AllCoinsTable.vue"
import { watch } from 'vue'
import { useCryptoStore } from '../store/crypto-store'
import { storeToRefs } from 'pinia'

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
      margin-top: 10px;
    }
  </style>