import ItemPage from "../pages/ItemPage.vue"
import MainPage from "../pages/MainPage.vue"
import CatalogPage from "../pages/CatalogPage.vue"

const routes = [
    { path: '/', component: MainPage},
    { path: '/main', component: MainPage},
    { path: '/catalog', component: CatalogPage},
    { path: '/item', component: ItemPage},
  ]

export default routes