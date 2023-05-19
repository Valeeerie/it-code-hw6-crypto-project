<template>
    <div class="wrapper">
        <el-select v-model="cat" class="m-2" placeholder="Select category">
    <el-option
      v-for="item in categories"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />symbol</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />current price</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />coin image</el-col>
  </el-row>
  <ul>
    <li v-for="coin in coins">
  <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.name }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.symbol }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{ coin.current_price }}</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /> <el-avatar :size="30" :src="coin.image" /></el-col>
  </el-row>
    </li>
  </ul>

    </div>
</template>

<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import makeRequest from '../utils/makeRequest'
import { watch } from 'vue'

let cat = ref('')
let categories:Ref<{ value: string, label: string }[]>=ref([{value:"All", label: "All"}])
// let curr = ref('')
// let currencies= ref([])
let coins= ref([])
let initialValue=-1


//список категорий для селекта
makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/categories/list`, 
}).then(({data}) => {                             
  data.forEach((item)=>{
    categories.value.push({
        value:item.category_id,
        label:item.name,
    })
  })   
  cat.value=categories.value[0].value 
  console.log(categories.value)               
})


// //список валют для селекта
// makeRequest({                           
//   url: `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`, 
// }).then(({data}) => {                                
//   currencies.value=data
//   curr.value=currencies.value[0]
//   console.log(currencies.value)
// })


//список коинов
makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, 
}).then(({data}) => {                             
  coins.value=data
})


watch(cat, (newCat) => {
  if (newCat==="All"){
    makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, 
}).then(({data}) => {                             
  coins.value=data
})
  }else{
    makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${cat.value}`, 
}).then(({data}) => {                             
  coins.value=data
})
  }
})

// function catChange(newValue){
//   makeRequest({                           
//   url: `https://api.coingecko.com/api/v3/coins/list?category=${newValue}`, 
// }).then(({data}) => {                                
//   currencies.value=data
//   curr.value=currencies.value[0]
//   console.log(currencies.value)
// })
// }

</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 10px;
}
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
  height: 50px;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
ul{
  margin-top: 10px;
}

ul li{
  list-style: none;
}

</style>