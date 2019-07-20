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
      tagNameList: [
        { id: 235, nimi: "Kaikki ikäkaudet" },
        { id: 234, nimi: "Samoajat" },
        { id: 236, nimi: "Tarpojat" },
        { id: 233, nimi: "Vaeltajat" },
        { id: 237, nimi: "Aikuiset" },
        { id: 238, nimi: "Seikkailijat" },
        { id: 240, nimi: "Nano" },
        { id: 241, nimi: "Eksa" },
        { id: 242, nimi: "Jotta" },
        { id: 243, nimi: "Tsetta" },
        { id: 244, nimi: "Tera" },
        { id: 245, nimi: "Kaikki alaleirit" }
      ]
    }
  },
  methods: {
    haeNimi: function (id) {
      for (let i = 0; i < this.tagNameList.length; i++) {
        //console.log("lista " + i + ", id " + this.tagNameList[i].id + ", nimi " + this.tagNameList[i].nimi)
        if (this.tagNameList[i].id == id) {
          return this.tagNameList[i].nimi
        }
      }
      return false
    },
    haeNimiLista: function (lista) {
      let resultString = ""
      for (let i = 0; i < lista.length; i++) {
        resultString = resultString + this.haeNimi(lista[i]) + " "
      }
      return resultString
    },
    haeValitut: function (asetukset) {
      //console.log(asetukset)
      let valitut = []
      asetukset.forEach(element => {
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
    },
    filterEvents: function (valitutI, tapahtumaI, valitutA, tapahtumaA) {
      //console.log("ikak: " + valitutI + ", " + tapahtumaI)
      //console.log("alal: " + valitutA + ", " + tapahtumaA)
      return this.containsOne(valitutI,tapahtumaI) && this.containsOne(valitutA, tapahtumaA)
    }
  }
})


const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router, store }
