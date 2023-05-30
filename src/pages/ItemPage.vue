<template>
  <div class="wrapper">
    <CustomBackButton @click="$router.push('/catalog')"></CustomBackButton>
    <el-tag>Rank #{{cryptoStore.requestData.market_cap_rank}}</el-tag>
    <div class="coin-info">
      <el-image style="width: 50px;" :src="cryptoStore.requestData.image.large" :fit="fit" />
      <el-text class="mx-1">{{cryptoStore.requestData.name}}</el-text>
      <el-text class="mx-1 ">{{(cryptoStore.requestData.symbol).toUpperCase()}}</el-text>
    </div>
    <div class="price-info">
      <el-text>&#36{{cryptoStore.requestData.market_data.current_price.usd}}</el-text>
      <el-text>{{(cryptoStore.requestData.market_data.price_change_percentage_24h).toFixed(2)}}&#37</el-text>
    </div>
   
    <div class="main-info">
      <el-descriptions column="2" border="true">
    <el-descriptions-item label="Market cap">&#36{{cryptoStore.requestData.market_data.market_cap.usd}}</el-descriptions-item>
    <el-descriptions-item label="Fully diluted valuation">&#36{{cryptoStore.requestData.market_data.fully_diluted_valuation.usd}}</el-descriptions-item>
    <el-descriptions-item label="Highest 24h">&#36{{cryptoStore.requestData.market_data.high_24h.usd}}</el-descriptions-item>
    <el-descriptions-item label="Lowest 24h">&#36{{cryptoStore.requestData.market_data.low_24h.usd}}</el-descriptions-item>
    <el-descriptions-item label="Total supply">&#36{{cryptoStore.requestData.market_data.total_supply}}</el-descriptions-item>
    <el-descriptions-item label="Max supply">&#36{{cryptoStore.requestData.market_data.max_supply}}</el-descriptions-item>
    <!-- <el-descriptions-item label="Curculating supply">&#36{{cryptoStore.requestData.market_data.circulating_supply}}</el-descriptions-item> -->
  </el-descriptions>
    </div>
    <div class="links">
      <h4>Useful links:</h4>
      <el-link v-for="link in cryptoStore.requestData.links.homepage" :href="link" target="_blank">{{link}}</el-link>
      <el-link v-for="link in cryptoStore.requestData.links.blockchain_site" :href="link" target="_blank">{{link}}</el-link>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import CustomBackButton from "../UI/button/CustomBackButton.vue"
import ItemDescription from "../components/ItemPage/ItemDescription.vue"
import { useRoute } from "vue-router";
import { useCryptoStore } from "../store/crypto-store";

const route=useRoute()
const cryptoStore = useCryptoStore()

// cryptoStore.fetchCoinInfo(String(route.params.id))


</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  .coin-info{
    display: flex;
    flex-direction: row;
    gap:10px;
  }

  .price-info{
    display: flex;
    flex-direction: row;
    gap:10px;
  }
  .links{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>