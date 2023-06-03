<template>
  <div class="wrapper">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in cryptoStore.coins" :key="i" class="infinite-list-item">{{ i}}</li>
  </ul>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCryptoStore } from '../store/crypto-store';

const cryptoStore = useCryptoStore()
cryptoStore.coins=[]
cryptoStore.page=0

cryptoStore.fetchCoinsByPageForInfinite(cryptoStore.page,10)
cryptoStore.page=10
const load = () => {
  cryptoStore.fetchCoinsByPageForInfinite(cryptoStore.page,2)
  cryptoStore.page+=2
}



</script>
<style lang="scss" scoped>
// .wrapper{
//   margin-top: 2%;
//   gap:4%;
// }
// .head{
//   margin-bottom: 10px;
// }

// ul{

// li{
//   list-style: none;
// }}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>