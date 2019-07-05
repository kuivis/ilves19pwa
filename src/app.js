import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import store from './vuex/store'
import router from './router/index'
import { sync } from 'vuex-router-sync'
import moment from 'moment'

if (typeof window !== 'undefined') {
  window.IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver.global')
}

const VueClazyLoad = require('vue-clazy-load')

sync(store, router)

Vue.use(VueClazyLoad)

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.unix(String(value)).format('DD.MM hh:mm')
  }
})

Vue.mixin({
  data() {
    return {
      ikakaudet: [
        { id: 235, nimi: "Kaikki ikäkaudet" },
        { id: 234, nimi: "Samoajat" },
        { id: 236, nimi: "Tarpojat" },
        { id: 233, nimi: "Vaeltajat" }
      ]
    }
  },
  methods: {
    haeIkakausi: function (id) {
      for (let i = 0; i < this.ikakaudet.length; i++) {
        console.log("lista " + i + ", id " + this.ikakaudet[i].id + ", nimi " + this.ikakaudet[i].nimi)
        if (this.ikakaudet[i].id == id) {
          return this.ikakaudet[i].nimi
        }
      }
      return false
    },
    ikakausiLista: function (lista) {
      let resultString = ""
      for (let i = 0; i < lista.length; i++) {
        resultString = resultString + this.haeIkakausi(lista[i]) + " "
      }
      return resultString
    }
  }
})




const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router, store }
