import Vue from 'vue'
import Vuex from 'vuex'
import categoryModule from './modules/category/index'
import pageModule from './modules/page/index'
import eventsModule from './modules/events/index'
import settingsModule from './modules/settings/index'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  modules: ['settings']
})

export default new Vuex.Store({
  strict: true,
  modules: {
    category: categoryModule,
    page: pageModule,
    events: eventsModule,
    settings: settingsModule
  },
  plugins: [vuexLocal.plugin]
})
