<template>
  <div class="wrapper">
    <CustomBackButton @click="$router.go(-1)"></CustomBackButton>
    <div class="main">
      
      <div class="main-left">
        <el-tag class="tag">Rank #{{cryptoStore.requestData.market_cap_rank}}</el-tag>
        <div class="coin-info">
          <el-image style="width: 50px;" :src="cryptoStore.requestData.image.large" :fit="fit" />
          <p class="bold">{{cryptoStore.requestData.name}}</p>
          <p class="uppercase">{{(cryptoStore.requestData.symbol).toUpperCase()}}</p>
        </div>
        <div class="price-info">
          <p class="bold price">&#36{{cryptoStore.requestData.market_data.current_price.usd}}</p>
          <p :class='cryptoStore.requestData.market_data.price_change_percentage_24h > 0? "success":"danger"'>{{(cryptoStore.requestData.market_data.price_change_percentage_24h).toFixed(2)}}&#37</p>
        </div>
        
        <div class="main-info">
          <el-descriptions column="2" border>
            <el-descriptions-item min-width="200" label="Market cap">&#36{{cryptoStore.requestData.market_data.market_cap.usd}}</el-descriptions-item>
            <el-descriptions-item label="Fully diluted valuation">&#36{{cryptoStore.requestData.market_data.fully_diluted_valuation.usd}}</el-descriptions-item>
            <el-descriptions-item label="Highest 24h">&#36{{cryptoStore.requestData.market_data.high_24h.usd}}</el-descriptions-item>
            <el-descriptions-item label="Lowest 24h">&#36{{cryptoStore.requestData.market_data.low_24h.usd}}</el-descriptions-item>
            <el-descriptions-item label="Total supply">&#36{{cryptoStore.requestData.market_data.total_supply}}</el-descriptions-item>
            <el-descriptions-item label="Max supply">&#36{{cryptoStore.requestData.market_data.max_supply}}</el-descriptions-item>
            <!-- <el-descriptions-item label="Curculating supply">&#36{{cryptoStore.requestData.market_data.circulating_supply}}</el-descriptions-item> -->
          </el-descriptions>
        </div>
      </div>
      
      <div class="main-right">
        <div class="links">
          <h4>Useful links</h4>
          <el-link v-for="link in cryptoStore.requestData.links.homepage" :href="link" target="_blank">{{link}}</el-link>
          <el-link v-for="link in cryptoStore.requestData.links.blockchain_site" :href="link" target="_blank">{{link}}</el-link>
        </div>
      </div>
    </div>
    
    
    <!-- <Sparkline v-bind:data="cryptoStore.requestData.market_data.sparkline_7d.price"></Sparkline> -->
    <div class="main-chart">
      <h4>USD price chart</h4>
      <TheLineChart/>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import CustomBackButton from "../UI/button/CustomBackButton.vue"
// import Sparkline from "../components/TheSparkline.vue"
import TheLineChart from "../components/TheLineChart.vue"
import { useRoute } from "vue-router";
import { useCryptoStore } from "../store/crypto-store";

const route=useRoute()
const cryptoStore = useCryptoStore()
cryptoStore.fetchCoinInfo(String(route.params.id))
cryptoStore.fetchCoinMarketChart(String(route.params.id))

</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1vh;
  justify-content: space-around;
  
  .main{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 3vh;
    margin-top: 3vh;
    
    .main-info{
      margin-top: 2vh;
    }
    
    .main-right{
      margin-left: 10vw;
    }
    
    
  }
  
  .coin-info{
    display: flex;
    flex-direction: row;
    gap:10px;
    align-items: center;
    margin-top: 2vh;
    
    .bold{
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
  
  .price-info{
    display: flex;
    flex-direction: row;
    gap:10px;
    align-items: center;
    
    .price{
      font-size: 1.875rem;
      font-weight: 900;
    }
    
    .success{
      color: green;
    }
    .danger{
      color:red;
    }
  }
  .links{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
  }
  h4{
    font-size: 1.3rem;
    color: #409eff;
    font-weight: 900;
  }
}

</style>