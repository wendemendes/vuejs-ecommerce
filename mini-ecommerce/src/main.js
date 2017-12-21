import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Categories from './components/categories.vue'
import Products from './components/products.vue'
import Person from './components/person.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/produtos', component: Products },
  { path: '/categorias', component: Categories },
  { path: '/pessoa', component: Person }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
