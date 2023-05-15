<template>
  <div>
    <the-navbar></the-navbar>
    <div class="wrapper">
    <router-view></router-view>
  </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue"

</script>

<style lang="scss" scoped>
.wrapper{
  margin: 0 auto;

  @media screen and (max-width: 576px){
    max-width: 100%;
  }

  @media screen and (min-width: 576px){
    max-width: 540px;
  }

  @media screen and (min-width: 768px){
    max-width: 720px;
  }

  @media screen and (min-width: 992px){
    max-width: 960px;
  }

  @media screen and (min-width: 1200px){
    max-width: 1140px;
  }

  @media screen and (min-width: 1400px){
    max-width: 1320px;
  }

}
</style>
