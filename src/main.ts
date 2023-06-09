import { createApp } from 'vue'
import './style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";

const pinia = createPinia()
const app=createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(pinia)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)
app.mount('#app')
