<template>
    <div class="wrapper">
        <CustomInput v-model="searchText"
        @checkForEmptiness="checkValue"></CustomInput>
        <h1 v-if="cryptoStore.query==''" class="title">Most searched coins at the moment:</h1>
        <h1 v-else class="title">Your search results:</h1>
        <el-table :data="cryptoStore.coins" stripe style="width: 100%">
            <el-table-column label="Thumb">
                <template #default="scope">
                    <el-image style="width: 30px" :src="scope.row.thumb"/>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Name"  />
            <el-table-column prop="symbol" label="Symbol" />
            <el-table-column prop="market_cap_rank" label="Mkt cap rank" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { useCryptoStore } from '../store/crypto-store'
import { ref, watch } from 'vue'
import CustomInput from "../UI/form/CustomInput.vue"
import { debounce } from 'lodash'


const cryptoStore = useCryptoStore()
const searchText = ref('')

cryptoStore.coins=[]
cryptoStore.fetchSearchedCoins()

const saveChanges = debounce(()=>{
    cryptoStore.query = searchText.value
    if (searchText.value===""){
        cryptoStore.fetchSearchedCoins()
        return
    }
    cryptoStore.fetchQueriedCoins(cryptoStore.query)
},500)

watch(searchText, saveChanges)

</script>

<style lang="scss" scoped>
.wrapper{
    margin-top: 1vh;

    .title{
        margin-top: 1vh;
    }
}
</style>