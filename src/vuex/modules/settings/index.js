import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  ikakaudet: [
    {id: 233, label: 'Aikuiset', checked: false},
    {id: 234, label: 'Vaeltajat', checked: false},
    {id: 235, label: 'Samoajat', checked: false},
    {id: 243, label: 'Tarpojat', checked: false},
    {id: 239, label: 'Seikkailijat', checked: false},
    {id: 237, label: 'Sudenpennut', checked: false},
    {id: 245, label: 'Perheleirin väki', checked: false}
  ],
  alaleirit: [
    {id: 246, label: 'Nano', checked: false},
    {id: 242, label: 'Eksa', checked: false},
    {id: 238, label: 'Jotta', checked: false},
    {id: 240, label: 'Tsetta', checked: false},
    {id: 241, label: 'Tera', checked: false}
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
