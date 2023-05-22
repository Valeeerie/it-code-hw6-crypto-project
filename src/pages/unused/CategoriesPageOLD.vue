<template>
    <div class="wrapper">
        <CategoriesList 
        :tableData="categories"
        @itemClicked="(id)=> $router.push(`/categories/${id}`)"></CategoriesList>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CategoriesList from "../components/CategoriesPage/CategoriesList.vue"
import makeRequest from '../services/api/httpClient'
const categories = ref([])

//get categories
makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/categories/list`, 
}).then(({data}) => {                                
  categories.value = data                                 
})



</script>

<style scoped>

</style>