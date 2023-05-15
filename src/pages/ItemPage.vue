<template>
    <div class="wrapper">
      <BackButton @click="$router.push('/catalog')"></BackButton>
      <ItemImage></ItemImage>
      <ItemDescription></ItemDescription>
    </div>
</template>

<script setup lang="ts">
import BackButton from "../UI/buttons/BackButton.vue"
import ItemImage from "../components/ItemPage/ItemImage.vue"
import ItemDescription from "../components/ItemPage/ItemDescription.vue"
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap:10px;
}
</style>