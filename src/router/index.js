import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ThemePageCategory from '../theme/Category.vue'
import ThemeEventCategory from '../theme/Category-events.vue'
import ThemePageSingle from '../theme/Single.vue'
import ThemeEventSingle from '../theme/Single-events.vue'
import ThemePagePage from '../theme/Page.vue'
import OfflineRedirect from '../theme/OfflineRedirect.vue'
import MapPage from '../theme/Map.vue'
import MapCarnivalPage from '../theme/MapCarnival.vue'
import InfoPage from '../theme/Info.vue'
import AboutPage from '../theme/About.vue'
import DebugPage from '../theme/Debug.vue'
import MediaPage from '../theme/Media.vue'
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
    { path: '/mobiili/:id', component: ThemePagePage },
    { path: '/page/:toplevel/:slug', component: ThemePagePage },
    { path: '/tapahtumat/', component: ThemeEventCategory, params: { page: 1 } },
    { path: '/tapahtumat/page/:page', component: ThemeEventCategory },   
    { path: '/tapahtumat/:slug', component: ThemeEventSingle },
    { path: '/kategoria/uutiset/:id', component: ThemePageSingle },
    { path: '/kategoria/mobiiliuutiset/:id', component: ThemePageSingle },
    { path: '/kategoria/blogit/:id', component: ThemePageSingle },
    { path: '/kategoria/:id/page/:page', component: ThemePageCategory },
    { path: '/kategoria/:id/:page', component: ThemePageCategory },
    { path: '/kategoria/:categorySlug/:id', component: ThemePageSingle },
    { path: '/kategoria/:id', component: ThemePageCategory, params: { page: 1 } },
    { path: '/offline-redirect', component: OfflineRedirect },
    { path: '/kartta2', component: MapCarnivalPage },
    { path: '/kartta', component: MapPage },
    { path: '/info', component: InfoPage },
    { path: '/tietoja', component: AboutPage },
    { path: '/debug', component: DebugPage },
    { path: '/media', component: MediaPage },
    { path: '/:id', component: ThemePagePage },
    { path: '/', name: 'Etusivu', redirect: '/page/mobiili' }
  ]
})

export default router

