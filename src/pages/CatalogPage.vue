<template>
    <div class="wrapper">
    <CustomInput 
      v-model="searchText"></CustomInput>
    <CatalogTable 
    :tableData="cryptoStore.apiData"
    @itemClicked="(item)=> $router.push(`/item/${item}`)"></CatalogTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CatalogTable from "../components/CatalogPage/CatalogTable.vue"
import CustomInput from "../UI/form/CustomInput.vue"
import { watch } from 'vue'
import { debounce } from 'lodash'
import { useCryptoStore } from '../store/crypto-store'

const searchText = ref('')
let query=ref("")
const cryptoStore = useCryptoStore()

cryptoStore.fetchAllCoins()
const saveChanges = debounce(()=>{
  query.value = searchText.value
  cryptoStore.fetchQueriedCoins(query.value)
},500)

watch(searchText, saveChanges)
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 10px;
}
</style>