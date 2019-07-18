const updateIkakaudet = ({commit}, items) => {
  commit('updateIkakaudet', items)
},
const updateAlaleirit = ({commit}, items) => {
  commit('updateAlaleirit', items)
}

 export {
  updateIkakaudet,
  updateAlaleirit
}