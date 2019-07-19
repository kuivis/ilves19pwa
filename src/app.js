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
      ikakaudetIDList: [
        { id: 235, nimi: "Kaikki ikäkaudet" },
        { id: 234, nimi: "Samoajat" },
        { id: 236, nimi: "Tarpojat" },
        { id: 233, nimi: "Vaeltajat" },
        { id: 237, nimi: "Aikuiset" },
        { id: 238, nimi: "Seikkailijat" },
        { id: 239, nimi: "Sudenpennut" }
      ]
    }
  },
  methods: {
    haeIkakausi: function (id) {
      for (let i = 0; i < this.ikakaudetIDList.length; i++) {
        console.log("lista " + i + ", id " + this.ikakaudetIDList[i].id + ", nimi " + this.ikakaudetIDList[i].nimi)
        if (this.ikakaudetIDList[i].id == id) {
          return this.ikakaudetIDList[i].nimi
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
    },
    valitutIkakaudet: function (ikakaudet) {
      //console.log(ikakaudet)
      let valitut = []
      ikakaudet.forEach(element => {
        if (element.checked == true) {
          valitut.push(element.id)
        }
      });  
      //console.log(valitut)
      return valitut

    },
    containsAll: function (array_a, array_b) { 
      var int_array_b = array_b.map(x => parseInt(x, 10))
      return array_a.every((val) => int_array_b.includes(val))
      
    },
    containsOne: function (array_a, array_b) {
      var int_array_b = array_b.map(x => parseInt(x, 10))
      return  array_a.some((val) => int_array_b.includes(val))
    }
  }
})


const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router, store }
