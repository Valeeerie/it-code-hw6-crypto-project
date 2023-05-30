import ItemPage from "../pages/ItemPage.vue"
import MainPage from "../pages/MainPage.vue"
import CoinsByCapPage from "../pages/CoinsByCapPage.vue"
import AllCoinsPage from "../pages/AllCoinsPage.vue"
import CategoriesPage from "../pages/CategoriesPage.vue"
import CategoryPage from "../pages/CategoryPage.vue"
import SearchCoinsPage from "../pages/SearchCoinsPage.vue"
import NewCatalogPage from "../pages/NewCatalogPage.vue"

const routes = [
    { path: '/', component: MainPage},
    { path: '/main', component: MainPage},
    { path: '/coinsbycap', component: CoinsByCapPage},
    { path: '/categories', component: CategoriesPage},
    { path: '/search', component: SearchCoinsPage},
    { path: '/allcoins', component: AllCoinsPage},
    { path: '/item/:id', component: ItemPage},
  ]

export default routes