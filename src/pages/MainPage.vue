<template>
  <div class="wrapper">
    <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="coin in coins" :key="coin.id" class="list-item"> <el-avatar :size="30" :src="coin.image" />{{ coin.name }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import makeRequest from '../utils/makeRequest';

let coins= ref([])
let page=0

const loading = ref(false)
const noMore = computed(() => coins.value.length >= 249)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${page}&sparkline=false&locale=en`, 
}).then(({data}) => {                             
  for (let i=0;i<5;i++){
    coins.value.push(data[i])
  }
  page++
})
    loading.value = false
  }, 2000)
}


makeRequest({                           
url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en`, 
}).then(({data}) => {                             
  coins.value=data
  page++

})

</script>
<style lang="scss" scoped>
.wrapper{
  margin-top: 2%;
  gap:4%;
}
.head{
  margin-bottom: 10px;
}

ul{

li{
  list-style: none;
}}

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