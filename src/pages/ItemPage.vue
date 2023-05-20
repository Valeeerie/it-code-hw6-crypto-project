<template>
    <div class="wrapper">
      <CustomBackButton @click="$router.push('/catalog')"></CustomBackButton>
      <ItemImage 
      :data="img"></ItemImage>
      <ItemDescription :data="requestData"></ItemDescription>
    </div>
</template>

<script setup lang="ts">
import CustomBackButton from "../UI/button/CustomBackButton.vue"
import ItemImage from "../components/ItemPage/ItemImage.vue"
import ItemDescription from "../components/ItemPage/ItemDescription.vue"
import { useRoute } from "vue-router";
import makeRequest from "../utils/makeRequest";
import { ref } from "vue";


const route=useRoute()
let requestData = ref({})
let img = ref({})


makeRequest({                           
  url: `https://api.coingecko.com/api/v3/coins/${route.params.id}`, 
}).then(({data}) => {                                
  requestData.value= data    
  img.value = requestData.value.image.large  
})




</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap:10px;
}
</style>