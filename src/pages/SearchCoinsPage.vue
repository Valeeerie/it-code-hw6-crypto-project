<template>
    <div>
        <h1>Most searched coins:</h1>
        <CustomInput v-model="searchText"
        @checkForEmptiness="checkValue"></CustomInput>

        <el-table :data="cryptoStore.coins" stripe style="width: 100%">
            <el-table-column prop="name" label="Name"  />
            <el-table-column prop="symbol" label="Symbol" />
            <el-table-column prop="market_cap_rank" label="Mkt cap rank" />
            <el-table-column label="Thumb">
                <template #default="scope">
                    <el-image style="width: 30px" :src="scope.row.thumb"/>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { useCryptoStore } from '../store/crypto-store'
import { computed, ref, watch } from 'vue'
import CustomInput from "../UI/form/CustomInput.vue"
import { debounce } from 'lodash'


const cryptoStore = useCryptoStore()
const searchText = ref('')

cryptoStore.coins=[]
cryptoStore.fetchSearchedCoins()

const saveChanges = debounce(()=>{
    cryptoStore.query = searchText.value
    if (cryptoStore.query===""){
        cryptoStore.fetchSearchedCoins()
    }else{
    cryptoStore.fetchQueriedCoins(cryptoStore.query)}
},500)

watch(searchText, saveChanges)

</script>

<style lang="scss" scoped>

</style>