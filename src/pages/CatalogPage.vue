<template>
    <div class="wrapper">
    <CustomInput 
      v-model="searchText"></CustomInput>
    <CatalogTable 
    :tableData="apiData"
    @itemClicked="(item)=> $router.push(`/item/${item}`)"></CatalogTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CatalogTable from "../components/CatalogPage/CatalogTable.vue"
import CustomInput from "../UI/form/CustomInput.vue"
import makeRequest from '../utils/makeRequest'
import { watch } from 'vue'
import { debounce } from 'lodash'

const apiData = ref([])
const searchText = ref('')
let query=""

makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, 
}).then(({data}) => {                                
  apiData.value = data                                 
})


const saveChanges = debounce(()=>{
  query = searchText.value
  console.log(query)
  makeRequest({                            
  url: `https://api.coingecko.com/api/v3/search?query=${query}`, 
}).then(({data}) => {                                
  apiData.value = data.coins                                 
}).catch((error)=>{
  console.log(error.message)
})
},500)


watch(searchText, saveChanges)



</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 10px;
}
</style>