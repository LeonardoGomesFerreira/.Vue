import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Produtos from './Produtos.vue'
import Clientes from './Clientes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/produtos', component: Produtos },
  { path: '/clientes', component: Clientes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router