import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  ikakaudet: [
    {id: "2", label: 'Aikuiset', checked: false},
    {id: "3", label: 'Vaeltajat', checked: true},
    {id: "4", label: 'Samoajat', checked: false},
    {id: "5", label: 'Tarpojat', checked: false},
    {id: "6", label: 'Seikkailijat', checked: false}
  ],
  alaleirit: [
    {id: "2", label: 'Nano', checked: false},
    {id: "3", label: 'Eksa', checked: false},
    {id: "4", label: 'Jotta', checked: false},
    {id: "5", label: 'Tsetta', checked: false},
    {id: "6", label: 'Tera', checked: true}
  ],
}

const inBrowser = typeof window !== 'undefined'
// if in browser, use pre-fetched state injected by SSR
//const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.ikakaudet : defaultState

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
