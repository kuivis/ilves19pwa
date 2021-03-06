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
    console.log()
    return moment.unix(String(value)).utc().format('DD.MM HH:mm')
  }
})

Vue.mixin({
  data() {
    return {
      tagNameList: [
        { id: 244, nimi: "Kaikki ikäkaudet" },
        { id: 235, nimi: "Samoajat" },
        { id: 243, nimi: "Tarpojat" },
        { id: 234, nimi: "Vaeltajat" },
        { id: 233, nimi: "Aikuiset" },
        { id: 237, nimi: "Sudenpennut" },
        { id: 239, nimi: "Seikkailijat" },
        { id: 245, nimi: "Perheleirin väki" },
        { id: 246, nimi: "Nano" },
        { id: 242, nimi: "Eksa" },
        { id: 238, nimi: "Jotta" },
        { id: 240, nimi: "Tsetta" },
        { id: 241, nimi: "Tera" },
        { id: 236, nimi: "Kaikki alaleirit" }
      ]
    }
  },
  methods: {
    formatDate: function (datevalue) {
      moment.locale("fi");
      return moment(String(datevalue)).format('LLL');
    },
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
      //console.log("valitut: " + valitut)
      return valitut

    },
    containsAll: function (array_a, array_b) { 
      var int_array_b = array_b.map(x => parseInt(x, 10))
      return array_a.every((val) => int_array_b.includes(val))
      
    },
    containsOne: function (array_a, array_b) {
      let int_array_a = array_a.map(x => parseInt(x, 10)).sort((a,b) => a-b)
      let int_array_b = array_b.map(x => parseInt(x, 10)).sort((a,b) => a-b)
      
      let success = int_array_a.some((val) => int_array_b.includes(val))
      // if (success) {
      //   console.log("contains a: " + int_array_a)
      //   console.log("contains b: " + int_array_b)
      // }
      //console.log("success: " + success)
      return success
    }
  }
})


const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router, store }
