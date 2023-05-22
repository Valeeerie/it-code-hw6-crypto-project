<template>
    <div>
        <CustomBackButton @click="$router.push('/categories')"></CustomBackButton>
        {{ requestData }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import makeRequest from '../services/api/httpClient';
import { useRoute } from 'vue-router';
import CustomBackButton from "../UI/button/CustomBackButton.vue"

const route=useRoute()
let requestData = ref([])
makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${route.params.id}`, 
}).then(({data}) => {                                
  requestData.value= data    
})
</script>

<style scoped>

</style>