import Vue from 'vue'
import Vuex from 'vuex'
import categoryModule from './modules/category/index'
import pageModule from './modules/page/index'
import eventsModule from './modules/events/index'
import settingsModule from './modules/settings/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    category: categoryModule,
    page: pageModule,
    events: eventsModule,
    settings: settingsModule
  }
})
