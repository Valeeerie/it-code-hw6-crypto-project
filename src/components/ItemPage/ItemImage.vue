<template>
    <div>
        <el-image style="width: 200px; height: 200px" :src="data" />
    </div>
</template>

<script setup lang="ts">
defineProps({
  data:Object
})
</script>

<style lang="scss" scoped>

</style>