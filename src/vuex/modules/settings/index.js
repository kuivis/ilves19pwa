import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  ikakaudet: [
    {id: 237, label: 'Aikuiset', checked: false},
    {id: 233, label: 'Vaeltajat', checked: true},
    {id: 234, label: 'Samoajat', checked: false},
    {id: 236, label: 'Tarpojat', checked: false},
    {id: 238, label: 'Seikkailijat', checked: false},
    {id: 239, label: 'Sudenpennut', checked: false}
  ],
  alaleirit: [
    {id: 240, label: 'Nano', checked: false},
    {id: 241, label: 'Eksa', checked: false},
    {id: 242, label: 'Jotta', checked: false},
    {id: 243, label: 'Tsetta', checked: false},
    {id: 244, label: 'Tera', checked: true}
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
