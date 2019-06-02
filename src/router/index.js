import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ThemePageCategory from '../theme/Category.vue'
import ThemePageSingle from '../theme/Single.vue'
import ThemePagePage from '../theme/Page.vue'
import OfflineRedirect from '../theme/OfflineRedirect.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/page/:id', component: ThemePagePage },
    { path: '/page/:toplevel/:slug', component: ThemePagePage },
    { path: '/kategoria/uutiset/:id', component: ThemePageSingle },
    { path: '/kategoria/blogit/:id', component: ThemePageSingle },
    { path: '/kategoria/:id/page/:page', component: ThemePageCategory },
    { path: '/kategoria/:id/:page', component: ThemePageSingle },
    { path: '/kategoria/:categorySlug/:id', component: ThemePageSingle },
    { path: '/kategoria/:id', component: ThemePageCategory, params: { page: 1 } },
    { path: '/offline-redirect', component: OfflineRedirect },
    { path: '/:id', component: ThemePageSingle },
    { path: '/', name: 'Etusivu', redirect: '/page/mobiili' }
  ]
})

export default router

