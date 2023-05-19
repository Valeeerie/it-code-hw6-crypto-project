<template>
  <el-affix>
    <div class="navbar">
    <div class="wrapper">
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    menu-trigger="click"
    router="true"
    >
    <el-menu-item index="0"
    route="main">
    <div class="logo">
      cryptocoin
    </div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="1">
      <template #title>Cryptocurrencies</template>
      <el-menu-item route="categories" index="2-1">Categories</el-menu-item>
      <el-menu-item route="catalog" index="2-2">All coins</el-menu-item>
    </el-sub-menu>
  <el-menu-item route="contact" 
  index="2">
  Contact us
</el-menu-item>
</el-menu>
</div>
</div>
</el-affix>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
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

.navbar{
  border-bottom: solid 1px var(--el-menu-border-color);

.el-menu--horizontal{
  border-bottom: none;
}
.logo{
  color:#2F66F6;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
}
}


</style>