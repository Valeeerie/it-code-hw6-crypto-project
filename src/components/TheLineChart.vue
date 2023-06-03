<template>
    <div>
      <apexchart
        height="500"
        width="700"
        type="line"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>

  <script setup lang="ts">
import { ref } from 'vue';
import { useCryptoStore } from "../store/crypto-store";

const cryptoStore = useCryptoStore()
  const chartOptions=ref({
        chart: {
          height: 500,
          type: 'line',
          zoom: {
                enabled: false
              }
        },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              color: '#409eff'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
              },
            },
        xaxis: {
          categories: cryptoStore.xaxisData,
        },
      })

const series =  ref([
        {
          name: "Price change",
          data: cryptoStore.yaxisData,
        },
      ])
    
</script>