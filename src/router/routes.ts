import ItemPage from "../pages/ItemPage.vue"
import MainPage from "../pages/MainPage.vue"
import CatalogPage from "../pages/CatalogPage.vue"
import CategoriesPage from "../pages/CategoriesPage.vue"
import CategoryPage from "../pages/CategoryPage.vue"
import NewCatalogPage from "../pages/NewCatalogPage.vue"

const routes = [
    { path: '/', component: MainPage},
    { path: '/main', component: MainPage},
    { path: '/catalog', component: CatalogPage},
    { path: '/categories', component: CategoriesPage},
    { path: '/item/:id', component: ItemPage},
  ]

export default routes