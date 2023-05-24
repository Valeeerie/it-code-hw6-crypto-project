<template>
    <div class="wrapper">
      <CustomBackButton @click="$router.push('/catalog')"></CustomBackButton>
      <ItemImage 
      :data="cryptoStore.img"></ItemImage>
      <ItemDescription :data="cryptoStore.requestData"></ItemDescription>
    </div>
</template>

<script setup lang="ts">
import CustomBackButton from "../UI/button/CustomBackButton.vue"
import ItemImage from "../components/ItemPage/ItemImage.vue"
import ItemDescription from "../components/ItemPage/ItemDescription.vue"
import { useRoute } from "vue-router";
import { useCryptoStore } from "../store/crypto-store";

const route=useRoute()
const cryptoStore = useCryptoStore()

cryptoStore.fetchCoinInfo(String(route.params.id))
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap:10px;
}
</style>