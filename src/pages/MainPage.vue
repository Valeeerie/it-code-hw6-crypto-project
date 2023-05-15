<template>
    <div class="wrapper">
        <MainHeroText></MainHeroText>
        <MainHeroImage></MainHeroImage>
    </div>
</template>

<script setup lang="ts">
import MainHeroImage from '../components/MainPage/MainHeroImage.vue';
import MainHeroText from '../components/MainPage/MainHeroText.vue';
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    gap:4%;
}
</style>