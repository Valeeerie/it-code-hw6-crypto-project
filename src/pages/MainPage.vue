<template>
    <div class="wrapper">
        <div class="head">
      <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />symbol</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />current price</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin image</el-col>
  </el-row>
</div>
<ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="item in coins" :key="item" class="infinite-list-item">{{ item.title }}</li>
  </ul>
  <!-- <ul>
    <li v-for="coin in coins">
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.name }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.symbol }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.current_price }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /> <el-avatar :size="30" :src="coin.image" /></el-col>
  </el-row>
    </li>
  </ul> -->
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import makeRequest from '../utils/makeRequest';

let coins= ref([])
let initialValue=0


makeRequest({                           
  url: `https://fakestoreapi.com/products?limit=5`, 
}).then(({data}) => {                             
  for (let i=0;i<5;i++){
    coins.value.push(data[i])
  }
  initialValue+=5
  console.log(initialValue)
  console.log(coins.value)
})

function load(){
makeRequest({                           
  url: `https://fakestoreapi.com/products`, 
}).then(({data}) => {                             
  for (let i=initialValue;i<initialValue+5;i++){
    coins.value.push(data[i])
    initialValue++
  }

})
}


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