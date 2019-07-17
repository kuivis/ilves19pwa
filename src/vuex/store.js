import Vue from 'vue'
import Vuex from 'vuex'
import categoryModule from './modules/category/index'
import pageModule from './modules/page/index'
import eventsModule from './modules/events/index'
import ikakausiModule from './modules/valitutIkakaudet/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    category: categoryModule,
    page: pageModule,
    events: eventsModule,
    valitutIkakaudet: ikakausiModule
  }
})
