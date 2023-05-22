<template>
  <div class="wrapper">
    <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="coin in cryptoStore.coins" :key="coin.id" class="list-item"> <el-avatar :size="30" :src="coin.image" />{{ coin.name }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCryptoStore } from '../store/crypto-store';

const cryptoStore = useCryptoStore()

const loading = ref(false)
const noMore = computed(() => cryptoStore.coins.length >= 249000)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    cryptoStore.fetchCoinsByPage(cryptoStore.page)
    loading.value = false
  }, 2000)
}

cryptoStore.fetchCoinsByPage(cryptoStore.page)

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