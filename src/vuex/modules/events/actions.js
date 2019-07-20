import Vue from 'vue'

import wordpressService from '../../../app.service'


const getEvents = ({ commit, state }, params) => {
  return new Promise((resolve, reject) => {
    wordpressService.getEvents(params.page, 100).then((events) => {
      state.events = events
      state.events.totalPages = events.totalPages
      console.log("actions, getEvents, page: " + params.page)
      resolve()
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

const getEvent = ({ commit, state }, params) => {
  console.log("actions, getEvent: " + params.slug)
  if (typeof window !== 'undefined' && state.event && state.event.slug !== params.slug) {
    state.event = {}
  }

  return new Promise((resolve, reject) => {
    let eventSlug = params.slug
    if (state.events.events && state.events.events.length > 0) {
      for (var i = 0; i < state.events.events.length; i++) {
        if (state.events.events[i].slug === params.slug) {
          eventSlug = state.events.events[i].slug
          break
        }
      }
    }
    wordpressService.getEvent(null, eventSlug).then((postData) => {
      state.event = postData
      console.log("Tuliko eventti: " + state.event.slug)
      resolve()
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

export {
  getEvents,
  getEvent
}
